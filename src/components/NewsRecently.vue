<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper modules
import { Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// Data Dummy (Sesuaikan dengan API kamu)
const newsList = ref([
    {
        id: 1,
        category: 'Proyek',
        date: '18 Nov 2025',
        title: 'JBB Sukses Rampungkan Instalasi Gardu Induk 20kV untuk Kawasan Industri Cikarang.',
        image: 'https://placehold.co/600x400?text=Gardu+Induk', // Image suggestion: Substation / Trafo
        link: '/news/1'
    },
    {
        id: 2,
        category: 'Energi Hijau',
        date: '17 Nov 2025',
        title: 'Dukung Net Zero Emission, JBB Pasang PLTS Atap 500kWp di Pabrik Manufaktur Otomotif.',
        image: 'https://placehold.co/600x400?text=Solar+Panel', // Image suggestion: Solar Panels installation
        link: '/news/2'
    },
    {
        id: 3,
        category: 'Maintenance',
        date: '15 Nov 2025',
        title: 'Pentingnya Preventive Maintenance Panel LVMDP untuk Mencegah Downtime Produksi.',
        image: 'https://placehold.co/600x400?text=Panel+Maintenance', // Image suggestion: Engineer checking panel
        link: '/news/3'
    },
    {
        id: 4,
        category: 'Safety',
        date: '12 Nov 2025',
        title: 'JBB Raih Penghargaan Zero Accident dalam Proyek Elektrifikasi High-Rise Building Jakarta.',
        image: 'https://placehold.co/600x400?text=Safety+Award', // Image suggestion: Team holding award/Safety briefing
        link: '/news/4'
    }
])

// Konfigurasi Breakpoints (Responsive)
const breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 20 }, // HP
    768: { slidesPerView: 2, spaceBetween: 30 }, // Tablet
    1024: { slidesPerView: 3, spaceBetween: 30 } // Desktop (3 kolom seperti gambar)
}

// Module Navigation
const modules = [Navigation]
</script>

<template>


    <section class="recent-news-section">
        <div class="container">

            <div class="container card-home">
                <div class="title-card mb-20">
                    <h2 class="title">Latest News</h2>
                </div>
                <div class="desc-card w-50 mb-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a, iure quae expedita. </p>
                </div>
                <div class="row">
                    <div class="col" v-for="(item, index) in CardHomeItems" :key="index">
                        <div class="list-card">
                            <ServiceCard :title="item.title" :image-url="item.img" :description="item.description"
                                :hover-color="item.hover" />
                        </div>
                    </div>
                </div>
            </div>

            <swiper :modules="modules" :slides-per-view="3" :space-between="30" :breakpoints="breakpoints"
                :navigation="{ nextEl: '.btn-next-custom', prevEl: '.btn-prev-custom' }" class="news-swiper">
                <swiper-slide v-for="item in newsList" :key="item.id">
                    <div class="news-card">
                        <div class="card-img-top">
                            <img :src="item.image" :alt="item.title" loading="lazy">
                        </div>

                        <div class="card-body">
                            <div class="meta-info">
                                <span class="category">{{ item.category }}</span>
                                <span class="divider">/</span>
                                <span class="date">{{ item.date }}</span>
                            </div>

                            <h5 class="news-title">
                                <RouterLink :to="item.link">{{ item.title }}</RouterLink>
                            </h5>

                            <div class="mt-auto">
                                <RouterLink :to="item.link" class="read-more-link">
                                    Baca Selengkapnya <i class="bi bi-chevron-right"></i>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>

            <div class="controls-area">

                <div class="left-control">
                    <RouterLink to="/news" class="btn-pill-outline">
                        Selengkapnya <i class="bi bi-arrow-up-right"></i>
                    </RouterLink>
                </div>

                <div class="right-control">
                    <button class="nav-circle btn-prev-custom">
                        <i class="bi bi-chevron-left"></i>
                    </button>
                    <button class="nav-circle btn-next-custom">
                        <i class="bi bi-chevron-right"></i>
                    </button>
                </div>

            </div>

        </div>
    </section>
</template>

<style scoped>
.news-swiper {
    padding: 20px 0;
}

.recent-news-section {
    padding: 60px 0;
    background-color: #f9f9f9;
    /* Opsional: Background section */
}

/* --- CARD STYLE --- */
.news-card {
    background: #fff;
    border: 1px solid #eef0f2;
    border-radius: 16px;
    /* Rounded corner besar */
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.card-img-top {
    height: 220px;
    overflow: hidden;
}

.card-img-top img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.news-card:hover .card-img-top img {
    transform: scale(1.05);
    /* Efek zoom halus saat hover */
}

.card-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

/* --- TYPOGRAPHY --- */
.meta-info {
    font-size: 0.85rem;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.category {
    color: #e63946;
    /* Merah sesuai gambar */
    font-weight: 600;
}

.divider {
    color: #ccc;
}

.date {
    color: #888;
}

.news-title {
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 20px;
    color: #222;

    /* Batasi teks maksimal 3 baris */
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

/* --- READ MORE LINK --- */
.read-more-link {
    text-decoration: none;
    color: #999;
    font-weight: 600;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: color 0.3s;
}

.read-more-link i {
    font-size: 0.8rem;
    transition: transform 0.3s;
}

.news-card:hover .read-more-link {
    color: #00529c;
    /* Biru saat hover */
}

.news-card:hover .read-more-link i {
    transform: translateX(3px);
}

/* --- FOOTER CONTROLS --- */
.controls-area {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Tombol Selengkapnya (Pill Shape) */
.btn-pill-outline {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 28px;
    border: 1px solid #00529c;
    border-radius: 50px;
    color: #00529c;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
}

.btn-pill-outline:hover {
    background-color: #00529c;
    color: #fff;
}

/* Tombol Navigasi (Bulat) */
.right-control {
    display: flex;
    gap: 10px;
}

.nav-circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #666;
    transition: all 0.3s;
}

.nav-circle:hover {
    border-color: #00529c;
    color: #00529c;
    background: #f0f8ff;
}

.nav-circle:disabled,
.swiper-button-disabled {
    opacity: 0.5;
    cursor: default;
    border-color: #eee;
    color: #ccc;
}
</style>