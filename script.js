const games = [
  {
    "id": 1,
    "title": "God of War",
    "year": 2018,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "Santa Monica Studio",
    "publisher": "Sony",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رحلة سينمائية مع كريتوس وأتريوس، تمزج القتال والاستكشاف والأساطير الإسكندنافية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1593500/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg",
    "times": {
      "main": 20,
      "extra": 32,
      "complete": 50
    },
    "featured": 1,
    "ps4": true
  },
  {
    "id": 2,
    "title": "God of War Ragnarök",
    "year": 2022,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "Santa Monica Studio",
    "publisher": "Sony",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "مغامرة ملحمية عبر العوالم الإسكندنافية، مع قتال متطور ومهمات جانبية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2322010/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2322010/header.jpg",
    "times": {
      "main": 27,
      "extra": 41,
      "complete": 56
    },
    "featured": 2,
    "ps4": true
  },
  {
    "id": 3,
    "title": "Grand Theft Auto V",
    "year": 2014,
    "category": "عالم مفتوح",
    "genres": [
      "عالم مفتوح"
    ],
    "developer": "Rockstar North",
    "publisher": "Rockstar Games",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "عالم لوس سانتوس المفتوح وثلاث شخصيات رئيسية وأنشطة ومهمات كثيرة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/271590/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg",
    "times": {
      "main": 32,
      "extra": 51,
      "complete": 85
    },
    "featured": 3,
    "ps4": true
  },
  {
    "id": 4,
    "title": "Red Dead Redemption 2",
    "year": 2018,
    "category": "عالم مفتوح",
    "genres": [
      "عالم مفتوح"
    ],
    "developer": "Rockstar Studios",
    "publisher": "Rockstar Games",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "ملحمة الغرب الأمريكي بقصة آرثر مورغان وعالم شديد التفاصيل.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1174180/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
    "times": {
      "main": 50,
      "extra": 85,
      "complete": 180
    },
    "featured": 4,
    "ps4": true
  },
  {
    "id": 5,
    "title": "The Witcher 3: Wild Hunt",
    "year": 2015,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "CD Projekt Red",
    "publisher": "CD Projekt",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "تقمص أدوار غني بالاختيارات والوحوش والمهام في عالم خيالي واسع.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/292030/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
    "times": {
      "main": 51,
      "extra": 104,
      "complete": 175
    },
    "featured": 5,
    "ps4": true
  },
  {
    "id": 6,
    "title": "Cyberpunk 2077",
    "year": 2020,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "CD Projekt Red",
    "publisher": "CD Projekt",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "مغامرة مستقبلية في Night City مع بناء شخصية وقصص متفرعة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1091500/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
    "times": {
      "main": 25,
      "extra": 60,
      "complete": 105
    },
    "featured": 6,
    "ps4": true
  },
  {
    "id": 7,
    "title": "Elden Ring",
    "year": 2022,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "FromSoftware",
    "publisher": "Bandai Namco",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "عالم فانتازي واسع وزعماء صعبون واستكشاف حر.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
    "times": {
      "main": 60,
      "extra": 100,
      "complete": 135
    },
    "featured": 7,
    "ps4": true
  },
  {
    "id": 8,
    "title": "Sekiro: Shadows Die Twice",
    "year": 2019,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "FromSoftware",
    "publisher": "Activision",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قتال ساموراي يتطلب توقيتًا دقيقًا ومواجهة زعماء صعبة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/814380/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/814380/header.jpg",
    "times": {
      "main": 30,
      "extra": 40,
      "complete": 70
    },
    "featured": 8,
    "ps4": true
  },
  {
    "id": 9,
    "title": "Resident Evil 2",
    "year": 2019,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Capcom",
    "publisher": "Capcom",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رعب وبقاء في راكون سيتي مع ألغاز وإدارة موارد.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/883710/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/883710/header.jpg",
    "times": {
      "main": 9,
      "extra": 15,
      "complete": 35
    },
    "featured": 9,
    "ps4": true
  },
  {
    "id": 10,
    "title": "Resident Evil 3",
    "year": 2020,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Capcom",
    "publisher": "Capcom",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "مطاردة متواصلة ومحاولة نجاة من كارثة راكون سيتي.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/952060/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/952060/header.jpg",
    "times": {
      "main": 6,
      "extra": 8,
      "complete": 20
    },
    "featured": 10,
    "ps4": true
  },
  {
    "id": 11,
    "title": "Resident Evil 4",
    "year": 2023,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Capcom",
    "publisher": "Capcom",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "إعادة تقديم مغامرة ليون بقتال مكثف وألغاز وأعداء خطرين.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2050650/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg",
    "times": {
      "main": 16,
      "extra": 25,
      "complete": 55
    },
    "featured": 11,
    "ps4": true
  },
  {
    "id": 12,
    "title": "Resident Evil 7: Biohazard",
    "year": 2017,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Capcom",
    "publisher": "Capcom",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رعب منظور أول داخل منزل غامض مليء بالأسرار.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/418370/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/418370/header.jpg",
    "times": {
      "main": 9,
      "extra": 12,
      "complete": 25
    },
    "featured": 12,
    "ps4": true
  },
  {
    "id": 13,
    "title": "Resident Evil Village",
    "year": 2021,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Capcom",
    "publisher": "Capcom",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رحلة رعب تجمع الاستكشاف والقتال والألغاز.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1196590/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1196590/header.jpg",
    "times": {
      "main": 10,
      "extra": 17,
      "complete": 35
    },
    "featured": 13,
    "ps4": true
  },
  {
    "id": 14,
    "title": "Devil May Cry 5",
    "year": 2019,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "Capcom",
    "publisher": "Capcom",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قتال سريع وأسلوب أنيق مع عدة شخصيات قابلة للعب.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/601150/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/601150/header.jpg",
    "times": {
      "main": 11,
      "extra": 16,
      "complete": 75
    },
    "featured": 14,
    "ps4": true
  },
  {
    "id": 15,
    "title": "Mortal Kombat 11",
    "year": 2019,
    "category": "قتال",
    "genres": [
      "قتال"
    ],
    "developer": "NetherRealm",
    "publisher": "Warner Bros.",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قتال سينمائي وشخصيات متنوعة وأطوار تنافسية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/976310/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/976310/header.jpg",
    "times": {
      "main": 6,
      "extra": 12,
      "complete": 50
    },
    "featured": 15,
    "ps4": true
  },
  {
    "id": 16,
    "title": "Tekken 7",
    "year": 2017,
    "category": "قتال",
    "genres": [
      "قتال"
    ],
    "developer": "Bandai Namco",
    "publisher": "Bandai Namco",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قتال ثلاثي الأبعاد وقائمة شخصيات كبيرة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/389730/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/389730/header.jpg",
    "times": {
      "main": 4,
      "extra": 10,
      "complete": 80
    },
    "featured": 16,
    "ps4": true
  },
  {
    "id": 17,
    "title": "Street Fighter 6",
    "year": 2023,
    "category": "قتال",
    "genres": [
      "قتال"
    ],
    "developer": "Capcom",
    "publisher": "Capcom",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قتال حديث مع أطوار تعليمية وتنافسية وقصة World Tour.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1364780/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1364780/header.jpg",
    "times": {
      "main": 16,
      "extra": 30,
      "complete": 100
    },
    "featured": 17,
    "ps4": true
  },
  {
    "id": 18,
    "title": "EA SPORTS FC 24",
    "year": 2023,
    "category": "رياضة",
    "genres": [
      "رياضة"
    ],
    "developer": "EA Vancouver",
    "publisher": "EA",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "كرة قدم مع أوضاع متعددة؛ زمن الإكمال يتغير حسب أسلوب اللعب.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2195250/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2195250/header.jpg",
    "times": {
      "main": 15,
      "extra": 50,
      "complete": 200
    },
    "featured": 18,
    "ps4": true
  },
  {
    "id": 19,
    "title": "NBA 2K24",
    "year": 2023,
    "category": "رياضة",
    "genres": [
      "رياضة"
    ],
    "developer": "Visual Concepts",
    "publisher": "2K",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "محاكاة كرة سلة بأطوار موسم ومهنة ومنافسات.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2338770/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2338770/header.jpg",
    "times": {
      "main": 12,
      "extra": 40,
      "complete": 150
    },
    "featured": 19,
    "ps4": true
  },
  {
    "id": 20,
    "title": "F1 23",
    "year": 2023,
    "category": "سباقات",
    "genres": [
      "سباقات"
    ],
    "developer": "Codemasters",
    "publisher": "EA",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "سباقات فورمولا 1 مع مسيرة وتحديات وحلبات.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2108330/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2108330/header.jpg",
    "times": {
      "main": 12,
      "extra": 30,
      "complete": 100
    },
    "featured": 20,
    "ps4": true
  },
  {
    "id": 21,
    "title": "Need for Speed Heat",
    "year": 2019,
    "category": "سباقات",
    "genres": [
      "سباقات"
    ],
    "developer": "Ghost Games",
    "publisher": "EA",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "سباقات شوارع وتخصيص سيارات وتحديات ليلية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1222680/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1222680/header.jpg",
    "times": {
      "main": 13,
      "extra": 25,
      "complete": 45
    },
    "featured": 21,
    "ps4": true
  },
  {
    "id": 22,
    "title": "Hogwarts Legacy",
    "year": 2023,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Avalanche Software",
    "publisher": "Warner Bros.",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "عالم سحري قابل للاستكشاف في مدرسة هوغوورتس ومحيطها.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/990080/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg",
    "times": {
      "main": 26,
      "extra": 45,
      "complete": 70
    },
    "featured": 22,
    "ps4": true
  },
  {
    "id": 23,
    "title": "Marvel’s Spider-Man",
    "year": 2022,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "Insomniac Games",
    "publisher": "Sony",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "تجوال سريع في نيويورك وقتال الأشرار بشخصية سبايدرمان.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1817070/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1817070/header.jpg",
    "times": {
      "main": 17,
      "extra": 26,
      "complete": 35
    },
    "featured": 23,
    "ps4": true
  },
  {
    "id": 24,
    "title": "Marvel’s Spider-Man: Miles Morales",
    "year": 2020,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "Insomniac Games",
    "publisher": "Sony",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "مغامرة أقصر تركز على مايلز وقدراته الكهربائية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1817190/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1817190/header.jpg",
    "times": {
      "main": 7,
      "extra": 12,
      "complete": 18
    },
    "featured": 24,
    "ps4": true
  },
  {
    "id": 25,
    "title": "Horizon Zero Dawn Complete Edition",
    "year": 2017,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Guerrilla Games",
    "publisher": "Sony",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "تستكشف ألوي عالمًا تهيمن عليه آلات شبيهة بالحيوانات.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1151640/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg",
    "times": {
      "main": 23,
      "extra": 45,
      "complete": 75
    },
    "featured": 25,
    "ps4": true
  },
  {
    "id": 26,
    "title": "Horizon Forbidden West",
    "year": 2022,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Guerrilla Games",
    "publisher": "Sony",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رحلة استكشاف وقتال في أراضٍ جديدة مليئة بالأسرار.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2420110/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2420110/header.jpg",
    "times": {
      "main": 29,
      "extra": 55,
      "complete": 90
    },
    "featured": 26,
    "ps4": true
  },
  {
    "id": 27,
    "title": "Days Gone",
    "year": 2019,
    "category": "عالم مفتوح",
    "genres": [
      "عالم مفتوح"
    ],
    "developer": "Bend Studio",
    "publisher": "Sony",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "بقاء على دراجة نارية في عالم اجتاحته الحشود المصابة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1259420/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1259420/header.jpg",
    "times": {
      "main": 36,
      "extra": 50,
      "complete": 75
    },
    "featured": 27,
    "ps4": true
  },
  {
    "id": 28,
    "title": "Death Stranding",
    "year": 2021,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Kojima Productions",
    "publisher": "505 Games",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رحلة توصيل غريبة تربط مجتمعات منعزلة في عالم ما بعد الكارثة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1850570/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1850570/header.jpg",
    "times": {
      "main": 40,
      "extra": 60,
      "complete": 110
    },
    "featured": 28,
    "ps4": true
  },
  {
    "id": 29,
    "title": "UNCHARTED: Legacy of Thieves Collection",
    "year": 2022,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Naughty Dog",
    "publisher": "Sony",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "مغامرتان سينمائيتان مع ألغاز ومطاردات واستكشاف.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1659420/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1659420/header.jpg",
    "times": {
      "main": 20,
      "extra": 30,
      "complete": 45
    },
    "featured": 29,
    "ps4": true
  },
  {
    "id": 30,
    "title": "The Last of Us Part I",
    "year": 2022,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Naughty Dog",
    "publisher": "Sony",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قصة بقاء عاطفية وسط عالم منهار ومصابين خطرين.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1888930/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1888930/header.jpg",
    "times": {
      "main": 15,
      "extra": 22,
      "complete": 35
    },
    "featured": 30,
    "ps4": true
  },
  {
    "id": 31,
    "title": "The Last of Us Part II",
    "year": 2024,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Naughty Dog",
    "publisher": "Sony",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قصة بقاء ثقيلة مع تخفٍ وقتال واستكشاف.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2531310/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2531310/header.jpg",
    "times": {
      "main": 24,
      "extra": 30,
      "complete": 40
    },
    "featured": 31,
    "ps4": true
  },
  {
    "id": 32,
    "title": "Ghost of Tsushima Director’s Cut",
    "year": 2021,
    "category": "عالم مفتوح",
    "genres": [
      "عالم مفتوح"
    ],
    "developer": "Sucker Punch",
    "publisher": "Sony",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "ساموراي في جزيرة تسوشيما مع قتال بالسيف واستكشاف جميل.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2215430/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2215430/header.jpg",
    "times": {
      "main": 25,
      "extra": 45,
      "complete": 70
    },
    "featured": 32,
    "ps4": true
  },
  {
    "id": 33,
    "title": "Detroit: Become Human",
    "year": 2018,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Quantic Dream",
    "publisher": "Quantic Dream",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "دراما تفاعلية تؤثر اختيارات اللاعب في مساراتها ونهاياتها.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1222140/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1222140/header.jpg",
    "times": {
      "main": 10,
      "extra": 12,
      "complete": 30
    },
    "featured": 33,
    "ps4": true
  },
  {
    "id": 34,
    "title": "Heavy Rain",
    "year": 2010,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Quantic Dream",
    "publisher": "Quantic Dream",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "إثارة تفاعلية تعتمد على القرارات والتحقيق.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/960910/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/960910/header.jpg",
    "times": {
      "main": 10,
      "extra": 11,
      "complete": 25
    },
    "featured": 34,
    "ps4": true
  },
  {
    "id": 35,
    "title": "Beyond: Two Souls",
    "year": 2013,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Quantic Dream",
    "publisher": "Quantic Dream",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قصة سينمائية خارقة للطبيعة تتبع حياة جودي.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/960990/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/960990/header.jpg",
    "times": {
      "main": 10,
      "extra": 12,
      "complete": 25
    },
    "featured": 35,
    "ps4": true
  },
  {
    "id": 36,
    "title": "Control Ultimate Edition",
    "year": 2019,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "Remedy Entertainment",
    "publisher": "505 Games",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "أكشن خارق للطبيعة داخل مبنى حكومي غامض.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/870780/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/870780/header.jpg",
    "times": {
      "main": 11,
      "extra": 25,
      "complete": 40
    },
    "featured": 36,
    "ps4": true
  },
  {
    "id": 37,
    "title": "Alan Wake Remastered",
    "year": 2021,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Remedy",
    "publisher": "Epic Games",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "كاتب يواجه كوابيس تتحول إلى واقع في بلدة غامضة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1087100/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1087100/header.jpg",
    "times": {
      "main": 11,
      "extra": 15,
      "complete": 25
    },
    "featured": 37,
    "ps4": true
  },
  {
    "id": 38,
    "title": "Dying Light",
    "year": 2015,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Techland",
    "publisher": "Techland",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "باركور وقتال بقاء في مدينة موبوءة بالزومبي.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/239140/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/239140/header.jpg",
    "times": {
      "main": 17,
      "extra": 35,
      "complete": 60
    },
    "featured": 38,
    "ps4": true
  },
  {
    "id": 39,
    "title": "Dying Light 2 Stay Human",
    "year": 2022,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Techland",
    "publisher": "Techland",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "باركور واختيارات تؤثر في مدينة محاصرة بالمصابين.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/534380/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/534380/header.jpg",
    "times": {
      "main": 24,
      "extra": 50,
      "complete": 100
    },
    "featured": 39,
    "ps4": true
  },
  {
    "id": 40,
    "title": "Dead Island 2",
    "year": 2023,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "Dambuster Studios",
    "publisher": "Deep Silver",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قتال زومبي بأسلحة مرتجلة في لوس أنجلوس.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/934700/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/934700/header.jpg",
    "times": {
      "main": 15,
      "extra": 25,
      "complete": 40
    },
    "featured": 40,
    "ps4": true
  },
  {
    "id": 41,
    "title": "The Evil Within 2",
    "year": 2017,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Tango Gameworks",
    "publisher": "Bethesda",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رعب بقاء في عالم مشوّه لإنقاذ ابنة المحقق سيباستيان.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/601430/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/601430/header.jpg",
    "times": {
      "main": 13,
      "extra": 20,
      "complete": 35
    },
    "featured": 41,
    "ps4": true
  },
  {
    "id": 42,
    "title": "Outlast 2",
    "year": 2017,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Red Barrels",
    "publisher": "Red Barrels",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رعب نفسي يعتمد على الهروب والتخفي بدل القتال.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/414700/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/414700/header.jpg",
    "times": {
      "main": 8,
      "extra": 10,
      "complete": 20
    },
    "featured": 42,
    "ps4": true
  },
  {
    "id": 43,
    "title": "Little Nightmares II",
    "year": 2021,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Tarsier Studios",
    "publisher": "Bandai Namco",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "مغامرة ألغاز مرعبة عبر عالم مشوّه وغريب.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/860510/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/860510/header.jpg",
    "times": {
      "main": 5,
      "extra": 8,
      "complete": 15
    },
    "featured": 43,
    "ps4": true
  },
  {
    "id": 44,
    "title": "Inside",
    "year": 2016,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Playdead",
    "publisher": "Playdead",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "منصات وألغاز بأجواء غامضة وسرد بصري.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/304430/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/304430/header.jpg",
    "times": {
      "main": 3,
      "extra": 4,
      "complete": 6
    },
    "featured": 44,
    "ps4": true
  },
  {
    "id": 45,
    "title": "Limbo",
    "year": 2010,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Playdead",
    "publisher": "Playdead",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "منصات وألغاز سوداء في عالم غريب وخطر.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/48000/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/48000/header.jpg",
    "times": {
      "main": 3,
      "extra": 4,
      "complete": 7
    },
    "featured": 45,
    "ps4": true
  },
  {
    "id": 46,
    "title": "Hollow Knight",
    "year": 2017,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Team Cherry",
    "publisher": "Team Cherry",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "استكشاف مملكة تحت الأرض وقتال زعماء في مغامرة متشعبة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/367520/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg",
    "times": {
      "main": 27,
      "extra": 40,
      "complete": 65
    },
    "featured": 46,
    "ps4": true
  },
  {
    "id": 47,
    "title": "Cuphead",
    "year": 2017,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "Studio MDHR",
    "publisher": "Studio MDHR",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قتال زعماء صعب برسوم مستوحاة من الرسوم المتحركة القديمة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/268910/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/268910/header.jpg",
    "times": {
      "main": 10,
      "extra": 15,
      "complete": 25
    },
    "featured": 47,
    "ps4": true
  },
  {
    "id": 48,
    "title": "Celeste",
    "year": 2018,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Maddy Makes Games",
    "publisher": "Maddy Makes Games",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "منصات دقيقة وقصة شخصية عن التحدي والصمود.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/504230/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg",
    "times": {
      "main": 8,
      "extra": 10,
      "complete": 30
    },
    "featured": 48,
    "ps4": true
  },
  {
    "id": 49,
    "title": "Terraria",
    "year": 2011,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Re-Logic",
    "publisher": "Re-Logic",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "صناعة وبناء واستكشاف وقتال في عالم ثنائي الأبعاد.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/105600/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg",
    "times": {
      "main": 25,
      "extra": 60,
      "complete": 100
    },
    "featured": 49,
    "ps4": true
  },
  {
    "id": 50,
    "title": "Stardew Valley",
    "year": 2016,
    "category": "محاكاة",
    "genres": [
      "محاكاة"
    ],
    "developer": "ConcernedApe",
    "publisher": "ConcernedApe",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "إدارة مزرعة وعلاقات وصيد واستكشاف بوتيرة هادئة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/413150/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
    "times": {
      "main": 53,
      "extra": 100,
      "complete": 160
    },
    "featured": 50,
    "ps4": true
  },
  {
    "id": 51,
    "title": "Minecraft",
    "year": 2011,
    "category": "محاكاة",
    "genres": [
      "محاكاة"
    ],
    "developer": "Mojang",
    "publisher": "Mojang",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "بناء واستكشاف وبقاء في عالم مكعبات مفتوح.",
    "image": "https://en.wikipedia.org/wiki/Special:FilePath/Minecraft_cover.png",
    "header": "https://en.wikipedia.org/wiki/Special:FilePath/Minecraft_cover.png",
    "times": {
      "main": 30,
      "extra": 80,
      "complete": 200
    },
    "featured": 51,
    "ps4": true
  },
  {
    "id": 52,
    "title": "The Sims 4",
    "year": 2014,
    "category": "محاكاة",
    "genres": [
      "محاكاة"
    ],
    "developer": "Maxis",
    "publisher": "EA",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "محاكاة حياة وبناء منازل وصناعة قصص الشخصيات.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1222670/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1222670/header.jpg",
    "times": {
      "main": 20,
      "extra": 100,
      "complete": 300
    },
    "featured": 52,
    "ps4": true
  },
  {
    "id": 53,
    "title": "Subnautica",
    "year": 2018,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Unknown Worlds",
    "publisher": "Unknown Worlds",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "استكشاف محيط فضائي وجمع موارد وصناعة أدوات للبقاء.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/264710/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/264710/header.jpg",
    "times": {
      "main": 30,
      "extra": 45,
      "complete": 65
    },
    "featured": 53,
    "ps4": true
  },
  {
    "id": 54,
    "title": "No Man’s Sky",
    "year": 2016,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Hello Games",
    "publisher": "Hello Games",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "استكشاف مجرات وكواكب وبناء قواعد ورحلات فضائية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/275850/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/275850/header.jpg",
    "times": {
      "main": 30,
      "extra": 60,
      "complete": 150
    },
    "featured": 54,
    "ps4": true
  },
  {
    "id": 55,
    "title": "The Forest",
    "year": 2018,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Endnight Games",
    "publisher": "Endnight Games",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "بقاء وصناعة مأوى واستكشاف غابة مليئة بالأسرار.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/242760/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/242760/header.jpg",
    "times": {
      "main": 15,
      "extra": 25,
      "complete": 50
    },
    "featured": 55,
    "ps4": true
  },
  {
    "id": 56,
    "title": "ARK: Survival Evolved",
    "year": 2017,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Studio Wildcard",
    "publisher": "Studio Wildcard",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "بقاء وترويض مخلوقات وبناء قواعد في جزر خطرة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/346110/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/346110/header.jpg",
    "times": {
      "main": 45,
      "extra": 100,
      "complete": 250
    },
    "featured": 56,
    "ps4": true
  },
  {
    "id": 57,
    "title": "Payday 2",
    "year": 2013,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "OVERKILL",
    "publisher": "Starbreeze",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "عمليات سرقة تعاونية تتطلب التخطيط والعمل الجماعي.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/218620/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/218620/header.jpg",
    "times": {
      "main": 20,
      "extra": 50,
      "complete": 150
    },
    "featured": 57,
    "ps4": true
  },
  {
    "id": 58,
    "title": "Tom Clancy’s The Division 2",
    "year": 2019,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "Massive Entertainment",
    "publisher": "Ubisoft",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "تصويب تعاوني وتطوير عتاد في واشنطن بعد انهيار المجتمع.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2221490/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2221490/header.jpg",
    "times": {
      "main": 25,
      "extra": 60,
      "complete": 150
    },
    "featured": 58,
    "ps4": true
  },
  {
    "id": 59,
    "title": "Tom Clancy’s Rainbow Six Siege",
    "year": 2015,
    "category": "تصويب",
    "genres": [
      "تصويب"
    ],
    "developer": "Ubisoft Montreal",
    "publisher": "Ubisoft",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "تصويب تكتيكي تنافسي بلا نهاية قصصية تقليدية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/359550/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/359550/header.jpg",
    "times": {
      "main": null,
      "extra": null,
      "complete": null
    },
    "featured": 59,
    "ps4": true
  },
  {
    "id": 60,
    "title": "Far Cry 5",
    "year": 2018,
    "category": "عالم مفتوح",
    "genres": [
      "عالم مفتوح"
    ],
    "developer": "Ubisoft Montreal",
    "publisher": "Ubisoft",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "تصويب بعالم مفتوح في مقاطعة ريفية تسيطر عليها جماعة متطرفة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/552520/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/552520/header.jpg",
    "times": {
      "main": 18,
      "extra": 30,
      "complete": 50
    },
    "featured": 60,
    "ps4": true
  },
  {
    "id": 61,
    "title": "Far Cry 6",
    "year": 2021,
    "category": "عالم مفتوح",
    "genres": [
      "عالم مفتوح"
    ],
    "developer": "Ubisoft Toronto",
    "publisher": "Ubisoft",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "ثورة في جزيرة استوائية مع أسلحة ومركبات ومهام.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2369390/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2369390/header.jpg",
    "times": {
      "main": 23,
      "extra": 40,
      "complete": 60
    },
    "featured": 61,
    "ps4": true
  },
  {
    "id": 62,
    "title": "Assassin’s Creed Odyssey",
    "year": 2018,
    "category": "عالم مفتوح",
    "genres": [
      "عالم مفتوح"
    ],
    "developer": "Ubisoft Quebec",
    "publisher": "Ubisoft",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رحلة تقمص أدوار في اليونان القديمة مع معارك بحرية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/812140/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/812140/header.jpg",
    "times": {
      "main": 45,
      "extra": 80,
      "complete": 140
    },
    "featured": 62,
    "ps4": true
  },
  {
    "id": 63,
    "title": "Assassin’s Creed Origins",
    "year": 2017,
    "category": "عالم مفتوح",
    "genres": [
      "عالم مفتوح"
    ],
    "developer": "Ubisoft Montreal",
    "publisher": "Ubisoft",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "أصل جماعة الحشاشين في مصر القديمة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/582160/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/582160/header.jpg",
    "times": {
      "main": 30,
      "extra": 50,
      "complete": 85
    },
    "featured": 63,
    "ps4": true
  },
  {
    "id": 64,
    "title": "Assassin’s Creed Valhalla",
    "year": 2020,
    "category": "عالم مفتوح",
    "genres": [
      "عالم مفتوح"
    ],
    "developer": "Ubisoft Montreal",
    "publisher": "Ubisoft",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رحلة فايكنغ طويلة تجمع الغارات والاستكشاف وبناء المستوطنة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2208920/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2208920/header.jpg",
    "times": {
      "main": 60,
      "extra": 100,
      "complete": 150
    },
    "featured": 64,
    "ps4": true
  },
  {
    "id": 65,
    "title": "Watch Dogs 2",
    "year": 2016,
    "category": "عالم مفتوح",
    "genres": [
      "عالم مفتوح"
    ],
    "developer": "Ubisoft Montreal",
    "publisher": "Ubisoft",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "اختراق تقني ومهمات في سان فرانسيسكو المفتوحة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/447040/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/447040/header.jpg",
    "times": {
      "main": 20,
      "extra": 35,
      "complete": 55
    },
    "featured": 65,
    "ps4": true
  },
  {
    "id": 66,
    "title": "Watch Dogs: Legion",
    "year": 2020,
    "category": "عالم مفتوح",
    "genres": [
      "عالم مفتوح"
    ],
    "developer": "Ubisoft Toronto",
    "publisher": "Ubisoft",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "لندن مستقبلية وشخصيات متعددة يمكن تجنيدها.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2239550/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2239550/header.jpg",
    "times": {
      "main": 18,
      "extra": 30,
      "complete": 50
    },
    "featured": 66,
    "ps4": true
  },
  {
    "id": 67,
    "title": "Just Cause 3",
    "year": 2015,
    "category": "عالم مفتوح",
    "genres": [
      "عالم مفتوح"
    ],
    "developer": "Avalanche Studios",
    "publisher": "Square Enix",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "فوضى ومظلات وخطاف في أرخبيل مفتوح.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/225540/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/225540/header.jpg",
    "times": {
      "main": 18,
      "extra": 35,
      "complete": 60
    },
    "featured": 67,
    "ps4": true
  },
  {
    "id": 68,
    "title": "Just Cause 4",
    "year": 2018,
    "category": "عالم مفتوح",
    "genres": [
      "عالم مفتوح"
    ],
    "developer": "Avalanche Studios",
    "publisher": "Square Enix",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "عالم مفتوح مع طقس متطرف وأدوات حركة وتدمير.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/517630/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/517630/header.jpg",
    "times": {
      "main": 16,
      "extra": 30,
      "complete": 55
    },
    "featured": 68,
    "ps4": true
  },
  {
    "id": 69,
    "title": "Mad Max",
    "year": 2015,
    "category": "عالم مفتوح",
    "genres": [
      "عالم مفتوح"
    ],
    "developer": "Avalanche Studios",
    "publisher": "Warner Bros.",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قتال سيارات وبقاء في صحراء قاحلة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/234140/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/234140/header.jpg",
    "times": {
      "main": 20,
      "extra": 35,
      "complete": 60
    },
    "featured": 69,
    "ps4": true
  },
  {
    "id": 70,
    "title": "Batman: Arkham Knight",
    "year": 2015,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "Rocksteady Studios",
    "publisher": "Warner Bros.",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "باتمان يدافع عن جوثام مع قتال وتحقيق وقيادة المركبة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/208650/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/208650/header.jpg",
    "times": {
      "main": 16,
      "extra": 27,
      "complete": 45
    },
    "featured": 70,
    "ps4": true
  },
  {
    "id": 71,
    "title": "Middle-earth: Shadow of Mordor",
    "year": 2014,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "Monolith",
    "publisher": "Warner Bros.",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قتال خفي ونظام أعداء ديناميكي في عالم تولكين.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/241930/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/241930/header.jpg",
    "times": {
      "main": 16,
      "extra": 25,
      "complete": 45
    },
    "featured": 71,
    "ps4": true
  },
  {
    "id": 72,
    "title": "Middle-earth: Shadow of War",
    "year": 2017,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "Monolith",
    "publisher": "Warner Bros.",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "معارك وجيوش ونظام نيميسيس في عالم موردور.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/356190/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/356190/header.jpg",
    "times": {
      "main": 20,
      "extra": 40,
      "complete": 70
    },
    "featured": 72,
    "ps4": true
  },
  {
    "id": 73,
    "title": "Dark Souls III",
    "year": 2016,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "FromSoftware",
    "publisher": "Bandai Namco",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "تقمص أدوار صعب مع عالم مترابط وزعماء أقوياء.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/374320/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/374320/header.jpg",
    "times": {
      "main": 32,
      "extra": 45,
      "complete": 75
    },
    "featured": 73,
    "ps4": true
  },
  {
    "id": 74,
    "title": "Dark Souls Remastered",
    "year": 2018,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "FromSoftware",
    "publisher": "Bandai Namco",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "العودة إلى لوردان في مغامرة تحدٍّ واستكشاف.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/570940/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/570940/header.jpg",
    "times": {
      "main": 42,
      "extra": 55,
      "complete": 80
    },
    "featured": 74,
    "ps4": true
  },
  {
    "id": 75,
    "title": "Nioh 2 – The Complete Edition",
    "year": 2021,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "Team Ninja",
    "publisher": "Koei Tecmo",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قتال ساموراي سريع مع أنظمة عتاد وتحولات يوكاي.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1325200/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1325200/header.jpg",
    "times": {
      "main": 35,
      "extra": 60,
      "complete": 100
    },
    "featured": 75,
    "ps4": true
  },
  {
    "id": 76,
    "title": "Lies of P",
    "year": 2023,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "Round8 Studio",
    "publisher": "NEOWIZ",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "مغامرة شبيهة بالسولز في مدينة مستوحاة من قصة بينوكيو.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1627720/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1627720/header.jpg",
    "times": {
      "main": 30,
      "extra": 45,
      "complete": 65
    },
    "featured": 76,
    "ps4": true
  },
  {
    "id": 77,
    "title": "Monster Hunter: World",
    "year": 2018,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "Capcom",
    "publisher": "Capcom",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "صيد وحوش ضخمة وصناعة معدات ضمن نظام تعاوني.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/582010/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/582010/header.jpg",
    "times": {
      "main": 45,
      "extra": 100,
      "complete": 250
    },
    "featured": 77,
    "ps4": true
  },
  {
    "id": 78,
    "title": "Final Fantasy VII Remake Intergrade",
    "year": 2021,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "Square Enix",
    "publisher": "Square Enix",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "إعادة تصور فصل ميدغار مع قتال آني وشخصيات محبوبة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1462040/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1462040/header.jpg",
    "times": {
      "main": 33,
      "extra": 45,
      "complete": 85
    },
    "featured": 78,
    "ps4": true
  },
  {
    "id": 79,
    "title": "Final Fantasy XV Windows Edition",
    "year": 2018,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "Square Enix",
    "publisher": "Square Enix",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رحلة أصدقاء عبر عالم خيالي بسيارات ومعارك.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/637650/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/637650/header.jpg",
    "times": {
      "main": 28,
      "extra": 45,
      "complete": 90
    },
    "featured": 79,
    "ps4": true
  },
  {
    "id": 80,
    "title": "Final Fantasy X/X-2 HD Remaster",
    "year": 2013,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "Square Enix",
    "publisher": "Square Enix",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "مغامرة JRPG كلاسيكية بقصة طويلة ونظام قتال استراتيجي.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/359870/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/359870/header.jpg",
    "times": {
      "main": 45,
      "extra": 75,
      "complete": 150
    },
    "featured": 80,
    "ps4": true
  },
  {
    "id": 81,
    "title": "Persona 5 Royal",
    "year": 2019,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "Atlus",
    "publisher": "Sega",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "تقمص أدوار ياباني يجمع حياة المدرسة واستكشاف القصور.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1687950/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1687950/header.jpg",
    "times": {
      "main": 100,
      "extra": 125,
      "complete": 150
    },
    "featured": 81,
    "ps4": true
  },
  {
    "id": 82,
    "title": "Yakuza 0",
    "year": 2015,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "Ryu Ga Gotoku Studio",
    "publisher": "Sega",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "دراما جريمة في اليابان مع قتال شوارع وأنشطة جانبية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/638970/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/638970/header.jpg",
    "times": {
      "main": 31,
      "extra": 55,
      "complete": 100
    },
    "featured": 82,
    "ps4": true
  },
  {
    "id": 83,
    "title": "Like a Dragon: Infinite Wealth",
    "year": 2024,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "Ryu Ga Gotoku",
    "publisher": "Sega",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "مغامرة تقمص أدوار مليئة بالشخصيات والأنشطة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2072450/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2072450/header.jpg",
    "times": {
      "main": 45,
      "extra": 70,
      "complete": 120
    },
    "featured": 83,
    "ps4": true
  },
  {
    "id": 84,
    "title": "Dragon’s Dogma 2",
    "year": 2024,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "Capcom",
    "publisher": "Capcom",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رحلة فانتازيا وقتال وحوش مع رفاق يتحكم بهم الذكاء الاصطناعي.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2054970/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2054970/header.jpg",
    "times": {
      "main": 35,
      "extra": 60,
      "complete": 100
    },
    "featured": 84,
    "ps4": true
  },
  {
    "id": 85,
    "title": "Mass Effect Legendary Edition",
    "year": 2021,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "BioWare",
    "publisher": "EA",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "ثلاثية خيال علمي تركز على القصة والاختيارات والعلاقات.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1328670/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1328670/header.jpg",
    "times": {
      "main": 55,
      "extra": 90,
      "complete": 140
    },
    "featured": 85,
    "ps4": true
  },
  {
    "id": 86,
    "title": "Dragon Age: Inquisition",
    "year": 2014,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "BioWare",
    "publisher": "EA",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "تقمص أدوار فانتازي مع فريق ومناطق ومهمات كثيرة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1222690/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1222690/header.jpg",
    "times": {
      "main": 45,
      "extra": 85,
      "complete": 130
    },
    "featured": 86,
    "ps4": true
  },
  {
    "id": 87,
    "title": "Kingdom Come: Deliverance",
    "year": 2018,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "Warhorse Studios",
    "publisher": "Deep Silver",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "مغامرة تاريخية واقعية في بوهيميا مع قتال وتطور شخصية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/379430/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/379430/header.jpg",
    "times": {
      "main": 40,
      "extra": 80,
      "complete": 130
    },
    "featured": 87,
    "ps4": true
  },
  {
    "id": 88,
    "title": "The Outer Worlds",
    "year": 2019,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "Obsidian",
    "publisher": "Private Division",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "خيال علمي مع قرارات حوارية وفصائل متعددة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/578650/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/578650/header.jpg",
    "times": {
      "main": 13,
      "extra": 25,
      "complete": 45
    },
    "featured": 88,
    "ps4": true
  },
  {
    "id": 89,
    "title": "Fallout 4",
    "year": 2015,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "Bethesda",
    "publisher": "Bethesda",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "استكشاف أرض قاحلة ومهمات وصناعة مستوطنات.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/377160/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/377160/header.jpg",
    "times": {
      "main": 27,
      "extra": 75,
      "complete": 150
    },
    "featured": 89,
    "ps4": true
  },
  {
    "id": 90,
    "title": "The Elder Scrolls V: Skyrim Special Edition",
    "year": 2016,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "Bethesda",
    "publisher": "Bethesda",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "عالم فانتازي ضخم مليء بالمهام والكهوف والتنانين.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/489830/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg",
    "times": {
      "main": 25,
      "extra": 75,
      "complete": 200
    },
    "featured": 90,
    "ps4": true
  },
  {
    "id": 91,
    "title": "DOOM Eternal",
    "year": 2020,
    "category": "تصويب",
    "genres": [
      "تصويب"
    ],
    "developer": "id Software",
    "publisher": "Bethesda",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "تصويب سريع يتطلب الحركة المستمرة وإدارة الموارد.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/782330/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/782330/header.jpg",
    "times": {
      "main": 14,
      "extra": 20,
      "complete": 35
    },
    "featured": 91,
    "ps4": true
  },
  {
    "id": 92,
    "title": "DOOM (2016)",
    "year": 2016,
    "category": "تصويب",
    "genres": [
      "تصويب"
    ],
    "developer": "id Software",
    "publisher": "Bethesda",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "عودة قوية لسلسلة التصويب الكلاسيكية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/379720/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/379720/header.jpg",
    "times": {
      "main": 12,
      "extra": 16,
      "complete": 25
    },
    "featured": 92,
    "ps4": true
  },
  {
    "id": 93,
    "title": "Titanfall 2",
    "year": 2016,
    "category": "تصويب",
    "genres": [
      "تصويب"
    ],
    "developer": "Respawn Entertainment",
    "publisher": "EA",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "حملة قصيرة ممتازة تجمع الحركة والقتال مع روبوت عملاق.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1237970/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1237970/header.jpg",
    "times": {
      "main": 6,
      "extra": 8,
      "complete": 12
    },
    "featured": 93,
    "ps4": true
  },
  {
    "id": 94,
    "title": "Battlefield 1",
    "year": 2016,
    "category": "تصويب",
    "genres": [
      "تصويب"
    ],
    "developer": "DICE",
    "publisher": "EA",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "معارك الحرب العالمية الأولى وحملة قصصية متعددة الفصول.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1238840/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1238840/header.jpg",
    "times": {
      "main": 6,
      "extra": 10,
      "complete": 25
    },
    "featured": 94,
    "ps4": true
  },
  {
    "id": 95,
    "title": "Battlefield V",
    "year": 2018,
    "category": "تصويب",
    "genres": [
      "تصويب"
    ],
    "developer": "DICE",
    "publisher": "EA",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "حكايات حرب ومعارك جماعية في الحرب العالمية الثانية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1238810/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1238810/header.jpg",
    "times": {
      "main": 6,
      "extra": 12,
      "complete": 35
    },
    "featured": 95,
    "ps4": true
  },
  {
    "id": 96,
    "title": "Call of Duty: Modern Warfare (2019)",
    "year": 2019,
    "category": "تصويب",
    "genres": [
      "تصويب"
    ],
    "developer": "Infinity Ward",
    "publisher": "Activision",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "حملة تصويب سينمائية مع أطوار متعددة بحسب الخدمة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2000950/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2000950/header.jpg",
    "times": {
      "main": 6,
      "extra": 10,
      "complete": 30
    },
    "featured": 96,
    "ps4": true
  },
  {
    "id": 97,
    "title": "Call of Duty: Black Ops III",
    "year": 2015,
    "category": "تصويب",
    "genres": [
      "تصويب"
    ],
    "developer": "Treyarch",
    "publisher": "Activision",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "تصويب مستقبلي مع طور قصة وزومبي ومنافسات.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/311210/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/311210/header.jpg",
    "times": {
      "main": 9,
      "extra": 20,
      "complete": 60
    },
    "featured": 97,
    "ps4": true
  },
  {
    "id": 98,
    "title": "Borderlands 3",
    "year": 2019,
    "category": "تصويب",
    "genres": [
      "تصويب"
    ],
    "developer": "Gearbox",
    "publisher": "2K",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "تصويب ونهب بأسلحة كثيرة وفكاهة ومهام تعاونية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/397540/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/397540/header.jpg",
    "times": {
      "main": 23,
      "extra": 45,
      "complete": 100
    },
    "featured": 98,
    "ps4": true
  },
  {
    "id": 99,
    "title": "The Outer Worlds: Spacer’s Choice Edition",
    "year": 2023,
    "category": "RPG",
    "genres": [
      "RPG"
    ],
    "developer": "Obsidian",
    "publisher": "Private Division",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "نسخة محسنة من مغامرة الخيال العلمي الساخرة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1920490/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1920490/header.jpg",
    "times": {
      "main": 13,
      "extra": 25,
      "complete": 45
    },
    "featured": 99,
    "ps4": true
  },
  {
    "id": 100,
    "title": "The Quarry",
    "year": 2022,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Supermassive Games",
    "publisher": "2K",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رعب تفاعلي تتغير أحداثه وفق قراراتك.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1577120/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1577120/header.jpg",
    "times": {
      "main": 8,
      "extra": 10,
      "complete": 20
    },
    "featured": 100,
    "ps4": true
  },
  {
    "id": 101,
    "title": "Until Dawn",
    "year": 2015,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Supermassive Games",
    "publisher": "Sony",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قصة رعب تفاعلية في كوخ جبلي؛ كل قرار قد يغير المصير.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2172010/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2172010/header.jpg",
    "times": {
      "main": 8,
      "extra": 9,
      "complete": 18
    },
    "featured": 101,
    "ps4": true
  },
  {
    "id": 102,
    "title": "The Dark Pictures Anthology: Man of Medan",
    "year": 2019,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Supermassive Games",
    "publisher": "Bandai Namco",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رعب تفاعلي قصير على سفينة مهجورة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/939850/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/939850/header.jpg",
    "times": {
      "main": 4,
      "extra": 5,
      "complete": 10
    },
    "featured": 102,
    "ps4": true
  },
  {
    "id": 103,
    "title": "The Dark Pictures: Little Hope",
    "year": 2020,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Supermassive Games",
    "publisher": "Bandai Namco",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رعب قصصي عن بلدة وأسرار ماضيها.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1194630/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1194630/header.jpg",
    "times": {
      "main": 5,
      "extra": 6,
      "complete": 12
    },
    "featured": 103,
    "ps4": true
  },
  {
    "id": 104,
    "title": "The Dark Pictures: House of Ashes",
    "year": 2021,
    "category": "رعب",
    "genres": [
      "رعب"
    ],
    "developer": "Supermassive Games",
    "publisher": "Bandai Namco",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رعب تعاوني تحت الأرض وسط تهديد غامض.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1281590/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1281590/header.jpg",
    "times": {
      "main": 5,
      "extra": 7,
      "complete": 12
    },
    "featured": 104,
    "ps4": true
  },
  {
    "id": 105,
    "title": "Sifu",
    "year": 2022,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "Sloclap",
    "publisher": "Sloclap",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قتال كونغ فو يتطلب التعلم وإتقان الحركات.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2138710/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2138710/header.jpg",
    "times": {
      "main": 8,
      "extra": 14,
      "complete": 30
    },
    "featured": 105,
    "ps4": true
  },
  {
    "id": 106,
    "title": "Kena: Bridge of Spirits",
    "year": 2021,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Ember Lab",
    "publisher": "Ember Lab",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "مغامرة جميلة تجمع القتال والألغاز ومخلوقات Rot.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1954200/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1954200/header.jpg",
    "times": {
      "main": 10,
      "extra": 15,
      "complete": 25
    },
    "featured": 106,
    "ps4": true
  },
  {
    "id": 107,
    "title": "Stray",
    "year": 2022,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "BlueTwelve Studio",
    "publisher": "Annapurna",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "استكشاف مدينة سايبربانك من منظور قط ضائع.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1332010/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1332010/header.jpg",
    "times": {
      "main": 5,
      "extra": 7,
      "complete": 10
    },
    "featured": 107,
    "ps4": true
  },
  {
    "id": 108,
    "title": "Sackboy: A Big Adventure",
    "year": 2020,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Sumo Digital",
    "publisher": "Sony",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "منصات ملونة يمكن لعبها تعاونيًا.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1599660/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1599660/header.jpg",
    "times": {
      "main": 10,
      "extra": 15,
      "complete": 25
    },
    "featured": 108,
    "ps4": true
  },
  {
    "id": 109,
    "title": "Crash Bandicoot N. Sane Trilogy",
    "year": 2017,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Vicarious Visions",
    "publisher": "Activision",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "ثلاث مغامرات منصات كلاسيكية بإصدار معاد تطويره.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/731490/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/731490/header.jpg",
    "times": {
      "main": 12,
      "extra": 20,
      "complete": 40
    },
    "featured": 109,
    "ps4": true
  },
  {
    "id": 110,
    "title": "Spyro Reignited Trilogy",
    "year": 2018,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Toys for Bob",
    "publisher": "Activision",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "ثلاث ألعاب منصات عن التنين Spyro.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/996580/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/996580/header.jpg",
    "times": {
      "main": 16,
      "extra": 25,
      "complete": 45
    },
    "featured": 110,
    "ps4": true
  },
  {
    "id": 111,
    "title": "Rayman Legends",
    "year": 2013,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Ubisoft Montpellier",
    "publisher": "Ubisoft",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "منصات إيقاعية مرسومة يدويًا ومراحل تعاونية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/242550/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/242550/header.jpg",
    "times": {
      "main": 10,
      "extra": 15,
      "complete": 30
    },
    "featured": 111,
    "ps4": true
  },
  {
    "id": 112,
    "title": "Tony Hawk’s Pro Skater 1 + 2",
    "year": 2020,
    "category": "رياضة",
    "genres": [
      "رياضة"
    ],
    "developer": "Vicarious Visions",
    "publisher": "Activision",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "تزلج وأهداف وتحديات في إعادة صنع كلاسيكية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2395210/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2395210/header.jpg",
    "times": {
      "main": 6,
      "extra": 15,
      "complete": 35
    },
    "featured": 112,
    "ps4": true
  },
  {
    "id": 113,
    "title": "Trackmania",
    "year": 2020,
    "category": "سباقات",
    "genres": [
      "سباقات"
    ],
    "developer": "Ubisoft Nadeo",
    "publisher": "Ubisoft",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "سباقات زمنية تعتمد على الدقة وتحسين المسارات.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2225070/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2225070/header.jpg",
    "times": {
      "main": null,
      "extra": null,
      "complete": null
    },
    "featured": 113,
    "ps4": true
  },
  {
    "id": 114,
    "title": "Wreckfest",
    "year": 2018,
    "category": "سباقات",
    "genres": [
      "سباقات"
    ],
    "developer": "Bugbear",
    "publisher": "THQ Nordic",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "سباقات تصادم وتدمير سيارات مع فيزياء واقعية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/228380/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/228380/header.jpg",
    "times": {
      "main": 8,
      "extra": 20,
      "complete": 50
    },
    "featured": 114,
    "ps4": true
  },
  {
    "id": 115,
    "title": "Dirt Rally 2.0",
    "year": 2019,
    "category": "سباقات",
    "genres": [
      "سباقات"
    ],
    "developer": "Codemasters",
    "publisher": "Codemasters",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "محاكاة رالي تتطلب مهارة عالية في القيادة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/690790/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/690790/header.jpg",
    "times": {
      "main": 10,
      "extra": 30,
      "complete": 100
    },
    "featured": 115,
    "ps4": true
  },
  {
    "id": 116,
    "title": "Hot Wheels Unleashed",
    "year": 2021,
    "category": "سباقات",
    "genres": [
      "سباقات"
    ],
    "developer": "Milestone",
    "publisher": "Milestone",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "سباقات سيارات ألعاب على مسارات مجنونة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1271700/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1271700/header.jpg",
    "times": {
      "main": 8,
      "extra": 20,
      "complete": 45
    },
    "featured": 116,
    "ps4": true
  },
  {
    "id": 117,
    "title": "Lego Star Wars: The Skywalker Saga",
    "year": 2022,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "TT Games",
    "publisher": "Warner Bros.",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "إعادة سرد أفلام حرب النجوم بأسلوب LEGO الفكاهي.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/920210/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/920210/header.jpg",
    "times": {
      "main": 18,
      "extra": 35,
      "complete": 80
    },
    "featured": 117,
    "ps4": true
  },
  {
    "id": 118,
    "title": "It Takes Two",
    "year": 2021,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Hazelight Studios",
    "publisher": "EA",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "مغامرة تعاونية مصممة لشخصين مع أفكار لعب متجددة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1426210/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1426210/header.jpg",
    "times": {
      "main": 12,
      "extra": 14,
      "complete": 20
    },
    "featured": 118,
    "ps4": true
  },
  {
    "id": 119,
    "title": "A Way Out",
    "year": 2018,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Hazelight Studios",
    "publisher": "EA",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قصة هروب من السجن لا تُلعب إلا بالتعاون.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1222700/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1222700/header.jpg",
    "times": {
      "main": 6,
      "extra": 7,
      "complete": 10
    },
    "featured": 119,
    "ps4": true
  },
  {
    "id": 120,
    "title": "Brothers: A Tale of Two Sons Remake",
    "year": 2024,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Avantgarden",
    "publisher": "505 Games",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "رحلة عاطفية وألغاز يتحكم فيها اللاعب بأخوين.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/225080/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/225080/header.jpg",
    "times": {
      "main": 3,
      "extra": 4,
      "complete": 6
    },
    "featured": 120,
    "ps4": true
  },
  {
    "id": 121,
    "title": "Brawlhalla",
    "year": 2017,
    "category": "قتال",
    "genres": [
      "قتال"
    ],
    "developer": "Blue Mammoth",
    "publisher": "Ubisoft",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "قتال منصات مجاني متعدد اللاعبين؛ لا نهاية قصصية ثابتة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/291550/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/291550/header.jpg",
    "times": {
      "main": null,
      "extra": null,
      "complete": null
    },
    "featured": 121,
    "ps4": true
  },
  {
    "id": 122,
    "title": "Fall Guys",
    "year": 2020,
    "category": "متنوع",
    "genres": [
      "متنوع"
    ],
    "developer": "Mediatonic",
    "publisher": "Epic Games",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "تحديات جماعية مرحة وجولات تنافسية قصيرة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1091500/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
    "times": {
      "main": null,
      "extra": null,
      "complete": null
    },
    "featured": 122,
    "ps4": true
  },
  {
    "id": 123,
    "title": "Warframe",
    "year": 2013,
    "category": "أكشن",
    "genres": [
      "أكشن"
    ],
    "developer": "Digital Extremes",
    "publisher": "Digital Extremes",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "أكشن تعاوني فضائي بمهمات وتطوير عميق.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/230410/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/230410/header.jpg",
    "times": {
      "main": 50,
      "extra": 100,
      "complete": 500
    },
    "featured": 123,
    "ps4": true
  },
  {
    "id": 124,
    "title": "Destiny 2",
    "year": 2017,
    "category": "تصويب",
    "genres": [
      "تصويب"
    ],
    "developer": "Bungie",
    "publisher": "Bungie",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "تصويب خيال علمي بخدمات ومحتوى متجدد.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1085660/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1085660/header.jpg",
    "times": {
      "main": 20,
      "extra": 100,
      "complete": 500
    },
    "featured": 124,
    "ps4": true
  },
  {
    "id": 125,
    "title": "The Crew 2",
    "year": 2018,
    "category": "سباقات",
    "genres": [
      "سباقات"
    ],
    "developer": "Ivory Tower",
    "publisher": "Ubisoft",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "سباقات بعالم أمريكي واسع مع سيارات وطائرات وقوارب.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/646910/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/646910/header.jpg",
    "times": {
      "main": 20,
      "extra": 60,
      "complete": 150
    },
    "featured": 125,
    "ps4": true
  },
  {
    "id": 126,
    "title": "The Crew Motorfest",
    "year": 2023,
    "category": "سباقات",
    "genres": [
      "سباقات"
    ],
    "developer": "Ivory Tower",
    "publisher": "Ubisoft",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "مهرجان سباقات في هاواي مع مركبات متنوعة.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2698940/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/2698940/header.jpg",
    "times": {
      "main": 20,
      "extra": 50,
      "complete": 120
    },
    "featured": 126,
    "ps4": true
  },
  {
    "id": 127,
    "title": "Gran Turismo 7",
    "year": 2022,
    "category": "سباقات",
    "genres": [
      "سباقات"
    ],
    "developer": "Polyphony Digital",
    "publisher": "Sony",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "محاكاة سباقات مع سيارات وتعديلات وتحديات قيادة.",
    "image": "https://en.wikipedia.org/wiki/Special:FilePath/Gran_Turismo_7_cover_art.jpg",
    "header": "https://en.wikipedia.org/wiki/Special:FilePath/Gran_Turismo_7_cover_art.jpg",
    "times": {
      "main": 20,
      "extra": 50,
      "complete": 150
    },
    "featured": 127,
    "ps4": true
  },
  {
    "id": 128,
    "title": "Sonic Mania",
    "year": 2017,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Christian Whitehead",
    "publisher": "Sega",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "منصات سريعة بروح ألعاب Sonic الكلاسيكية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/584400/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/584400/header.jpg",
    "times": {
      "main": 5,
      "extra": 8,
      "complete": 20
    },
    "featured": 128,
    "ps4": true
  },
  {
    "id": 129,
    "title": "Sonic Frontiers",
    "year": 2022,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Sonic Team",
    "publisher": "Sega",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "سرعة واستكشاف مناطق واسعة وقتال زعماء.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1237320/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1237320/header.jpg",
    "times": {
      "main": 15,
      "extra": 25,
      "complete": 40
    },
    "featured": 129,
    "ps4": true
  },
  {
    "id": 130,
    "title": "Prince of Persia: The Lost Crown",
    "year": 2024,
    "category": "مغامرات",
    "genres": [
      "مغامرات"
    ],
    "developer": "Ubisoft Montpellier",
    "publisher": "Ubisoft",
    "mode": "فردي/متعدد بحسب اللعبة والوضع",
    "rating": "PS4 / عناوين مختارة متعددة المنصات",
    "desc": "مغامرة ميترويدفينيا بحركة سريعة وقدرات زمنية.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1954430/library_600x900.jpg",
    "header": "https://cdn.akamai.steamstatic.com/steam/apps/1954430/header.jpg",
    "times": {
      "main": 20,
      "extra": 30,
      "complete": 45
    },
    "featured": 130,
    "ps4": true
  }
];
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
let category="الكل",query="",sort="featured",showAll=false,currentModal=null,favorites=new Set();
try{favorites=new Set(JSON.parse(localStorage.getItem("reignFavorites")||"[]").map(Number))}catch(e){favorites=new Set()}
const categoryCounts=()=>games.reduce((o,g)=>(o[g.category]=(o[g.category]||0)+1,o),{});
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function getFiltered(){
 let arr=games.filter(g=>(category==="الكل"||g.genres.includes(category)||g.category===category)&&[g.title,g.category,g.year,...g.genres,g.developer,g.publisher].join(" ").toLowerCase().includes(query.toLowerCase()));
 if(sort==="az")arr.sort((a,b)=>a.title.localeCompare(b.title));
 if(sort==="year-desc")arr.sort((a,b)=>b.year-a.year);
 if(sort==="year-asc")arr.sort((a,b)=>a.year-b.year); if(sort==="shortest")arr.sort((a,b)=>(a.times?.main||9999)-(b.times?.main||9999)); if(sort==="longest")arr.sort((a,b)=>(b.times?.main||0)-(a.times?.main||0));
 if(sort==="featured")arr.sort((a,b)=>a.featured-b.featured);
 return arr;
}
function cardHTML(g){
 const fav=favorites.has(g.id);
 return `<article class="game-card" tabindex="0" role="button" aria-label="تفاصيل ${esc(g.title)}" data-id="${g.id}">
 <div class="cover-wrap"><img src="${esc(g.image)}" alt="غلاف لعبة ${esc(g.title)}" loading="lazy" onerror="this.onerror=null;this.src='${esc(g.header)}';this.classList.add('image-fallback')"><span class="cover-label">${esc(g.category)}</span><button class="favorite-btn ${fav?"is-favorite":""}" data-fav="${g.id}" aria-label="${fav?"إزالة من":"إضافة إلى"} المفضلة" title="المفضلة">${fav?"♥":"♡"}</button></div>
 <div class="game-info"><div class="game-eyebrow">${esc(g.year)} / PS4</div><h3>${esc(g.title)}</h3><p>${esc(g.desc.slice(0,94))}${g.desc.length>94?"…":""}</p><div class="game-meta"><span>${esc(g.rating)}</span><span>${g.times?.main?`القصة ${g.times.main} س`:"لعب مستمر"}</span></div><div class="game-time-line">${g.times?.main?`<span>القصة ${g.times.main}h</span><span>مع الإضافات ${g.times.extra}h</span>`:`<span>لا نهاية محددة</span>`}</div></div></article>`;
}
function renderLibrary(){
 const all=getFiltered(),shown=showAll?all:all.slice(0,12);
 $("#gamesGrid").innerHTML=shown.map(cardHTML).join("");
 $("#resultCount").textContent=all.length;
 $("#noResults").hidden=all.length>0;
 $("#showMore").hidden=all.length<=12||showAll;
 $("#activeFilters").hidden=category==="الكل"&&!query;
 $("#activeFilterText").textContent=[category!=="الكل"?category:"",query?`بحث: ${query}`:""].filter(Boolean).join(" • ");
 const allBtn=$('[data-category="الكل"]'); if(allBtn)allBtn.innerHTML=`الكل <span>${games.length}</span>`;
}
function renderFavorites(){
 const list=games.filter(g=>favorites.has(g.id));
 $("#favoritesGrid").innerHTML=list.map(cardHTML).join("");
 $("#favoritesEmpty").hidden=list.length>0;
 $("#favoriteCount").textContent=list.length;
 $("#clearFavorites").hidden=list.length===0;
}
function saveFavorites(){try{localStorage.setItem("reignFavorites",JSON.stringify([...favorites]))}catch(e){}}
function toggleFavorite(id){
 const g=games.find(x=>x.id===Number(id));if(!g)return;
 if(favorites.has(g.id)){favorites.delete(g.id);toast(`أزيلت ${g.title} من المفضلة`)}else{favorites.add(g.id);toast(`أضيفت ${g.title} إلى المفضلة`)}
 saveFavorites();renderLibrary();renderFavorites();
 if(currentModal===g.id)$("#modalFavorite").textContent=favorites.has(g.id)?"♥ أزيل من المفضلة":"♡ أضف إلى المفضلة";
}
let toastTimer;
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2300)}
function openGame(id){
 const g=games.find(x=>x.id===Number(id));if(!g)return;currentModal=g.id;
 $("#modalTitle").textContent=g.title;$("#modalKicker").textContent=`GAME FILE / ${g.year}`;
 $("#modalDescription").textContent=g.desc;
 $("#modalCover").style.backgroundImage=`linear-gradient(0deg,#0c101644,#0c101622),url("${g.image}")`;
 $("#modalFacts").innerHTML=[["سنة الإصدار",g.year],["التصنيف",g.genres.join("، ")],["المطور",g.developer],["الناشر",g.publisher],["وضع اللعب",g.mode],["المنصة","تحقق من توفر إصدار PS4 للعنوان المحدد"],["القصة الرئيسية",g.times?.main?`${g.times.main} ساعة تقريبًا`:"لا ينطبق / لعب مستمر"],["القصة مع الإضافات",g.times?.extra?`${g.times.extra} ساعة تقريبًا`:"لا ينطبق"],["إكمال 100%",g.times?.complete?`${g.times.complete} ساعة تقريبًا`:"لا يوجد وقت ثابت"],["مصدر الصورة","غلاف من مكتبة صور اللعبة؛ قد يتعذر تحميل بعض الصور"]].map(([k,v])=>`<div class="fact-row"><span>${esc(k)}</span><span>${esc(v)}</span></div>`).join("");
 $("#modalFavorite").textContent=favorites.has(g.id)?"♥ أزيل من المفضلة":"♡ أضف إلى المفضلة";
 $("#modalBackdrop").hidden=false;document.body.style.overflow="hidden";$("#modalClose").focus();
}
function closeModal(){$("#modalBackdrop").hidden=true;document.body.style.overflow="";currentModal=null}
function resetFilters(){category="الكل";query="";sort="featured";showAll=false;$("#searchInput").value="";$("#sortSelect").value="featured";$$(".filter-pill").forEach(b=>b.classList.toggle("active",b.dataset.category==="الكل"));renderLibrary()}
$("#categoryFilters").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;category=b.dataset.category;showAll=false;$$(".filter-pill").forEach(x=>x.classList.toggle("active",x===b));renderLibrary()});
$("#searchInput").addEventListener("input",e=>{query=e.target.value.trim();showAll=false;renderLibrary()});
$("#searchSubmit").addEventListener("click",()=>{query=$("#searchInput").value.trim();renderLibrary();$("#games").scrollIntoView({behavior:"smooth"})});
$("#clearSearch").addEventListener("click",()=>{$("#searchInput").value="";query="";renderLibrary();$("#searchInput").focus()});
$("#sortSelect").addEventListener("change",e=>{sort=e.target.value;showAll=false;renderLibrary()});
$("#resetFilters").addEventListener("click",resetFilters);$("#resetEmpty").addEventListener("click",resetFilters);
$("#showMore").addEventListener("click",()=>{showAll=true;renderLibrary()});
function handleCardAction(e){const fav=e.target.closest("[data-fav]");if(fav){e.stopPropagation();toggleFavorite(fav.dataset.fav);return}const card=e.target.closest(".game-card");if(card)openGame(card.dataset.id)}
$("#gamesGrid").addEventListener("click",handleCardAction);$("#favoritesGrid").addEventListener("click",handleCardAction);
[$("#gamesGrid"),$("#favoritesGrid")].forEach(grid=>grid.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.classList.contains("game-card")){e.preventDefault();openGame(e.target.dataset.id)}}));
$("#favoritesShortcut").addEventListener("click",()=>$("#favorites").scrollIntoView({behavior:"smooth"}));
$("#clearFavorites").addEventListener("click",()=>{favorites.clear();saveFavorites();renderLibrary();renderFavorites();toast("تم مسح قائمة المفضلة")});
$("#modalClose").addEventListener("click",closeModal);$("#modalClose2").addEventListener("click",closeModal);
$("#modalBackdrop").addEventListener("click",e=>{if(e.target.id==="modalBackdrop")closeModal()});
$("#modalFavorite").addEventListener("click",()=>{if(currentModal!==null)toggleFavorite(currentModal)});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
$$(".collection-action").forEach(b=>b.addEventListener("click",()=>{category=b.dataset.collection;query="";showAll=false;$("#searchInput").value="";$$(".filter-pill").forEach(x=>x.classList.toggle("active",x.dataset.category===category));renderLibrary();$("#games").scrollIntoView({behavior:"smooth"})}));
const guides={
 basics:["افهم جهازك قبل أي خطوة","ابدأ بمعرفة رقم إصدار برنامج النظام وطراز الجهاز، ثم ابحث عن معلومات حديثة ومطابقة تمامًا لهما. لا تفترض أن دليلًا يعمل على جهاز ما سيعمل على جهاز آخر. احفظ بياناتك المهمة قبل أي تغيير."],
 firmware:["كيف تعرف إصدار النظام؟","من الشاشة الرئيسية على PS4، افتح الإعدادات ثم النظام ثم معلومات النظام. سجّل رقم إصدار برنامج النظام كما يظهر. أسماء القوائم قد تختلف قليلًا حسب لغة الجهاز. لا تشارك معلومات حسابك أو الرقم التسلسلي علنًا."],
 compatibility:["فهم التوافق والإصدارات","قد تختلف قابلية تشغيل المحتوى حسب إصدار النظام، ورقم تحديث اللعبة، والمنطقة، ونوع الحزمة. لا تعتمد على اسم اللعبة وحده؛ طابق بيانات النسخة المحددة مع مصدر موثوق، وتجنب ملفات التحديث المجهولة."],
 safety:["حماية بياناتك","احتفظ بنسخة احتياطية من بياناتك المهمة، واستخدم مصادر موثوقة فقط. لا تشغّل ملفات مجهولة ولا تعطِ بيانات حساب PlayStation أو كلمة المرور لمواقع غير معروفة. التعديلات غير الرسمية قد تؤثر في الضمان أو الوصول إلى الخدمات."],
 terms:["مصطلحات شائعة","Homebrew: تطبيقات غير رسمية يصنعها المجتمع. GoldHEN: أداة/بيئة شائعة في سياق أجهزة PS4 المعدّلة، ويعتمد التوافق على إصدار النظام. Update: تحديث للعبة أو النظام. Package: حزمة تثبيت. هذه المصطلحات ليست ضمانًا للتوافق أو السلامة؛ تحقق من المعلومات الحديثة قبل التطبيق."]
};
$$("[data-guide]").forEach(b=>b.addEventListener("click",()=>{const d=guides[b.dataset.guide];if(!d)return;currentModal=null;$("#modalKicker").textContent="REIGN FIELD GUIDE";$("#modalTitle").textContent=d[0];$("#modalDescription").textContent=d[1];$("#modalCover").style.backgroundImage="radial-gradient(circle at 50% 35%,#2d6b5b,#17212a 58%,#0c1016)";$("#modalFacts").innerHTML='<div class="fact-row"><span>القاعدة الذهبية</span><span>تحقّق قبل التطبيق</span></div><div class="fact-row"><span>نصيحة REIGN</span><span>النسخ الاحتياطي أولًا</span></div>';$("#modalFavorite").hidden=true;$("#modalBackdrop").hidden=false;document.body.style.overflow="hidden"}));
const closeModalOrig=closeModal;
const closeModalSafe=()=>{$("#modalFavorite").hidden=false;closeModalOrig()};
$("#modalClose").removeEventListener("click",closeModal);$("#modalClose").addEventListener("click",closeModalSafe);
$("#modalClose2").removeEventListener("click",closeModal);$("#modalClose2").addEventListener("click",closeModalSafe);
$("#modalBackdrop").addEventListener("click",e=>{if(e.target.id==="modalBackdrop")closeModalSafe()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModalSafe()});
$("#mobileMenu").addEventListener("click",()=>$(".site-header").classList.toggle("nav-open"));
$$('#mainNav a').forEach(a=>a.addEventListener("click",()=>$(".site-header").classList.remove("nav-open")));
$("#year").textContent=new Date().getFullYear();

// REIGN playtime calculator
const timeGameSelect=document.querySelector("#timeGame");
if(timeGameSelect){timeGameSelect.innerHTML=games.map(g=>`<option value="${g.id}">${g.title}</option>`).join("");const daily=document.querySelector("#dailyHours"),dailyLabel=document.querySelector("#dailyHoursLabel"),goal=document.querySelector("#playGoal");function updateTime(){const g=games.find(x=>x.id===Number(timeGameSelect.value));const hours=g?.times?.[goal.value];dailyLabel.textContent=daily.value;if(!hours){document.querySelector("#timeResult").textContent="غير محدد";document.querySelector("#timeResultDetail").textContent="هذه اللعبة مستمرة أو لا تملك نهاية ثابتة.";return}const days=Math.ceil(hours/Number(daily.value));const weeks=Math.floor(days/7),rem=days%7;document.querySelector("#timeResult").textContent=`${hours} ساعة`;document.querySelector("#timeResultDetail").textContent=`نحو ${days} يومًا (${weeks?weeks+" أسبوع و":""}${rem} يوم) عند اللعب ${daily.value} ساعة يوميًا.`}timeGameSelect.addEventListener("change",updateTime);daily.addEventListener("input",updateTime);goal.addEventListener("change",updateTime);updateTime()}

renderLibrary();renderFavorites();
