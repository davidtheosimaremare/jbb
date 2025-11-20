<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import HeroPage from '@/components/HeroPage.vue'

// --- IMPORT SWIPER ---
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

// --- 1. DATA PROYEK ---
const project = ref({
    id: 1,
    title: 'Instalasi Genset & Panel Sinkronisasi 2x500kVA',
    category: 'Power Generation',
    heroImage: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=2070&auto=format&fit=crop',

    // Sidebar Info
    client: 'PT Bukit Asam Tbk',
    location: 'Tanjung Enim, Sumatera Selatan',
    year: '2024',
    status: 'Completed',
    scope: 'EPC (Engineering, Procurement, Construction)',

    // Deskripsi
    overview: `
    Proyek ini bertujuan untuk meningkatkan keandalan pasokan listrik cadangan (backup power) 
    di area operasional tambang utama. JBB dipercaya untuk melakukan pengadaan dan instalasi 
    dua unit Genset Silent Type berkapasitas masing-masing 500kVA lengkap dengan sistem sinkronisasi otomatis.
  `,
    challenge: `
    Tantangan utama dalam proyek ini adalah lokasi instalasi yang berada di area remote dengan akses terbatas, 
    serta kebutuhan akan sistem switching yang seamless (tanpa kedip) saat perpindahan dari PLN ke Genset 
    untuk melindungi peralatan sensitif server data center.
  `,
    solution: `
    Kami mengimplementasikan sistem Panel ATS/AMF (Automatic Transfer Switch / Automatic Main Failure) 
    terintegrasi dengan modul sinkronisasi DeepSea Electronics. Sistem ini memungkinkan kedua genset 
    bekerja secara paralel membagi beban (load sharing) atau bekerja bergantian (redundancy) secara otomatis 
    sesuai kebutuhan beban real-time.
  `,

    // Gallery Images
    gallery: [
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1565514020176-822882e80472?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1000&auto=format&fit=crop'
    ],

    // DATA TESTIMONI (ARRAY untuk Slider)
    testimonials: [
        {
            id: 1,
            quote: "Kinerja tim JBB sangat memuaskan. Instalasi rapi, commissioning berjalan lancar, dan dokumentasi teknis sangat lengkap. Sistem sinkronisasi ini sangat membantu operasional kami saat pemadaman listrik.",
            name: "Bpk. Hartono",
            position: "Kepala Divisi Utilitas",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
        },
        {
            id: 2,
            quote: "Respon tim support sangat cepat. Ketika ada kendala minor pada panel ATS, teknisi JBB langsung datang ke site dalam waktu kurang dari 24 jam. Pelayanan after-sales yang luar biasa.",
            name: "Ibu Sarah",
            position: "Project Manager",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
        },
        {
            id: 3,
            quote: "Kami memilih JBB karena standar K3-nya yang tinggi. Selama pengerjaan proyek 3 bulan di site kami, zero accident tercapai sesuai target perusahaan.",
            name: "Bpk. Wijaya",
            position: "HSE Manager",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
        }
    ]
})

// --- CONFIG MODULES SWIPER ---
const swiperModules = [Autoplay, Pagination]

// --- 2. LOGIC LIGHTBOX ---
const isLightboxOpen = ref(false)
const currentImageIndex = ref(0)

const activeImage = computed(() => {
    return project.value.gallery[currentImageIndex.value]
})

const openLightbox = (index) => {
    currentImageIndex.value = index
    isLightboxOpen.value = true
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeydown)
}

const closeLightbox = () => {
    isLightboxOpen.value = false
    document.body.style.overflow = 'auto'
    window.removeEventListener('keydown', handleKeydown)
}

const nextImage = () => {
    if (currentImageIndex.value < project.value.gallery.length - 1) {
        currentImageIndex.value++
    } else {
        currentImageIndex.value = 0
    }
}

const prevImage = () => {
    if (currentImageIndex.value > 0) {
        currentImageIndex.value--
    } else {
        currentImageIndex.value = project.value.gallery.length - 1
    }
}

const handleKeydown = (e) => {
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
    if (e.key === 'Escape') closeLightbox()
}

onMounted(() => {
    window.scrollTo(0, 0)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
    <div class="project-detail-page">

        <HeroPage :title="project.title" :bgImage="project.heroImage" />

        <div class="main-content-wrapper">
            <div class="container py-5">
                <div class="row gx-lg-5">

                    <div class="col-lg-8 mb-5">
                        <h3 class="content-heading">Project Overview</h3>
                        <p class="text-muted content-text">{{ project.overview }}</p>

                        <h4 class="content-subheading mt-4">The Challenge</h4>
                        <p class="text-muted content-text">{{ project.challenge }}</p>

                        <h4 class="content-subheading mt-4">Our Solution</h4>
                        <p class="text-muted content-text">{{ project.solution }}</p>
                    </div>

                    <div class="col-lg-4">
                        <div class="project-info-card">
                            <h4 class="info-title">Informasi Proyek</h4>
                            <ul class="info-list list-unstyled">
                                <li><span class="label">Klien</span><span class="value fw-bold">{{ project.client
                                }}</span></li>
                                <li><span class="label">Lokasi</span><span class="value">{{ project.location }}</span>
                                </li>
                                <li><span class="label">Tahun</span><span class="value">{{ project.year }}</span></li>
                                <li><span class="label">Kategori</span><span class="value">{{ project.category }}</span>
                                </li>
                                <li><span class="label">Lingkup</span><span class="value">{{ project.scope }}</span>
                                </li>
                                <li><span class="label">Status</span><span class="badge bg-success rounded-pill px-3">{{
                                    project.status }}</span></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <section class="gallery-section py-5 bg-light">
            <div class="container">
                <h3 class="section-title text-center mb-5">Dokumentasi Lapangan</h3>

                <div class="row g-4">
                    <div v-for="(img, index) in project.gallery" :key="index" class="col-md-6 col-lg-3">
                        <div class="gallery-card" @click="openLightbox(index)">
                            <img :src="img" alt="Gallery Image" loading="lazy">
                            <div class="zoom-overlay">
                                <i class="bi bi-arrows-fullscreen"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="testimonial-section py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">

                        <div class="testimonial-slider-card">
                            <i class="bi bi-quote quote-icon-bg"></i>
                            <swiper :modules="swiperModules" :slides-per-view="1" :loop="true"
                                :autoplay="{ delay: 5000, disableOnInteraction: false }"
                                :pagination="{ clickable: true, el: '.custom-swiper-pagination' }"
                                class="testimonial-swiper">
                                <swiper-slide v-for="item in project.testimonials" :key="item.id">
                                    <div class="row align-items-center position-relative z-2">

                                        <div class="col-md-3 text-center mb-4 mb-md-0">
                                            <div class="client-avatar-wrapper">
                                                <img :src="item.avatar" :alt="item.name" class="client-avatar">
                                                <div class="quote-badge"><i class="bi bi-chat-quote-fill"></i></div>
                                            </div>
                                        </div>

                                        <div class="col-md-9">
                                            <blockquote class="blockquote mb-4">
                                                <p class="testimonial-text">"{{ item.quote }}"</p>
                                            </blockquote>
                                            <div class="client-info">
                                                <h5 class="client-name mb-0">{{ item.name }}</h5>
                                                <small class="client-role text-white-50">
                                                    {{ item.position }} - {{ project.client }}
                                                </small>
                                            </div>
                                        </div>

                                    </div>
                                </swiper-slide>
                            </swiper>

                            <div class="custom-swiper-pagination mt-4 d-flex justify-content-center gap-2"></div>

                        </div>

                    </div>
                </div>
            </div>
        </section>

        <div v-if="isLightboxOpen" class="lightbox-overlay" @click="closeLightbox">
            <button class="close-btn" @click="closeLightbox">&times;</button>
            <button class="nav-btn prev" @click.stop="prevImage"><i class="bi bi-chevron-left"></i></button>
            <img :src="activeImage" class="lightbox-img" @click.stop>
            <button class="nav-btn next" @click.stop="nextImage"><i class="bi bi-chevron-right"></i></button>
            <div class="image-counter">{{ currentImageIndex + 1 }} / {{ project.gallery.length }}</div>
        </div>

    </div>
</template>

<style scoped>
/* --- GENERAL --- */
.content-heading {
    color: #002b49;
    font-weight: 700;
    margin-bottom: 20px;
}

.content-subheading {
    color: #00529c;
    font-weight: 600;
}

.content-text {
    line-height: 1.8;
    font-size: 1.05rem;
    text-align: justify;
}

.bg-light {
    background-color: #f8f9fa !important;
}

/* --- SIDEBAR --- */
.project-info-card {
    background: #fff;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border-top: 5px solid #002b49;
    position: sticky;
    top: 100px;
}

.info-title {
    font-weight: 700;
    margin-bottom: 20px;
    color: #333;
}

.info-list li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px dashed #eee;
}

.info-list li:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

.info-list .label {
    color: #888;
    font-size: 0.9rem;
}

.info-list .value {
    color: #333;
    font-weight: 500;
    text-align: right;
    max-width: 60%;
}

/* --- GALLERY --- */
.gallery-card {
    position: relative;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.gallery-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.gallery-card:hover img {
    transform: scale(1.1);
}

.zoom-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 43, 73, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
}

.zoom-overlay i {
    color: #fff;
    font-size: 2rem;
}

.gallery-card:hover .zoom-overlay {
    opacity: 1;
}

/* --- TESTIMONIAL SLIDER (RED BACKGROUND) --- */
.testimonial-section {
    background: #fff;
}

.testimonial-slider-card {
    /* BACKGROUND MERAH (Gradient) */
    background: linear-gradient(135deg, #e63946 0%, #b71c1c 100%);
    color: #fff;
    border-radius: 20px;
    padding: 50px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(230, 57, 70, 0.3);
    /* Shadow kemerahan */
}

.quote-icon-bg {
    position: absolute;
    top: -20px;
    right: 20px;
    font-size: 10rem;
    color: rgba(255, 255, 255, 0.08);
    pointer-events: none;
    z-index: 0;
}

.client-avatar-wrapper {
    position: relative;
    display: inline-block;
}

.client-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.3);
    object-fit: cover;
}

.quote-badge {
    position: absolute;
    bottom: 0;
    right: 0;
    background: #fff;
    color: #e63946;
    /* Icon merah background putih */
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    border: 2px solid #e63946;
}

.testimonial-text {
    font-size: 1.2rem;
    font-style: italic;
    line-height: 1.6;
    font-weight: 300;
    opacity: 0.95;
}

.client-name {
    font-weight: 700;
    letter-spacing: 0.5px;
}

.client-role {
    font-size: 0.9rem;
}

/* Style Pagination Bullets (Titik-titik slider) */
.custom-swiper-pagination {
    z-index: 10;
    position: relative;
}

:deep(.swiper-pagination-bullet) {
    background: rgba(255, 255, 255, 0.5);
    width: 10px;
    height: 10px;
    opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
    background: #fff;
    width: 30px;
    border-radius: 5px;
}

/* --- LIGHTBOX --- */
.lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lightbox-img {
    max-width: 85%;
    max-height: 85vh;
    border-radius: 5px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.3s;
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    background: none;
    border: none;
    color: #fff;
    font-size: 3rem;
    cursor: pointer;
    z-index: 10001;
}

.nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: #fff;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    z-index: 10001;
}

.nav-btn:hover {
    background: rgba(255, 255, 255, 0.3);
}

.nav-btn.prev {
    left: 30px;
}

.nav-btn.next {
    right: 30px;
}

.image-counter {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-size: 1rem;
    background: rgba(0, 0, 0, 0.5);
    padding: 5px 15px;
    border-radius: 20px;
}

@keyframes fadeIn {
    from {
        opacity: 0.5;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* Responsive */
@media (max-width: 768px) {
    .project-info-card {
        position: static;
        margin-top: 30px;
    }

    .testimonial-slider-card {
        padding: 30px;
        text-align: center;
    }

    .client-avatar-wrapper {
        margin-bottom: 20px;
    }

    .nav-btn {
        width: 40px;
        height: 40px;
        font-size: 1.5rem;
    }

    .nav-btn.prev {
        left: 10px;
    }

    .nav-btn.next {
        right: 10px;
    }
}
</style>