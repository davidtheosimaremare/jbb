<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const currentLang = ref('ID')
function setLang(lang) {
  currentLang.value = lang

}


const MenuItems = ref([
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Product', path: '/product' },
  { name: 'Project', path: '/project' },
  { name: 'Career', path: '/career' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
])

// 2. Buat state reaktif untuk melacak status scroll
const isScrolled = ref(false)

// 3. Buat fungsi yang akan dijalankan saat user scroll
const handleScroll = () => {
  // Jika scroll Y lebih dari 0 (artinya sudah scroll), set true
  isScrolled.value = window.scrollY > 0
}

// 4. Tambahkan event listener saat komponen dipasang (mounted)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// 5. Hapus event listener saat komponen dilepas (unmounted)
//    Ini SANGAT PENTING untuk mencegah kebocoran memori!
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>





  <div>

    <div class="top-bar-custom hidden d-xs-none d-lg-block">
      <div class="container">
        <button type="button" class="btn btn-light lang">ID <span class="flag-icon"><img
              src="../assets/images/indo-flag.png" alt=""></span></button>

        <span class="lang lang-en">EN</span>
        <span class="top-bar-contact">Hubungi Kami</span>

      </div>
    </div>


    <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'scrolled': isScrolled }">
      <div class="container">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="icon-search"><i class="bi bi-search"></i></li>
            <li v-for="(item, index) in MenuItems" :key="index" class="nav-item">
              <RouterLink class="nav-link b" :to="item.path">{{ item.name }}</RouterLink>
            </li>
          </ul>
          <a class="navbar-brand" href="#">JBB</a>
        </div>
      </div>
    </nav>
  </div>
</template>



<style scoped>
.nav-item {
  padding-right: 20px;
}

.nav-link {
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
}

/* 1. DEFAULT STATE (Saat di paling atas / tidak di-scroll)
*/
.navbar {
  font-weight: bold;
  z-index: 1000;
  background: transparant;
  transform: translateY(0);
  box-shadow: none;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  margin-top: 50px;
  /* Animasikan KEDUANYA */

}

.navbar.scrolled {
  transform: translateY(0);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 0 50px;
  height: 70px;
  opacity: 1;
  margin-top: 0px;

}

.navbar.scrolled .nav-link {
  color: #000 !important;
}

.navbar.scrolled .icon-search {
  color: #000 !important;
}

.navbar-brand {
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
}

.navbar.scrolled .navbar-brand {
  color: #000 !important;
}

.icon-search {
  margin-top: 7px;
  padding-right: 20px;
  color: #fff;
}


.top-bar-custom {
  position: relative;
  background-color: transparent;
  color: #fff;
  line-height: 30px;
  z-index: 1001;
  margin-top: 20px;

}

.top-bar-custom .btn.lang {
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  font-weight: bold;
  border-radius: 50px;
  padding: 3px 15px;
}

.flag-icon img {
  width: 20px;
  height: auto;
  margin-left: 5px;
  margin-top: -2px;

}

.btn.lang {
  margin-right: 15px;
}

.lang-en {
  cursor: pointer;
  margin-right: 15px;
}
</style>
