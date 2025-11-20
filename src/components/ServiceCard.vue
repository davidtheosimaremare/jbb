<template>
    <div class="service-card-wrapper">
        <div class="card service-card" :style="cardStyle" @mouseover="isHovered = true" @mouseleave="isHovered = false"
            :class="{ 'card-hovered': isHovered }">

            <h5 class="card-title-custom">{{ title }}</h5>

            <p class="card-description-custom">{{ description }}</p>

            <div class="button-content">
                <span class="readmore">Selengkapnya</span>
                <i class="bi bi-arrow-up-right card-icon-custom"></i>
            </div>

        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

// Definisikan props
const props = defineProps({
    title: {
        type: String,
        default: 'Layanan Retail'
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'Memberi energi untuk kehidupan Anda dengan produk berkualitas.'
    },
    hoverColor: {
        type: String,
        default: '#0047AB' // Warna biru sebagai default
    },
    // Prop baru untuk opacity overlay
    hoverOpacity: {
        type: [Number, String], // Bisa number atau string (misal '0.8')
        default: 0.8 // Default opacity 80%
    }
});

const isHovered = ref(false);

const cardStyle = computed(() => {
    // Gambar latar selalu ada
    return {
        backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.2) 100%),
      url(${props.imageUrl})
    `
    };
});
</script>

<style scoped>
/* Wrapper */
.service-card-wrapper {
    max-width: 350px;

}

.service-card {
    /* Ukuran & Tampilan */
    min-height: 400px;
    border-radius: 1rem;
    border: none;
    overflow: hidden;

    /* Background */
    background-size: cover;
    background-position: center bottom;

    /* Positioning */
    position: relative;
    /* Penting untuk pseudo-element ::before */
    color: white;

    /* Transisi untuk properti card secara umum */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/* Pseudo-element untuk overlay warna */
.service-card::before {
    content: '';
    /* Wajib ada */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--hover-color);
    /* Akan diisi dari CSS custom property */
    opacity: 0;
    /* Awalnya transparan penuh */
    transition: opacity 0.5s ease;
    /* Transisi saat opacity berubah */
    z-index: 1;
    /* Di atas background, di bawah teks */
}

/* Saat di-hover, tampilkan overlay */
.service-card.card-hovered::before {
    opacity: var(--hover-opacity);
    /* Menggunakan opacity dari prop */
}

/* Custom properties untuk hover-color dan hover-opacity */
/* Ini memungkinkan kita menggunakan nilai prop Vue di CSS */
.service-card.card-hovered {
    /* Mengatur custom property CSS pada elemen yang di-hover */
    --hover-color: v-bind('props.hoverColor');
    /* Bind langsung ke prop */
    --hover-opacity: v-bind('props.hoverOpacity');
    /* Bind langsung ke prop */
}


/* Judul */
.card-title-custom {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    font-weight: 700;
    font-size: 20px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    z-index: 2;

    /* Di atas overlay */
}

/* Deskripsi */
.card-description-custom {
    position: absolute;
    bottom: 4.5rem;
    left: 1.5rem;
    right: 1.5rem;
    font-size: 16px;
    line-height: 1.5;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    z-index: 2;
    /* Di atas overlay */

    opacity: 0;
    /* Default tidak terlihat */
    transform: translateY(10px);
    /* Mulai sedikit ke bawah */
    transition: opacity 0.4s ease-out, transform 0.4s ease-out;

}

/* Saat card di-hover, tampilkan deskripsi */
.service-card.card-hovered .card-description-custom {
    opacity: 1;
    transform: translateY(0);
    /* Kembali ke posisi normal */
    transition-delay: 0.1s;
}



/* Ikon */
.card-icon-custom {
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    font-size: 20px;
    font-weight: bold;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    z-index: 2;
    /* Di atas overlay */
}

.service-card.card-hovered .readmore {

    transform: translateY(0);
}

.readmore {
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    font-size: 16px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    z-index: 2;

    transform: translateY(50px);

    /* Mulai sedikit ke bawah */
    transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}
</style>