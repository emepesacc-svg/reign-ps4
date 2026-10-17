import { firebaseConfig } from './firebase-config.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

(() => {
  const $ = id => document.getElementById(id);
  const keys = ['reignProfileV1','reignProgressV1','reignLanguageV1','reignTrophyChecklistV1','reignFavorites','reignUltraV1','reignCustomCollectionsV1','reignIdentityV1','reignMemoriesV1','reignQuestForgeV1'];
  const signIn = $('googleSignIn');
  const signOutBtn = $('googleSignOut');
  const status = $('cloudStatus');
  const userBox = $('cloudUser');
  const actions = $('cloudActions');
  if (!signIn || !status) return;
  let auth, db, currentUser = null, syncReady = false, syncTimer = null, cloudHasData = false;
  const say = (message, state='') => { status.textContent = message; status.dataset.state = state; };
  const localData = () => Object.fromEntries(keys.map(k => [k, parseLocal(k)]).filter(([,v]) => v !== null));
  function parseLocal(key) { try { const v=localStorage.getItem(key); return v===null?null:JSON.parse(v); } catch { return null; } }
  function hasLocalData() { return Object.keys(localData()).length > 0; }
  function applyCloudData(data) {
    syncReady = false;
    for (const key of keys) {
      if (Object.prototype.hasOwnProperty.call(data || {}, key)) {
        try { localStorage.setItem(key, JSON.stringify(data[key])); } catch {}
      }
    }
    syncReady = true;
  }
  async function getCloudData(user) {
    const snap = await getDoc(doc(db, 'users', user.uid));
    return snap.exists() ? (snap.data().appData || {}) : null;
  }
  async function saveCloud() {
    if (!currentUser || !syncReady) return;
    try {
      await setDoc(doc(db, 'users', currentUser.uid), {
        appData: localData(),
        displayName: currentUser.displayName || '',
        email: currentUser.email || '',
        photoURL: currentUser.photoURL || '',
        updatedAt: serverTimestamp(),
        schemaVersion: 1
      }, { merge: true });
      say('تم حفظ تقدمك في حساب Google بنجاح.', 'ok');
    } catch (err) {
      console.error('REIGN cloud save failed', err);
      say('تعذر الحفظ السحابي. تحقق من إعداد Firebase وقواعد Firestore واتصال الإنترنت.', 'error');
    }
  }
  function scheduleSave() {
    if (!currentUser || !syncReady) return;
    clearTimeout(syncTimer);
    syncTimer = setTimeout(() => { saveCloud(); }, 1200);
  }
  function patchStorage() {
    if (window.__reignCloudStoragePatched) return;
    window.__reignCloudStoragePatched = true;
    const originalSet = Storage.prototype.setItem;
    const originalRemove = Storage.prototype.removeItem;
    Storage.prototype.setItem = function(key, value) {
      originalSet.call(this, key, value);
      if (this === localStorage && keys.includes(String(key))) scheduleSave();
    };
    Storage.prototype.removeItem = function(key) {
      originalRemove.call(this, key);
      if (this === localStorage && keys.includes(String(key))) scheduleSave();
    };
  }
  function showUser(user) {
    currentUser = user;
    signIn.hidden = !!user;
    signOutBtn.hidden = !user;
    userBox.hidden = !user;
    actions.hidden = !user;
    if (user) {
      $('cloudDisplayName').textContent = user.displayName || 'REIGN Player';
      $('cloudEmail').textContent = user.email || '';
      const avatar = $('cloudAvatar');
      if (user.photoURL) { avatar.src = user.photoURL; avatar.hidden = false; } else { avatar.removeAttribute('src'); avatar.hidden = true; }
    } else {
      $('cloudDisplayName').textContent = '';
      $('cloudEmail').textContent = '';
      syncReady = false;
    }
  }
  function setConflictButtons(show) {
    $('cloudLoadData').hidden = !show;
    $('cloudUploadData').hidden = !show;
  }
  async function uploadLocal() {
    if (!currentUser) return;
    setConflictButtons(false);
    syncReady = true;
    await saveCloud();
  }
  async function loadCloud() {
    if (!currentUser) return;
    try {
      const data = await getCloudData(currentUser);
      if (!data) { say('لا توجد نسخة سحابية بعد. سنرفع بيانات هذا الجهاز.', ''); await uploadLocal(); return; }
      applyCloudData(data);
      say('تم تحميل بيانات حسابك. يجري تحديث الصفحة…', 'ok');
      setTimeout(() => location.reload(), 250);
    } catch (err) {
      console.error(err); say('تعذر تحميل البيانات. تحقق من إعداد Firebase وقواعد Firestore.', 'error');
    }
  }
  signIn.addEventListener('click', async () => {
    try {
      if (!auth) { say('إعداد Firebase غير مكتمل. افتح README_AR.md واتبع خطوات الإعداد.', 'error'); return; }
      signIn.disabled = true; say('جارٍ فتح تسجيل الدخول الآمن من Google…');
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (err) {
      console.error('Google sign-in failed', err);
      say(err.code === 'auth/unauthorized-domain' ? 'هذا النطاق غير مسموح في Firebase Authentication → Authorized domains.' : 'لم يكتمل تسجيل الدخول. تحقق من النطاق وإعداد Google داخل Firebase ثم أعد المحاولة.', 'error');
    } finally { signIn.disabled = false; }
  });
  signOutBtn.addEventListener('click', async () => {
    try { await signOut(auth); say('تم تسجيل الخروج. بيانات هذا الجهاز ما زالت محفوظة محليًا.'); setConflictButtons(false); }
    catch { say('تعذر تسجيل الخروج. حاول مرة أخرى.', 'error'); }
  });
  $('cloudSyncNow').addEventListener('click', uploadLocal);
  $('cloudLoadData').addEventListener('click', () => {
    if (confirm('سيتم استبدال البيانات المحلية بالبيانات المحفوظة في حساب Google. يفضّل تصدير نسخة احتياطية أولًا. هل تريد المتابعة؟')) loadCloud();
  });
  $('cloudUploadData').addEventListener('click', () => {
    if (confirm('سيتم استبدال النسخة السحابية ببيانات هذا الجهاز، وستصبح هي النسخة الموجودة في حسابك. هل تريد المتابعة؟')) uploadLocal();
  });

  const configured = firebaseConfig && firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith('PASTE_') && firebaseConfig.projectId && firebaseConfig.projectId !== 'YOUR_PROJECT_ID';
  if (!configured) {
    signIn.addEventListener('click', () => say('قبل استخدام Gmail، أكمل قيم firebase-config.js كما هو موضح في README_AR.md.', 'error'));
    say('الحفظ المحلي يعمل. لإضافة Gmail، أكمل إعداد Firebase في firebase-config.js.', '');
    return;
  }
  try {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    patchStorage();
    onAuthStateChanged(auth, async user => {
      showUser(user);
      if (!user) { say('لم يتم ربط حساب بعد. يمكنك الاستمرار بالحفظ المحلي.'); setConflictButtons(false); return; }
      say('تم تسجيل الدخول. جارٍ فحص النسخة السحابية…');
      try {
        const data = await getCloudData(user);
        cloudHasData = !!(data && Object.keys(data).length);
        if (cloudHasData) {
          syncReady = false;
          setConflictButtons(hasLocalData());
          if (hasLocalData()) say('وجدنا بيانات على هذا الجهاز ونسخة في الحساب. اختر تحميل بيانات الحساب أو رفع بيانات هذا الجهاز.', '');
          else await loadCloud();
        } else {
          setConflictButtons(false);
          syncReady = true;
          await saveCloud();
        }
      } catch (err) {
        console.error(err); say('تم تسجيل الدخول لكن تعذر الوصول إلى Firestore. تحقق من قواعد قاعدة البيانات.', 'error');
      }
    });
  } catch (err) {
    console.error('Firebase init failed', err);
    say('تعذر تشغيل Firebase. راجع firebase-config.js وتأكد من إعدادات مشروعك.', 'error');
  }
})();
