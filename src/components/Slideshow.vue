<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
// 1. Import Swiper dan Module-nya
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

// 2. Import Style Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// 3. Data Slides (Saya ganti placeholder dengan gambar agar overlay terlihat bagus)
const slides = ref([
    {
        id: 1,
        title: 'Title',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        image: './src/assets/images/banner-slider-1.jpg',
        link: '/about'
    },
    {
        id: 2,
        title: 'Title',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        image: './src/assets/images/banner-slider-2.jpg',
        link: '/about'
    },
    {
        id: 3,
        title: 'Title',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        image: './src/assets/images/banner-slider-3.jpg',
        link: '/about'
    }
])

// 4. Daftarkan Module
const modules = [Navigation, Pagination, Autoplay, EffectFade]
</script>

<template>
    <div>
        <div class="container slideshow">

            <div class="title-slideshow">
                <h2>Slideshow Component</h2>
                <div class="desc-slideshow w-50">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>

            <div class="slideshow-hero-wrapper">
                <swiper :modules="modules" :slides-per-view="1" :space-between="0" :effect="'fade'" :loop="true"
                    :autoplay="{ delay: 5000, disableOnInteraction: false }"
                    :pagination="{ el: '.custom-pagination', clickable: true }"
                    :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }" class="mySwiper">
                    <swiper-slide v-for="slide in slides" :key="slide.id">
                        <div class="slide-item" :style="{ backgroundImage: `url(${slide.image})` }">

                            <div class="overlay"></div>

                            <div class="container h-100 position-relative content-wrapper">
                                <div class="slide-text-content">
                                    <h2 class="slide-title">{{ slide.title }}</h2>
                                    <p class="slide-desc">{{ slide.desc }}</p>
                                    <RouterLink :to="slide.link" class="btn-selengkapnya">
                                        Selengkapnya <i class="bi bi-arrow-up-right"></i>
                                    </RouterLink>
                                </div>
                            </div>

                        </div>
                    </swiper-slide>

                    <div class="container controls-wrapper">
                        <div class="custom-pagination"></div>
                        <div class="nav-buttons">
                            <button class="nav-btn custom-prev"><i class="bi bi-chevron-left"></i></button>
                            <button class="nav-btn custom-next"><i class="bi bi-chevron-right"></i></button>
                        </div>
                    </div>

                </swiper>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* --- Style Bawaan Kamu (Dipertahankan) --- */
.slideshow {
    /* Jika perlu padding container */
}

.title-slideshow {
    margin: 80px 0 40px 0;
    /* Sedikit disesuaikan margin bawahnya */
}

.desc-slideshow {
    margin-top: 30px;
}

/* --- Style Baru untuk Swiper --- */
.slideshow-hero-wrapper {
    width: 100%;
    height: 500px;
    /* Tinggi Slider */
    border-radius: 20px;
    /* Menggantikan border-radius: 50% yang aneh tadi */
    overflow: hidden;
    position: relative;
    margin-bottom: 50px;
}

.mySwiper {
    width: 100%;
    height: 100%;
}

.slide-item {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
}

/* Overlay Gradient */
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(23, 28, 48, 0.9) 0%, rgba(23, 28, 48, 0.6) 40%, rgba(23, 28, 48, 0.1) 100%);
    z-index: 1;
}

/* Posisi Text dalam Slide */
.content-wrapper {
    z-index: 2;
    display: flex;
    align-items: center;
}

.slide-text-content {
    color: #fff;
    max-width: 600px;
    margin-left: 20px;
    /* Opsional: Spacing dari kiri */
}

.slide-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.slide-desc {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.btn-selengkapnya {
    display: inline-block;
    padding: 10px 25px;
    border: 1px solid #fff;
    border-radius: 50px;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s;
    font-weight: bold;
}

.btn-selengkapnya:hover {
    background: #fff;
    color: #000;
}

/* --- Custom Controls (Pagination & Arrows) --- */
.controls-wrapper {
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
    padding: 0 30px;
    /* Padding agar sejajar dengan konten */
}

.custom-pagination {
    pointer-events: auto;
    display: flex;
    gap: 8px;
}

/* Override Style Titik Pagination */
:deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
    width: 30px;
    border-radius: 5px;
    background: #fff;
}

.nav-buttons {
    pointer-events: auto;
    display: flex;
    gap: 15px;
}

.nav-btn {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    color: #fff;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
}

.nav-btn:hover {
    background: #fff;
    color: #000;
}

/* Responsive */
@media (max-width: 768px) {
    .slide-title {
        font-size: 2rem;
    }

    .controls-wrapper {
        bottom: 20px;
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: 20px;
    }

    .nav-buttons {
        align-self: flex-end;
    }

    .slideshow-hero-wrapper {
        height: 400px;
    }
}
</style>