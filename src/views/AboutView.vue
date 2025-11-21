<script setup>
import { ref } from 'vue'
import HeroPage from '@/components/HeroPage.vue';

// --- IMPORT SWIPER & MODULES ---
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// --- KONFIGURASI SWIPER ---
const modules = [Pagination, Autoplay];

// --- 1. ASSETS & DATA HERO ---
const bannerImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'

// --- 2. DATA GALLERY ---
const galleryImages = ref([
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop', // Site
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop', // Panel
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop', // Team
  'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=1000&auto=format&fit=crop', // Trafo
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop', // Genset
  'https://images.unsplash.com/photo-1531297461136-82lw9z1p?q=80&w=1000&auto=format&fit=crop'      // Extra
])

// --- 3. DATA MISI ---
const misiList = ref([
  "Menjalankan bisnis Engineering, Procurement, & Construction (EPC) di bidang kelistrikan dengan standar kualitas global.",
  "Mendukung penyediaan infrastruktur energi nasional yang handal, aman, dan ramah lingkungan.",
  "Melakukan pengembangan teknologi instalasi listrik secara inovatif untuk efisiensi energi maksimal.",
  "Mencetak sumber daya manusia yang kompeten, bersertifikasi, dan menjunjung tinggi integritas.",
  "Menjadi mitra strategis terpercaya bagi sektor industri dan pemerintah dalam pembangunan ketenagalistrikan."
])

// --- 4. DATA KEPEMIMPINAN (NEW) ---
const leadershipTeam = ref([
  {
    name: 'Sudung Situmorang',
    title: 'Komisaris Utama',
    image: 'https://images.unsplash.com/photo-1507003211169-e69fe25477eb?q=80&w=1000&auto=format&fit=crop&h=300&w=300' // Contoh Pria 1
  },
  {
    name: 'Ahmad Erani Yustika',
    title: 'Komisaris',
    image: 'https://images.unsplash.com/photo-1547425260-76bc4ea63090?q=80&w=1000&auto=format&fit=crop&h=300&w=300' // Contoh Pria 2
  },
  {
    name: 'Panel Barus',
    title: 'Komisaris',
    image: 'https://images.unsplash.com/photo-1600486214812-a16f6b15e4f4?q=80&w=1000&auto=format&fit=crop&h=300&w=300' // Contoh Pria 3
  },
  {
    name: 'Rini Widyastuti',
    title: 'Komisaris',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29329?q=80&w=1000&auto=format&fit=crop&h=300&w=300' // Contoh Wanita 1
  },
  {
    name: 'Budi Santoso',
    title: 'Direktur Utama',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop&h=300&w=300' // Contoh Pria 4
  },
  {
    name: 'Citra Dewi',
    title: 'Direktur Operasional',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&h=300&w=300' // Contoh Wanita 2
  }
])


// --- 5. DATA LOKASI PROYEK (MAP) ---
const activeLocationId = ref(2)
const projectLocations = ref([
  {
    id: 1,
    area: 'Sumatera',
    top: '60%', left: '25%',
    client: 'PT Bukit Asam',
    project: 'Instalasi Genset & Panel Sinkronisasi 2x500kVA',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    area: 'Tangerang Selatan',
    top: '70%', left: '32%',
    client: 'PT Hokiindo Raya (Factory)',
    project: 'Supply & Installation Cubicle MVMDP 20kV',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    area: 'Kalimantan Timur',
    top: '40%', left: '40%',
    client: 'PT Mining Coal Energy',
    project: 'Electrical Maintenance for Conveyor System',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 4,
    area: 'Sulawesi Selatan',
    top: '55%', left: '55%',
    client: 'PT Nickel Smelter Indonesia',
    project: 'Pemasangan Trafo Daya 60MVA & Gardu Induk',
    image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 5,
    area: 'Papua',
    top: '58%', left: '90%',
    client: 'PLN Wilayah Papua',
    project: 'Pembangunan Jaringan Distribusi TM/TR Desa Terlis',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop'
  }
])

// --- METHODS ---
const setActiveLocation = (id) => {
  activeLocationId.value = id
}

// --- LOGIC LIGHTBOX ---
const isLightboxOpen = ref(false)
const activeIndex = ref(0)

const openLightbox = (index) => {
  activeIndex.value = index
  isLightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  if (activeIndex.value < galleryImages.value.length - 1) {
    activeIndex.value++
  } else {
    activeIndex.value = 0
  }
}

const prevImage = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--
  } else {
    activeIndex.value = galleryImages.value.length - 1
  }
}
</script>

<template>
  <div>
    <HeroPage title="Profil Perusahaan" :bgImage="bannerImage" />

    <div class="about-page-wrapper">

      <section class="container py-5">

        <div class="row justify-content-center mb-5">
          <div class="col-lg-10">
            <h2 class="section-title text-center mb-4">Sekilas Tentang JBB Javas Berkah Bistari</h2>
            <div class="content-text text-justify">
              <p>
                PT JBB Javas Berkah Bistari adalah perusahaan yang bergerak di bidang
                <strong>Engineering, Procurement, dan Construction (EPC)</strong> serta kontraktor instalasi listrik
                yang berdedikasi untuk memberikan solusi energi terbaik di Indonesia. Sejak didirikan,
                kami telah dipercaya menangani berbagai proyek strategis mulai dari pemasangan Gardu Induk,
                panel LVMDP/MVMDP, hingga instalasi energi terbarukan.
              </p>
              <p>
                Didukung oleh tim ahli yang berpengalaman dan tersertifikasi, JBB berkomitmen untuk
                menghadirkan kualitas pekerjaan yang presisi, aman, dan tepat waktu. Kami memegang teguh
                standar keselamatan kerja (K3) dan integritas profesional dalam setiap langkah operasional kami,
                menjadikan kami mitra terpercaya bagi sektor industri, manufaktur, dan komersial.
              </p>
            </div>
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-12">
            <swiper :slidesPerView="1" :spaceBetween="20" :loop="true" :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }" :pagination="{ clickable: true }" :breakpoints="{
                '640': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '768': {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                '1024': {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }" :modules="modules" class="jbb-gallery-swiper">
              <swiper-slide v-for="(img, index) in galleryImages" :key="index">
                <div class="gallery-item" @click="openLightbox(index)">
                  <img :src="img" alt="JBB Activity" class="img-fluid shadow-sm">
                  <div class="overlay">
                    <i class="bi bi-zoom-in"></i>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="row justify-content-center mb-5">
          <div class="col-lg-10 text-center">
            <h3 class="section-subtitle mb-3">Semangat Membangun Negeri</h3>
            <blockquote class="quote-text fst-italic mb-4">
              "Precision in Engineering, Excellence in Execution"
            </blockquote>
            <p class="text-muted">
              Slogan ini bukan sekadar kata-kata, melainkan cerminan etos kerja kami.
              <strong>"Precision"</strong> menggambarkan ketelitian kami dalam setiap perhitungan teknis,
              sementara <strong>"Excellence"</strong> adalah janji kami untuk memberikan hasil akhir
              yang melampaui ekspektasi klien melalui inovasi berkelanjutan.
            </p>
          </div>
        </div>
      </section>

      <section class="vision-mission-section py-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-12">

              <div class="jbb-card visi-card mb-4">
                <h3 class="card-heading">Visi</h3>
                <div class="visi-content d-flex">
                  <div class="visi-accent-line"></div>
                  <p class="visi-text">
                    Menjadi Perusahaan Kontraktor EPC & Kelistrikan Berkelas Dunia yang Terdepan dalam Inovasi,
                    Keandalan, dan Kualitas Pelayanan.
                  </p>
                </div>
              </div>

              <div class="jbb-card misi-card">
                <h3 class="card-heading">Misi</h3>
                <div class="misi-list-wrapper">
                  <div v-for="(item, index) in misiList" :key="index" class="misi-item">
                    <div class="misi-number">
                      <span>{{ index + 1 }}</span>
                    </div>
                    <div class="misi-text">
                      {{ item }}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section class="leadership-section py-5 bg-light">
        <div class="container">
          <div class="text-center mb-5">
            <h2 class="section-title">Kepemimpinan Perusahaan</h2>
            <p class="text-muted">Tim profesional yang memimpin JBB menuju inovasi dan keunggulan</p>
          </div>

          <div class="row g-4 justify-content-center">
            <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="(person, index) in leadershipTeam" :key="index">
              <div class="leader-card text-center h-100">
                <div class="leader-image-wrapper mx-auto mb-3">
                  <img :src="person.image" :alt="person.name" class="img-fluid rounded-circle">
                </div>
                <h5 class="leader-name">{{ person.name }}</h5>
                <p class="leader-title text-muted">{{ person.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="project-map-section py-5">
        <div class="container">
          <div class="text-center mb-5">
            <h2 class="section-title">Jangkauan Proyek Kami</h2>
            <p class="text-muted">Melayani kebutuhan energi dan konstruksi listrik di seluruh pelosok Nusantara</p>
          </div>

          <div class="map-wrapper">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Geographical_units_of_Indonesia.svg/1200px-Geographical_units_of_Indonesia.svg.png"
              alt="Peta Indonesia" class="map-image">

            <div v-for="loc in projectLocations" :key="loc.id" class="map-pin-container"
              :style="{ top: loc.top, left: loc.left }" @mouseenter="setActiveLocation(loc.id)"
              @click="setActiveLocation(loc.id)">
              <div class="pin-pulse" :class="{ active: activeLocationId === loc.id }">
                <div class="pin-core"></div>
                <div class="pin-ring"></div>
              </div>

              <div class="project-popup card shadow" :class="{ show: activeLocationId === loc.id }">
                <div class="popup-img-wrapper">
                  <img :src="loc.image" alt="Project Photo">
                  <div class="popup-category">Project</div>
                </div>
                <div class="popup-body">
                  <h6 class="client-name">{{ loc.client }}</h6>
                  <p class="project-name">{{ loc.project }}</p>
                  <small class="location-name"><i class="bi bi-geo-alt-fill me-1"></i> {{ loc.area }}</small>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <div v-if="isLightboxOpen" class="lightbox-overlay" @click="closeLightbox">

        <button class="nav-btn prev-btn" @click.stop="prevImage">
          <i class="bi bi-chevron-left"></i>
        </button>

        <img :src="galleryImages[activeIndex]" class="lightbox-img" @click.stop>

        <button class="nav-btn next-btn" @click.stop="nextImage">
          <i class="bi bi-chevron-right"></i>
        </button>

        <button class="close-btn" @click="closeLightbox">&times;</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* --- VARIABLES & GENERAL --- */
:root {
  --jbb-blue: #002b49;
  --jbb-light-blue: #00529c;
}

.section-title {
  color: #002b49;
  font-weight: 600;
  margin-top: 5px;
}

.section-subtitle {
  color: #00529c;
  font-weight: 700;
}

.content-text p {
  line-height: 1.8;
  color: #444;
  font-size: 1.05rem;
}

.text-justify {
  text-align: justify;
}

.quote-text {
  font-size: 1.5rem;
  color: #002b49;
  font-weight: 600;
}

/* --- SWIPER GALLERY STYLES --- */
.jbb-gallery-swiper {
  width: 100%;
  padding-bottom: 50px;
}

.swiper-slide {
  height: 250px;
}

.gallery-item {
  position: relative;
  cursor: grab;
  overflow: hidden;
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.gallery-item:active {
  cursor: grabbing;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.overlay {
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
  transition: opacity 0.3s ease;
}

.overlay i {
  color: #fff;
  font-size: 2rem;
}

.gallery-item:hover .overlay {
  opacity: 1;
}

/* --- VISION & MISSION --- */
.vision-mission-section {
  background-color: #f8f9fa;
  border-radius: 20px 20px 0 0;
}

.jbb-card {
  background: #fff;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease;
}

.jbb-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.card-heading {
  color: #00529c;
  font-weight: 700;
  font-size: 1.8rem;
  margin-bottom: 30px;
}

/* Style Visi */
.visi-content {
  align-items: stretch;
}

.visi-accent-line {
  width: 6px;
  background: linear-gradient(to bottom, #9dc41a, #00529c);
  border-radius: 50px;
  margin-right: 25px;
  flex-shrink: 0;
}

.visi-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  line-height: 1.6;
  margin: 0;
}

/* Style Misi */
.misi-item {
  display: flex;
  align-items: flex-start;
  padding: 20px 0;
  border-bottom: 1px dashed #eee;
}

.misi-item:last-child {
  border-bottom: none;
}

.misi-number {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #d32f2f, #7f0000);
  color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 20px;
  box-shadow: 0 4px 10px rgba(0, 82, 156, 0.3);
}

.misi-text {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  padding-top: 5px;
}

/* --- LEADERSHIP SECTION (NEW) --- */
.leadership-section {
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: #f0f2f5;
  /* Warna latar belakang abu-abu muda */
}

.leader-card {
  background: #fff;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.leader-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.leader-image-wrapper {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
  /* Warna latar belakang untuk gambar profil */
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
}

.leader-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%);
  /* Sedikit efek grayscale */
  transition: filter 0.3s ease;
}

.leader-card:hover .leader-image-wrapper img {
  filter: grayscale(0%);
  /* Warna asli saat hover */
}

.leader-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--jbb-blue);
  margin-top: 20px;
  margin-bottom: 5px;
}

.leader-title {
  font-size: 0.95rem;
  color: #666;
  font-weight: 500;
}


/* --- MAP SECTION STYLES --- */
.project-map-section {
  background: #fff;
  overflow: hidden;
}

.map-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16/6;
  background-color: #f8f9fa;
  border-radius: 20px;
  padding: 20px;
}

.map-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.4;
  filter: grayscale(100%) brightness(0.8);
}

.map-pin-container {
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 10;
}

.pin-pulse {
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pin-core {
  width: 12px;
  height: 12px;
  background-color: #00529c;
  border-radius: 50%;
  z-index: 2;
  transition: all 0.3s;
  border: 2px solid #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.pin-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 82, 156, 0.4);
  border-radius: 50%;
  z-index: 1;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(3);
    opacity: 0;
  }
}

.pin-pulse.active .pin-core {
  background-color: #e63946;
  transform: scale(1.2);
}

.pin-pulse.active .pin-ring {
  background-color: rgba(230, 57, 70, 0.4);
}

/* Popup Map */
.project-popup {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  width: 260px;
  background: #fff;
  border-radius: 10px;
  border: none;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 20;
  pointer-events: none;
}

.project-popup::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 8px 8px 0;
  border-style: solid;
  border-color: #fff transparent transparent transparent;
}

.project-popup.show {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}

.popup-img-wrapper {
  position: relative;
  height: 140px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
}

.popup-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.popup-category {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 43, 73, 0.8);
  color: #fff;
  font-size: 0.7rem;
  padding: 3px 10px;
  border-radius: 20px;
  font-weight: bold;
}

.popup-body {
  padding: 15px;
  text-align: center;
}

.client-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: #002b49;
  margin-bottom: 5px;
  line-height: 1.3;
}

.project-name {
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 10px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.location-name {
  color: #999;
  font-size: 0.8rem;
}

/* --- LIGHTBOX --- */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.92);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s;
}

.lightbox-img {
  max-width: 80%;
  max-height: 85vh;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
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
  opacity: 0.8;
  transition: opacity 0.2s;
}

.close-btn:hover {
  opacity: 1;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10001;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.prev-btn {
  left: 20px;
}

.next-btn {
  right: 20px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .text-justify {
    text-align: left;
  }

  .quote-text {
    font-size: 1.2rem;
  }

  .jbb-card {
    padding: 25px;
  }

  .visi-text {
    font-size: 1.1rem;
  }

  .map-wrapper {
    aspect-ratio: 4/5;
    overflow-x: auto;
  }

  .map-image {
    width: 250%;
    max-width: none;
    transform: translateX(-30%);
  }

  .swiper-slide {
    height: 300px;
  }

  /* Mobile Lightbox Adjustments */
  .lightbox-img {
    max-width: 100%;
  }

  .prev-btn {
    left: 5px;
  }

  .next-btn {
    right: 5px;
  }

  /* Mobile Leadership Adjustments */
  .leader-image-wrapper {
    width: 120px;
    height: 120px;
  }
}
</style>