<template>
    <div class="slider-container">

        <div class="slides-wrapper">
            <transition-group name="slide-fade">
                <div v-for="(slide, index) in slides" v-show="index === currentSlideIndex" :key="slide.id" class="slide"
                    :style="{ backgroundImage: `url(${slide.backgroundImage})` }">
                    <div class="slide-overlay"></div>
                    <div class="slide-content">
                        <h2>{{ slide.mainTitle }}</h2>
                        <p>{{ slide.description }}</p>
                        <a :href="slide.link" class="btn-selengkapnya">
                            Selengkapnya <span>&#8594;</span> </a>
                    </div>
                </div>
            </transition-group>
        </div>

        <div class="slider-nav">
            <div v-for="(slide, index) in slides" :key="slide.id" class="nav-item"
                :class="{ 'active': index === currentSlideIndex }" @click="changeSlide(index)">
                <div class="nav-line"></div> <span>{{ slide.tabTitle }}</span>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// --- Data untuk Slide ---
// Ganti URL gambar dengan gambar Anda sendiri
const slides = ref([
    {
        id: 'mypertamina',
        tabTitle: 'MYPERTAMINA',
        mainTitle: 'MyPertamina',
        description: 'Selalu ada solusi mendapatkan produk dan layanan berkualitas Pertamina untuk Anda. Klik selengkapnya untuk informasi lebih lanjut.',
        link: '#mypertamina',
        backgroundImage: 'https://images.unsplash.com/photo-1555529771-83b23c34762e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDU5NDZ8MHwxfGFsbHx8fHx8fHx8fDE3MTUyMzkzOTF8&ixlib=rb-4.0.3&q=80&w=1920'
    },
    {
        id: 'one-solution',
        tabTitle: 'PERTAMINA ONE SOLUTION',
        mainTitle: 'Pertamina One Solution',
        description: 'Selalu ada solusi mendapatkan produk dan layanan berkualitas Pertamina untuk bisnis Anda. Klik selengkapnya untuk informasi lebih lanjut.',
        link: '#one-solution',
        backgroundImage: 'https://images.unsplash.com/photo-1493934558415-9f5ac9a34129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDU5NDZ8MHwxfGFsbHx8fHx8fHx8fDE3MTUyMzk1MDh8&ixlib=rb-4.0.3&q=80&w=1920'
    },
    {
        id: 'subsidi-tepat',
        tabTitle: 'SUBSIDI TEPAT',
        mainTitle: 'Program Subsidi Tepat',
        description: 'PT. Pertamina terus berkomitmen untuk memastikan penyaluran BBM bersubsidi dan LPG melalui Program Subsidi Tepat Guna. Klik "Selengkapnya" untuk mendaftarkan kendaraan Anda.',
        link: '#subsidi-tepat',
        backgroundImage: 'https://images.unsplash.com/photo-1599539423374-05b1088c4f52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDU5NDZ8MHwxfGFsbHx8fHx8fHx8fDE3MTUyMzk0NTF8&ixlib=rb-4.0.3&q=80&w=1920'
    },
    {
        id: 'aviation',
        tabTitle: 'SUSTAINABLE AVIATION FUEL',
        mainTitle: 'Sustainable Aviation Fuel',
        description: 'Mendorong transisi energi bersih di industri aviasi dengan bahan bakar ramah lingkungan. Klik selengkapnya untuk informasi lebih lanjut.',
        link: '#aviation',
        backgroundImage: 'https://images.unsplash.com/photo-1527440182276-5d8de0397d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDU5NDZ8MHwxfGFsbHx8fHx8fHx8fDE3MTUyMzk1NjN8&ixlib=rb-4.0.3&q=80&w=1920'
    }
]);

// --- Logika Slider ---
const currentSlideIndex = ref(2); // Mulai dari "SUBSIDI TEPAT" (index 2)
const autoplayInterval = ref(null);
const AUTOPLAY_DURATION = 7000; // Pindah slide setiap 7 detik

// Fungsi untuk pindah slide (dipakai oleh klik dan autoplay)
const goToSlide = (index) => {
    currentSlideIndex.value = index;
};

// Fungsi untuk pindah slide manual (saat di-klik)
const changeSlide = (index) => {
    goToSlide(index);
    resetAutoplay(); // Reset timer jika pengguna klik manual
};

// --- Logika Autoplay ---
const startAutoplay = () => {
    if (autoplayInterval.value) {
        clearInterval(autoplayInterval.value);
    }
    autoplayInterval.value = setInterval(() => {
        const nextIndex = (currentSlideIndex.value + 1) % slides.value.length;
        goToSlide(nextIndex);
    }, AUTOPLAY_DURATION);
};

const stopAutoplay = () => {
    if (autoplayInterval.value) {
        clearInterval(autoplayInterval.value);
    }
};

const resetAutoplay = () => {
    stopAutoplay();
    startAutoplay();
};

// --- Lifecycle Hooks ---
onMounted(() => {
    startAutoplay();
});

onUnmounted(() => {
    stopAutoplay(); // Hentikan interval saat komponen hancur
});
</script>

<style scoped>
/* --- Kontainer Utama --- */
.slider-container {
    position: relative;
    width: 100%;
    height: 80vh;
    /* Tinggi slider, sesuaikan kebutuhan */
    min-height: 500px;
    max-height: 700px;
    background-color: #0d2a4a;
    /* Warna background fallback */
    color: white;
    overflow: hidden;
    font-family: Arial, sans-serif;
}

/* --- Wrapper untuk Transisi Slide --- */
.slides-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}

/* Lapisan overlay agar teks lebih mudah dibaca */
.slide-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
            rgba(10, 30, 60, 0.85) 0%,
            rgba(10, 30, 60, 0.4) 60%,
            rgba(10, 30, 60, 0.1) 100%);
    z-index: 1;
}

/* --- Transisi Fade untuk Slide --- */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 1s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
}

/* --- Konten Teks di dalam Slide --- */
.slide-content {
    position: relative;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 5vw;
    /* Padding responsif */
    max-width: 600px;
}

.slide-content h2 {
    font-size: 3rem;
    /* 48px */
    font-weight: bold;
    margin-bottom: 16px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.slide-content p {
    font-size: 1.125rem;
    /* 18px */
    line-height: 1.6;
    margin-bottom: 32px;
    max-width: 90%;
}

.btn-selengkapnya {
    display: inline-block;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 99px;
    /* Bulat penuh */
    padding: 12px 28px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.btn-selengkapnya:hover {
    background-color: white;
    color: #0d2a4a;
}

.btn-selengkapnya span {
    margin-left: 8px;
    transition: transform 0.3s ease;
    display: inline-block;
}

.btn-selengkapnya:hover span {
    transform: translateX(5px);
}

/* --- Navigasi Tab --- */
.slider-nav {
    position: absolute;
    bottom: 0;
    left: 5vw;
    right: 5vw;
    display: flex;
    z-index: 3;
}

.nav-item {
    flex: 1;
    /* Membuat setiap item memiliki lebar yang sama */
    padding: 20px 10px;
    text-align: left;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
    font-weight: bold;
    font-size: 0.875rem;
    /* 14px */
    text-transform: uppercase;
    position: relative;
    transition: color 0.3s ease;
}

.nav-item:hover {
    color: white;
}

.nav-item.active {
    color: white;
}

/* --- INI ADALAH ANIMASI HOVER YANG ANDA MINTA --- 
*/
.nav-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    /* Tinggi garis non-aktif */
    background-color: rgba(255, 255, 255, 0.3);
    transform-origin: center;
    transform: scaleX(1);
    /* Mulai dengan garis penuh (tipis) */
    transition: height 0.3s ease, background-color 0.3s ease;
}

/* Saat di-hover, buat garis lebih tebal dan putih */
.nav-item:hover .nav-line {
    height: 4px;
    /* Tinggi garis saat hover */
    background-color: white;
}

/* Saat aktif, buat garis lebih tebal dan putih */
.nav-item.active .nav-line {
    height: 4px;
    /* Tinggi garis aktif */
    background-color: white;
}
</style>