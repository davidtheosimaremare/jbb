<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import HeroPage from '@/components/HeroPage.vue'

// --- 1. ASSETS ---
const heroBg = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop' // Foto Koran/Media/Digital

// --- 2. DATA BERITA (DUMMY BANYAK UNTUK PAGINATION) ---
const allNews = ref([
    {
        id: 1,
        category: 'Berita',
        date: '18 Nov 2025',
        title: 'JBB Rampungkan Instalasi Gardu Induk 150kV di Kawasan Industri Batang',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop',
        slug: 'jbb-rampungkan-gardu-induk'
    },
    {
        id: 2,
        category: 'CSR',
        date: '17 Nov 2025',
        title: 'Program JBB Peduli: Elektrifikasi Gratis untuk 50 Rumah di Desa Terpencil',
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop',
        slug: 'program-jbb-peduli'
    },
    {
        id: 3,
        category: 'Safety',
        date: '15 Nov 2025',
        title: 'Pencapaian 1 Juta Jam Kerja Tanpa Kecelakaan (Zero Accident) di Proyek Smelter',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600&auto=format&fit=crop',
        slug: 'pencapaian-zero-accident'
    },
    {
        id: 4,
        category: 'Teknologi',
        date: '14 Nov 2025',
        title: 'Implementasi Sistem SCADA Terbaru untuk Monitoring Real-time Panel LVMDP',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop',
        slug: 'implementasi-scada'
    },
    {
        id: 5,
        category: 'Berita',
        date: '10 Nov 2025',
        title: 'Kunjungan Kerja Kementerian ESDM ke Proyek PLTS Atap JBB',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop',
        slug: 'kunjungan-esdm'
    },
    {
        id: 6,
        category: 'Award',
        date: '05 Nov 2025',
        title: 'JBB Raih Penghargaan "Best EPC Contractor 2025" Kategori Energi Terbarukan',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop',
        slug: 'best-epc-contractor'
    },
    {
        id: 7,
        category: 'Internal',
        date: '01 Nov 2025',
        title: 'Training Sertifikasi K3 Listrik untuk Seluruh Teknisi Senior JBB',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop',
        slug: 'training-k3'
    },
    {
        id: 8,
        category: 'Proyek',
        date: '28 Okt 2025',
        title: 'Penandatanganan Kontrak Kerjasama Maintenance Kelistrikan dengan PT Semen Indonesia',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
        slug: 'kontrak-semen-indonesia'
    },
    {
        id: 9,
        category: 'Berita',
        date: '25 Okt 2025',
        title: 'JBB Dukung Transisi Energi Hijau Melalui Pembangunan Charging Station EV',
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600&auto=format&fit=crop',
        slug: 'charging-station-ev'
    },
    {
        id: 10,
        category: 'Event',
        date: '20 Okt 2025',
        title: 'JBB Hadir di Pameran "Electric & Power Indonesia 2025" JIExpo Kemayoran',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop',
        slug: 'pameran-electric-power'
    }
])

// --- 3. LOGIC PAGINATION ---
const currentPage = ref(1)
const itemsPerPage = 8 // Tampilkan 8 berita per halaman (4 kolom x 2 baris)

const totalPages = computed(() => Math.ceil(allNews.value.length / itemsPerPage))

const paginatedNews = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return allNews.value.slice(start, end)
})

const setPage = (page) => {
    currentPage.value = page
    window.scrollTo({ top: 400, behavior: 'smooth' }) // Scroll ke atas list berita
}

const nextPage = () => {
    if (currentPage.value < totalPages.value) setPage(currentPage.value + 1)
}

const prevPage = () => {
    if (currentPage.value > 1) setPage(currentPage.value - 1)
}

onMounted(() => {
    window.scrollTo(0, 0)
})
</script>

<template>
    <div class="news-page">

        <HeroPage title="Berita & Artikel" :bgImage="heroBg" />

        <section class="news-list-section py-5">
            <div class="container">

                <div class="row mb-5 align-items-end">
                    <div class="col-md-8">
                        <h2 class="section-title mb-2">Kabar Terbaru JBB</h2>
                        <p class="text-muted">Informasi terkini seputar proyek, inovasi, dan aktivitas perusahaan.</p>
                    </div>
                    <div class="col-md-4">
                        <div class="input-group search-bar">
                            <input type="text" class="form-control" placeholder="Cari berita...">
                            <button class="btn btn-primary-custom" type="button"><i class="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>

                <div class="row g-4">
                    <div v-for="item in paginatedNews" :key="item.id" class="col-md-6 col-lg-3">
                        <div class="news-card h-100">

                            <div class="card-img-wrapper">
                                <img :src="item.image" :alt="item.title" loading="lazy">
                            </div>

                            <div class="card-body d-flex flex-column">

                                <div class="meta-info mb-2">
                                    <span class="category">{{ item.category }}</span>
                                    <span class="divider">/</span>
                                    <span class="date">{{ item.date }}</span>
                                </div>

                                <h5 class="news-title mb-3">
                                    <RouterLink :to="`/news/${item.slug}`">{{ item.title }}</RouterLink>
                                </h5>

                                <div class="mt-auto">
                                    <RouterLink :to="`/news/${item.slug}`" class="read-more">
                                        Baca Selengkapnya <i class="bi bi-chevron-right"></i>
                                    </RouterLink>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div class="pagination-wrapper mt-5" v-if="totalPages > 1">
                    <button class="page-btn prev" :disabled="currentPage === 1" @click="prevPage">
                        <i class="bi bi-chevron-left"></i>
                    </button>

                    <button v-for="page in totalPages" :key="page" class="page-btn number"
                        :class="{ active: currentPage === page }" @click="setPage(page)">
                        {{ page }}
                    </button>

                    <button class="page-btn next" :disabled="currentPage === totalPages" @click="nextPage">
                        <i class="bi bi-chevron-right"></i>
                    </button>
                </div>

            </div>
        </section>

    </div>
</template>

<style scoped>
/* --- COLORS & TYPOGRAPHY --- */
.text-blue {
    color: #002b49;
}

.section-title {
    color: #002b49;
    font-weight: 800;
}

/* --- SEARCH BAR --- */
.search-bar .form-control {
    border-radius: 50px 0 0 50px;
    border: 1px solid #ddd;
    padding-left: 20px;
}

.search-bar .form-control:focus {
    box-shadow: none;
    border-color: #00529c;
}

.btn-primary-custom {
    background-color: #002b49;
    color: #fff;
    border-radius: 0 50px 50px 0;
    border: none;
    padding: 0 20px;
}

.btn-primary-custom:hover {
    background-color: #e63946;
}

/* --- NEWS CARD (STYLE MIRIP PERTAMINA) --- */
.news-card {
    background: #fff;
    border: 1px solid #eef0f2;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
}

.news-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.card-img-wrapper {
    height: 200px;
    /* Tinggi gambar fix */
    overflow: hidden;
}

.card-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.news-card:hover .card-img-wrapper img {
    transform: scale(1.05);
}

.card-body {
    padding: 20px;
}

/* Meta Info */
.meta-info {
    font-size: 0.85rem;
    font-weight: 500;
}

.category {
    color: #e63946;
    /* Merah */
}

.divider {
    margin: 0 5px;
    color: #ccc;
}

.date {
    color: #999;
}

/* Title */
.news-title {
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.5;
    color: #333;

    /* Clamp Text (Maks 3 baris) */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.news-title a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;
}

.news-title a:hover {
    color: #00529c;
}

/* Read More Link (Efek Garis Bawah) */
.read-more {
    display: inline-block;
    text-decoration: none;
    color: #999;
    font-size: 0.9rem;
    font-weight: 600;
    position: relative;
    transition: color 0.3s;
}

.read-more::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: #00529c;
    transition: width 0.3s ease;
}

.read-more i {
    margin-left: 5px;
    transition: transform 0.3s;
}

/* Hover State pada Card */
.news-card:hover .read-more {
    color: #00529c;
}

.news-card:hover .read-more::after {
    width: 100%;
}

.news-card:hover .read-more i {
    transform: translateX(5px);
}


/* --- PAGINATION --- */
.pagination-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.page-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* Bulat */
    border: 1px solid #ddd;
    background: #fff;
    color: #555;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
}

.page-btn:hover:not(:disabled) {
    border-color: #00529c;
    color: #00529c;
}

.page-btn.active {
    background: #00529c;
    border-color: #00529c;
    color: #fff;
}

.page-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>