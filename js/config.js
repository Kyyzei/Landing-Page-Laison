/**
 * ============================================================
 * AquaLinkOS Landing Page — Configuration File
 * ============================================================
 * Edit this file to update:
 *  - Contact information
 *  - Brochure download link
 *  - Form submission endpoint
 *  - Navigation menu items
 *  - Bilingual content (id / en)
 * ============================================================
 */

const AQUALINK_CONFIG = {

  /* ─── SITE META ─────────────────────────────────────────── */
  site: {
    name: 'AquaLinkOS',
    defaultLang: 'id',   // 'id' | 'en'
    logoText: 'AquaLink<span class="logo-os">OS</span>',
    platformUrl: '#platform', // Target URL or anchor for 'Go to Platform' button
  },

  /* ─── CONTACT / SOCIAL ──────────────────────────────────── */
  contact: {
    email: 'info@aqualinkos.com',           // TODO: replace with real email
    phone: '+62 xxx xxxx xxxx',             // TODO: replace with real phone
    address: 'Jakarta, Indonesia',          // TODO: replace with real address
    linkedin: '#',                          // TODO: replace with LinkedIn URL
    twitter: '#',                           // TODO: replace with Twitter URL
  },

  /* ─── BROCHURE ──────────────────────────────────────────── */
  brochure: {
    url: '#',           // TODO: replace with actual PDF/Drive link
    filename: 'AquaLinkOS-Brochure.pdf',
  },

  /* ─── FORM ENDPOINT ─────────────────────────────────────── */
  form: {
    /**
     * Set this to your backend endpoint, e.g.:
     *   endpoint: 'https://your-domain.com/api/contact'
     *   endpoint: 'https://formspree.io/f/YOUR_FORM_ID'  <- Formspree
     *   endpoint: 'https://api.web3forms.com/submit'     <- Web3Forms
     *
     * When endpoint is null/empty, the form will show a
     * "backend not configured" message instead of fake success.
     */
    endpoint: null,   // TODO: set your form submission endpoint here
    method: 'POST',
    web3formsKey: '',  // Optional: if using Web3Forms, set your access key
  },

  /* ─── NAVIGATION ─────────────────────────────────────────── */
  nav: {
    id: [
      { label: 'Solusi',        href: '#solution' },
      { label: 'Platform',      href: '#platform' },
      { label: 'Use Case',      href: '#use-case' },
      { label: 'Implementasi',  href: '#roadmap' },
      { label: 'Tentang',       href: '#about' },
      { label: 'Kontak',        href: '#contact' },
    ],
    en: [
      { label: 'Solution',        href: '#solution' },
      { label: 'Platform',        href: '#platform' },
      { label: 'Use Case',        href: '#use-case' },
      { label: 'Implementation',  href: '#roadmap' },
      { label: 'About',           href: '#about' },
      { label: 'Contact',         href: '#contact' },
    ],
  },

  /* ─── BILINGUAL CONTENT ─────────────────────────────────── */
  content: {

    hero: {
      id: {
        headline: 'Transform Water Management Into a Data-Driven Utility',
        subheadline: 'AquaLinkOS menghubungkan smart meter, solusi retrofit, konektivitas IoT, dan sistem manajemen digital untuk membantu utilitas memantau konsumsi, mengenali penggunaan tidak normal, dan mengoptimalkan operasional.',
        cta1: 'Request a Demo',
        cta2: 'Jelajahi Solusi',
        badge: 'Smart Water Management Platform',
      },
      en: {
        headline: 'Transform Water Management Into a Data-Driven Utility',
        subheadline: 'AquaLinkOS connects smart meters, retrofit solutions, IoT connectivity, and digital management systems to help utilities monitor consumption, identify abnormal usage, and optimize operations.',
        cta1: 'Request a Demo',
        cta2: 'Explore Solution',
        badge: 'Smart Water Management Platform',
      },
    },

    keyMessage: {
      id: '"Smart metering bukan hanya mengganti meter air, tetapi menjadi fondasi untuk membangun utilitas air yang lebih efisien, terhubung, dan berbasis data."',
      en: '"Smart metering is not just about replacing water meters — it\'s about building the foundation for a more efficient, connected, and data-driven water utility."',
    },

    challenges: {
      id: {
        sectionLabel: 'Tantangan Operasional',
        headline: 'Between Two Meter Readings, What Happens?',
        subheadline: 'Rentang waktu antara pembacaan meter menciptakan celah informasi yang sulit dikelola.',
        cards: [
          { icon: 'clock', title: 'Visibilitas Konsumsi Terlambat', desc: 'Data konsumsi baru tersedia saat pembacaan berikutnya, menyulitkan respons cepat terhadap perubahan pola penggunaan.' },
          { icon: 'droplet', title: 'Kebocoran Baru Diketahui Setelah Terjadi', desc: 'Tanpa pemantauan real-time, insiden kebocoran sering baru ditemukan setelah dampaknya meluas.' },
          { icon: 'clipboard', title: 'Pengumpulan Data Masih Manual', desc: 'Proses pembacaan meter manual memakan waktu, rentan kesalahan, dan sulit diskalakan untuk jaringan yang berkembang.' },
          { icon: 'briefcase', title: 'Informasi Billing Tersebar', desc: 'Data konsumsi yang terpisah dari sistem billing menciptakan proses rekonsiliasi yang kompleks dan lambat.' },
        ],
      },
      en: {
        sectionLabel: 'Operational Challenges',
        headline: 'Between Two Meter Readings, What Happens?',
        subheadline: 'The gap between meter readings creates information blind spots that are difficult to manage.',
        cards: [
          { icon: 'clock', title: 'Delayed Consumption Visibility', desc: 'Consumption data is only available at the next reading cycle, making it difficult to respond quickly to usage pattern changes.' },
          { icon: 'droplet', title: 'Leaks Discovered Too Late', desc: 'Without real-time monitoring, leak incidents are often only discovered after the impact has already spread.' },
          { icon: 'clipboard', title: 'Manual Data Collection', desc: 'Manual meter reading is time-consuming, error-prone, and difficult to scale as your network grows.' },
          { icon: 'briefcase', title: 'Scattered Billing Information', desc: 'Consumption data disconnected from billing systems creates complex and slow reconciliation processes.' },
        ],
      },
    },

    ecosystem: {
      id: {
        sectionLabel: 'Ekosistem',
        headline: 'Ekosistem AquaLinkOS',
        subheadline: 'Alur data dari lapangan ke platform dalam satu ekosistem terintegrasi.',
        layers: [
          { label: 'Field Devices', items: ['Ultrasonic Smart Meter', 'AquaLink Retrofit Module', 'Meter Interface Unit (MIU)', 'Bulk Meter'] },
          { label: 'Konektivitas', items: ['LoRaWAN', 'NB-IoT', '4G Cat.1', 'GPRS'] },
          { label: 'Platform', items: ['AquaLinkOS', 'HDMS Platform', 'Data Processing', 'API Integration'] },
          { label: 'Aplikasi', items: ['Monitoring', 'Billing', 'NRW Support', 'Analytics'] },
        ],
      },
      en: {
        sectionLabel: 'Ecosystem',
        headline: 'AquaLinkOS Ecosystem',
        subheadline: 'A complete flow from field devices to platform intelligence in one integrated ecosystem.',
        layers: [
          { label: 'Field Devices', items: ['Ultrasonic Smart Meter', 'AquaLink Retrofit Module', 'Meter Interface Unit (MIU)', 'Bulk Meter'] },
          { label: 'Connectivity', items: ['LoRaWAN', 'NB-IoT', '4G Cat.1', 'GPRS'] },
          { label: 'Platform', items: ['AquaLinkOS', 'HDMS Platform', 'Data Processing', 'API Integration'] },
          { label: 'Applications', items: ['Monitoring', 'Billing', 'NRW Support', 'Analytics'] },
        ],
      },
    },

    solution: {
      id: {
        sectionLabel: 'Jalur Transformasi',
        headline: 'Pilih Jalur yang Sesuai dengan Infrastruktur Anda',
        subheadline: 'AquaLinkOS mendukung dua pendekatan transformasi yang dapat disesuaikan dengan kondisi aset yang ada.',
        pathA: {
          badge: 'Jalur A',
          title: 'Retrofit Meter yang Ada',
          subtitle: 'Tingkatkan aset meter yang sudah terpasang',
          flow: ['Mechanical Meter', 'AquaLink / MIU', 'Cloud Platform'],
          benefits: ['Tingkatkan aset meter yang sudah terpasang', 'Kumpulkan data meter secara otomatis', 'Lakukan pemantauan jarak jauh', 'Kurangi ketergantungan pada pembacaan manual'],
        },
        pathB: {
          badge: 'Jalur B',
          title: 'Ultrasonic Smart Meter',
          subtitle: 'Solusi meter generasi baru',
          flow: ['Smart Meter', 'IoT Connectivity', 'Cloud Platform'],
          benefits: ['Tidak menggunakan bagian bergerak', 'Akurasi tinggi', 'Pengiriman data otomatis', 'Pemantauan kejadian meter'],
        },
      },
      en: {
        sectionLabel: 'Transformation Paths',
        headline: 'Choose the Path That Fits Your Infrastructure',
        subheadline: 'AquaLinkOS supports two transformation approaches adaptable to your existing asset conditions.',
        pathA: {
          badge: 'Path A',
          title: 'Retrofit Existing Meters',
          subtitle: 'Upgrade your already-installed meter assets',
          flow: ['Mechanical Meter', 'AquaLink / MIU', 'Cloud Platform'],
          benefits: ['Upgrade already-installed meter assets', 'Collect meter data automatically', 'Enable remote monitoring', 'Reduce dependency on manual readings'],
        },
        pathB: {
          badge: 'Path B',
          title: 'Ultrasonic Smart Meter',
          subtitle: 'Next-generation metering solution',
          flow: ['Smart Meter', 'IoT Connectivity', 'Cloud Platform'],
          benefits: ['No moving parts', 'High accuracy measurement', 'Automatic data transmission', 'Meter event monitoring'],
        },
      },
    },

    connectivity: {
      id: {
        sectionLabel: 'Konektivitas',
        headline: 'Fleksibel untuk Setiap Lingkungan Deployment',
        subheadline: 'AquaLinkOS mendukung berbagai teknologi konektivitas untuk menyesuaikan dengan kondisi infrastruktur yang ada.',
        cards: [
          { tech: 'LoRaWAN', title: 'Wide Area Coverage', desc: 'Ideal untuk deployment area luas dengan private network. Konsumsi daya rendah dan jangkauan luas.' },
          { tech: 'NB-IoT', title: 'Cellular-Based', desc: 'Komunikasi berbasis jaringan seluler untuk penetrasi sinyal yang lebih baik di area tertentu.' },
          { tech: '4G Cat.1', title: 'Higher Bandwidth', desc: 'Untuk kebutuhan komunikasi dengan bandwidth lebih tinggi dan latensi rendah.' },
          { tech: 'GPRS', title: 'Legacy Compatible', desc: 'Mendukung lingkungan deployment yang sudah menggunakan infrastruktur GPRS yang ada.' },
        ],
      },
      en: {
        sectionLabel: 'Connectivity',
        headline: 'Flexible for Every Deployment Environment',
        subheadline: 'AquaLinkOS supports multiple connectivity technologies to adapt to your existing infrastructure.',
        cards: [
          { tech: 'LoRaWAN', title: 'Wide Area Coverage', desc: 'Ideal for large-area deployments with private network. Low power consumption and wide coverage range.' },
          { tech: 'NB-IoT', title: 'Cellular-Based', desc: 'Cellular network-based communication for better signal penetration in specific areas.' },
          { tech: '4G Cat.1', title: 'Higher Bandwidth', desc: 'For communication needs with higher bandwidth and low latency requirements.' },
          { tech: 'GPRS', title: 'Legacy Compatible', desc: 'Supports deployment environments already using existing GPRS infrastructure.' },
        ],
      },
    },

    platform: {
      id: {
        sectionLabel: 'Platform',
        headline: 'From Meter Data to Operational Intelligence',
        subheadline: 'Modul platform AquaLinkOS dirancang untuk mengubah data meter menjadi wawasan operasional yang actionable.',
        tabs: [
          { id: 'monitoring', label: 'Monitoring', title: 'Status Meter & Tren Konsumsi', desc: 'Pantau status seluruh meter dalam jaringan Anda secara real-time. Lacak tren konsumsi, identifikasi pola tidak normal, dan dapatkan visibilitas penuh terhadap jaringan distribusi air.', features: ['Real-time meter status', 'Tren konsumsi historis', 'Peta jaringan interaktif', 'Notifikasi status perangkat'] },
          { id: 'billing', label: 'Billing', title: 'Alur Kerja Billing Digital', desc: 'Sederhanakan proses billing dengan alur kerja digital terintegrasi. Dari pembacaan meter otomatis hingga penerbitan tagihan, seluruh proses dikelola dalam satu platform.', features: ['Pembacaan meter otomatis', 'Penghitungan tagihan digital', 'Manajemen tarif fleksibel', 'Laporan pendapatan terintegrasi'] },
          { id: 'alarm', label: 'Alarm Management', title: 'Indikasi Anomali & Kejadian', desc: 'Sistem alarm AquaLinkOS mendeteksi dan menginformasikan potensi kebocoran, tamper event, backflow, dan pola konsumsi yang tidak biasa untuk tindak lanjut di lapangan.', features: ['Indikasi aliran terus-menerus', 'Deteksi reverse flow', 'Tamper event alert', 'Konsumsi tidak normal'] },
          { id: 'analytics', label: 'Analytics', title: 'Laporan & Dukungan Keputusan', desc: 'Analisis data konsumsi historis, buat laporan operasional, dan dapatkan insight berbasis data untuk mendukung pengambilan keputusan strategis pengelolaan air.', features: ['Laporan konsumsi periodik', 'Analisis NRW', 'Statistik operasional', 'Export data & integrasi BI'] },
        ],
      },
      en: {
        sectionLabel: 'Platform',
        headline: 'From Meter Data to Operational Intelligence',
        subheadline: 'AquaLinkOS platform modules are designed to turn meter data into actionable operational intelligence.',
        tabs: [
          { id: 'monitoring', label: 'Monitoring', title: 'Meter Status & Consumption Trends', desc: 'Monitor the status of all meters in your network in real-time. Track consumption trends, identify abnormal patterns, and gain full visibility into your water distribution network.', features: ['Real-time meter status', 'Historical consumption trends', 'Interactive network map', 'Device status notifications'] },
          { id: 'billing', label: 'Billing', title: 'Digital Billing Workflow', desc: 'Streamline billing processes with integrated digital workflows. From automatic meter reading to invoice generation, the entire process is managed in one platform.', features: ['Automatic meter reading', 'Digital bill calculation', 'Flexible tariff management', 'Integrated revenue reports'] },
          { id: 'alarm', label: 'Alarm Management', title: 'Anomaly & Event Indication', desc: 'The AquaLinkOS alarm system detects and reports potential leaks, tamper events, backflow, and unusual consumption patterns for field follow-up.', features: ['Continuous flow indication', 'Reverse flow detection', 'Tamper event alerts', 'Abnormal consumption'] },
          { id: 'analytics', label: 'Analytics', title: 'Reports & Decision Support', desc: 'Analyze historical consumption data, generate operational reports, and gain data-driven insights to support strategic water management decisions.', features: ['Periodic consumption reports', 'NRW analysis', 'Operational statistics', 'Data export & BI integration'] },
        ],
      },
    },

    nrw: {
      id: {
        sectionLabel: 'NRW & Manajemen Kebocoran',
        headline: 'Deteksi Anomali Lebih Awal',
        subheadline: 'AquaLinkOS membantu tim operasional mengidentifikasi indikasi masalah jaringan lebih cepat.',
        flow: ['Pengumpulan Data', 'Pengenalan Pola', 'Indikasi / Alert', 'Verifikasi Lapangan', 'Tindakan'],
        note: 'Catatan: Sistem ini memberikan indikasi berdasarkan data meter dan pola konsumsi. Verifikasi lapangan tetap diperlukan untuk konfirmasi.',
        usecases: [
          { id: 'continuous', label: 'Continuous Flow', title: 'Indikasi Aliran Terus-Menerus', desc: 'Sistem mendeteksi konsumsi yang terus berjalan tanpa henti dalam periode tertentu, yang dapat menjadi indikasi kebocoran atau aliran yang tidak tertutup.', alert: 'Indikasi aliran tanpa henti terdeteksi pada meter #1234 selama 48 jam.' },
          { id: 'reverse', label: 'Reverse Flow', title: 'Reverse Flow Event', desc: 'Meter mendeteksi aliran air yang bergerak berlawanan arah dari arah normal. Kejadian ini dapat mengindikasikan masalah pada jaringan distribusi.', alert: 'Reverse flow event terdeteksi pada meter #5678. Segmen jaringan perlu diperiksa.' },
          { id: 'tamper', label: 'Tamper Detection', title: 'Tamper Detection', desc: 'Sistem mendeteksi kejadian yang mengindikasikan potensi manipulasi pada perangkat meter, seperti magnet atau interferensi fisik.', alert: 'Tamper event terdeteksi pada meter #9012. Tim lapangan perlu verifikasi.' },
          { id: 'abnormal', label: 'Konsumsi Tidak Normal', title: 'Konsumsi Tidak Normal', desc: 'Sistem mengidentifikasi pola konsumsi yang menyimpang secara signifikan dari profil historis pelanggan atau rata-rata segmen.', alert: 'Konsumsi meter #3456 melebihi 300% dari rata-rata historis dalam 24 jam terakhir.' },
        ],
      },
      en: {
        sectionLabel: 'NRW & Leak Management',
        headline: 'Detect Anomalies Earlier',
        subheadline: 'AquaLinkOS helps operational teams identify network problem indications faster.',
        flow: ['Data Collection', 'Pattern Recognition', 'Alert', 'Field Verification', 'Action'],
        note: 'Note: This system provides indications based on meter data and consumption patterns. Field verification is still required for confirmation.',
        usecases: [
          { id: 'continuous', label: 'Continuous Flow', title: 'Continuous Flow Indication', desc: 'The system detects consumption running continuously without interruption over a period, which may indicate a leak or unclosed flow.', alert: 'Non-stop flow indication detected on meter #1234 for 48 hours.' },
          { id: 'reverse', label: 'Reverse Flow', title: 'Reverse Flow Event', desc: 'The meter detects water flow moving in the opposite direction of normal flow. This event may indicate a problem in the distribution network.', alert: 'Reverse flow event detected on meter #5678. Network segment needs inspection.' },
          { id: 'tamper', label: 'Tamper Detection', title: 'Tamper Detection', desc: 'The system detects events indicating potential manipulation of the meter device, such as magnetic interference or physical tampering.', alert: 'Tamper event detected on meter #9012. Field team needs to verify.' },
          { id: 'abnormal', label: 'Abnormal Consumption', title: 'Abnormal Consumption', desc: 'The system identifies consumption patterns that deviate significantly from the customer\'s historical profile or segment average.', alert: 'Meter #3456 consumption exceeds 300% of historical average in the last 24 hours.' },
        ],
      },
    },

    industrial: {
      id: {
        sectionLabel: 'Kawasan Industri',
        headline: 'Solusi untuk Pengelola Kawasan Industri',
        subheadline: 'Kelola konsumsi air seluruh tenant dalam satu platform terintegrasi.',
        flow: ['Bulk Meter', 'Tenant Meter', 'Billing Platform', 'Tenant Portal'],
        values: [
          { icon: 'zap', title: 'Billing Tenant Otomatis', desc: 'Otomatiskan proses billing untuk seluruh tenant tanpa pembacaan meter manual.' },
          { icon: 'eye', title: 'Transparansi Konsumsi', desc: 'Berikan tenant akses ke data konsumsi mereka sendiri melalui portal tenant.' },
          { icon: 'trending-down', title: 'Kurangi Pembacaan Manual', desc: 'Eliminasi ketergantungan pada proses pembacaan meter manual yang memakan waktu.' },
        ],
      },
      en: {
        sectionLabel: 'Industrial Estate',
        headline: 'Solution for Industrial Estate Managers',
        subheadline: 'Manage water consumption across all tenants in one integrated platform.',
        flow: ['Bulk Meter', 'Tenant Meter', 'Billing Platform', 'Tenant Portal'],
        values: [
          { icon: 'zap', title: 'Automated Tenant Billing', desc: 'Automate the billing process for all tenants without manual meter readings.' },
          { icon: 'eye', title: 'Consumption Transparency', desc: 'Give tenants access to their own consumption data through the tenant portal.' },
          { icon: 'trending-down', title: 'Reduce Manual Readings', desc: 'Eliminate dependency on time-consuming manual meter reading processes.' },
        ],
      },
    },

    value: {
      id: {
        sectionLabel: 'Nilai Utama',
        headline: 'Manfaat yang Dapat Anda Harapkan',
        subheadline: 'AquaLinkOS membantu organisasi pengelolaan air bergerak dari operasional berbasis pengamatan menuju manajemen berbasis data.',
        cards: [
          { title: 'Efisiensi Operasional', desc: 'Mengurangi beban pembacaan meter manual dan memungkinkan tim lapangan fokus pada tugas yang lebih bernilai.' },
          { title: 'Visibilitas Data', desc: 'Akses ke informasi konsumsi dan kejadian yang sebelumnya hanya tersedia saat pembacaan berikutnya.' },
          { title: 'Manajemen Pendapatan', desc: 'Mendukung alur kerja billing yang lebih akurat dan terintegrasi dari data meter hingga penagihan.' },
          { title: 'Siap Berkembang', desc: 'Konektivitas fleksibel dan arsitektur terbuka untuk integrasi dengan sistem dan teknologi masa depan.' },
        ],
      },
      en: {
        sectionLabel: 'Core Value',
        headline: 'Benefits You Can Expect',
        subheadline: 'AquaLinkOS helps water management organizations move from observation-based operations toward data-driven management.',
        cards: [
          { title: 'Operational Efficiency', desc: 'Reduce the burden of manual meter readings and let field teams focus on higher-value tasks.' },
          { title: 'Data Visibility', desc: 'Access consumption and event information that was previously only available at the next reading cycle.' },
          { title: 'Revenue Management', desc: 'Support a more accurate billing workflow integrated from meter data through to invoicing.' },
          { title: 'Future Ready', desc: 'Flexible connectivity and open architecture for integration with future systems and technologies.' },
        ],
      },
    },

    roadmap: {
      id: {
        sectionLabel: 'Implementasi',
        headline: 'Roadmap Implementasi',
        subheadline: 'Pendekatan bertahap untuk membangun Smart Water Utility yang berkelanjutan.',
        steps: [
          { num: '01', title: 'Pilot Area', desc: 'Mulai dengan area percontohan untuk validasi teknologi dan proses sebelum skalabilitas penuh.' },
          { num: '02', title: 'Smart Meter Deployment', desc: 'Instalasi perangkat field (smart meter atau retrofit module) pada area yang telah dipilih.' },
          { num: '03', title: 'Platform Integration', desc: 'Integrasi platform AquaLinkOS dengan sistem yang ada dan konfigurasi alur kerja operasional.' },
          { num: '04', title: 'Smart Water Operation', desc: 'Transisi ke operasional berbasis data dengan monitoring, billing, dan manajemen alarm yang terintegrasi.' },
        ],
      },
      en: {
        sectionLabel: 'Implementation',
        headline: 'Implementation Roadmap',
        subheadline: 'A phased approach to building a sustainable Smart Water Utility.',
        steps: [
          { num: '01', title: 'Pilot Area', desc: 'Start with a pilot area to validate technology and processes before full scalability.' },
          { num: '02', title: 'Smart Meter Deployment', desc: 'Install field devices (smart meters or retrofit modules) in the selected area.' },
          { num: '03', title: 'Platform Integration', desc: 'Integrate the AquaLinkOS platform with existing systems and configure operational workflows.' },
          { num: '04', title: 'Smart Water Operation', desc: 'Transition to data-driven operations with integrated monitoring, billing, and alarm management.' },
        ],
      },
    },

    contact: {
      id: {
        sectionLabel: 'Mulai Sekarang',
        headline: 'Bangun Smart Water Utility Anda Hari Ini',
        subheadline: 'Konsultasikan kebutuhan proyek Anda bersama tim AquaLinkOS.',
        brochureBtn: 'Unduh Brosur',
        submitBtn: 'Kirim Pesan',
        successMsg: 'Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.',
        errorMsg: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami langsung.',
        configMsg: 'Form belum terhubung ke backend. Konfigurasi <code>AQUALINK_CONFIG.form.endpoint</code> di <code>js/config.js</code>.',
        fields: {
          name: { label: 'Nama Lengkap', placeholder: 'Masukkan nama Anda' },
          company: { label: 'Perusahaan / Instansi', placeholder: 'Nama perusahaan atau instansi' },
          role: { label: 'Jabatan / Peran', placeholder: 'Jabatan atau peran Anda' },
          email: { label: 'Email', placeholder: 'email@perusahaan.com' },
          phone: { label: 'Nomor Telepon', placeholder: '+62 xxx xxxx xxxx' },
          projectType: { label: 'Tipe Proyek', placeholder: 'Pilih tipe proyek' },
        },
        projectTypes: [
          { value: 'pdam', label: 'PDAM / Water Utility' },
          { value: 'industrial', label: 'Kawasan Industri' },
          { value: 'building', label: 'Building Management' },
          { value: 'integrator', label: 'System Integrator' },
          { value: 'consultant', label: 'Konsultan' },
          { value: 'other', label: 'Lainnya' },
        ],
        validation: {
          required: 'Field ini wajib diisi',
          email: 'Format email tidak valid',
          phone: 'Format nomor telepon tidak valid',
        },
      },
      en: {
        sectionLabel: 'Get Started',
        headline: 'Build Your Smart Water Utility Today',
        subheadline: 'Discuss your project needs with the AquaLinkOS team.',
        brochureBtn: 'Download Brochure',
        submitBtn: 'Send Message',
        successMsg: 'Thank you! Your message has been sent. Our team will contact you shortly.',
        errorMsg: 'An error occurred while sending your message. Please try again or contact us directly.',
        configMsg: 'Form is not connected to a backend. Configure <code>AQUALINK_CONFIG.form.endpoint</code> in <code>js/config.js</code>.',
        fields: {
          name: { label: 'Full Name', placeholder: 'Enter your name' },
          company: { label: 'Company / Organization', placeholder: 'Company or organization name' },
          role: { label: 'Title / Role', placeholder: 'Your title or role' },
          email: { label: 'Email', placeholder: 'email@company.com' },
          phone: { label: 'Phone Number', placeholder: '+62 xxx xxxx xxxx' },
          projectType: { label: 'Project Type', placeholder: 'Select project type' },
        },
        projectTypes: [
          { value: 'pdam', label: 'PDAM / Water Utility' },
          { value: 'industrial', label: 'Industrial Estate' },
          { value: 'building', label: 'Building Management' },
          { value: 'integrator', label: 'System Integrator' },
          { value: 'consultant', label: 'Consultant' },
          { value: 'other', label: 'Other' },
        ],
        validation: {
          required: 'This field is required',
          email: 'Invalid email format',
          phone: 'Invalid phone number format',
        },
      },
    },

    about: {
      id: {
        sectionLabel: 'Tentang',
        headline: 'Tentang AquaLinkOS',
        desc: 'AquaLinkOS adalah platform digital water management yang dirancang untuk membantu PDAM dan pengelola kawasan industri dalam membangun Smart Water Utility. Ekosistem kami mencakup perangkat field, konektivitas IoT, dan platform manajemen yang terintegrasi.',
        targetTitle: 'Untuk Siapa AquaLinkOS?',
        targets: ['PDAM dan Perusahaan Air Minum', 'Pengelola Kawasan Industri', 'Building Management', 'System Integrator', 'Konsultan'],
      },
      en: {
        sectionLabel: 'About',
        headline: 'About AquaLinkOS',
        desc: 'AquaLinkOS is a digital water management platform designed to help water utilities and industrial estate managers build a Smart Water Utility. Our ecosystem covers field devices, IoT connectivity, and an integrated management platform.',
        targetTitle: 'Who is AquaLinkOS For?',
        targets: ['PDAM and Water Utilities', 'Industrial Estate Managers', 'Building Management', 'System Integrators', 'Consultants'],
      },
    },

    footer: {
      id: {
        tagline: 'Platform manajemen air digital untuk PDAM dan pengelola kawasan industri.',
        copyright: '© 2024 AquaLinkOS. Semua hak dilindungi.',
        disclaimer: 'Tampilan dashboard pada halaman ini adalah ilustrasi. Data yang ditampilkan bukan data pelanggan nyata.',
      },
      en: {
        tagline: 'Digital water management platform for water utilities and industrial estate managers.',
        copyright: '© 2024 AquaLinkOS. All rights reserved.',
        disclaimer: 'Dashboard views on this page are illustrative. Data shown is not from real customers.',
      },
    },

    ui: {
      id: { requestDemo: 'Buka Platform', goToPlatform: 'Buka Platform', langToggle: 'EN', scrollTop: 'Kembali ke atas', demoNote: 'Data adalah ilustrasi' },
      en: { requestDemo: 'Go to Platform', goToPlatform: 'Go to Platform', langToggle: 'ID', scrollTop: 'Back to top', demoNote: 'Data is illustrative' },
    },
  },
};

window.AQUALINK_CONFIG = AQUALINK_CONFIG;
