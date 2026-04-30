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
  imageSrc: string;
  imageAlt: string;
  ingredients: string[];
  benefits: string[];
  orderHref: string;
  shopeeHref: string;
  tone: ProductTone;
};

export const siteContent = {
  brand: {
    name: "Laras Heritage",
    tagline: "Menyelaraskan rasa jamu tradisional dengan cita rasa modern.",
    logoSrc: "/laras-heritage-logo.jpeg",
    blurb:
      "Jamu modern Indonesia yang menyelaraskan racikan tradisional, bahan botani pilihan, dan cita rasa yang lebih mudah dinikmati hari ini.",
  },
  navItems: [
    { id: "home", label: "Home", href: "#home" },
    { id: "products", label: "Koleksi", href: "#products" },
    { id: "about", label: "About Us", href: "#about" },
    { id: "testimonials", label: "Testimoni", href: "#testimonials" },
    { id: "contact", label: "Kontak", href: "#contact" },
  ] as NavItem[],
  links: {
    whatsapp:
      "https://wa.me/6281770603717?text=Halo%20Laras%20Heritage,%20saya%20ingin%20mengetahui%20produk%20Anda.",
    partnerWhatsapp:
      "https://wa.me/6281770603717?text=Halo%20Laras%20Heritage,%20saya%20ingin%20mendiskusikan%20kemitraan%20reseller.",
    email: "mailto:hello@larasheritage.id",
    phone: "tel:+622150981128",
    products: "#products",
    testimonials: "#testimonials",
    contact: "#contact",
  },
  hero: {
    eyebrow: "Modern Herbal Wellness Brand",
    title:
      "Jamu modern Indonesia, diracik untuk ritme hidup yang lebih seimbang.",
    description:
      "Blend herbal premium dengan rasa yang lebih halus, presentasi yang lebih elegan, dan identitas yang relevan untuk gaya hidup masa kini.",
    secondaryCta: "Lihat Produk Unggulan",
    trustBadges: [],
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
      "Laras Heritage mempertemukan rasa jamu tradisional dengan ekspektasi gaya hidup modern.",
    description:
      "Kami percaya jamu tidak harus terasa kuno untuk tetap otentik. Melalui formulasi yang lebih terkurasi, struktur rasa yang lebih bersih, dan identitas visual yang lebih matang, kami menghadirkan pengalaman herbal yang terasa hangat, premium, dan relevan.",
    stats: [
      { value: "4", label: "signature blends" },
      { value: "6+", label: "botanical ingredients curated" },
      { value: "1", label: "cohesive premium brand language" },
    ],
  },
  about: {
    eyebrow: "About Us",
    title:
      "Berawal dari Maospati, Laras Heritage membawa jamu Nusantara ke ritme hidup modern.",
    paragraphs: [
      "Jamu Laras Heritage lahir dari inisiatif wirausaha mahasiswa PMW UNESA 2026 dengan gagasan sederhana: menjaga warisan jamu Nusantara agar tetap relevan untuk generasi muda, pekerja muda, dan keluarga yang mencari alternatif minuman lebih sehat.",
      "Kami melihat jamu tradisional sering dianggap pahit, memakan waktu untuk dibuat, dan kurang praktis untuk rutinitas cepat. Karena itu, Laras Heritage dikembangkan sebagai jamu bubuk instan siap seduh yang tetap bertumpu pada bahan herbal alami, tetapi hadir dengan rasa yang lebih ramah di lidah.",
      "Usaha ini berpusat di Jl. Raya Maospati-Barat No. 358-360, Kelurahan Maospati, Kecamatan Maospati, Kabupaten Magetan, Jawa Timur. Dari daerah ini, kami ingin mengangkat potensi rempah lokal seperti jahe, kunyit, temulawak, gula aren, madu, dan lemon menjadi produk yang bernilai lebih tinggi.",
      "Pendekatan racikan kami menggabungkan tradisi dan formulasi modern: karakter jamu tetap dijaga, rasa dibuat lebih seimbang, rendah gula, tanpa pengawet, dan praktis diseduh dengan air hangat dalam waktu kurang dari satu menit.",
    ],
    quote:
      "Jamu modern praktis yang menjaga warisan Nusantara tetap hidup di keseharian generasi sekarang.",
    principles: [
      "Warisan jamu Nusantara",
      "Rasa lebih ramah di lidah",
      "Praktis siap seduh",
      "Berbasis potensi herbal Magetan",
    ],
    facts: [
      {
        label: "Asal brand",
        value: "Inisiatif PMW UNESA 2026 dari tim mahasiswa.",
      },
      {
        label: "Lokasi usaha",
        value: "Maospati, Kabupaten Magetan, Jawa Timur.",
      },
      {
        label: "Format produk",
        value: "Jamu bubuk instan dalam kemasan standing pouch 500 gr.",
      },
      {
        label: "Pendekatan rasa",
        value: "Herbal fusion dengan varian modern yang tidak terlalu pahit.",
      },
    ],
  },
  products: [
    {
      name: "Jahe Coklat",
      label: "Hangat dan lembut",
      description:
        "Perpaduan jahe dan coklat yang terasa hangat, creamy, dan nyaman diminum sebagai ritual harian.",
      imageSrc: "/products/jahe-coklat.webp",
      imageAlt: "Produk Jamu Laras Heritage varian Jahe Coklat",
      ingredients: ["Jahe", "Coklat"],
      benefits: ["Hangat", "Creamy", "Ramah di lidah"],
      orderHref:
        "https://wa.me/6281770603717?text=Halo%20Laras%20Heritage,%20saya%20ingin%20pesan%20varian%20Jahe%20Coklat.",
      shopeeHref:
        "https://shopee.co.id/search?keyword=jamu%20laras%20heritage%20jahe%20coklat",
      tone: "gold",
    },
    {
      name: "Sinom Lemon",
      label: "Segar dan ringan",
      description:
        "Rasa sinom yang lebih fresh dengan sentuhan lemon, cocok untuk pilihan jamu yang terasa cerah.",
      imageSrc: "/products/sinom-lemon.webp",
      imageAlt: "Produk Jamu Laras Heritage varian Sinom Lemon",
      ingredients: ["Sinom", "Lemon"],
      benefits: ["Fresh", "Citrus", "Ringan"],
      orderHref:
        "https://wa.me/6281770603717?text=Halo%20Laras%20Heritage,%20saya%20ingin%20pesan%20varian%20Sinom%20Lemon.",
      shopeeHref:
        "https://shopee.co.id/search?keyword=jamu%20laras%20heritage%20sinom%20lemon",
      tone: "sage",
    },
    {
      name: "Temulawak Honey Lemon",
      label: "Herbal madu citrus",
      description:
        "Temulawak yang dipadukan dengan madu dan lemon, menghadirkan karakter herbal yang hangat, segar, dan lebih mudah dinikmati.",
      imageSrc: "/products/temulawak-honey-lemon.webp",
      imageAlt: "Produk Jamu Laras Heritage varian Temulawak Honey Lemon",
      ingredients: ["Temulawak", "Madu", "Lemon"],
      benefits: ["Herbal", "Madu", "Citrus"],
      orderHref:
        "https://wa.me/6281770603717?text=Halo%20Laras%20Heritage,%20saya%20ingin%20pesan%20varian%20Temulawak%20Honey%20Lemon.",
      shopeeHref:
        "https://shopee.co.id/search?keyword=jamu%20laras%20heritage%20temulawak%20honey%20lemon",
      tone: "clay",
    },
    {
      name: "Vanilla Lemon",
      label: "Creamy citrus",
      description:
        "Kombinasi vanilla dan lemon yang wangi, lembut, dan terasa modern tanpa meninggalkan karakter jamu.",
      imageSrc: "/products/vanilla-lemon.webp",
      imageAlt: "Produk Jamu Laras Heritage varian Vanilla Lemon",
      ingredients: ["Vanilla", "Lemon"],
      benefits: ["Aromatik", "Citrus", "Lembut"],
      orderHref:
        "https://wa.me/6281770603717?text=Halo%20Laras%20Heritage,%20saya%20ingin%20pesan%20varian%20Vanilla%20Lemon.",
      shopeeHref:
        "https://shopee.co.id/search?keyword=jamu%20laras%20heritage%20vanilla%20lemon",
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
        "Setiap titik sentuh - dari copy hingga tampilan - dibangun agar terlihat matang di hadapan customer dan strategic partner.",
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
      { value: "Customer-ready", label: "brand presentation" },
    ],
  },
  testimonials: {
    eyebrow: "Testimoni",
    title: "Kesan mereka setelah mencoba Laras Heritage.",
    description:
      "Rasa jamu yang lebih ringan, praktis diseduh, dan tetap terasa alami untuk dinikmati sehari-hari.",
    items: [
      {
        quote:
          "Biasanya saya kurang cocok dengan jamu karena rasanya terlalu kuat. Laras Heritage lebih ringan dan aromanya enak.",
        name: "Andika Pratama",
        age: 19,
        address: "Kec. Kartoharjo, Kota Madiun",
        photoSrc: "/testimonials/andika-pratama.webp",
        photoAlt: "Foto profil Andika Pratama",
      },
      {
        quote:
          "Praktis banget tinggal seduh. Cocok diminum pagi sebelum mulai aktivitas, rasanya juga tidak bikin eneg.",
        name: "Salsabila Putri",
        age: 29,
        address: "Kec. Mejayan, Kab. Madiun",
        photoSrc: "/testimonials/salsabila-putri.webp",
        photoAlt: "Foto profil Salsabila Putri",
      },
      {
        quote:
          "Jahe coklatnya unik, hangat, tapi tetap nyaman diminum. Rasanya modern tanpa menghilangkan karakter jamunya.",
        name: "Budi Santoso",
        age: 41,
        address: "Kec. Maospati, Kab. Magetan",
        photoSrc: "/testimonials/budi-santoso.webp",
        photoAlt: "Foto profil Budi Santoso",
      },
    ],
  },
  faqs: [
    {
      question: "Apakah Laras Heritage menggunakan bahan alami?",
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
      question: "Apakah tersedia program reseller?",
      answer:
        "Tersedia. Kami membuka peluang kemitraan untuk reseller dan partner strategis yang sejalan dengan positioning brand.",
    },
  ],
  contact: {
    eyebrow: "Kontak",
    title: "Kirim pesan ke Laras Heritage.",
    description:
      "Isi form singkat ini, lalu pesan akan langsung siap dikirim melalui WhatsApp.",
    addressName: "Laras Heritage Studio",
    addressLines: [
      "Jl. Raya Maospati-Barat No. 358-360,",
      "Kelurahan Maospati, Kecamatan Maospati,",
      "Kabupaten Magetan, Jawa Timur 63392",
    ],
    email: "hello@larasheritage.id",
    phoneDisplay: "+62 817 7060 3717",
    phoneLink: "+6281770603717",
    whatsappDisplay: "+62 817 7060 3717",
    whatsappLink: "https://wa.me/6281770603717",
    instagramDisplay: "@larasheritagejamu.official",
    instagramLink: "https://www.instagram.com/larasheritagejamu.official",
    hours: "Buka order pembelian setiap hari, 07.00 - 22.00 WIB",
  },
} as const;
