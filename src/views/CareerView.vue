<script setup>
import { ref, onMounted } from 'vue'
import HeroPage from '@/components/HeroPage.vue'

// --- ASSETS ---
const heroBg = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop'

// --- 1. DATA NILAI KERJA (CORE VALUES) ---
const values = ref([
    {
        id: 1,
        title: 'Safety First',
        desc: 'Kami menempatkan keselamatan di atas segalanya. Zero accident adalah target mutlak dalam setiap proyek.',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600&auto=format&fit=crop' // Foto Safety Helm
    },
    {
        id: 2,
        title: 'Integrity',
        desc: 'Kejujuran dan transparansi adalah mata uang kami dalam membangun kepercayaan jangka panjang dengan klien.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop' // Foto Handshake
    },
    {
        id: 3,
        title: 'Innovation',
        desc: 'Selalu beradaptasi dengan teknologi kelistrikan terbaru untuk memberikan solusi efisiensi energi terbaik.',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop' // Foto Panel/Tech
    },
    {
        id: 4,
        title: 'Teamwork',
        desc: 'Kekuatan kami terletak pada kolaborasi solid antar divisi untuk mencapai hasil yang presisi.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop' // Foto Team
    }
])

// --- 2. DATA LOWONGAN KERJA ---
const jobs = ref([
    {
        id: 1,
        title: 'Electrical Engineer',
        dept: 'Engineering',
        type: 'Full Time',
        location: 'Cikarang (Site)',
        exp: 'Min. 3 Tahun',
        desc: 'Bertanggung jawab atas desain sistem kelistrikan, perhitungan beban, dan pengawasan instalasi di lapangan.'
    },
    {
        id: 2,
        title: 'HSE Officer (K3)',
        dept: 'Safety',
        type: 'Contract',
        location: 'Kalimantan Timur',
        exp: 'Min. 2 Tahun',
        desc: 'Memastikan seluruh operasional proyek berjalan sesuai standar K3, melakukan inspeksi rutin, dan reporting safety.'
    },
    {
        id: 3,
        title: 'Project Administrator',
        dept: 'Project Support',
        type: 'Full Time',
        location: 'Jakarta (Head Office)',
        exp: 'Fresh Graduate / 1 Tahun',
        desc: 'Mengelola dokumen proyek, laporan harian, perizinan, dan administrasi umum pendukung tim engineering.'
    },
    {
        id: 4,
        title: 'Site Manager',
        dept: 'Construction',
        type: 'Full Time',
        location: 'Sumatera Selatan',
        exp: 'Min. 5 Tahun',
        desc: 'Memimpin pelaksanaan proyek di lapangan, manajemen tim teknisi, dan koordinasi dengan klien.'
    }
])

onMounted(() => {
    window.scrollTo(0, 0)
})
</script>

<template>
    <div class="career-page">

        <HeroPage title="Karir & Budaya" :bgImage="heroBg" />

        <section class="intro-section py-5">
            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <h2 class="section-title mb-3">Bergabung Bersama Keluarga Besar JBB</h2>
                        <p class="text-muted fs-5">
                            Kami percaya bahwa SDM adalah aset terbesar perusahaan. Di JBB, kami tidak hanya membangun
                            infrastruktur listrik,
                            tetapi juga membangun masa depan talenta-talenta terbaik bangsa.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="values-section py-5">
            <div class="container">
                <div class="text-center mb-5">
                    <h3 class="section-heading text-white">Nilai Kerja Kami</h3>
                    <p class="text-white-50">Pondasi yang membuat kami terus bertumbuh dan dipercaya</p>
                </div>

                <div class="row g-4">
                    <div v-for="val in values" :key="val.id" class="col-md-6 col-lg-3">

                        <div class="value-card-ref">
                            <img :src="val.image" class="card-bg-img" alt="Value Image">

                            <div class="card-overlay"></div>

                            <h4 class="card-top-title">{{ val.title }}</h4>

                            <div class="card-bottom-content">
                                <p class="card-desc">{{ val.desc }}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section class="jobs-section py-5 bg-light">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 class="section-title">Posisi Tersedia</h2>
                    <p class="text-muted">Temukan peran yang sesuai dengan keahlian dan minat Anda</p>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-10">

                        <div v-for="job in jobs" :key="job.id" class="job-card mb-4">
                            <div class="card-body p-4">
                                <div class="row align-items-center">
                                    <div class="col-md-8 mb-3 mb-md-0">
                                        <h4 class="job-title">{{ job.title }}</h4>
                                        <div class="job-meta d-flex flex-wrap gap-3 mb-3">
                                            <span class="badge bg-blue-light text-blue"><i
                                                    class="bi bi-building me-1"></i> {{ job.dept }}</span>
                                            <span class="badge bg-red-light text-red"><i class="bi bi-geo-alt me-1"></i>
                                                {{ job.location }}</span>
                                            <span class="badge bg-gray-light text-dark"><i class="bi bi-clock me-1"></i>
                                                {{ job.type }}</span>
                                            <span class="badge bg-gray-light text-dark"><i
                                                    class="bi bi-briefcase me-1"></i> {{ job.exp }}</span>
                                        </div>
                                        <p class="job-desc text-muted mb-0">{{ job.desc }}</p>
                                    </div>
                                    <div class="col-md-4 text-md-end">
                                        <button class="btn btn-apply rounded-pill">
                                            Lamar Sekarang <i class="bi bi-arrow-right ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>



    </div>
</template>

<style scoped>
/* --- COLORS --- */
.text-blue {
    color: #002b49;
}

.text-red {
    color: #e63946;
}

.bg-light {
    background-color: #f9f9f9 !important;
}

.bg-blue-light {
    background-color: rgba(0, 43, 73, 0.1);
}

.bg-red-light {
    background-color: rgba(230, 57, 70, 0.1);
}

.bg-gray-light {
    background-color: #e9ecef;
}

.section-title {
    color: #002b49;
    font-weight: 800;
}

.section-heading {
    font-weight: 800;
    margin-bottom: 10px;
}

/* --- VALUES SECTION (STYLE BARU MIRIP GAMBAR) --- */
.values-section {
    background-color: #002b49;
    padding-bottom: 80px;
}

.value-card-ref {
    position: relative;
    height: 400px;
    /* Kartu tinggi vertikal */
    border-radius: 20px;
    /* Sudut membulat besar */
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.value-card-ref:hover {
    transform: translateY(-10px);
}

.card-bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.value-card-ref:hover .card-bg-img {
    transform: scale(1.1);
    /* Efek Zoom saat hover */
}

/* Overlay Gradient: Gelap di atas (untuk teks judul) dan Bawah (untuk deskripsi) */
.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.7) 0%,
            /* Gelap di atas agar judul terbaca */
            rgba(0, 0, 0, 0.1) 40%,
            /* Bening di tengah */
            rgba(0, 0, 0, 0.9) 100%
            /* Gelap pekat di bawah untuk deskripsi */
        );
    z-index: 1;
}

/* Judul di Kiri Atas */
.card-top-title {
    position: absolute;
    top: 25px;
    left: 25px;
    color: #fff;
    font-weight: 700;
    font-size: 1.5rem;
    z-index: 2;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    width: 80%;
}

/* Deskripsi di Bawah */
.card-bottom-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 25px;
    z-index: 2;
    transform: translateY(20px);
    /* Sedikit turun awalnya */
    opacity: 0.9;
    transition: all 0.3s ease;
}

.value-card-ref:hover .card-bottom-content {
    transform: translateY(0);
    opacity: 1;
}

.card-desc {
    color: #e0e0e0;
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
}


/* --- JOB CARDS --- */
.job-card {
    background: #fff;
    border: 1px solid #eef0f2;
    border-radius: 12px;
    border-left: 5px solid #002b49;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
}

.job-card:hover {
    transform: translateX(5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    border-left-color: #e63946;
}

.job-title {
    font-weight: 700;
    color: #333;
    margin-bottom: 10px;
}

.job-meta .badge {
    font-weight: 500;
    padding: 8px 12px;
    font-size: 0.85rem;
}

.job-desc {
    font-size: 0.95rem;
    line-height: 1.6;
}

.btn-apply {
    background-color: #002b49;
    color: #fff;
    padding: 10px 30px;
    font-weight: 600;
    border: none;
    transition: all 0.3s;
}

.btn-apply:hover {
    background-color: #e63946;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(230, 57, 70, 0.3);
}

/* --- CTA SECTION --- */
.cta-section {
    background: #fff;
    padding-bottom: 80px;
}

.cta-box {
    background: linear-gradient(135deg, #00529c 0%, #002b49 100%);
    box-shadow: 0 15px 30px rgba(0, 43, 73, 0.2);
}

/* Responsive */
@media (max-width: 768px) {
    .value-card-ref {
        height: 300px;
    }

    .job-meta {
        gap: 5px;
    }

    .btn-apply {
        width: 100%;
        margin-top: 15px;
    }

    .cta-box {
        padding: 30px;
    }
}
</style>