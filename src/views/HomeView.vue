<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import Slider from '../components/Slider.vue'
import HeroSection from '@/components/HeroSection.vue'
import Slideshow from '@/components/Slideshow.vue'
import NewsRecently from '@/components/NewsRecently.vue'

const CardHomeItems = ref([
  {
    title: 'Card title 1',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    img: 'https://placehold.co/600x400'
  },
  {
    title: 'Card title 2',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    img: 'https://placehold.co/600x400'
  },
  {
    title: 'Card title 3',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    img: 'https://placehold.co/600x400'
  },

  {
    title: 'Card title 4',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    img: 'https://placehold.co/600x400'
  }
])

</script>


<template>
  <div>
    <Slider />


    <div class="container card-home">
      <div class="title-card mb-20">
        <h2>PT Javas Berkah Bistari</h2>
      </div>
      <div class="desc-card w-50 mb-5">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
      </div>
      <div class="row">
        <div class="col" v-for="(item, index) in CardHomeItems" :key="index">
          <div class="card" style="width: 18rem;">
            <img :src="item.img" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.text }}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
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
  margin-top: 100px;
  margin-bottom: 50px;
}
</style>