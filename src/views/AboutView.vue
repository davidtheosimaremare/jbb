<script setup>
import { ref } from 'vue'
// Pastikan path ini sesuai dengan lokasi komponen HeroPage kamu
import HeroPage from '@/components/HeroPage.vue';

// --- 1. ASSETS & DATA HERO ---
const bannerImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'

// --- 2. DATA GALLERY ---
const galleryImages = ref([
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop', // Foto Site
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop', // Foto Panel
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop'  // Foto Team
])

// --- 3. DATA MISI ---
const misiList = ref([
  "Menjalankan bisnis Engineering, Procurement, & Construction (EPC) di bidang kelistrikan dengan standar kualitas global.",
  "Mendukung penyediaan infrastruktur energi nasional yang handal, aman, dan ramah lingkungan.",
  "Melakukan pengembangan teknologi instalasi listrik secara inovatif untuk efisiensi energi maksimal.",
  "Mencetak sumber daya manusia yang kompeten, bersertifikasi, dan menjunjung tinggi integritas.",
  "Menjadi mitra strategis terpercaya bagi sektor industri dan pemerintah dalam pembangunan ketenagalistrikan."
])

// --- 4. DATA LOKASI PROYEK (MAP) ---
const activeLocationId = ref(2) // Default aktif ID 2 (Jawa Barat)
const projectLocations = ref([
  {
    id: 1,
    area: 'Sumatera',
    top: '60%', left: '25%', // Sesuaikan koordinat ini dengan gambar peta nanti
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

// Logic Lightbox
const isLightboxOpen = ref(false)
const activeImage = ref('')

const openLightbox = (imgSrc) => {
  activeImage.value = imgSrc
  isLightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  activeImage.value = ''
  document.body.style.overflow = 'auto'
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

        <div class="row g-4 mb-5">
          <div v-for="(img, index) in galleryImages" :key="index" class="col-md-4">
            <div class="gallery-item" @click="openLightbox(img)">
              <img :src="img" alt="JBB Activity" class="img-fluid rounded-4 shadow-sm">
              <div class="overlay">
                <i class="bi bi-zoom-in"></i>
              </div>
            </div>
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
        <button class="close-btn" @click="closeLightbox">&times;</button>
        <img :src="activeImage" class="lightbox-img" @click.stop>
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
  font-weight: 800;
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

/* --- GALLERY STYLES --- */
.gallery-item {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 1rem;
  height: 250px;
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
  background: linear-gradient(135deg, #00529c, #002b49);
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
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s;
}

.lightbox-img {
  max-width: 90%;
  max-height: 90vh;
  border-radius: 10px;
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
}
</style>