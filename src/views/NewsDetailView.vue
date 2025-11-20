<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import HeroPage from '@/components/HeroPage.vue'

const route = useRoute()
const slug = route.params.slug

// --- 1. DATA BERITA (DATABASE SIMULASI) ---
// Pastikan data ini sama/sinkron dengan yang ada di NewsView.vue
const allNews = [
    {
        id: 1,
        slug: 'jbb-rampungkan-gardu-induk',
        category: 'Berita',
        date: '18 Nov 2025',
        title: 'JBB Rampungkan Instalasi Gardu Induk 150kV di Kawasan Industri Batang',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop',
        author: 'Tim Humas JBB',
        content: `
      <p><strong>BATANG, 18 November 2025</strong> – PT JBB Javas Berkah Bistari kembali menorehkan prestasi dalam percepatan infrastruktur energi nasional. Hari ini, JBB secara resmi melakukan energize (pemberian tegangan pertama) pada Gardu Induk 150kV yang berlokasi di Kawasan Industri Terpadu Batang, Jawa Tengah.</p>
      <p>Proyek yang dikerjakan selama 14 bulan ini merupakan bagian dari komitmen JBB dalam mendukung ketersediaan pasokan listrik yang andal bagi tenant-tenant industri multinasional. Dengan kapasitas trafo daya 2x60 MVA, gardu induk ini diproyeksikan mampu melayani kebutuhan beban puncak hingga 100 MW.</p>
      <p>"Penyelesaian proyek ini tepat waktu dengan catatan <em>Zero Accident</em> adalah bukti dedikasi tim kami terhadap standar Safety dan Quality," ujar Budi Santoso, Project Manager JBB di lokasi peresmian.</p>
      <p>Selain pekerjaan sipil dan elektromekanikal, JBB juga mengimplementasikan sistem otomasi gardu induk (Substation Automation System) berbasis IEC 61850 terbaru. Sistem ini memungkinkan monitoring dan kontrol jarak jauh secara real-time dari Control Center PLN, meningkatkan efisiensi operasional dan kecepatan respon terhadap gangguan.</p>
    `
    },
    {
        id: 2,
        slug: 'program-jbb-peduli',
        category: 'CSR',
        date: '17 Nov 2025',
        title: 'Program JBB Peduli: Elektrifikasi Gratis untuk 50 Rumah di Desa Terpencil',
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop',
        author: 'Divisi CSR',
        content: `
      <p><strong>CIANJUR, 17 November 2025</strong> – Sebagai bentuk tanggung jawab sosial perusahaan (CSR), JBB Javas Berkah Bistari meluncurkan program "JBB Terang Desa". Program ini menargetkan pemasangan instalasi listrik gratis bagi masyarakat prasejahtera yang belum menikmati akses listrik PLN secara memadai.</p>
      <p>Dalam tahap pertama ini, sebanyak 50 rumah di desa penyangga sekitar proyek JBB mendapatkan bantuan berupa instalasi titik lampu, stop kontak, dan pembayaran biaya penyambungan baru.</p>
      <p>Warga menyambut antusias program ini. Sebelumnya, sebagian warga hanya mengandalkan penerangan seadanya atau menyalur dari tetangga dengan risiko keselamatan yang tinggi. Tim teknisi JBB juga memberikan edukasi singkat mengenai pemakaian listrik yang aman untuk mencegah bahaya kebakaran.</p>
    `
    },
    // ... Tambahkan data dummy lainnya di sini (pastikan slug cocok dengan NewsView) ...
]

// --- 2. LOGIC MENCARI BERITA ---
const currentNews = computed(() => {
    return allNews.find(item => item.slug === slug)
})

onMounted(() => {
    window.scrollTo(0, 0)
})
</script>

<template>
    <div class="news-detail-page">

        <HeroPage v-if="currentNews" :title="currentNews.category" :bgImage="currentNews.image" />

        <div v-else style="height: 100px; background: #002b49;"></div>

        <div class="container py-5">
            <div class="row justify-content-center">

                <div class="col-lg-8 col-md-10">

                    <div v-if="currentNews">

                        <div class="article-header mb-4">
                            <h1 class="article-title">{{ currentNews.title }}</h1>

                            <div class="article-meta d-flex align-items-center mt-3 flex-wrap gap-2">
                                <span class="category-badge">{{ currentNews.category }}</span>
                                <span class="separator text-muted">/</span>
                                <span class="date text-muted"><i class="bi bi-calendar3 me-1"></i> {{ currentNews.date
                                    }}</span>
                                <span class="separator text-muted">/</span>
                                <span class="author text-muted"><i class="bi bi-person me-1"></i> {{ currentNews.author
                                    }}</span>
                            </div>
                        </div>

                        <div class="article-image mb-4">
                            <img :src="currentNews.image" :alt="currentNews.title"
                                class="img-fluid rounded-3 w-100 shadow-sm">
                            <p class="image-caption mt-2 text-muted fst-italic text-center">Dokumentasi: {{
                                currentNews.title }}</p>
                        </div>

                        <div class="article-content text-justify">
                            <div v-html="currentNews.content"></div>
                        </div>

                        <div class="share-section mt-5 pt-4 border-top">
                            <h6 class="fw-bold mb-3">Bagikan Artikel Ini</h6>
                            <div class="d-flex gap-3">
                                <a href="#" class="share-icon facebook"><i class="bi bi-facebook"></i></a>
                                <a href="#" class="share-icon twitter"><i class="bi bi-twitter-x"></i></a>
                                <a href="#" class="share-icon linkedin"><i class="bi bi-linkedin"></i></a>
                                <a href="#" class="share-icon whatsapp"><i class="bi bi-whatsapp"></i></a>
                            </div>
                        </div>

                        <div class="mt-5">
                            <RouterLink to="/news" class="btn btn-outline-primary-custom rounded-pill">
                                <i class="bi bi-arrow-left me-2"></i> Kembali ke Daftar Berita
                            </RouterLink>
                        </div>

                    </div>

                    <div v-else class="text-center py-5">
                        <i class="bi bi-exclamation-circle display-1 text-muted mb-3"></i>
                        <h3 class="text-muted">Berita tidak ditemukan.</h3>
                        <RouterLink to="/news" class="btn btn-primary mt-3 rounded-pill">Kembali ke Berita</RouterLink>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
/* --- TYPOGRAPHY --- */
.article-title {
    font-weight: 800;
    color: #002b49;
    font-size: 2rem;
    line-height: 1.3;
}

.category-badge {
    color: #e63946;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
}

.article-meta {
    font-size: 0.9rem;
}

.image-caption {
    font-size: 0.85rem;
}

/* --- CONTENT --- */
.article-content {
    color: #333;
    font-size: 1.1rem;
    line-height: 1.8;
}

/* Deep selector untuk elemen HTML di dalam v-html */
:deep(.article-content p) {
    margin-bottom: 1.5rem;
}

:deep(.article-content strong) {
    color: #002b49;
}

/* --- SHARE ICONS --- */
.share-icon {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    text-decoration: none;
    transition: all 0.3s;
}

.share-icon:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.facebook {
    background: #e7f3ff;
    color: #1877f2;
}

.twitter {
    background: #f0f0f0;
    color: #000;
}

.linkedin {
    background: #eef6fa;
    color: #0a66c2;
}

.whatsapp {
    background: #e8f7ef;
    color: #25d366;
}

/* --- BUTTONS --- */
.btn-outline-primary-custom {
    border: 1px solid #002b49;
    color: #002b49;
    font-weight: 600;
    padding: 10px 30px;
    transition: all 0.3s;
}

.btn-outline-primary-custom:hover {
    background: #002b49;
    color: #fff;
}

/* Responsive */
@media (max-width: 768px) {
    .article-title {
        font-size: 1.5rem;
    }

    .article-content {
        font-size: 1rem;
    }
}
</style>