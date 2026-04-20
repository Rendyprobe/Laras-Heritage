export type NavItem = {
  id: string;
  label: string;
  href: `#${string}`;
};

type ProductTone = "gold" | "sage" | "clay" | "olive";

export type Product = {
  name: string;
  label: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  tone: ProductTone;
};

export const siteContent = {
  brand: {
    name: "Arunika Heritage",
    tagline: "Warisan Alami, Diracik untuk Hidup Modern.",
    blurb:
      "Jamu modern Indonesia yang mengangkat bahan botani pilihan melalui rasa yang lebih refined, presentasi yang elegan, dan kualitas yang siap dipercaya.",
  },
  navItems: [
    { id: "home", label: "Home", href: "#home" },
    { id: "products", label: "Koleksi", href: "#products" },
    { id: "about", label: "Cerita", href: "#about" },
    { id: "partnership", label: "Mitra", href: "#partnership" },
    { id: "contact", label: "Kontak", href: "#contact" },
  ] as NavItem[],
  links: {
    whatsapp:
      "https://wa.me/6281290001848?text=Halo%20Arunika%20Heritage,%20saya%20ingin%20mengetahui%20produk%20Anda.",
    partnerWhatsapp:
      "https://wa.me/6281290001848?text=Halo%20Arunika%20Heritage,%20saya%20ingin%20mendiskusikan%20kemitraan%20reseller%20atau%20distributor.",
    email: "mailto:hello@arunikaheritage.id",
    phone: "tel:+622150981128",
    products: "#products",
    partnership: "#partnership",
    contact: "#contact",
  },
  hero: {
    eyebrow: "Modern Herbal Wellness Brand",
    title:
      "Jamu modern Indonesia, diracik untuk ritme hidup yang lebih seimbang.",
    description:
      "Blend herbal premium dengan rasa yang lebih halus, presentasi yang lebih elegan, dan identitas yang relevan untuk gaya hidup masa kini.",
    secondaryCta: "Lihat Produk Unggulan",
    trustBadges: [
      "100% botanical-forward",
      "crafted hygienically",
      "ready for modern retail",
    ],
    notes: [],
  },
  trustItems: [
    {
      title: "Natural by intention",
      description:
        "Bahan herbal yang familiar, dipilih secukupnya dan terasa jelas.",
    },
    {
      title: "Refined in taste",
      description:
        "Karakter jamu tetap ada, tetapi lebih ringan dan mudah dinikmati.",
    },
    {
      title: "Ready to trust",
      description:
        "Tampilan, proses, dan narasi brand disusun untuk terasa matang sejak awal.",
    },
  ],
  brandIntro: {
    eyebrow: "A new ritual for Indonesian wellness",
    title:
      "Arunika Heritage mempertemukan warisan herbal Nusantara dengan ekspektasi gaya hidup modern.",
    description:
      "Kami percaya jamu tidak harus terasa kuno untuk tetap otentik. Melalui formulasi yang lebih terkurasi, struktur rasa yang lebih bersih, dan identitas visual yang lebih matang, kami menghadirkan pengalaman herbal yang terasa hangat, premium, dan relevan.",
    stats: [
      { value: "4", label: "signature blends" },
      { value: "6+", label: "botanical ingredients curated" },
      { value: "1", label: "cohesive premium brand language" },
    ],
  },
  about: {
    eyebrow: "Brand Story",
    title: "Lebih sedikit penjelasan, lebih jelas pesan utamanya.",
    paragraphs: [
      "Arunika Heritage lahir dari ide sederhana: jamu Indonesia layak tampil sekelas brand wellness modern. Kami mengambil bahan dan resep yang akrab, lalu meraciknya kembali dengan rasa yang lebih halus, bahasa brand yang lebih bersih, dan pengalaman yang lebih mudah dipercaya.",
    ],
    quote:
      "Warisan herbal, dibawa ke bentuk yang lebih tenang, modern, dan layak hadir di keseharian urban.",
    principles: [
      "Heritage-led",
      "Refined taste",
      "Calm presentation",
    ],
  },
  products: [
    {
      name: "Svara Kunyit Asam",
      label: "Revitalizing botanical tonic",
      description:
        "Kunyit asam dengan karakter yang cerah, ringan, dan mudah diminum kapan saja.",
      ingredients: ["Kunyit", "Asam jawa", "Jeruk kasturi"],
      benefits: ["Bright finish", "Afternoon ritual"],
      tone: "gold",
    },
    {
      name: "Nara Ginger Lemongrass",
      label: "Warming daily infusion",
      description:
        "Jahe merah dan sereh untuk rasa hangat yang bersih dan menenangkan.",
      ingredients: ["Jahe merah", "Sereh", "Madu hutan"],
      benefits: ["Comforting warmth", "Morning ritual"],
      tone: "sage",
    },
    {
      name: "Ranum Temulawak Honey",
      label: "Golden botanical blend",
      description:
        "Temulawak yang lebih halus, dengan lapisan madu lembut dan rasa yang kaya.",
      ingredients: ["Temulawak", "Madu", "Kayu manis"],
      benefits: ["Balanced profile", "Golden blend"],
      tone: "clay",
    },
    {
      name: "Luma Digestive Elixir",
      label: "Herbal digestive companion",
      description:
        "Blend segar-rempah yang terasa ringan dan cocok dinikmati setelah makan.",
      ingredients: ["Adas", "Kapulaga", "Daun mint"],
      benefits: ["Fresh finish", "Post-meal"],
      tone: "olive",
    },
  ] as Product[],
  pillars: [
    {
      title: "Warisan herbal yang dikurasi ulang",
      description:
        "Terinspirasi dari jamu Nusantara, tetapi dirancang ulang agar terasa lebih relevan untuk kebutuhan, selera, dan ekspektasi visual konsumen modern.",
    },
    {
      title: "Bahan botani yang familiar dan meyakinkan",
      description:
        "Kami bekerja dengan bahan yang dikenal luas dalam tradisi herbal Indonesia, lalu menatanya dalam formulasi yang lebih terukur dan lebih approachable.",
    },
    {
      title: "Brand language yang siap dibawa lebih jauh",
      description:
        "Setiap titik sentuh - dari copy hingga tampilan - dibangun agar terlihat matang di hadapan customer, retail buyer, maupun strategic partner.",
    },
    {
      title: "Wellness tanpa nuansa hard selling",
      description:
        "Narasi kami berfokus pada ritual, keseimbangan, dan trust. Produk tidak diposisikan sebagai klaim berlebihan, melainkan teman hidup sehat yang natural.",
    },
  ],
  ingredients: {
    eyebrow: "Bahan Alami",
    title: "Dipilih dari bahan yang akrab, disusun dalam pengalaman rasa yang lebih modern.",
    description:
      "Kami menggunakan bahan botani yang telah lama menjadi bagian dari keseharian herbal Indonesia. Setiap bahan dihadirkan bukan hanya untuk cerita, tetapi juga untuk karakter rasa dan pengalaman minum yang lebih refined.",
    items: [
      {
        name: "Kunyit",
        detail: "Earthy, warm, and iconic within Indonesian herbal heritage.",
      },
      {
        name: "Jahe Merah",
        detail: "Memberi kehangatan yang tegas sekaligus nyaman.",
      },
      {
        name: "Temulawak",
        detail: "Ciri khas Nusantara dengan lapisan rasa yang kaya.",
      },
      {
        name: "Sereh",
        detail: "Aromatik segar yang membersihkan profil blend.",
      },
      {
        name: "Madu",
        detail: "Penyeimbang rasa yang lembut dan natural.",
      },
      {
        name: "Mint & Citrus Peel",
        detail: "Sentuhan modern untuk akhir rasa yang lebih bright.",
      },
    ],
  },
  rituals: {
    eyebrow: "Manfaat Produk",
    title: "Dirancang untuk momen yang nyata dalam keseharian modern.",
    description:
      "Alih-alih menjanjikan terlalu banyak, kami menghubungkan setiap blend pada konteks konsumsi yang mudah dipahami: pagi yang ingin dimulai dengan hangat, siang yang butuh rasa segar, dan waktu setelah makan yang membutuhkan keseimbangan ringan.",
    items: [
      {
        label: "Pagi yang menghangatkan",
        title: "Ritual pembuka hari",
        description:
          "Blend yang memberi rasa hangat, fokus, dan transisi lembut ke hari yang sibuk tanpa terasa berat.",
      },
      {
        label: "Siang yang menyegarkan",
        title: "Reset yang tetap natural",
        description:
          "Pilihan untuk menemani jeda singkat, ketika tubuh menginginkan rasa yang lebih cerah dan ringan.",
      },
      {
        label: "Setelah makan",
        title: "Comfort yang lebih ringan",
        description:
          "Formula pendamping yang membantu pengalaman makan terasa selesai dengan lebih nyaman dan refined.",
      },
    ],
  },
  quality: {
    eyebrow: "Quality Assurance",
    title: "Kualitas dibangun dari disiplin kecil yang konsisten.",
    description:
      "Trust pada brand herbal tidak lahir dari klaim besar, tetapi dari detail yang terasa terjaga. Karena itu, pendekatan kami menekankan seleksi bahan, peracikan yang konsisten, higienitas proses, dan komunikasi yang jernih.",
    steps: [
      {
        title: "Seleksi bahan",
        description:
          "Bahan dipilih berdasarkan karakter rasa, aroma, dan relevansi terhadap formula.",
      },
      {
        title: "Formulasi terkurasi",
        description:
          "Setiap blend dirancang agar tetap berkarakter tanpa terasa kasar atau berlebihan.",
      },
      {
        title: "Proses higienis",
        description:
          "Pendekatan produksi ditata agar bersih, rapi, dan layak membawa citra premium.",
      },
      {
        title: "Konsistensi presentasi",
        description:
          "Mulai dari produk hingga materi brand, semuanya dijaga agar terasa selaras dan siap dipasarkan.",
      },
    ],
    stats: [
      { value: "Botanical-first", label: "ingredient philosophy" },
      { value: "Modern", label: "formulation approach" },
      { value: "Retail-ready", label: "partnership presentation" },
    ],
  },
  testimonials: {
    eyebrow: "Social Proof",
    title: "Dipercaya karena terasa matang, bukan karena berbicara terlalu keras.",
    description:
      "Respons awal yang kami cari selalu sama: rasa yang lebih mudah diterima, informasi yang lebih jelas, dan identitas brand yang cukup kuat untuk menumbuhkan keyakinan sejak perkenalan pertama.",
    items: [
      {
        quote:
          "Saya dulu sulit menikmati jamu karena rasanya terlalu berat. Arunika terasa lebih halus, modern, dan tetap memberi kesan alami yang saya cari.",
        name: "Nadia P.",
        role: "Brand Consultant, Jakarta",
      },
      {
        quote:
          "Packaging dan presentasinya sangat meyakinkan. Saat saya tawarkan ke pelanggan toko, mereka langsung merasa ini produk herbal yang serius.",
        name: "Rizky H.",
        role: "Retail Partner, Bandung",
      },
      {
        quote:
          "Saya suka karena informasinya jelas, bahannya familiar, dan rasanya tidak terasa seperti produk herbal yang kuno.",
        name: "Maya S.",
        role: "Ibu Rumah Tangga, Tangerang",
      },
    ],
  },
  partnership: {
    eyebrow: "Reseller / Distributor",
    title: "Untuk partner yang mencari brand herbal dengan presentasi yang sudah matang.",
    description:
      "Arunika dirancang agar mudah dibawa ke retail modern, hospitality, dan kanal distribusi yang membutuhkan brand lokal dengan positioning yang jelas.",
    bullets: [
      "Positioning premium yang mudah dipresentasikan",
      "Narasi produk ringkas dan mudah dipahami buyer",
      "Visual identity yang siap dipakai di channel modern",
    ],
    primaryCta: "Jadi Mitra Arunika",
    secondaryCta: "Email Partnership",
  },
  faqs: [
    {
      question: "Apakah Arunika Heritage menggunakan bahan alami?",
      answer:
        "Ya. Kami mengutamakan bahan botani yang akrab dalam tradisi herbal Indonesia dan meraciknya dengan pendekatan yang lebih modern serta lebih terkurasi.",
    },
    {
      question: "Apakah rasanya sangat pahit seperti jamu tradisional pada umumnya?",
      answer:
        "Tidak. Salah satu fokus utama kami adalah menghadirkan profil rasa yang lebih refined dan approachable tanpa menghilangkan karakter herbalnya.",
    },
    {
      question: "Apakah produk ini cocok untuk gaya hidup modern yang serba cepat?",
      answer:
        "Ya. Koleksi kami dirancang agar mudah dipahami, mudah dinikmati, dan terasa relevan sebagai bagian dari ritual harian.",
    },
    {
      question: "Bagaimana cara memilih produk yang paling sesuai?",
      answer:
        "Anda dapat mulai dari kebutuhan utama Anda, seperti ritual pagi yang menghangatkan, pendamping setelah makan, atau minuman herbal dengan rasa yang lebih segar.",
    },
    {
      question: "Apakah tersedia program reseller atau distributor?",
      answer:
        "Tersedia. Kami membuka peluang kemitraan untuk reseller, distributor regional, dan partner retail yang sejalan dengan positioning brand.",
    },
  ],
  contact: {
    eyebrow: "Kontak",
    title: "Satu tempat untuk bertanya, mengenal produk, atau memulai kemitraan.",
    description:
      "Jika Anda ingin mengenal produk lebih dekat atau membicarakan peluang kerja sama, tim kami siap membantu dengan jalur kontak yang sederhana dan jelas.",
    addressName: "Arunika Heritage Studio",
    addressLines: [
      "Jl. Senopati No. 18, Kebayoran Baru",
      "Jakarta Selatan 12190",
    ],
    email: "hello@arunikaheritage.id",
    phoneDisplay: "+62 21 5098 1128",
    phoneLink: "+622150981128",
    whatsappDisplay: "+62 812 9000 1848",
    whatsappLink: "https://wa.me/6281290001848",
    hours: "Senin - Jumat, 09.00 - 18.00 WIB",
  },
} as const;
