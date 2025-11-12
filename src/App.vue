<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Slider from './components/Slider.vue'
import './assets/main.css'


</script>

<template>
  <Header />
  <main class="flex-grow-1 main-content">
    <RouterView />
  </main>
  <Footer />

</template>


<style>
/* Kita letakkan di blok <style> global (tanpa 'scoped') 
  agar bisa mengatur <main>
*/

/* Beri padding-top pada konten utama kita.
  Sesuaikan '70px' dengan tinggi header Anda.
*/

/* (Anda bisa biarkan CSS global lain di sini jika ada) */
</style>