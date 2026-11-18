# تفعيل المزامنة السحابية (Firebase) — خطوات

الكود جاهز في `cloud-auth.js` و`firebase-config.js` و`firestore.rules`، لكنه لا يعمل قبل أن تُنشئ مشروعك الخاص. لا يمكن لأحد تفعيله نيابةً عنك لأنه يحتاج حسابك على Google.

1. ادخل إلى console.firebase.google.com وأنشئ مشروعًا جديدًا.
2. من «Build» ← «Authentication» ← «Sign-in method» فعّل **Google**.
3. من «Build» ← «Firestore Database» ← أنشئ قاعدة بيانات (Production mode).
4. من تبويب «Rules» في Firestore الصق محتوى ملف `firestore.rules` ثم «Publish».
5. من «Project settings» ← «Your apps» أضف تطبيق ويب (`</>`) وانسخ كائن `firebaseConfig`.
6. افتح `firebase-config.js` واستبدل القيم النصية (`PASTE_YOUR_...` و`YOUR_PROJECT_ID`) بقيمك.
7. من «Authentication» ← «Settings» ← «Authorized domains» أضف نطاق موقعك (مثل `username.github.io`).
8. ارفع الملفات، ثم من قسم «ملفي» اضغط تسجيل الدخول بـ Google.

ملاحظات:
- مفتاح `apiKey` في تطبيقات الويب ليس سرًّا؛ الحماية الحقيقية هي قواعد Firestore التي تسمح لكل مستخدم بقراءة بياناته فقط.
- المزامنة تشمل الآن مفاتيح V24 (التقييمات والأهداف والقوائم والأمنيات والجلسات…). لا تشمل دفتر الملاحظات (الصور في IndexedDB).
- إن لم ترغب بحساب سحابي فرمز النقل في «الإنجاز» كافٍ.
