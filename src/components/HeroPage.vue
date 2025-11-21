<script setup>
defineProps({
    // Props Wajib: Judul Halaman
    title: {
        type: String,
        required: true
    },
    // Props Opsional: Gambar Background
    // Jika tidak diisi, akan pakai gambar default (gedung)
    bgImage: {
        type: String,
        default: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    }
})
</script>

<template>
    <div class="hero-page" :style="{ backgroundImage: `url(${bgImage})` }">

        <div class="hero-overlay"></div>

        <div class="container h-100 position-relative">
            <div class="content-wrapper">
                <h1 class="hero-title">{{ title }}</h1>

                <div class="title-underline"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero-page {
    position: relative;
    width: 100%;
    height: 400px;
    /* Tinggi Hero Image standar sub-page */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: -50px;
    /* Sesuaikan jika Navbar kamu fixed/absolute */
}

/* EFEK GRADASI BIRU (KIRI TEBAL, KANAN TRANSPARAN) */
.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* Gradasi dari Biru Tua (#002b49) ke Transparan */
    background: linear-gradient(to right,
            rgba(0, 43, 73, 1) 0%,
            /* Biru Solid di kiri mentok */
            rgba(0, 43, 73, 0.8) 30%,
            /* Mulai memudar di 30% */
            rgba(0, 43, 73, 0.4) 60%,
            rgba(0, 43, 73, 0) 100%
            /* Transparan total di kanan */
        );
    z-index: 1;
}

.content-wrapper {
    position: relative;
    z-index: 2;
    /* Agar teks di atas overlay */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* Teks rapat bawah */
    padding-bottom: 60px;
    /* Jarak teks dari bawah */
}

.hero-title {
    color: #fff;
    font-weight: 500;
    /* Bold tebal */
    font-size: 42px;
    /* Ukuran besar */
    text-transform: capitalize;
    letter-spacing: 1px;
    margin-bottom: 10px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.title-underline {
    width: 80px;
    height: 4px;
    background-color: #fff;
    /* Atau bisa warna merah/hijau sesuai brand */
    border-radius: 2px;
}

/* Responsiveness */
@media (max-width: 768px) {
    .hero-page {
        height: 300px;
    }

    .hero-title {
        font-size: 2.5rem;
    }
}
</style>