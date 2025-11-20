<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import HeroPage from '@/components/HeroPage.vue'

// --- 1. SETUP IMAGE ASSETS ---
// Gambar background Hero
const heroBg = 'https://images.unsplash.com/photo-1503428593586-e225b476d386?q=80&w=2070&auto=format&fit=crop'
// Gambar Peta (Sesuai Request)
const mapImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Geographical_units_of_Indonesia.svg/1200px-Geographical_units_of_Indonesia.svg.png'


// --- 2. DATA PROYEK (DUMMY BANYAK UNTUK PAGINATION) ---
// Saya buat 12 data agar bisa dibagi menjadi 2 halaman (6 per halaman)
const allProjects = ref([
    {
        id: 1,
        title: 'Instalasi Genset & Panel Sinkronisasi 2x500kVA',
        client: 'PT Bukit Asam',
        location: 'Sumatera Selatan',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop',
        link: '/project/1'
    },
    {
        id: 2,
        title: 'Supply & Installation Cubicle MVMDP 20kV',
        client: 'PT Hokiindo Raya',
        location: 'Tangerang Selatan',
        image: 'https://images.unsplash.com/photo-1565514020176-822882e80472?q=80&w=600&auto=format&fit=crop',
        link: '/project/2'
    },
    {
        id: 3,
        title: 'Electrical Maintenance for Conveyor System',
        client: 'PT Mining Coal Energy',
        location: 'Kalimantan Timur',
        image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=600&auto=format&fit=crop',
        link: '/project/3'
    },
    {
        id: 4,
        title: 'Pemasangan Trafo Daya 60MVA & Gardu Induk',
        client: 'PT Nickel Smelter Indonesia',
        location: 'Sulawesi Selatan',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop',
        link: '/project/4'
    },
    {
        id: 5,
        title: 'Pembangunan Jaringan Distribusi TM/TR Desa Terlis',
        client: 'PLN Wilayah Papua',
        location: 'Papua',
        image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=600&auto=format&fit=crop',
        link: '/project/5'
    },
    {
        id: 6,
        title: 'Retrofit Panel LVMDP Gedung Bertingkat',
        client: 'Bank Central Asia',
        location: 'Jakarta Pusat',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600&auto=format&fit=crop',
        link: '/project/6'
    },
    {
        id: 7,
        title: 'Instalasi Solar Panel Rooftop 1MWp',
        client: 'PT Green Factory',
        location: 'Cikarang',
        image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop',
        link: '/project/7'
    },
    {
        id: 8,
        title: 'Maintenance Trafo Distribusi Tahunan',
        client: 'PLN Disjaya',
        location: 'Jakarta',
        image: 'https://images.unsplash.com/photo-1621905252507-b35492ccba0b?q=80&w=600&auto=format&fit=crop',
        link: '/project/8'
    },
    {
        id: 9,
        title: 'Installation of Capacitor Bank 1000kVAR',
        client: 'PT Steel Indo',
        location: 'Surabaya',
        image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=600&auto=format&fit=crop',
        link: '/project/9'
    },
    {
        id: 10,
        title: 'Underground Cable Installation 150kV',
        client: 'Kementerian PUPR',
        location: 'Bali',
        image: 'https://images.unsplash.com/photo-1590959651367-692f36f055ce?q=80&w=600&auto=format&fit=crop',
        link: '/project/10'
    },
    {
        id: 11,
        title: 'Smart Home Electrical Installation',
        client: 'Apartemen Mewah Indah',
        location: 'Medan',
        image: 'https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=600&auto=format&fit=crop',
        link: '/project/11'
    },
    {
        id: 12,
        title: 'Grounding System Improvement',
        client: 'Data Center Indonesia',
        location: 'Bogor',
        image: 'https://images.unsplash.com/photo-1563770095-3959ca3358f4?q=80&w=600&auto=format&fit=crop',
        link: '/project/12'
    }
])


// --- 3. LOGIC PAGINATION ---
const currentPage = ref(1)
const itemsPerPage = 6 // Menampilkan 6 proyek per halaman

// Menghitung total halaman
const totalPages = computed(() => Math.ceil(allProjects.value.length / itemsPerPage))

// Mengambil data proyek sesuai halaman aktif
const paginatedProjects = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return allProjects.value.slice(start, end)
})

// Fungsi ganti halaman
const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++
}
const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--
}
const setPage = (page) => {
    currentPage.value = page
}


// --- 4. DATA MAP & LOGIC (SESUAI REQUEST) ---
const activeLocationId = ref(null)

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

const setActiveLocation = (id) => {
    activeLocationId.value = id
}
</script>

<template>
    <div class="project-page">

        <HeroPage title="Proyek & Referensi" :bgImage="heroBg" />

        <section class="project-list-section py-5">
            <div class="container">

                <div class="section-header mb-5">
                    <h3 class="text-blue fw-bold">Daftar Proyek Terkini</h3>
                    <p class="text-muted">JBB telah menyelesaikan berbagai proyek strategis di seluruh Indonesia.</p>
                </div>

                <div class="row g-4">
                    <div v-for="item in paginatedProjects" :key="item.id" class="col-md-6 col-lg-4">
                        <div class="project-card h-100">
                            <div class="card-img-wrapper">
                                <img :src="item.image" :alt="item.title">
                                <div class="client-badge">{{ item.client }}</div>
                            </div>
                            <div class="card-content">
                                <h5 class="project-title">{{ item.title }}</h5>
                                <p class="project-location text-muted mb-3">
                                    <i class="bi bi-geo-alt-fill me-1"></i> {{ item.location }}
                                </p>
                                <RouterLink :to="item.link" class="read-more-link">
                                    Selengkapnya <i class="bi bi-arrow-right-short"></i>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pagination-wrapper mt-5 d-flex justify-content-center align-items-center gap-2">

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

        <section class="map-section py-5 bg-light">
            <div class="container">

                <div class="text-center mb-5">
                    <h3 class="text-blue fw-bold">Peta Sebaran Proyek Nasional</h3>
                    <p class="text-muted">Jangkauan layanan kami mencakup berbagai pulau besar di Indonesia</p>
                </div>

                <div class="map-container-wrapper">
                    <div class="map-box">
                        <img :src="mapImage" alt="Peta Indonesia" class="map-image">

                        <div v-for="loc in projectLocations" :key="loc.id" class="map-pin-wrapper"
                            :style="{ top: loc.top, left: loc.left }" @mouseenter="setActiveLocation(loc.id)"
                            @click="setActiveLocation(loc.id)">
                            <div class="pin-pulse" :class="{ active: activeLocationId === loc.id }">
                                <div class="pin-core"></div>
                                <div class="pin-ring"></div>
                            </div>

                            <div class="map-popup card shadow" :class="{ show: activeLocationId === loc.id }">
                                <div class="popup-header">
                                    <img :src="loc.image" alt="Project" class="popup-img">
                                </div>
                                <div class="popup-body">
                                    <h6 class="fw-bold text-blue mb-1">{{ loc.client }}</h6>
                                    <p class="small text-dark mb-1 lh-sm">{{ loc.project }}</p>
                                    <small class="text-muted"><i class="bi bi-geo-alt"></i> {{ loc.area }}</small>
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
/* --- TYPOGRAPHY & COLORS --- */
.text-blue {
    color: #002b49;
}

.bg-light {
    background-color: #f9f9f9 !important;
}

/* --- PROJECT CARD STYLES --- */
.project-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #eee;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.card-img-wrapper {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.card-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.project-card:hover .card-img-wrapper img {
    transform: scale(1.05);
}

.client-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(0, 43, 73, 0.85);
    color: #fff;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
}

.card-content {
    padding: 20px;
}

.project-title {
    font-weight: 700;
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 8px;
    line-height: 1.4;
    /* Batasi judul 2 baris */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.read-more-link {
    text-decoration: none;
    color: #00529c;
    font-weight: 600;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: gap 0.3s;
}

.read-more-link:hover {
    gap: 8px;
}

/* --- PAGINATION STYLES --- */
.page-btn {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    /* Kotak rounded */
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
    background: #f0f8ff;
    border-color: #00529c;
    color: #00529c;
}

.page-btn.active {
    background: #00529c;
    border-color: #00529c;
    color: #fff;
}

.page-btn:disabled {
    background: #f5f5f5;
    color: #ccc;
    cursor: not-allowed;
}

/* --- MAP SECTION STYLES --- */
.map-container-wrapper {
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.map-box {
    position: relative;
    width: 100%;
    /* Menggunakan aspect-ratio sesuai gambar map wikimedia yang melebar */
    aspect-ratio: 2/1;
}

.map-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* Sedikit transparansi agar pin menonjol */
    opacity: 0.5;
    filter: grayscale(100%) contrast(1.2);
}

.map-pin-wrapper {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 10;
    cursor: pointer;
}

/* Pin Styles (Pulse Animation) */
.pin-pulse {
    position: relative;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pin-core {
    width: 14px;
    height: 14px;
    background: #00529c;
    border: 2px solid #fff;
    border-radius: 50%;
    z-index: 2;
    transition: all 0.3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.pin-ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 82, 156, 0.3);
    border-radius: 50%;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    100% {
        transform: scale(2.5);
        opacity: 0;
    }
}

.pin-pulse.active .pin-core {
    background: #e63946;
    /* Merah saat aktif */
    transform: scale(1.2);
}

.pin-pulse.active .pin-ring {
    background: rgba(230, 57, 70, 0.3);
}

/* Map Popup */
.map-popup {
    position: absolute;
    bottom: 35px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    width: 220px;
    background: #fff;
    border-radius: 10px;
    border: none;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    pointer-events: none;
    z-index: 20;
}

.map-popup::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px 8px 0;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
}

.map-popup.show {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
    pointer-events: auto;
}

.popup-header {
    height: 100px;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
}

.popup-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.popup-body {
    padding: 12px;
    text-align: center;
}

/* Responsive Map */
@media (max-width: 768px) {
    .map-box {
        aspect-ratio: 4/3;
        /* Map lebih tinggi di HP */
        overflow: hidden;
    }

    .map-image {
        width: 200%;
        /* Zoom in peta di HP */
        max-width: none;
        transform: translateX(-25%);
        /* Geser agar tengah indo terlihat */
    }

    /* Di HP 2 kolom grid proyek */
    .project-card {
        margin-bottom: 20px;
    }
}
</style>