<script setup>
import { ref } from 'vue';
// Import Swiper Vue components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper modules
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // CSS untuk panah
import AppButton from './AppButton.vue';
import Slider1 from '../assets/images/banner-slider-1.jpg';
import Slider2 from '../assets/images/banner-slider-2.jpg';
import Slider3 from '../assets/images/banner-slider-3.jpg';
import Slider4 from '../assets/images/banner-slider-4.jpg';

// --- STATE ---

// Anda bisa ganti data ini
const slides = ref([
  {
    id: 1,
    mainImage: Slider1,
    mainTitle: 'Kekuatan EPC Power Terintegrasi',
    navTitle: 'IDENTITAS',
    popupImage: Slider1, // Ganti gambar ini
    slideDesc: 'Kami menyatukan rekayasa, pengadaan, dan konstruksi. JBB mengelola proyek kelistrikan paling kompleks secara terintegrasi—dari konsep hingga menyala.'
  },
  {
    id: 2,
    mainImage: Slider2,
    mainTitle: 'Presisi Tanpa Kompromi',
    navTitle: 'STANDAR',
    popupImage: Slider2,
    slideDesc: 'Kualitas adalah standar kami. Kami menerapkan Presisi mutlak dalam desain dan instalasi untuk menjamin sistem yang andal, aman, dan berfungsi sempurna.'
  },
  {
    id: 3,
    mainImage: Slider3,
    mainTitle: 'Akselerasi Pasti, Eksekusi Terjamin',
    navTitle: 'KOMITMEN',
    popupImage: Slider3, // Ganti gambar ini
    slideDesc: 'Kami bekerja dengan Kecepatan dan metodologi teruji. JBB adalah Garansi Anda untuk proyek yang selesai tepat waktu, sesuai anggaran, dan melampaui ekspektasi.'
  },
  {
    id: 4,
    mainImage: Slider4,
    mainTitle: 'Mitra Andal untuk Energi Berkelanjutan',
    navTitle: 'VISI',
    popupImage: Slider4, // Ganti gambar ini
    slideDesc: 'Kami membangun untuk jangka panjang. JBB mengintegrasikan solusi Berkelanjutan yang efisien, memastikan aset kelistrikan Anda siap untuk tantangan energi masa depan.'
  },
]);


const swiperInstance = ref(null);
const activeIndex = ref(0);
const autoplayProgress = ref(0);

// --- METHODS --- (Logika untuk sinkronisasi)

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.realIndex;
};

const goToSlide = (index) => {
  swiperInstance.value.slideToLoop(index);
};

// Ini adalah FUNGSI KUNCI untuk progress bar
const onAutoplayTimeLeft = (swiper, time, progress) => {
  autoplayProgress.value = 1 - progress;
};
</script>



<template>
  <div class="hero-slider">

    <swiper :modules="[Autoplay, Navigation]" :slides-per-view="1" :loop="true" :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }" @swiper="onSwiper" @slideChange="onSlideChange" @autoplayTimeLeft="onAutoplayTimeLeft">
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <div class="slide-content " :style="{ backgroundImage: `url(${slide.mainImage})` }">
          <div class="container">
            <h1 class="mainTitle">{{ slide.mainTitle }}</h1>
            <span class="slide-desc">{{ slide.slideDesc }}</span>
            <div class="button-slider">
              <AppButton to="/about" variant="outline" color="red">
                Selengkapnya
              </AppButton>
            </div>

          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="slider-nav container">
      <div v-for="(slide, index) in slides" :key="slide.id" class="nav-item" :class="{ active: index === activeIndex }"
        @click="goToSlide(index)">


        <div class="progress-bar" :style="{ width: index === activeIndex ? (autoplayProgress * 100) + '%' : '0%' }">
        </div>
        <span class="nav-title">{{ slide.navTitle }}</span>
        <span class="border"></span>
        <div class="nav-popup">

          <span class="popup-title">{{ slide.navTitle }}</span>
          <img :src="slide.popupImage" alt="thumbnail" class="popup-image" />
        </div>
      </div>

    </div>

  </div>
</template>




<style scoped>
.hero-slider {
  position: relative;
  width: 100%;
  margin-top: -60px;
  height: 700px;

  background: #333;
}

.border {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 100%;
  background-color: #ccc;
}

.swiper {
  width: 100%;
  height: 100%;
}

.slide-content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;



  /* padding-left: 7%; */
  /* <- HAPUS BARIS INI */
}

.slide-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* Gradien dari kiri (#0F172A) ke kanan (transparan) */
  background: linear-gradient(to right, #0F172A, transparent);

  /* Pastikan overlay di atas gambar, tapi di bawah teks */
  z-index: 1;
}




.slide-content h1 {
  color: white;
  font-size: 3.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  max-width: 50%;
  z-index: 2;
  margin-top: -50px;
}

.slide-content :deep(.container) {
  position: relative;
  /* Wajib ada agar z-index berfungsi */

  /* Posisikan konten di level 2 (DI ATAS overlay) */
  z-index: 2;
}

.slider-nav {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  z-index: 10;
  gap: 10px;
  padding-bottom: 20px;
}

.mainTitle {
  font-size: 42px !important;
  margin-bottom: 10px;
}

/* === INI BAGIAN YANG BENAR (Sesuai v4) === */

.nav-item {
  flex: 1;
  text-align: center;
  color: #ccc;
  font-weight: bold;
  font-size: 0.85rem;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  padding-top: 20px;
  padding-bottom: 20px;

  min-height: 2.5em;
  display: flex;
  justify-content: space-between;
  align-items: justify;
  margin-right: 50px;
}

.nav-item:last-child {
  margin-right: 0;
  /* Menghapus margin untuk item terakhir */
}

.nav-item:hover {
  color: white;
}

.nav-item.active {
  color: white;
}

.progress-bar {
  position: absolute;
  bottom: 0;
  /* Ganti 'top: -2px' menjadi 'bottom: 0' */
  left: 0;
  height: 2px;
  /* Buat lebih tebal dari border abu-abu */
  background-color: red;
  width: 0%;
  /* Diatur oleh Vue */
  z-index: 2;
  /* Pastikan di atas .border dan .nav-popup */
}

/* Teks Asli (MYPERTAMINA, etc.) */
.nav-title {
  /* BARU: Diposisikan di Kiri */
  position: absolute;
  top: 50%;
  left: 0;
  /* Atur jarak dari kiri di sini */
  transform: translateY(-50%);
  /* Hanya menengahkan vertikal */
  text-align: left;

  color: #ccc;
  font-weight: bold;
  font-size: 0.85rem;

  /* Transisi untuk fade-out */
  opacity: 1;
  visibility: visible;
  transition: opacity 0.2s ease-out, visibility 0.2s ease-out;
  z-index: 1;
  /* Paling bawah */
}

/* KOTAK POPUP (ANIMASI "PUSH DARI BAWAH") */
.nav-popup {
  position: absolute;
  /* * Posisi Kunci:
   * bottom: 0; -> Menempel di "line" (border)
   * left: 0; right: 0; -> Lebar penuh
   */
  bottom: 0;
  left: 0;
  right: 0;


  color: #333;
  /* Hapus border-radius atas agar menempel sempurna di line */
  border-radius: 8px 8px 0 0;
  /* Ubah ini jika mau radius */
  /* Bayangan di atas */

  text-align: left;

  /* Default State (Tersembunyi) */
  opacity: 0;
  visibility: hidden;

  /* * INI ADALAH EFEK "PUSH DARI BAWAH" (Tumbuh ke atas)
   * transform: scaleY(0); -> Tinggi 0
   * transform-origin: bottom; -> Titik tumbuh dari "line" (border)
  */
  transform: scaleY(0);
  transform-origin: bottom;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 2;
  /* Di atas .nav-title tapi di bawah .progress-bar */
}

/* Saat .nav-item di-hover... */
.nav-item:hover .nav-popup {
  /* 1. Tampilkan popup, tumbuh ke tinggi penuh */
  opacity: 1;
  visibility: visible;
  transform: scaleY(1);
}

.nav-item:hover .nav-title {
  /* 2. Sembunyikan teks asli */
  opacity: 0;
  visibility: hidden;
}

/* Layout isi popup (Judul di atas, Gambar di bawah) */
.popup-title {
  display: block;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: white
}

.popup-image {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
}

/* 5. STYLING NAVIGASI SAMPING (PANAH) - Tidak berubah */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: white;
  width: 44px;
  height: 44px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
  background-color: rgba(0, 0, 0, 0.6);
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 18px;
  font-weight: bold;
}

.slide-desc {
  display: block;
  margin-top: 15px;
  color: white;
  font-size: 17px;
  max-width: 50%;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.6);
}

.button-slider {
  margin-top: 25px;
}
</style>