<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Menerima props angka tujuan dan durasi animasi
const props = defineProps({
    target: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        default: 2000 // Durasi default 2 detik
    }
})

const currentNumber = ref(0)
const counterElement = ref(null)
let observer = null

// Fungsi Ease-out (agar melambat saat mendekati angka akhir)
const easeOutQuad = (t) => t * (2 - t)

const startAnimation = () => {
    const startTime = performance.now()
    const startValue = 0
    const endValue = props.target

    const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime
        let progress = elapsedTime / props.duration

        if (progress > 1) progress = 1

        // Hitung angka saat ini berdasarkan progress
        // Menggunakan easing agar lebih natural
        const easeProgress = easeOutQuad(progress)
        currentNumber.value = Math.floor(startValue + (endValue - startValue) * easeProgress)

        if (progress < 1) {
            requestAnimationFrame(animate)
        } else {
            currentNumber.value = endValue // Pastikan angka akhir tepat
        }
    }

    requestAnimationFrame(animate)
}

onMounted(() => {
    // Menggunakan IntersectionObserver agar animasi baru jalan saat discroll
    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startAnimation()
                // Stop observe setelah animasi jalan (biar gak jalan berkali-kali)
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.5 }) // 0.5 artinya animasi jalan saat 50% elemen terlihat

    if (counterElement.value) {
        observer.observe(counterElement.value)
    }
})

onUnmounted(() => {
    if (observer) observer.disconnect()
})
</script>

<template>
    <span ref="counterElement">
        {{ currentNumber }}
    </span>
</template>