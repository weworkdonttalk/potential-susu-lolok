/* ===== Vanilla JS – Nusava AYANA Revamp ===== */
'use strict';

/* --------------------------------------------------------------------------
   1. REGION DATA (Interactive Map)
   -------------------------------------------------------------------------- */
const REGIONS = {
  sumatera: {
    name: 'Sumatera',
    label: 'AREA 01 — SUMATERA',
    sub: 'Serambi Melayu, Ranah Minang & Tanah Batak',
    cat: 'Arsitektur Adat & Wastra Songket',
    desc: 'Dari atap melengkung Rumah Gadang Minangkabau yang kokoh, kilau benang emas kain Songket Palembang warisan Sriwijaya, hingga hentakan Tari Saman Aceh yang diakui UNESCO. Sumatera menyajikan peradaban adat yang anggun, berwibawa, dan kaya nilai persaudaraan.',
    highlights: ['Rumah Gadang Minang', 'Tari Saman (UNESCO)', 'Songket Emas Palembang', 'Kain Ulos Batak Toba'],
    artisans: '1.240+',
    cagar: '310+ Situs',
    unescoCount: '8 Warisan',
    source: 'Kemendikbudristek WBTb & UNESCO Intangible Cultural Heritage',
    quote: '"Adat basandi syarak, syarak basandi Kitabullah — keanggunan songket emas dan keteguhan Rumah Gadang yang menjaga kehormatan leluhur."',
    img: 'assets/images/content/wilayah-sumatera-gadang.jpg',
    fallback: 'assets/images/content/wilayah-sumatera-gadang.jpg',
    pinX: '17%', pinY: '43%',
  },
  jawa: {
    name: 'Jawa',
    label: 'AREA 02 — JAWA',
    sub: 'Pusat Keraton, Candi Megah & Wayang Kulit',
    cat: 'Filosofi Candi & Seni Adiluhung',
    desc: 'Jawa adalah perpaduan spiritualitas dan ketelitian rasa yang luar biasa. Candi Borobudur yang mendunia, seni wayang kulit purwa yang penuh wejangan hidup bijak, serta canting batik tulis halus yang tiap goresannya dibuat dengan kesabaran para ibu pengrajin.',
    highlights: ['Borobudur (UNESCO)', 'Wayang Kulit Purwa (UNESCO)', 'Batik Tulis Nitik & Keraton (UNESCO)', 'Keris Pusaka (UNESCO)'],
    artisans: '3.850+',
    cagar: '420+ Situs',
    unescoCount: '18 Warisan',
    source: 'UNESCO World Heritage & Warisan Budaya Takbenda Kemendikbud',
    quote: '"Memayu hayuning bawana — keselarasan rasa dan cipta yang terwujud dalam liukan canting batik tulis dan tempaan keris pusaka Jawa."',
    img: 'assets/images/content/wilayah-jawa-borobudur.jpg',
    fallback: 'assets/images/content/wilayah-jawa-borobudur.jpg',
    pinX: '33%', pinY: '76%',
  },
  bali_nt: {
    name: 'Bali & Nusa Tenggara',
    label: 'AREA 03 — BALI & NUSA TENGGARA',
    sub: 'Harmoni Dewata, Tenun Ikat Sumba & Dawai Sasando',
    cat: 'Seni Pertunjukan, Kriya Perak & Tenun Alami',
    desc: 'Kekayaan seni visual dan pertunjukan yang memikat mata dunia. Suara magis Tari Kecak di tebing laut Bali bersanding dengan kesabaran mama-mama penenun Sumba yang merebus daun nila dan akar mengkudu selama berbulan-bulan demi menghasilkan kain ikat pewarna alami.',
    highlights: ['Tari Tradisi Bali (UNESCO)', 'Tenun Ikat Sumba Timur (WBTb)', 'Perak Filigri Celuk Gianyar', 'Sasando Daun Lontar Rote'],
    artisans: '2.110+',
    cagar: '260+ Situs',
    unescoCount: '12 Warisan',
    source: 'Kemendikbudristek WBTb & Kemenparekraf Sentra Kriya Unggulan',
    quote: '"Tri Hita Karana — keselarasan sejati antara manusia, alam semesta, dan Sang Pencipta dalam setiap lembaran tenun pewarna alam dan denting gamelan dewata."',
    img: 'assets/images/content/wilayah-bali-kecak.jpg',
    fallback: 'assets/images/content/wilayah-bali-kecak.jpg',
    pinX: '49%', pinY: '79%',
  },
  kalimantan: {
    name: 'Kalimantan',
    label: 'AREA 04 — KALIMANTAN',
    sub: 'Kearifan Rimba Borneo & Ukiran Dayak',
    cat: 'Pahat Kayu Ulin & Anyaman Manik',
    desc: 'Kearifan suku Dayak yang hidup berdampingan erat dengan rimba Kalimantan. Tercermin dari arsitektur Rumah Betang yang menaungi puluhan keluarga, ukiran perisai Talawang pelindung desa, serta anyaman manik-manik rumit yang dibuat dengan doa perlindungan.',
    highlights: ['Rumah Betang Dayak (WBTb)', 'Perisai Talawang Borneo', 'Anyaman Manik Dayak Kenyah', 'Tari Mandau Tradisional'],
    artisans: '920+',
    cagar: '180+ Situs',
    unescoCount: '6 Warisan',
    source: 'Kemendikbudristek Ditjen Kebudayaan & Dekranasda Kaltim/Kalbar',
    quote: '"Kearifan rimba Borneo — kayu ulin purba dan anyaman manik yang merajut perlindungan spiritual serta rasa hormat mendalam pada alam."',
    img: 'assets/images/content/wilayah-kalimantan-talawang.jpg',
    fallback: 'assets/images/content/wilayah-kalimantan-talawang.jpg',
    pinX: '43%', pinY: '42%',
  },
  sulawesi: {
    name: 'Sulawesi',
    label: 'AREA 05 — SULAWESI',
    sub: 'Pelaut Tangguh Pinisi & Arsitektur Toraja',
    cat: 'Kriya Perahu Samudra & Arsitektur Adat',
    desc: 'Ketangguhan para pembuat kapal Pinisi Bulukumba yang merakit perahu kayu penjelajah samudra tanpa sebatang paku besi pun, berpadu dengan keelokan Rumah Adat Tongkonan Toraja dengan dinding ukiran motif Pa\'tedong yang sarat lambang kemuliaan.',
    highlights: ['Kapal Pinisi Bulukumba (UNESCO)', 'Rumah Adat Tongkonan Toraja', 'Tenun Sutra Mandar (WBTb)', 'Tari Kipas Pakarena'],
    artisans: '1.450+',
    cagar: '220+ Situs',
    unescoCount: '9 Warisan',
    source: 'UNESCO Intangible Cultural Heritage 2017 & WBTb Kemendikbud',
    quote: '"Sompe narekko purai rilolongeng — keberanian pelaut Pinisi menaklukkan samudra berpadu dengan sakralitas Tongkonan yang menghubungkan kita dengan leluhur."',
    img: 'assets/images/content/wilayah-sulawesi-tongkonan.jpg',
    fallback: 'assets/images/content/wilayah-sulawesi-tongkonan.jpg',
    pinX: '58%', pinY: '51%',
  },
  maluku_papua: {
    name: 'Maluku & Papua',
    label: 'AREA 06 — MALUKU & PAPUA',
    sub: 'Kepulauan Rempah & Mahakarya Pahat Asmat',
    cat: 'Seni Pahat Wow-Ipits & Tas Noken',
    desc: 'Pesona kepulauan rempah Maluku bersatu dengan keajaiban seni ukir suku Asmat dan rajutan Noken Papua. Dibuat langsung dari serat kulit pohon liar hutan tropis, Noken telah diakui UNESCO sebagai simbol kasih sayang seorang ibu dan pemersatu masyarakat adat.',
    highlights: ['Seni Pahat Suku Asmat (WBTb)', 'Tas Noken Serat Kayu (UNESCO)', 'Tabuhan Tifa & Alifuru', 'Tari Cendrawasih Papua'],
    artisans: '780+',
    cagar: '150+ Situs',
    unescoCount: '7 Warisan',
    source: 'UNESCO Intangible Cultural Heritage 2012 & WBTb Kemendikbud',
    quote: '"Noken adalah rahim kehidupan — anyaman serat pohon hutan Papua yang menjaga persaudaraan, cinta kasih ibu, dan harmoni alam semesta."',
    img: 'assets/images/content/wilayah-papua-asmat.jpg',
    fallback: 'assets/images/content/wilayah-papua-asmat.jpg',
    pinX: '85%', pinY: '58%',
  },
};

/* --------------------------------------------------------------------------
   2. PRODUCT DATA (Marketplace — Karya Asli & Sumber Terverifikasi)
   -------------------------------------------------------------------------- */
const PRODUCTS = [
  {
    id: 1,
    name: 'Kain Tenun Ikat Hinggi Sumba Timur',
    cat: 'wastra',
    daerah: 'Waingapu, Sumba Timur (NTT)',
    artisan: 'Kelompok Mama Penenun Lambanapu',
    material: '100% Katun Pintal Tangan, Pewarna Alami Kulit Akar Mengkudu & Daun Nila',
    duration: '6 – 8 Bulan pengerjaan tangan',
    source: 'Kemendikbudristek — Warisan Budaya Takbenda (WBTb) No. Reg 201400144',
    sourceShort: 'WBTb Kemendikbud',
    price: 3450000,
    rating: 4.9,
    sold: 248,
    img: 'assets/images/content/produk-tenun-sumba.jpg',
    verified: true,
    shortDesc: 'Ditenun manual berbulan-bulan dengan pewarna alami akar mengkudu dan daun nila. Motif kuda melambangkan keberanian.',
    desc: 'Kain adat Sumba asli yang dibuat tanpa bahan kimia sama sekali. Para mama di Lambanapu mencelup benang hingga 40 kali dalam ramuan akar pohon mengkudu dan daun nila untuk menghasilkan warna terakota dan biru indigo yang awet puluhan tahun. Motif kuda melambangkan kepemimpinan dan harga diri.'
  },
  {
    id: 2,
    name: 'Batik Tulis Nitik Kembang Jeruk Giriloyo',
    cat: 'wastra',
    daerah: 'Bantul, D.I. Yogyakarta',
    artisan: 'Paguyuban Pembatik Giriloyo, Imogiri',
    material: 'Kain Katun Mori Primissima, Malam Alami, Pewarna Kulit Kayu Tingi & Soga',
    duration: '2 – 3 Bulan canting manual',
    source: 'UNESCO Representative List of Intangible Cultural Heritage 2009 & Indikasi Geografis Batik Nitik (IG ID G 000000080)',
    sourceShort: 'UNESCO & IG Terdaftar',
    price: 2850000,
    rating: 5.0,
    sold: 312,
    img: 'assets/images/content/produk-batik-giriloyo.jpg',
    verified: true,
    shortDesc: 'Salah satu motif batik tertua keraton yang dibuat dengan ribuan titik canting belah cawang. Polanya rapi dan presisi.',
    desc: 'Motif Nitik adalah salah satu pola batik tertua di Yogyakarta. Keunikannya, motif ini tidak digambar dengan garis lurus biasa, melainkan disusun dari ribuan titik halus menggunakan canting belah cawang khusus. Dikerjakan penuh kesabaran oleh para ibu pembatik di kaki perbukitan Imogiri.'
  },
  {
    id: 3,
    name: 'Tas Noken Asli Serat Kayu Lembah Baliem',
    cat: 'kriya',
    daerah: 'Wamena, Papua Pegunungan',
    artisan: 'Komunitas Mama Rajut Noken Wamena',
    material: 'Serat Kulit Kayu Melinjo & Pohon Mahkota Dewa Alami',
    duration: '3 – 4 Minggu anyam tangan',
    source: 'UNESCO Intangible Cultural Heritage in Need of Urgent Safeguarding (ID: 00619, 2012)',
    sourceShort: 'UNESCO Warisan Dunia',
    price: 850000,
    rating: 4.9,
    sold: 189,
    img: 'assets/images/content/produk-noken-papua.jpg',
    verified: true,
    shortDesc: 'Tas tradisional ramah lingkungan dari serat kayu hutan. Diakui UNESCO sebagai simbol cinta kasih dan rahim ibu.',
    desc: 'Bagi masyarakat Papua, noken bukan cuma tas biasa, melainkan simbol kehidupan dan rahim seorang ibu. Kulit kayu hutan ditumbuk, direndam, dipilin menjadi benang kuat, lalu dirajut tanpa jarum logam. Tas ini elastis, kuat membawa beban berat, dan 100% alami bisa terurai tanah.'
  },
  {
    id: 4,
    name: 'Perhiasan Perak Filigri Khas Desa Celuk',
    cat: 'kriya',
    daerah: 'Desa Celuk, Gianyar, Bali',
    artisan: 'Studio Kerajinan Perak Maestro Celuk',
    material: 'Perak Murni 925 (Sterling Silver), Sentuhan Lapisan Emas 18K',
    duration: '2 – 3 Minggu tempa detail',
    source: 'Kemenparekraf — Sentra Desa Wisata Kriya Perak Unggulan & Dekranasda Bali',
    sourceShort: 'Sentra Kemenparekraf',
    price: 1450000,
    rating: 4.8,
    sold: 142,
    img: 'assets/images/content/produk-perak-celuk.jpg',
    verified: true,
    shortDesc: 'Perhiasan perak halus yang dibuat dengan teknik filigri tertua di Bali. Benang perak dipilin menjadi pola teratai anggun.',
    desc: 'Desa Celuk di Gianyar sudah terkenal sejak ratusan tahun sebagai pusat seniman perak terbaik di Bali. Kriya ini memakai teknik filigri (kerawang), yaitu memilin benang perak setipis helaian rambut hingga membentuk ukiran mandala dan bunga kamboja yang lentik dan sangat anggun.'
  },
  {
    id: 5,
    name: 'Kain Songket Lepus Emas Asli Palembang',
    cat: 'wastra',
    daerah: 'Ogan Ilir, Sumatera Selatan',
    artisan: 'Sentra Tenun Songket Tradisional Kertapati',
    material: 'Benang Sutra Pilihan & Sulaman Benang Emas Cabutan Murni',
    duration: '4 – 5 Bulan tenun gedogan',
    source: 'Kemendikbudristek — Warisan Budaya Takbenda (WBTb) No. Reg 201300009',
    sourceShort: 'WBTb Kemendikbud',
    price: 4800000,
    rating: 5.0,
    sold: 98,
    img: 'assets/images/content/produk-songket-palembang.jpg',
    verified: true,
    shortDesc: 'Kasta tertinggi songket Palembang yang dijuluki Ratu Segala Kain. Seluruh bidang kain dipenuhi kilau benang emas halus.',
    desc: 'Dikenal sejak zaman Kerajaan Sriwijaya, Songket Lepus adalah kain paling istimewa karena benang emasnya menutupi hampir seluruh permukaan kain dasar sutra. Ditenun helai demi helai menggunakan alat tenun kayu tradisional non-mesin (gedogan), menciptakan kilau mewah yang bertahan puluhan tahun.'
  },
  {
    id: 6,
    name: 'Ukiran Patung Mbis Leluhur Suku Asmat',
    cat: 'seni',
    daerah: 'Agats, Pesisir Asmat, Papua Selatan',
    artisan: 'Pengukir Wow-ipits Kampung Syuru, Asmat',
    material: 'Kayu Bakau Besi Pilihan, Pewarna Alami Tanah Liat Merah & Cangkang Kerang',
    duration: '1 – 2 Bulan pahat manual',
    source: 'Kemendikbudristek — Warisan Budaya Takbenda (WBTb) No. Reg 201300062',
    sourceShort: 'WBTb Kemendikbud',
    price: 3200000,
    rating: 4.8,
    sold: 64,
    img: 'assets/images/content/produk-patung-asmat.jpg',
    verified: true,
    shortDesc: 'Karya seni pahat tangan Asmat yang mendunia. Setiap lekukan garis dipersembahkan untuk menghormati kebijaksanaan leluhur.',
    desc: 'Pengukir Asmat (Wow-ipits) tidak pernah memakai pola jiplakan atau mesin. Mereka memahat langsung kayu keras hutan tropis dengan pahat tulang atau besi, menghasilkan figur mbis bertingkat yang penuh energi spiritual dan perlindungan bagi ruang keluarga.'
  },
  {
    id: 7,
    name: 'Instrumen Sasando Akustik Daun Lontar Rote',
    cat: 'musik',
    daerah: 'Pulau Rote, NTT',
    artisan: 'Bengkel Maestro Sasando Desa Oebelo',
    material: 'Bambu Pilihan, Resonator Haik Daun Lontar Kering, 28 Dawai Kawat Halus',
    duration: '3 – 4 Minggu rakit tangan',
    source: 'Kemendikbudristek — Warisan Budaya Takbenda (WBTb) No. Reg 201400143',
    sourceShort: 'WBTb Kemendikbud',
    price: 2100000,
    rating: 4.9,
    sold: 87,
    img: 'assets/images/content/produk-sasando-rote.jpg',
    verified: true,
    shortDesc: 'Alat musik petik khas Rote dengan resonator alami dari daun lontar. Suaranya jernih mirip perpaduan harpa dan gitar.',
    desc: 'Sasando memadukan bambu bulat dengan wadah melingkar dari anyaman daun pohon lontar (haik) yang berfungsi memantulkan suara dawai menjadi sangat merdu dan jernih. Cocok dipetik untuk mengiringi waktu santai atau dijadikan hiasan interior yang bernilai seni tinggi.'
  },
  {
    id: 8,
    name: 'Anyaman Tas & Wadah Ketak Beleka Lombok',
    cat: 'kriya',
    daerah: 'Desa Beleka, Lombok Tengah, NTB',
    artisan: 'Koperasi Pengrajin Ketak Beleka Lestari',
    material: 'Tanaman Paku Hutan Liar (Ketak), Pengasapan Alami Sabut Kelapa',
    duration: '2 – 3 Minggu anyam teliti',
    source: 'Kemendikbudristek — Warisan Budaya Takbenda (WBTb) No. Reg 201600401 & Dekranasda NTB',
    sourceShort: 'WBTb Kemendikbud',
    price: 520000,
    rating: 4.7,
    sold: 380,
    img: 'assets/images/content/produk-ketak-lombok.jpg',
    verified: true,
    shortDesc: 'Anyaman tanaman paku hutan khas Lombok yang diawetkan lewat asap tempurung kelapa. Sangat kuat dan tahan air.',
    desc: 'Dibuat dari rumput paku liar ketak yang tumbuh di hutan Lombok. Setelah dianyam sangat rapat oleh para perajin desa Beleka, wadah ini diasapi dengan sabut kelapa selama berhari-hari. Hasilnya: warna cokelat keemasan mengkilap yang tahan air, bebas jamur, dan awet hingga puluhan tahun.'
  },
];

/* --------------------------------------------------------------------------
   3. JOURNAL DATA (Slider — Cerita & Investigasi Budaya Nyata)
   -------------------------------------------------------------------------- */
const ARTICLES = [
  {
    tag: 'Wastra Pewarna Alami',
    title: 'Cerita Mama Penenun Sumba: Butuh 8 Bulan dan 40 Kali Celupan Daun Nila untuk Selembar Kain',
    author: 'Laras Winarti',
    source: 'Indonesia.go.id Kebudayaan · WBTb Kemendikbud',
    date: 'Oktober 2026',
    read: '6 mnt baca',
    img: 'assets/images/content/jurnal-tenun-lambanapu.jpg',
    url: 'https://indonesia.go.id/kategori/seni/2117/pesona-tenun-ikat-sumba-yang-mendunia',
    snippet: 'Di Sumba Timur, menenun bukan sekadar mencari nafkah melainkan doa panjang. Mengapa mereka teguh menolak pewarna kimia pabrik dan setia merawat alam leluhur?'
  },
  {
    tag: 'Batik Tulis Warisan',
    title: 'Rahasia Bertahan Batik Nitik: Saat 800 Ibu Rumah Tangga di Imogiri Jadi Penjaga Motif Tertua',
    author: 'Nindya Kusuma',
    source: 'Indonesia.go.id Seni · Paguyuban Giriloyo',
    date: 'Oktober 2026',
    read: '8 mnt baca',
    img: 'assets/images/content/jurnal-batik-giriloyo.jpg',
    url: 'https://indonesia.go.id/kategori/seni/1078/makna-filosofis-di-balik-motif-batik',
    snippet: 'Setelah gempa 2006, para ibu di Giriloyo bangkit bersama canting mereka. Kini, batik nitik menjadi pusaka berstatus Indikasi Geografis resmi yang mendunia.'
  },
  {
    tag: 'Mahakarya Maritim UNESCO',
    title: 'Kisah Pinisi Bulukumba: Perahu Tangguh Penakluk Samudra yang Dirakit Tanpa Sebatang Paku Logam',
    author: 'Bima Adyatama',
    source: 'UNESCO Intangible Cultural Heritage Registry ID: 00983',
    date: 'September 2026',
    read: '6 mnt baca',
    img: 'assets/images/content/jurnal-pinisi-bulukumba.jpg',
    url: 'https://ich.unesco.org/en/RL/pinisi-art-of-boatbuilding-in-south-sulawesi-00983',
    snippet: 'Di pesisir Pantai Bira Bulukumba, para Panrita Lopi mewariskan kearifan maritim leluhur dengan menyusun bilah kayu ulin menggunakan pasak alami dan perhitungan batin.'
  },
  {
    tag: 'Warisan Dunia UNESCO',
    title: 'Noken Papua: Tas Rajut Serat Kulit Kayu Simbol Kasih Sayang Ibu dan Penjaga Perdamaian Adat',
    author: 'Faisal Ardiansyah',
    source: 'UNESCO Intangible Cultural Heritage Registry ID: 00619',
    date: 'September 2026',
    read: '7 mnt baca',
    img: 'assets/images/content/jurnal-noken-papua.jpg',
    url: 'https://ich.unesco.org/en/USL/noken-multifunctional-knotted-or-woven-bag-handicraft-of-the-people-of-papua-00619',
    snippet: 'Noken bukan tas pabrik. Saat mama-mama di pegunungan Papua merajut serat kayu hutan, mereka merajut simbol rahim kehidupan dan lambang persatuan antar suku.'
  },
  {
    tag: 'Kesenian Sakral UNESCO',
    title: 'Dentingan Suci Gamelan Selonding: Bunyi Besi Kuno Karangasem yang Menembus Relung Jiwa',
    author: 'Rara Puspita',
    source: 'UNESCO Intangible Cultural Heritage Registry ID: 01607',
    date: 'Agustus 2026',
    read: '5 mnt baca',
    img: 'assets/images/content/jurnal-gamelan-selonding.jpg',
    url: 'https://ich.unesco.org/en/RL/gamelan-01607',
    snippet: 'Berbeda dari gamelan perunggu biasa, bilah besi kuno Selonding menghasilkan getaran nada meditatif sakral yang mengiringi upacara suci Bali Aga selama berabad-abad.'
  },
  {
    tag: 'Pusaka Dunia UNESCO',
    title: 'Menguak Cerita Tersembunyi di Relief Borobudur: Ensiklopedia Visual Peradaban Abad ke-8',
    author: 'Dr. Hendra Wijaya',
    source: 'Indonesia.go.id Pariwisata & Balai Konservasi Borobudur',
    date: 'Agustus 2026',
    read: '7 mnt baca',
    img: 'assets/images/content/wilayah-jawa-borobudur.jpg',
    url: 'https://indonesia.go.id/kategori/pariwisata/2056/candi-borobudur-kemegahan-warisan-dunia-di-tanah-jawa',
    snippet: 'Di balik 2.672 panel relief batu andesit, Borobudur merekam visual kapal bercadik, instrumen musik petik kuno, hingga ragam flora rempah kejayaan maritim Nusantara.'
  },
  {
    tag: 'Teater Wayang UNESCO',
    title: 'Wayang Kulit Purwa: Teater Bayangan Berusia Seribu Tahun yang Merangkul Kearifan Moral',
    author: 'Ki Sugeng Handoyo',
    source: 'UNESCO Representative List of Intangible Heritage ID: 00063',
    date: 'Juli 2026',
    read: '9 mnt baca',
    img: 'assets/images/wayang-kulit-jawa-berhias-emas-10.png',
    url: 'https://ich.unesco.org/en/RL/wayang-puppet-theatre-00063',
    snippet: 'Diakui UNESCO sejak 2008, pertunjukan wayang kulit memadukan tatah sungging kulit kerbau berlapis prada emas, suluk dalang mistik, serta ajaran budi pekerti luhur.'
  },
  {
    tag: 'Karya Tempa Adat UNESCO',
    title: 'Misteri Tempaan Keris Jawa: Harmoni Logam Pamor Meteorit dan Doa Spiritual Sang Empu',
    author: 'Baskoro Danu',
    source: 'UNESCO Representative List of Intangible Heritage ID: 00112',
    date: 'Juli 2026',
    read: '8 mnt baca',
    img: 'assets/images/content/jurnal-keris-jawa.jpg',
    url: 'https://ich.unesco.org/en/RL/indonesian-kris-00112',
    snippet: 'Bukan sekadar senjata tikam, sebilah keris pusaka lahir dari lipatan ratusan lapis besi, baja, dan meteorit titanium yang ditempa dalam kesunyian tirakat leluhur.'
  },
  {
    tag: 'Wastra Ratu Palembang',
    title: 'Kilau Emas Benang Songket Palembang: Mahakarya Tenun Pelindung Tradisi Kerajaan Sriwijaya',
    author: 'Siti Fauziah',
    source: 'Indonesia.go.id Seni Tradisi & WBTb Indonesia',
    date: 'Juni 2026',
    read: '8 mnt baca',
    img: 'assets/images/content/produk-songket-palembang.jpg',
    url: 'https://indonesia.go.id/kategori/seni/1852/songket-palembang-si-ratu-kain-nusantara',
    snippet: 'Dikenal sebagai Ratu Segala Kain, tenun songket lepus emas membutuhkan ketelitian hingga 3 bulan pengerjaan memakai helai benang pakan emas murni peninggalan adiluhung.'
  },
  {
    tag: 'Seni Patung Papua',
    title: 'Mengukir Roh Leluhur: Makna Sakral Patung Bisj dan Kedalaman Jiwa Pahat Suku Asmat',
    author: 'Markus Pirim',
    source: 'Indonesia.go.id Kesenian & Ragam Budaya Nusantara',
    date: 'Juni 2026',
    read: '6 mnt baca',
    img: 'assets/images/content/wilayah-papua-asmat.jpg',
    url: 'https://indonesia.go.id/kategori/seni/1878/seni-ukir-asmat-yang-mendunia',
    snippet: 'Bagi Wow-ipits (pemahat Asmat), sebatang kayu bakau hutan bakau bernyawa. Setiap garis pahatan figur leluhur menjaga relasi abadi antara dunia manusia dan arwah nenek moyang.'
  },
  {
    tag: 'Arsitektur Vernakular',
    title: 'Konstruksi Pasak Lentur Rumah Gadang: Kebijaksanaan Leluhur Minang Hadapi Gempa Bumi',
    author: 'Andi Sutan Marajo',
    source: 'Indonesia.go.id Arsitektur Adat Nusantara',
    date: 'Mei 2026',
    read: '7 mnt baca',
    img: 'assets/images/content/wilayah-sumatera-gadang.jpg',
    url: 'https://indonesia.go.id/kategori/seni/1360/keunikan-arsitektur-rumah-gadang',
    snippet: 'Tanpa sebatang paku besi pun, konstruksi tiang miring dan sendi batu sandi Rumah Gadang terbukti mampu bergoyang luwes meredam guncangan gempa vulkanik Sumatera.'
  },
  {
    tag: 'Dawai Melodi NTT',
    title: 'Denting Resonansi Daun Lontar: Merawat Keaslian Musik Sasando di Tanah Rote Ndao',
    author: 'Yeremias Pah',
    source: 'Indonesia.go.id Alat Musik Tradisional',
    date: 'Mei 2026',
    read: '6 mnt baca',
    img: 'assets/images/content/produk-sasando-rote.jpg',
    url: 'https://indonesia.go.id/kategori/seni/1848/sasando-alat-musik-tradisional-dari-pulau-rote',
    snippet: 'Dibuat dari lengkungan daun pohon lontar yang dikeringkan, petikan melodi sasando telah berabad-abad mengiringi kidung ratapan, pesta panen, dan tutur syair tradisi Rote.'
  }
];

/* --------------------------------------------------------------------------
   4. SCROLL REVEAL — IntersectionObserver
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  // Immediately reveal hero elements for instant first-paint
  document.querySelectorAll('#hero .reveal, #hero .reveal-left, #hero .reveal-right, #hero .reveal-popup').forEach(el => {
    el.classList.add('visible');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-popup').forEach(el => {
    if (!el.closest('#hero')) observer.observe(el);
  });

  // Dedicated video arch entrance reveal animation
  const archFrame = document.getElementById('video-arch-frame');
  if (archFrame) {
    const videoObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          archFrame.classList.add('in-view');
          videoObs.unobserve(archFrame);
        }
      });
    }, { threshold: 0.12 });
    videoObs.observe(archFrame);
  }
}

/* --------------------------------------------------------------------------
   5. ANIMATED NUMBER COUNTER
   -------------------------------------------------------------------------- */
function animateCounter(el, target, duration = 1800, suffix = '') {
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4); // quartic ease-out
    const num = Math.floor(ease * target).toLocaleString('id-ID');
    el.innerHTML = `${num}<span class="text-[#C5A059] font-light text-[0.6em] ml-0.5 inline-block align-top">${suffix}</span>`;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, 1800, suffix);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => obs.observe(el));
}

/* --------------------------------------------------------------------------
   6. NAVBAR — Flat Full-Width Sticky Navigation with Auto-Hide
   -------------------------------------------------------------------------- */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  let lastScrollY = window.scrollY;

  // Scroll handler with requestAnimationFrame
  let ticking = false;
  function handleScroll() {
    const currentY = window.scrollY;
    const deltaY = currentY - lastScrollY;

    // 1. Solid surface & subtle border on scroll
    if (currentY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // 2. Auto-hide on scroll down, reveal on scroll up
    if (currentY > 100) {
      if (deltaY > 6) {
        // Scrolling Down -> Hide navbar smoothly
        nav.classList.add('nav-hidden');
      } else if (deltaY < -6) {
        // Scrolling Up -> Show navbar immediately
        nav.classList.remove('nav-hidden');
      }
    } else {
      nav.classList.remove('nav-hidden');
    }

    lastScrollY = Math.max(0, currentY);
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });

  // Mouse activity: restore navbar if user moves pointer to top edge (< 70px)
  window.addEventListener('mousemove', (e) => {
    if (e.clientY < 70) {
      nav.classList.remove('nav-hidden');
    }
  }, { passive: true });

  // Mobile drawer
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  openBtn?.addEventListener('click', () => {
    drawer?.classList.remove('translate-x-full');
  });
  closeBtn?.addEventListener('click', () => drawer?.classList.add('translate-x-full'));
  drawer?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => drawer.classList.add('translate-x-full'));
  });

  // Initial call
  handleScroll();
}

/* --------------------------------------------------------------------------
   7. SMOOTH SCROLL for nav links
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* --------------------------------------------------------------------------
   8. PARALLAX — ornaments + video arch scroll expansion
   -------------------------------------------------------------------------- */
function initParallax() {
  const wayangL = document.getElementById('wayang-left-wrap') || document.getElementById('wayang-left');
  const wayangR = document.getElementById('wayang-right-wrap') || document.getElementById('wayang-right');
  const cloudBg = document.querySelectorAll('.cloud-parallax');
  const archFrame = document.getElementById('video-arch-frame');

  let ticking = false;

  const onScroll = () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const y = window.scrollY;

      // Wayang drift (slow parallax applied to wrapper to preserve internal flip & animation)
      if (wayangL) wayangL.style.transform = `translateY(${y * 0.08}px)`;
      if (wayangR) wayangR.style.transform = `translateY(${y * 0.06}px)`;

      // Cloud ornament
      cloudBg.forEach((el, i) => {
        el.style.transform = `translateY(${y * (0.04 + i * 0.02)}px)`;
      });

      // Video arch expansion: as user scrolls into the arch section,
      // gradually open the arch border-radius toward 0 (full-width)
      if (archFrame) {
        const rect = archFrame.getBoundingClientRect();
        const viewH = window.innerHeight;
        // start expanding when top of frame enters bottom of viewport
        const progress = Math.max(0, Math.min(1, 1 - rect.top / viewH));
        const radius = Math.round((1 - progress) * 50); // 50% → 0%
        archFrame.style.borderRadius = `${radius}% ${radius}% 0 0 / ${Math.round(radius * 0.16)}% ${Math.round(radius * 0.16)}% 0 0`;
      }

      ticking = false;
    });
    ticking = true;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* --------------------------------------------------------------------------
   9. VIDEO MODAL (YouTube Cinematic Player)
   -------------------------------------------------------------------------- */
function initVideoModal() {
  const modal    = document.getElementById('video-modal');
  const ytIframe = document.getElementById('modal-youtube-iframe');
  const modalVid = document.getElementById('modal-video');
  const openBtns = document.querySelectorAll('[data-open-modal="video"]');
  const closeBtn = document.getElementById('video-modal-close');
  if (!modal) return;

  const open = () => {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (ytIframe && ytIframe.dataset.src) {
      ytIframe.src = ytIframe.dataset.src;
    }
    if (modalVid) {
      modalVid.muted = false;
      modalVid.play().catch(() => {});
    }
  };

  const close = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    if (ytIframe) {
      ytIframe.src = '';
    }
    if (modalVid) {
      modalVid.pause();
      modalVid.currentTime = 0;
    }
  };

  openBtns.forEach(btn => btn.addEventListener('click', open));
  closeBtn?.addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* --------------------------------------------------------------------------
   10. AREA SWITCHER (Interactive Map)
   -------------------------------------------------------------------------- */
function initAreaSwitcher() {
  const tabs  = document.querySelectorAll('.area-tab[data-area]');
  const pins  = document.querySelectorAll('.radar-dot[data-area]');
  const panel = document.getElementById('area-info-panel');
  if (!tabs.length || !panel) return;

  let current = 'jawa';

  function updatePanel(key) {
    const r = REGIONS[key];
    if (!r) return;
    current = key;

    // Tabs
    tabs.forEach(t => t.classList.toggle('active', t.dataset.area === key));
    pins.forEach(p => p.classList.toggle('active-pin', p.dataset.area === key));

    // Update extra content under map (Foto 5 Fix: Seimbang & Tidak Kosong)
    const extraCagar = document.getElementById('extra-metric-cagar');
    const extraArtisans = document.getElementById('extra-metric-artisans');
    const extraUnesco = document.getElementById('extra-metric-unesco');
    const extraQuote = document.getElementById('extra-cultural-quote');

    if (extraCagar && r.cagar) extraCagar.textContent = r.cagar;
    if (extraArtisans && r.artisans) extraArtisans.textContent = r.artisans + ' UMKM';
    if (extraUnesco && r.unescoCount) extraUnesco.textContent = r.unescoCount;
    if (extraQuote && r.quote) extraQuote.textContent = r.quote;

    // Fade out → update → fade in
    panel.classList.add('fade-out');
    setTimeout(() => {
      panel.innerHTML = buildAreaPanel(r);
      panel.classList.remove('fade-out');
      panel.classList.add('fade-in');
    }, 280);
  }

  function buildAreaPanel(r) {
    return `
      <div class="flex items-center justify-between mb-4 pb-3 border-b border-[#EDE4D5]">
        <span class="text-eyebrow text-[#C5A059] font-bold">${r.cat}</span>
        <span class="text-[10px] font-sans font-bold tracking-widest uppercase text-[#C5A059] flex items-center gap-1">
          <svg class="w-3 h-3 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          Terdaftar WBTb
        </span>
      </div>
      <h3 class="font-display font-bold text-3xl sm:text-4xl text-[#2B231D] mb-2 leading-tight">${r.name}</h3>
      <p class="text-base text-[#6B5E55] mb-5 italic font-garamond">${r.sub}</p>
      <div class="w-full h-60 sm:h-72 lg:h-80 rounded-sm overflow-hidden mb-6 border border-[#EDE4D5] shadow-sm">
        <img src="${r.img}" onerror="this.src='${r.fallback}'" alt="${r.name}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy">
      </div>
      <p class="text-sm sm:text-base text-[#6B5E55] leading-relaxed mb-5 font-sans">${r.desc}</p>
      <div class="p-3 bg-[#FAF7F2] border border-[#EDE4D5] rounded-sm mb-6 flex items-start gap-2 text-xs text-[#6B5E55] font-sans">
        <span class="text-[#C5A059] text-sm">🏛️</span>
        <div><strong class="text-[#2B231D] block">Rujukan Data Resmi:</strong> ${r.source || 'Kemendikbudristek & UNESCO'}</div>
      </div>
      <div class="border-t border-[#EDE4D5] pt-5 mb-6">
        <p class="text-eyebrow text-[#C5A059] font-bold mb-3">Warisan Budaya Unggulan</p>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
          ${r.highlights.map(h => `<li class="flex items-center gap-2 text-xs sm:text-sm text-[#2B231D] font-medium"><span class="w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0"></span>${h}</li>`).join('')}
        </ul>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#EDE4D5]">
        <div class="flex items-baseline gap-1.5">
          <strong class="text-2xl font-display font-bold text-[#2B231D]">${r.artisans}</strong>
          <span class="text-xs text-[#6B5E55] font-sans uppercase tracking-wider">Pengrajin Aktif</span>
        </div>
        <a href="#pasar" class="inline-flex items-center gap-2 px-6 py-3 bg-[#241B16] text-[#F7F2EA] text-xs font-sans font-bold tracking-[0.16em] uppercase hover:bg-[#C5A059] hover:text-[#241B16] rounded-full transition-all duration-300">Jelajahi Karya →</a>
      </div>
    `;
  }

  tabs.forEach(t => t.addEventListener('click', () => updatePanel(t.dataset.area)));
  pins.forEach(p => {
    p.addEventListener('click', () => updatePanel(p.dataset.area));
    p.addEventListener('mouseenter', () => updatePanel(p.dataset.area));
  });

  // Default
  updatePanel(current);
}

/* --------------------------------------------------------------------------
   11. MARKETPLACE — filter + cart + quick view
   -------------------------------------------------------------------------- */
function initMarketplace() {
  const grid = document.getElementById('product-grid');
  const filterBtns = document.querySelectorAll('.filter-tab[data-filter]');
  const cartCountEl = document.getElementById('cart-count');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  const qvModal = document.getElementById('quick-view-modal');
  const qvClose = document.getElementById('qv-close');

  if (!grid) return;

  let cartCount = 0;
  let activeFilter = 'all';

  function renderProducts(filter) {
    const list = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
    grid.innerHTML = list.map((p, idx) => buildProductCard(p, idx)).join('');
    // Re-attach events after re-render
    grid.querySelectorAll('[data-buy]').forEach(btn => btn.addEventListener('click', handleBuy));
    grid.querySelectorAll('[data-qv]').forEach(btn => btn.addEventListener('click', handleQV));
  }

  function buildProductCard(p, idx = 0) {
    const priceStr = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(p.price);
    return `
      <article class="product-card flex flex-col group" data-cat="${p.cat}" style="--card-index: ${idx};">
        <div class="img-wrap h-56 bg-[#EDE4D5] relative overflow-hidden">
          <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" onerror="this.src='assets/images/logonusava.png'">
          <div class="absolute top-2.5 left-2.5 z-10">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FAF7F2]/95 backdrop-blur-xs text-[10px] font-sans font-bold tracking-wider text-[#C5A059] uppercase shadow-xs border border-[#EDE4D5]">
              <svg class="w-3 h-3 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              ${p.sourceShort || 'WBTb Resmi'}
            </span>
          </div>
          <button data-qv="${p.id}" class="quick-view-overlay cursor-pointer" aria-label="Lihat Cerita & Detail">
            <span class="text-white text-xs font-semibold tracking-widest uppercase">Lihat Cerita & Detail</span>
          </button>
        </div>
        <div class="p-5 sm:p-6 flex flex-col flex-1">
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <span class="text-[10px] font-sans font-bold tracking-wider uppercase text-[#C5A059]">${p.cat}</span>
            <span class="text-[11px] text-[#6B5E55] font-sans">${p.daerah}</span>
          </div>
          <h4 class="font-display text-sm sm:text-base font-semibold text-[#2B231D] leading-snug mb-2 group-hover:text-[#C5A059] transition-colors">${p.name}</h4>
          <p class="text-[12px] text-[#6B5E55] line-clamp-2 mb-3 leading-relaxed font-sans">${p.shortDesc || p.desc}</p>
          <div class="flex items-center gap-1.5 mb-4 text-xs text-[#6B5E55]">
            <span class="text-[#C5A059] leading-none">${'★'.repeat(Math.round(p.rating))}</span>
            <span class="font-bold text-[#2B231D]">${p.rating}</span>
            <span class="text-[11px] text-[#6B5E55]/80">(${p.sold} didukung)</span>
          </div>
          <div class="mt-auto flex items-center justify-between gap-2 pt-3 border-t border-[#EDE4D5]">
            <div>
              <span class="text-[9px] uppercase tracking-wider text-[#6B5E55] block">Harga Pengrajin</span>
              <span class="font-bold text-sm sm:text-base text-[#2B231D]">${priceStr}</span>
            </div>
            <button data-buy="${p.id}" data-name="${p.name}" class="px-3.5 py-1.5 text-[11px] font-sans font-bold tracking-widest uppercase bg-[#241B16] text-[#F7F2EA] rounded-full hover:bg-[#C5A059] hover:text-[#241B16] transition-colors duration-300">Dukung</button>
          </div>
        </div>
      </article>`;
  }

  function handleBuy(e) {
    const btn = e.currentTarget;
    cartCount++;
    if (cartCountEl) {
      cartCountEl.textContent = cartCount;
      cartCountEl.classList.remove('hidden');
      cartCountEl.classList.add('bump');
      setTimeout(() => cartCountEl.classList.remove('bump'), 300);
    }
    showToast(`"${btn.dataset.name}" ditambahkan ke keranjang`);
  }

  window.openProductQuickView = function(productId) {
    const id = parseInt(productId);
    const p = PRODUCTS.find(x => x.id === id);
    if (!p || !qvModal) return;
    const priceStr = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(p.price);
    document.getElementById('qv-content').innerHTML = `
      <div class="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
        <div class="flex flex-col gap-3">
          <div class="w-full h-72 sm:h-96 rounded-sm overflow-hidden bg-[#EDE4D5] border border-[#EDE4D5] relative">
            <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover" onerror="this.src='assets/images/logonusava.png'">
            <div class="absolute bottom-3 left-3 bg-[#241B16]/85 backdrop-blur-xs text-[#F7F2EA] px-3 py-1 rounded-full text-[11px] font-sans">
              📍 ${p.daerah}
            </div>
          </div>
          <div class="p-3.5 bg-[#FAF7F2] rounded-sm border border-[#EDE4D5] flex items-start gap-2.5">
            <span class="text-[#C5A059] text-lg leading-none mt-0.5">🏛️</span>
            <div class="text-[11px] leading-tight">
              <strong class="text-[#2B231D] block mb-0.5">Sumber Data Resmi & Terpercaya:</strong>
              <span class="text-[#6B5E55]">${p.source}</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-between h-full">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#EDE4D5] text-[#C5A059]">${p.cat}</span>
              <span class="text-xs text-[#6B5E55]">★ ${p.rating} (${p.sold} pembeli telah mendukung)</span>
            </div>
            <h3 class="font-display font-bold text-xl sm:text-2xl text-[#2B231D] mb-3 leading-snug">${p.name}</h3>
            <p class="text-sm text-[#6B5E55] leading-relaxed mb-5 font-sans">${p.desc}</p>

            <!-- Metadata Box -->
            <div class="bg-[#FAF7F2] p-4 rounded-sm border border-[#EDE4D5] mb-5 space-y-2.5 text-xs font-sans">
              <div class="flex items-start justify-between gap-3 border-b border-[#EDE4D5] pb-2">
                <span class="text-[#6B5E55]">Komunitas Pengrajin:</span>
                <strong class="text-[#2B231D] text-right">${p.artisan}</strong>
              </div>
              <div class="flex items-start justify-between gap-3 border-b border-[#EDE4D5] pb-2">
                <span class="text-[#6B5E55]">Bahan Baku:</span>
                <span class="text-[#2B231D] text-right font-medium">${p.material}</span>
              </div>
              <div class="flex items-start justify-between gap-3">
                <span class="text-[#6B5E55]">Waktu Pengerjaan:</span>
                <span class="text-[#2B231D] text-right font-medium">${p.duration}</span>
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-[#EDE4D5] flex items-center justify-between gap-4">
            <div>
              <span class="text-[10px] text-[#6B5E55] uppercase tracking-wider block">Harga Pengrajin Asli</span>
              <span class="text-xl sm:text-2xl font-bold font-display text-[#2B231D]">${priceStr}</span>
            </div>
            <button data-buy="${p.id}" data-name="${p.name}" class="px-6 py-3 font-bold text-xs tracking-widest uppercase bg-[#241B16] text-[#F7F2EA] rounded-full hover:bg-[#C5A059] hover:text-[#241B16] transition-colors duration-300 shadow-md">
              Dukung Karya Ini
            </button>
          </div>
        </div>
      </div>`;
    qvModal.querySelector('[data-buy]')?.addEventListener('click', e => { handleBuy(e); closeQV(); });
    qvModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  function handleQV(e) {
    window.openProductQuickView(e.currentTarget.dataset.qv);
  }

  function closeQV() {
    qvModal?.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function showToast(msg) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.classList.remove('hide');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.add('hide'), 3000);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.toggle('active', b === btn));
      renderProducts(activeFilter);
    });
  });

  qvClose?.addEventListener('click', closeQV);
  qvModal?.addEventListener('click', e => { if (e.target === qvModal) closeQV(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeQV(); });

  renderProducts(activeFilter);
}

/* --------------------------------------------------------------------------
   12. JOURNAL SLIDER
   -------------------------------------------------------------------------- */
function initJournalSlider() {
  const track  = document.getElementById('journal-track');
  const dotsEl = document.getElementById('journal-dots');
  const prevBtn = document.getElementById('journal-prev');
  const nextBtn = document.getElementById('journal-next');
  if (!track) return;

  // Render slides with authentic journalism story cards linked to official articles
  track.innerHTML = ARTICLES.map(a => `
    <a href="${a.url}" target="_blank" rel="noopener noreferrer" class="journal-card flex-shrink-0 w-72 sm:w-80 lg:w-96 bg-[#FAF7F2] rounded-md border border-[#EDE4D5] overflow-hidden flex flex-col justify-between group no-underline text-inherit cursor-pointer hover:border-[#C5A059]/60" aria-label="Buka jurnal: ${a.title}">
      <div>
        <div class="card-img h-48 overflow-hidden relative">
          <img src="${a.img}" alt="${a.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" onerror="this.src='assets/images/logonusava.png'">
          <span class="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#241B16]/85 backdrop-blur-xs text-[#F7F2EA] text-[10px] font-sans font-bold tracking-wider uppercase">
            ${a.tag}
          </span>
          <span class="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-[#241B16]/80 backdrop-blur-xs text-[#C5A059] flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-sm" title="Buka Sumber Asli">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </span>
        </div>
        <div class="p-5 sm:p-6">
          <div class="flex items-center gap-1.5 mb-2.5 text-[10px] text-[#C5A059] font-sans font-semibold">
            <span>🏛️</span>
            <span class="line-clamp-1">${a.source}</span>
          </div>
          <h4 class="font-display font-semibold text-base sm:text-lg text-[#2B231D] leading-snug mb-2 group-hover:text-[#C5A059] transition-colors">${a.title}</h4>
          <p class="text-xs text-[#6B5E55] line-clamp-2 leading-relaxed mb-4 font-sans">${a.snippet}</p>
        </div>
      </div>
      <div class="px-5 pb-5 pt-0 mt-auto">
        <div class="flex items-center justify-between border-t border-[#EDE4D5] pt-3 text-[11px] text-[#6B5E55] font-sans">
          <span class="font-semibold text-[#2B231D]">Oleh ${a.author}</span>
          <div class="flex items-center gap-2">
            <span>${a.read}</span>
            <span class="text-[#C5A059] font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
              Buka ↗
            </span>
          </div>
        </div>
      </div>
    </a>`).join('');

  let current = 0;

  const getStepW = () => {
    const firstCard = track.querySelector('.journal-card');
    return firstCard ? firstCard.offsetWidth + 16 : 320;
  };

  const getMaxScroll = () => {
    const container = track.parentElement;
    const containerW = container ? container.clientWidth : window.innerWidth;
    return Math.max(0, track.scrollWidth - containerW);
  };

  const getMaxIdx = () => {
    const step = getStepW();
    const maxScroll = getMaxScroll();
    if (step <= 0) return ARTICLES.length - 1;
    return Math.min(ARTICLES.length - 1, Math.ceil(maxScroll / step));
  };

  const updateControls = () => {
    const maxIdx = getMaxIdx();
    if (prevBtn) {
      prevBtn.style.opacity = current === 0 ? '0.35' : '1';
      prevBtn.style.cursor = current === 0 ? 'default' : 'pointer';
    }
    if (nextBtn) {
      nextBtn.style.opacity = current >= maxIdx ? '0.35' : '1';
      nextBtn.style.cursor = current >= maxIdx ? 'default' : 'pointer';
    }
    dotsEl?.querySelectorAll('.journal-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  };

  const renderDots = () => {
    if (!dotsEl) return;
    const count = getMaxIdx() + 1;
    dotsEl.innerHTML = Array.from({ length: count }, (_, i) =>
      `<button class="journal-dot${i === current ? ' active' : ''}" data-idx="${i}" aria-label="Slide ${i + 1}"></button>`
    ).join('');
    dotsEl.querySelectorAll('.journal-dot').forEach(d => {
      d.addEventListener('click', () => go(+d.dataset.idx));
    });
  };

  const go = (idx) => {
    const maxIdx = getMaxIdx();
    current = Math.max(0, Math.min(idx, maxIdx));
    const step = getStepW();
    const maxScroll = getMaxScroll();
    const targetX = Math.min(current * step, maxScroll);
    track.style.transform = `translateX(-${targetX}px)`;
    updateControls();
  };

  renderDots();
  updateControls();

  prevBtn?.addEventListener('click', () => go(current - 1));
  nextBtn?.addEventListener('click', () => go(current + 1));

  // Responsive re-calc on window resize
  window.addEventListener('resize', () => {
    renderDots();
    go(current);
  }, { passive: true });

  // Touch swipe handling with drag prevention for link clicks
  let startX = 0;
  let isSwiping = false;

  track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    isSwiping = false;
  }, { passive: true });

  track.addEventListener('touchmove', e => {
    if (Math.abs(e.touches[0].clientX - startX) > 10) {
      isSwiping = true;
    }
  }, { passive: true });

  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) {
      go(dx < 0 ? current + 1 : current - 1);
    }
  }, { passive: true });

  track.querySelectorAll('.journal-card').forEach(card => {
    card.addEventListener('click', e => {
      if (isSwiping) {
        e.preventDefault();
        e.stopPropagation();
        isSwiping = false;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   13. SUBNAV ACTIVE SECTION TRACKING
   -------------------------------------------------------------------------- */
function initSubNavTracking() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.sub-nav-link[href^="#"]');
  if (!links.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => obs.observe(s));
}

/* --------------------------------------------------------------------------
   14. NEWSLETTER FORM
   -------------------------------------------------------------------------- */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[type=email]');
    if (!input?.value) return;
    const btn = form.querySelector('button[type=submit]');
    if (btn) { btn.textContent = 'Terima Kasih!'; btn.disabled = true; }
    input.value = '';
    setTimeout(() => { if (btn) { btn.textContent = 'Berlangganan'; btn.disabled = false; } }, 3000);
  });
}

/* --------------------------------------------------------------------------
   15. NUSANTARA AI ASSISTANT (Konsultasi & Kustomisasi Kriya)
   -------------------------------------------------------------------------- */
function initAIAssistant() {
  const promptInput = document.getElementById('ai-prompt-input');
  const submitBtn = document.getElementById('ai-submit-btn');
  const clearBtn = document.getElementById('ai-clear-btn');
  const charCounter = document.getElementById('ai-char-counter');
  const chips = document.querySelectorAll('.ai-chip[data-prompt]');
  
  const placeholderState = document.getElementById('ai-placeholder-state');
  const typingState = document.getElementById('ai-typing-state');
  const resultState = document.getElementById('ai-result-state');

  const titleEl = document.getElementById('ai-result-title');
  const categoryEl = document.getElementById('ai-result-category');
  const techniqueEl = document.getElementById('ai-result-technique');
  const philosophyEl = document.getElementById('ai-result-philosophy');
  const timelineEl = document.getElementById('ai-result-timeline');
  const priceEl = document.getElementById('ai-result-price');
  const artisanEl = document.getElementById('ai-result-artisan');
  const sourceEl = document.getElementById('ai-result-source');
  const waBtn = document.getElementById('ai-wa-btn');
  const copyBtn = document.getElementById('ai-copy-btn');

  if (!promptInput || !submitBtn) return;

  // Character counter
  const updateCharCount = () => {
    if (charCounter) charCounter.textContent = `${promptInput.value.length} / 300 karakter`;
  };

  promptInput.addEventListener('input', updateCharCount);

  // Clear button
  clearBtn?.addEventListener('click', () => {
    promptInput.value = '';
    updateCharCount();
    promptInput.focus();
  });

  // Prompt chips
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      promptInput.value = chip.dataset.prompt;
      updateCharCount();
      promptInput.focus();
    });
  });

  // AI Knowledge & Heuristic Recommendation Engine
  function generateAIRecommendation(query) {
    const q = query.toLowerCase();

    // 1. Bali / Tenun Biru / Pernikahan
    if (q.includes('bali') || q.includes('biru') || q.includes('tenun') || q.includes('nikah') || q.includes('endek')) {
      return {
        title: 'Kain Tenun Ikat Endek Mastuli Bali',
        category: 'Wastra Kustom',
        technique: 'Tenun ATBM dengan pewarna alami daun tarum (indigo biru laut). Kombinasi motif ombak Segara dan ragam hias Patra Punggel modern.',
        philosophy: 'Melambangkan keteguhan rasa cinta yang luas bak samudera dan keharmonisan hidup keluarga baru dalam tradisi Hindu-Bali.',
        timeline: '3 – 4 Minggu Kerja (Pengerjaan Tangan)',
        price: 'Rp 2.400.000 – Rp 3.600.000',
        artisan: 'Komunitas Penenun Sidemen, Karangasem, Bali',
        source: 'Indikasi Geografis DJKI Kemenkumham RI (ID G 000000094)'
      };
    }

    // 2. Batik / Jawa / Busana Kerja / Soga
    if (q.includes('batik') || q.includes('jawa') || q.includes('kerja') || q.includes('soga') || q.includes('kawung') || q.includes('parang')) {
      return {
        title: 'Batik Tulis Soga Alam Corak Kontemporer',
        category: 'Busana Wastra',
        technique: 'Canting tulis lilin malam dingin di atas sutra ATBM, pencelupan 7 tahap kulit kayu mahoni dan tingi alami nuansa earthy tone.',
        philosophy: 'Melambangkan ketenangan batin, kepemimpinan bijaksana, dan integritas profesional yang rendah hati seperti filosofi padi.',
        timeline: '2 – 3 Minggu Kerja (Full Hand-Drawn)',
        price: 'Rp 1.850.000 – Rp 2.900.000',
        artisan: 'Paguyuban Pembatik Giriloyo, Imogiri, Yogyakarta',
        source: 'UNESCO Masterpiece of Oral and Intangible Heritage (2009)'
      };
    }

    // 3. Ukiran / Dayak / Kayu / Dinding / Kalimantan
    if (q.includes('ukir') || q.includes('dayak') || q.includes('kayu') || q.includes('kalimantan') || q.includes('dinding') || q.includes('ruang tamu')) {
      return {
        title: 'Panel Dinding Ukir Perisai Talawang Dayak',
        category: 'Kriya Kayu',
        technique: 'Pahatan relief kayu ulin tahan lapuk dengan sentuhan minyak biji tengkawang dan aksen geometris asimetris minimalis.',
        philosophy: 'Talawang adalah simbol perlindungan rumah tangga, keberanian spiritual, dan keselarasan abadi dengan hutan rimba tropis.',
        timeline: '3 – 5 Minggu Kerja (Pahat Tangan)',
        price: 'Rp 1.650.000 – Rp 3.200.000',
        artisan: 'Sentra Seni Pahat Dayak Kenyah, Kutai Barat, Kalimantan Timur',
        source: 'Warisan Budaya Takbenda Kemendikbudristek RI'
      };
    }

    // 4. Keris / Besi / Emas / Luk / Koleksi / Cinderamata
    if (q.includes('keris') || q.includes('luk') || q.includes('pusaka') || q.includes('emas') || q.includes('cinderamata') || q.includes('koleksi')) {
      return {
        title: 'Keris Pusaka Luk 7 Warangka Gayaman Surakarta',
        category: 'Pusaka Logam',
        technique: 'Tempa lipat meteorit pamor wos wutah (beras wutah) dengan selorok baja pilihan dan pendok tatahan perak lapis emas sepuh.',
        philosophy: 'Luk 7 melambangkan pitulungan (pertolongan dan keberkahan Sang Pencipta) serta kewibawaan luhur seorang pemimpin.',
        timeline: '6 – 8 Minggu Kerja (Empu Keris Tradisional)',
        price: 'Rp 5.500.000 – Rp 12.000.000',
        artisan: 'Besalen Batur Empu Keris Banyuanyar, Surakarta',
        source: 'UNESCO Masterpiece of Oral and Intangible Heritage (2005)'
      };
    }

    // 5. Songket / Sumatera / Palembang / Tenun Emas
    if (q.includes('songket') || q.includes('palembang') || q.includes('sumatera') || q.includes('minang')) {
      return {
        title: 'Songket Lepus Berlapis Benang Emas Cabutan',
        category: 'Wastra Adiluhung',
        technique: 'Pakan tenun benang sutra murni dengan sulaman benang emas jantung murni motif bungo intan dan bungo cina khas kesultanan.',
        philosophy: 'Cerminan kemegahan maritim Sriwijaya, martabat keluarga terhormat, dan kemurnian akhlak budi pekerti luhur.',
        timeline: '4 – 6 Minggu Kerja (Tenun Manual Songket)',
        price: 'Rp 3.800.000 – Rp 6.500.000',
        artisan: 'Penenun Tradisi Ogan Ilir & Tangga Buntung, Palembang',
        source: 'Warisan Budaya Takbenda Kemendikbudristek No. 201300008'
      };
    }

    // Default Fallback
    return {
      title: 'Pusaka Kriya Kustom Terpadu Nusantara',
      category: 'Karya Kriya Khusus',
      technique: 'Pengerjaan tangan orisinil oleh maestro daerah dengan bahan baku ramah lingkungan dan sertifikasi autentisitas Nusava.',
      philosophy: 'Mewujudkan jembatan antara visi estetikamu dan keluhuran tradisi warisan leluhur nusantara.',
      timeline: '2 – 4 Minggu Kerja (Sesuai Spesifikasi)',
      price: 'Rp 1.500.000 – Rp 4.000.000 (Estimasi Menyesuaikan)',
      artisan: 'Jaringan Pengrajin Terverifikasi Nusava (38 Provinsi)',
      source: 'Katalog Warisan Budaya Kemendikbudristek RI'
    };
  }

  // Handle Submit
  submitBtn.addEventListener('click', handleConsultation);
  promptInput.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleConsultation();
    }
  });

  function handleConsultation() {
    const text = promptInput.value.trim();
    if (!text) {
      promptInput.focus();
      promptInput.classList.add('border-red-400');
      setTimeout(() => promptInput.classList.remove('border-red-400'), 600);
      return;
    }

    // Show simulated typing state
    placeholderState?.classList.add('hidden');
    resultState?.classList.add('hidden');
    typingState?.classList.remove('hidden');
    submitBtn.disabled = true;

    // Simulate 1.2s intelligent cultural computation
    setTimeout(() => {
      const rec = generateAIRecommendation(text);

      if (titleEl) titleEl.textContent = rec.title;
      if (categoryEl) categoryEl.textContent = rec.category;
      if (techniqueEl) techniqueEl.textContent = rec.technique;
      if (philosophyEl) philosophyEl.textContent = rec.philosophy;
      if (timelineEl) timelineEl.textContent = rec.timeline;
      if (priceEl) priceEl.textContent = rec.price;
      if (artisanEl) artisanEl.textContent = rec.artisan;
      if (sourceEl && rec.source) sourceEl.textContent = rec.source;

      // Construct WhatsApp pre-filled text
      const waMsg = `Halo Pengrajin & Kurator Nusava, saya ingin berkonsultasi mengenai pesanan kustom karya pusaka hasil analisis AI Assistant:

📋 *Spesifikasi Kustomisasi:*
• *Keinginan Saya:* "${text}"
• *Rekomendasi AI:* ${rec.title} (${rec.category})
• *Teknik Pengerjaan:* ${rec.technique}
• *Filosofi:* ${rec.philosophy}
• *Estimasi Waktu:* ${rec.timeline}
• *Perkiraan Biaya:* ${rec.price}
• *Sentra Pengrajin:* ${rec.artisan}
• *Rujukan Budaya Resmi:* ${rec.source || 'Warisan Budaya Nusantara'}

Mohon informasi ketersediaan jadwal pengrajin dan prosedur pemesanan kustom selanjutnya. Terima kasih!`;

      if (waBtn) {
        waBtn.href = `https://api.whatsapp.com/send?phone=6281234567890&text=${encodeURIComponent(waMsg)}`;
      }

      // Copy button handler
      if (copyBtn) {
        copyBtn.onclick = () => {
          navigator.clipboard?.writeText(waMsg).then(() => {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toast-msg');
            if (toast && toastMsg) {
              toastMsg.textContent = 'Rincian rekomendasi kustomisasi berhasil disalin!';
              toast.classList.remove('hide');
              clearTimeout(toast._timer);
              toast._timer = setTimeout(() => toast.classList.add('hide'), 3000);
            }
          });
        };
      }

      typingState?.classList.add('hidden');
      resultState?.classList.remove('hidden');
      submitBtn.disabled = false;
    }, 1200);
  }
}

/* --------------------------------------------------------------------------
   16. AI HERITAGE MATCHMAKER (Kuis Pencocokan Pusaka 3 Langkah)
   -------------------------------------------------------------------------- */
function initHeritageMatchmaker() {
  const steps = [
    document.getElementById('quiz-step-1'),
    document.getElementById('quiz-step-2'),
    document.getElementById('quiz-step-3')
  ];
  const stepLabel = document.getElementById('quiz-step-label');
  const percentLabel = document.getElementById('quiz-percent-label');
  const progressFill = document.getElementById('quiz-progress-fill');

  const scanner = document.getElementById('matchmaker-scanner');
  const scannerText = document.getElementById('matchmaker-scanner-text');
  const resultCard = document.getElementById('matchmaker-result');

  const analyzeBtn = document.getElementById('quiz-btn-analyze');
  const resetBtn = document.getElementById('match-reset-btn');
  const qvBtn = document.getElementById('match-qv-btn');

  const matchTitle = document.getElementById('match-title');
  const matchCategory = document.getElementById('match-category');
  const matchRegion = document.getElementById('match-region');
  const matchNarrative = document.getElementById('match-narrative');
  const matchCraft = document.getElementById('match-craft');
  const matchPrice = document.getElementById('match-price');
  const matchImg = document.getElementById('match-img');
  const matchScore = document.getElementById('match-score');
  const matchSource = document.getElementById('match-source');

  if (!steps[0] || !analyzeBtn) return;

  let currentStep = 1;
  const userAnswers = {
    style: 'modern',
    purpose: 'dekorasi',
    color: 'emas'
  };

  const stepTitles = [
    'Langkah 1 dari 3: Gaya Estetika',
    'Langkah 2 dari 3: Kebutuhan / Tujuan',
    'Langkah 3 dari 3: Nuansa Warna'
  ];
  const percentages = ['33% Selesai', '66% Selesai', '100% Selesai'];
  const progressWidths = ['33.33%', '66.66%', '100%'];

  function updateStepUI() {
    steps.forEach((s, idx) => {
      if (s) s.classList.toggle('hidden', idx !== currentStep - 1);
    });
    if (stepLabel) stepLabel.textContent = stepTitles[currentStep - 1];
    if (percentLabel) percentLabel.textContent = percentages[currentStep - 1];
    if (progressFill) progressFill.style.width = progressWidths[currentStep - 1];
  }

  // Card click selection
  document.querySelectorAll('.quiz-card[data-step]').forEach(card => {
    card.addEventListener('click', () => {
      const stepIdx = parseInt(card.dataset.step);
      const val = card.dataset.value;
      const stepContainer = steps[stepIdx - 1];
      if (!stepContainer) return;

      // Deselect siblings
      stepContainer.querySelectorAll('.quiz-card').forEach(c => {
        c.classList.remove('selected');
        const circle = c.querySelector('.quiz-radio-circle');
        if (circle) {
          circle.classList.remove('border-[#C5A059]');
          circle.classList.add('border-stone-300');
        }
        const check = c.querySelector('.quiz-radio-check');
        if (check) {
          check.classList.add('opacity-0', 'scale-50');
        }
      });

      // Select clicked
      card.classList.add('selected');
      const circle = card.querySelector('.quiz-radio-circle');
      if (circle) {
        circle.classList.remove('border-stone-300');
        circle.classList.add('border-[#C5A059]');
      }
      const check = card.querySelector('.quiz-radio-check');
      if (check) {
        check.classList.remove('opacity-0', 'scale-50');
      }

      if (stepIdx === 1) userAnswers.style = val;
      if (stepIdx === 2) userAnswers.purpose = val;
      if (stepIdx === 3) userAnswers.color = val;
    });
  });

  // Next / Prev buttons
  document.querySelectorAll('.quiz-btn-next').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < 3) {
        currentStep++;
        updateStepUI();
      }
    });
  });

  document.querySelectorAll('.quiz-btn-prev').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateStepUI();
      }
    });
  });

  // Database of recommendations mapped with PRODUCTS
  const RECOMMENDATIONS = [
    {
      id: 2,
      style: 'modern',
      purpose: 'dekorasi',
      color: 'emas',
      score: '99%',
      name: 'Batik Tulis Nitik Kembang Jeruk Giriloyo',
      category: 'Wastra Warisan UNESCO',
      daerah: 'Bantul, D.I. Yogyakarta',
      craft: 'Canting Cawang Manual & Pewarna Soga Alami',
      price: 'Rp 2.850.000',
      source: 'UNESCO Intangible Cultural Heritage (2009) & WBTb Kemendikbud No. 202001185',
      img: 'assets/images/content/produk-batik-giriloyo.jpg',
      narrative: 'Berdasarkan pilihan gaya Modern Minimalis dan dekorasi bernuansa hangat, kamu cocok banget dengan Batik Tulis Nitik Giriloyo. Pola titik geometrisnya yang presisi dibuat dengan canting cawang khusus selama berbulan-bulan, memberi sentuhan estetik yang tenang dan elegan di ruanganmu.'
    },
    {
      id: 1,
      style: 'modern',
      purpose: 'fashion',
      color: 'biru',
      score: '98%',
      name: 'Kain Tenun Ikat Hinggi Sumba Timur',
      category: 'Wastra Pewarna Alami',
      daerah: 'Waingapu, Sumba Timur (NTT)',
      craft: 'Tenun Ikat Gedogan Tradisional & Daun Tarum Nila',
      price: 'Rp 3.450.000',
      source: 'Warisan Budaya Takbenda (WBTb) Kemendikbudristek No. Reg 201400144',
      img: 'assets/images/content/produk-tenun-sumba.jpg',
      narrative: 'Seleramu yang menyukai fashion berkarakter dengan warna biru samudra sangat cocok dengan Tenun Ikat Sumba Timur. Dicelup puluhan kali memakai daun nila alami, motif kuda dan rusa pada kain ini melambangkan keberanian dan kepemimpinan.'
    },
    {
      id: 6,
      style: 'bohemian',
      purpose: 'dekorasi',
      color: 'emas',
      score: '97%',
      name: 'Ukiran Patung Mbis Leluhur Suku Asmat',
      category: 'Seni Pahat Kayu Alami',
      daerah: 'Agats, Pesisir Asmat, Papua',
      craft: 'Pahat Manual Kayu Besi & Pewarna Tanah Merah',
      price: 'Rp 3.200.000',
      source: 'Warisan Budaya Takbenda (WBTb) Kemendikbudristek No. Reg 201300063',
      img: 'assets/images/content/produk-patung-asmat.jpg',
      narrative: 'Jiwa seni dan ketertarikanmu pada dekorasi organik bernilai tinggi sangat pas dengan Seni Ukir Suku Asmat. Dipahat manual tanpa bantuan mesin dari kayu besi pilihan, karya ini membawa energi spiritual leluhur dan kehangatan alami ke dalam hunian.'
    },
    {
      id: 4,
      style: 'etnik',
      purpose: 'koleksi',
      color: 'emas',
      score: '99%',
      name: 'Perhiasan Perak Filigri Khas Desa Celuk',
      category: 'Kriya Logam Mulia',
      daerah: 'Desa Celuk, Gianyar, Bali',
      craft: 'Pilinan Benang Perak 925 & Sepuh Emas 18K',
      price: 'Rp 1.450.000',
      source: 'Indikasi Geografis DJKI Kemenkumham RI & Kemenparekraf',
      img: 'assets/images/content/produk-perak-celuk.jpg',
      narrative: 'Kecintaanmu pada karya seni detail dan eksklusif membawa AI memilihkan Perhiasan Perak Filigri Celuk. Benang perak dipilin sehalus helai rambut oleh para maestro Gianyar, menciptakan perhiasan bunga teratai yang anggun dan bernilai seni tinggi.'
    },
    {
      id: 5,
      style: 'etnik',
      purpose: 'fashion',
      color: 'emas',
      score: '98%',
      name: 'Kain Songket Lepus Emas Asli Palembang',
      category: 'Wastra Kemuliaan Tradisi',
      daerah: 'Ogan Ilir, Sumatera Selatan',
      craft: 'Tenun Gedogan Sutra & Benang Emas Cabutan Murni',
      price: 'Rp 4.800.000',
      source: 'Warisan Budaya Takbenda (WBTb) Kemendikbudristek No. Reg 201300008',
      img: 'assets/images/content/produk-songket-palembang.jpg',
      narrative: 'Kombinasi selera busana berkelas dan rona emas mewah sangat pas dengan Songket Lepus Palembang. Dijuluki Ratu Segala Kain Nusantara, benang emasnya menutupi permukaan kain sutra rapat, memancarkan pesona keagungan sejak masa Sriwijaya.'
    },
    {
      id: 8,
      style: 'bohemian',
      purpose: 'fashion',
      color: 'hijau',
      score: '96%',
      name: 'Anyaman Tas & Wadah Ketak Beleka Lombok',
      category: 'Kriya Serat Hutan Ramah Lingkungan',
      daerah: 'Lombok Tengah, NTB',
      craft: 'Anyaman Rumput Paku Liar & Pengasapan Sabut Kelapa',
      price: 'Rp 520.000',
      source: 'Indikasi Geografis DJKI Kemenkumham (ID G 000000078)',
      img: 'assets/images/content/produk-ketak-lombok.jpg',
      narrative: 'Gaya santai ramah lingkungan yang kamu pilih sangat pas dengan Anyaman Ketak Beleka. Terbuat dari tanaman paku hutan alami yang diawetkan dengan asap kelapa, tas ini tahan air, bebas jamur, dan awet hingga puluhan tahun.'
    },
    {
      id: 7,
      style: 'modern',
      purpose: 'dekorasi',
      color: 'hijau',
      score: '97%',
      name: 'Instrumen Sasando Akustik Daun Lontar Rote',
      category: 'Alat Musik Tradisi Budaya',
      daerah: 'Pulau Rote, NTT',
      craft: 'Resonator Anyaman Haik Daun Lontar Pilihan',
      price: 'Rp 2.100.000',
      source: 'Warisan Budaya Takbenda Kemendikbudristek No. 201200028',
      img: 'assets/images/content/produk-sasando-rote.jpg',
      narrative: 'Sentuhan harmonis antara seni musik dan dekorasi ruangan menghasilkan kecocokan sempurna dengan Sasando Rote. Bentuk resonatornya yang menyerupai kipas daun lontar menghadirkan obrolan menarik sekaligus melodi jernih yang menenangkan pikiran.'
    }
  ];

  function getBestRecommendation(ans) {
    const exact = RECOMMENDATIONS.find(r => r.style === ans.style && r.purpose === ans.purpose && r.color === ans.color);
    if (exact) return exact;

    const semi = RECOMMENDATIONS.find(r => (r.style === ans.style && r.purpose === ans.purpose) || (r.purpose === ans.purpose && r.color === ans.color) || (r.style === ans.style && r.color === ans.color));
    if (semi) return semi;

    return RECOMMENDATIONS[0];
  }

  // Analyze button click
  analyzeBtn.addEventListener('click', () => {
    steps[2]?.classList.add('hidden');
    scanner?.classList.remove('hidden');

    const scanMessages = [
      'Menganalisis harmoni estetika dengan filosofi Nusantara...',
      'Menyaring 1.340 tradisi suku bangsa & database perajin...',
      'Menemukan keselarasan pusaka terbaik dengan karaktermu...'
    ];

    let msgIdx = 0;
    const interval = setInterval(() => {
      msgIdx = (msgIdx + 1) % scanMessages.length;
      if (scannerText) scannerText.textContent = scanMessages[msgIdx];
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      const rec = getBestRecommendation(userAnswers);

      if (matchTitle) matchTitle.textContent = rec.name;
      if (matchCategory) matchCategory.textContent = rec.category;
      if (matchRegion) matchRegion.textContent = rec.daerah;
      if (matchNarrative) matchNarrative.textContent = `"${rec.narrative}"`;
      if (matchCraft) matchCraft.textContent = rec.craft;
      if (matchPrice) matchPrice.textContent = rec.price;
      if (matchImg) matchImg.src = rec.img;
      if (matchScore) matchScore.textContent = rec.score;
      if (matchSource && rec.source) matchSource.textContent = rec.source;
      if (qvBtn) qvBtn.dataset.qv = rec.id;

      scanner?.classList.add('hidden');
      resultCard?.classList.remove('hidden');
    }, 1600);
  });

  // Reset button
  resetBtn?.addEventListener('click', () => {
    currentStep = 1;
    resultCard?.classList.add('hidden');
    updateStepUI();
  });

  // Quick View Button integration
  qvBtn?.addEventListener('click', (e) => {
    const productId = e.currentTarget.dataset.qv;
    if (window.openProductQuickView) {
      window.openProductQuickView(productId);
    }
  });
}

/* --------------------------------------------------------------------------
   16b. FAQ ACCORDION (Pure Vanilla Two-Column Clean Toggle)
   -------------------------------------------------------------------------- */
function initFAQ() {
  const triggers = document.querySelectorAll('.faq-trigger');
  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Close other accordion items
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle clicked item
      item.classList.toggle('active', !isExpanded);
      btn.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
    });
  });
}

/* --------------------------------------------------------------------------
   16. NAVBAR AUTH & SESSION (Pengrajin / Kolektor)
   -------------------------------------------------------------------------- */
function initNavbarAuth() {
  const container = document.getElementById('nav-auth-container');
  const mobileContainer = document.getElementById('mobile-auth-container');
  const cartBadge = document.getElementById('cart-count');

  let auth = null;
  try {
    const raw = localStorage.getItem('nusava_auth');
    if (raw) auth = JSON.parse(raw);
  } catch (e) {}

  if (!auth) {
    if (cartBadge) cartBadge.classList.add('hidden');
    return;
  }

  // Update cart count if exists
  if (cartBadge && auth.cartCount) {
    cartBadge.textContent = auth.cartCount;
    cartBadge.classList.remove('hidden');
  }

  // Render Logged-In User Profile in Desktop Navbar
  if (container) {
    const isArtisan = auth.role === 'pengrajin';
    const initial = (auth.name || 'U').charAt(0).toUpperCase();

    container.innerHTML = `
      <div class="relative group" id="user-menu-wrapper">
        <button id="user-profile-btn" class="flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full border border-[#C5A059] bg-[#FAF7F2] text-[#2B231D] text-xs font-semibold shadow-xs hover:border-[#B38F46] transition-all cursor-pointer">
          <span class="w-6 h-6 rounded-full bg-[#241B16] text-[#F7F2EA] flex items-center justify-center text-[11px] font-bold">${initial}</span>
          <span class="max-w-[110px] truncate font-sans text-xs">${auth.name.split(' ')[0]}</span>
          <span class="w-2 h-2 rounded-full ${isArtisan ? 'bg-emerald-500' : 'bg-[#C5A059]'} animate-pulse" title="${isArtisan ? 'Mitra Pengrajin' : 'Kolektor'}"></span>
        </button>

        <!-- Dropdown Menu -->
        <div class="absolute right-0 mt-2 w-56 bg-[#FAF7F2] border border-[#EDE4D5] rounded-xl shadow-xl py-2 hidden group-hover:block transition-all z-50">
          <div class="px-4 py-2.5 border-b border-[#EDE4D5]">
            <p class="text-xs font-bold text-[#2B231D] truncate">${auth.name}</p>
            <p class="text-[10px] text-[#C5A059] font-semibold uppercase tracking-wider">${isArtisan ? '✦ Mitra Pengrajin Maestro' : '✦ Kolektor Pusaka'}</p>
          </div>
          ${isArtisan ? `
            <a href="dashboard.html" class="flex items-center gap-2.5 px-4 py-2.5 text-xs text-[#2B231D] hover:bg-[#EDE4D5]/50 transition-colors font-medium">
              <span>📊</span> Dashboard Pengrajin
            </a>
            <a href="dashboard.html#tambah-karya" class="flex items-center gap-2.5 px-4 py-2 text-xs text-[#2B231D] hover:bg-[#EDE4D5]/50 transition-colors">
              <span>➕</span> Tambah Karya Kriya
            </a>
          ` : `
            <a href="#pasar" class="flex items-center gap-2.5 px-4 py-2.5 text-xs text-[#2B231D] hover:bg-[#EDE4D5]/50 transition-colors font-medium">
              <span>🛍️</span> Riwayat & Keranjang (${auth.cartCount || 0})
            </a>
            <a href="dashboard.html" class="flex items-center gap-2.5 px-4 py-2 text-xs text-[#2B231D] hover:bg-[#EDE4D5]/50 transition-colors">
              <span>🏺</span> Beralih ke Portal Pengrajin
            </a>
          `}
          <button id="logout-btn" class="w-full text-left flex items-center gap-2.5 px-4 py-2 text-xs text-red-600 hover:bg-red-50 border-t border-[#EDE4D5] mt-1 transition-colors cursor-pointer">
            <span>🚪</span> Keluar Sesi
          </button>
        </div>
      </div>
    `;

    document.getElementById('logout-btn')?.addEventListener('click', () => {
      localStorage.removeItem('nusava_auth');
      window.location.reload();
    });
  }

  // Render Logged-In User Profile in Mobile Drawer
  if (mobileContainer) {
    const isArtisan = auth.role === 'pengrajin';
    mobileContainer.innerHTML = `
      <div class="p-3 bg-[#FAF7F2] rounded-xl border border-[#EDE4D5] flex items-center gap-3">
        <span class="w-9 h-9 rounded-full bg-[#241B16] text-[#F7F2EA] flex items-center justify-center font-bold text-sm">
          ${(auth.name || 'U').charAt(0)}
        </span>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-[#2B231D] truncate">${auth.name}</p>
          <p class="text-[10px] text-[#C5A059] font-medium">${isArtisan ? 'Mitra Pengrajin' : 'Kolektor'}</p>
        </div>
      </div>
      ${isArtisan ? `
        <a href="dashboard.html" class="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-[#241B16] rounded-full border border-[#C5A059] shadow-sm">
          Buka Dashboard Pengrajin ↗
        </a>
      ` : ''}
      <button id="mobile-logout-btn" class="w-full py-2 text-xs text-red-600 hover:underline text-center">
        Keluar Sesi
      </button>
    `;

    document.getElementById('mobile-logout-btn')?.addEventListener('click', () => {
      localStorage.removeItem('nusava_auth');
      window.location.reload();
    });
  }
}

/* --------------------------------------------------------------------------
   17. BOOT
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initNavbarAuth();
  initSmoothScroll();
  initScrollReveal();
  initCounters();
  initParallax();
  initVideoModal();
  initAreaSwitcher();
  initMarketplace();
  initJournalSlider();
  initSubNavTracking();
  initNewsletter();
  initAIAssistant();
  initHeritageMatchmaker();
  initFAQ();
});
