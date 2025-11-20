<script setup>
import { computed } from 'vue';

// Mendefinisikan props yang diterima komponen
const props = defineProps({
    // Prop untuk tujuan navigasi (wajib ada)
    to: {
        type: [String, Object],
        required: true
    },
    // Prop untuk varian tombol: 'outline' atau 'solid'
    variant: {
        type: String,
        default: 'outline', // Default ke 'outline'
        validator: (value) => ['outline', 'solid'].includes(value)
    },
    // Prop untuk warna: 'navy' atau 'red'
    color: {
        type: String,
        default: 'navy', // Default ke 'navy'
        validator: (value) => ['navy', 'red', 'white'].includes(value)
    }
});

// Computed property untuk menghasilkan kelas CSS secara dinamis
const buttonClasses = computed(() => {
    return [
        `btn-${props.variant}`, // Menghasilkan 'btn-outline' or 'btn-solid'
        `btn-color-${props.color}` // Menghasilkan 'btn-color-navy' or 'btn-color-red'
    ];
});
</script>




<template>
    <router-link :to="to" class="btn" :class="buttonClasses">
        <slot /> <span class="btn-icon"><i class="bi bi-arrow-up-right"></i></span>
    </router-link>
</template>


<style scoped>
/* Definisi Warna Global.
  Anda bisa pindahkan ini ke file CSS global Anda jika perlu.
*/
:root {
    --color-navy: #262F50;
    --color-red: #FD0000;
    --color-white: #FFFFFF;
}

/* --- Base Button Style --- */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.6em 1.2em;
    border: 2px solid;
    /* Border diatur oleh varian */
    border-radius: 4px;
    /* Anda bisa sesuaikan */
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    white-space: nowrap;
    border-radius: 100px;
}

.btn-icon {
    margin-left: 0.5em;
    transition: transform 0.3s ease;
}

/* Efek hover panah bergeser */
.btn:hover .btn-icon {
    transform: translateX(4px);
}

/* --- STYLE 1: OUTLINE (Request Pertama) ---
  Default: Transparan, Border Putih, Teks Putih
  Hover: Background Sesuai Prop (navy/red), Border & Teks Tetap Putih
*/
.btn-outline {
    background-color: transparent;
    border-color: white;
    color: white;

}

/* Hover Outline - Navy */
.btn-outline.btn-color-navy:hover {
    background-color: var(--color-navy);
    border-color: var(--color-navy);
    color: var(--color-white);
}

/* Hover Outline - Red */
.btn-outline.btn-color-red:hover {
    background-color: #FD0000;
    border-color: #FD0000;
    color: white;
}

/* --- STYLE 2: SOLID (Request Kedua) ---
  Default: Background (navy/red), Border (navy/red), Teks Putih
  Hover: Transparan, Border (navy/red), Teks (navy/red)
  (Catatan: Varian ini paling baik digunakan di atas background terang)
*/

/* Solid - Navy */
.btn-solid.btn-color-navy {
    background-color: var(--color-navy);
    border-color: var(--color-navy);
    color: var(--color-white);
}

.btn-solid.btn-color-navy:hover {
    background-color: transparent;
    border-color: var(--color-navy);
    color: var(--color-navy);
}

/* Solid - Red */
.btn-solid.btn-color-red {
    background-color: var(--color-red);
    border-color: var(--color-red);
    color: var(--color-white);
}

.btn-solid.btn-color-red:hover {
    background-color: transparent;
    border-color: var(--color-red);
    color: var(--color-red);
}
</style>