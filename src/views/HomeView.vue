<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import Slider from '../components/Slider.vue'
import HeroSection from '@/components/HeroSection.vue'
import Slideshow from '@/components/Slideshow.vue'
import NewsRecently from '@/components/NewsRecently.vue'
import ServiceCard from '@/components/ServiceCard.vue'

const CardHomeItems = ref([
  {
    title: 'Layanan 1',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    img: './src/assets/images/banner-slider-1.jpg',
    hover: '#D9202E'
  },
  {
    title: 'Layanan 2',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    img: '../src/assets/images/slider/banner-1.jpg',
    hover: '#262F50'
  },
  {
    title: 'Layanan 3',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    img: '../src/assets/images/slider/banner-1.jpg',
    hover: '#D9202E'
  },

  {
    title: 'Layanan 4',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    img: '../src/assets/images/slider/banner-1.jpg',
    hover: '#262F50'
  }
])

</script>


<template>
  <div>
    <Slider />


    <div class="container card-home">
      <div class="title-card mb-20">
        <h2 class="title">Jelajahi Ekosistem JBB</h2>
      </div>
      <div class="desc-card w-50 mb-5">
        <p>Kami adalah mitra strategis Anda dalam EPC Power. Kami merancang, membangun, dan memelihara infrastruktur
          kelistrikan yang presisi, andal, dan berkelanjutan untuk mengakselerasi kemajuan Indonesia.</p>
      </div>
      <div class="row">
        <div class="col" v-for="(item, index) in CardHomeItems" :key="index">
          <div class="list-card">
            <ServiceCard :title="item.title" :image-url="item.img" :description="item.description"
              :hover-color="item.hover" />
          </div>
        </div>
      </div>
    </div>

    <HeroSection />
    <Slideshow />
    <NewsRecently />

  </div>

</template>

<style scoped>
.card-home {
  margin-top: 80px;
  margin-bottom: 80px;
  cursor: pointer
}

.title {
  font-weight: 700;
  font-size: 26px;
  color: red;

}

.desc-card p {
  font-size: 18px;
  color: #555555;
  margin-top: 30px;
}
</style>