<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

import logoLight from '../assets/images/logo-light.png'
import logoColor from '../assets/images/logo.png' // Pastikan file ini ada

const router = useRouter()
const currentLang = ref('ID')

// --- DATA MENU ---
const MenuItems = ref([
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Project Reference', path: '/project' },
  { name: 'Career', path: '/career' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
])

// --- SCROLL LOGIC ---
const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

// --- SEARCH MODAL LOGIC ---
const isSearchOpen = ref(false)
const searchQuery = ref('')
const searchInputRef = ref(null)

const openSearch = () => {
  isSearchOpen.value = true
  document.body.style.overflow = 'hidden'
  nextTick(() => { searchInputRef.value?.focus() })
}

const closeSearch = () => {
  isSearchOpen.value = false
  document.body.style.overflow = 'auto'
  searchQuery.value = ''
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    closeSearch()
    router.push({ path: '/news', query: { q: searchQuery.value } })
  }
}

// --- CONTACT MODAL LOGIC (BARU) ---
const isContactModalOpen = ref(false)

const openContactModal = () => {
  isContactModalOpen.value = true
  // document.body.style.overflow = 'hidden' // Opsional: Matikan scroll body
}

const closeContactModal = () => {
  isContactModalOpen.value = false
  // document.body.style.overflow = 'auto'
}

// --- LIFECYCLE ---
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (isSearchOpen.value) closeSearch()
      if (isContactModalOpen.value) closeContactModal()
    }
  })
})

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

        <span class="top-bar-contact" @click="openContactModal">
          Hubungi Kami
        </span>
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
            <li class="icon-search" @click="openSearch">
              <i class="bi bi-search"></i>
            </li>

            <li v-for="(item, index) in MenuItems" :key="index" class="nav-item">
              <RouterLink class="nav-link b" :to="item.path">{{ item.name }}</RouterLink>
            </li>
          </ul>

          <a class="navbar-brand" href="#">
            <img :src="isScrolled ? logoColor : logoLight" width="50px" height="50px" alt="Logo">
          </a>
        </div>
      </div>
    </nav>

    <Transition name="fade">
      <div v-if="isSearchOpen" class="search-overlay">
        <button class="close-btn" @click="closeSearch"><i class="bi bi-x-lg"></i></button>
        <div class="container h-100 d-flex flex-column justify-content-center align-items-center">
          <div class="search-content text-center w-100">
            <h3 class="text-white mb-4">Apa yang ingin Anda cari?</h3>
            <div class="input-group input-group-lg">
              <input ref="searchInputRef" v-model="searchQuery" type="text" class="form-control search-input"
                placeholder="Ketik kata kunci dan tekan Enter..." @keyup.enter="handleSearch">
            </div>
            <p class="text-white-50 mt-3 small">Tekan ESC untuk menutup</p>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="fade">
      <div v-if="isContactModalOpen" class="contact-overlay" @click.self="closeContactModal">
        <div class="contact-modal-card">
          <button class="modal-close-icon" @click="closeContactModal">&times;</button>

          <h4 class="text-blue fw-bold mb-4 text-center">Pilih Metode Kontak</h4>

          <div class="d-grid gap-3">

            <a href="https://wa.me/6281249009899" target="_blank" class="btn btn-whatsapp py-3">
              <i class="bi bi-whatsapp me-2 fs-5"></i>
              <div>
                <span class="d-block fw-bold">Chat WhatsApp</span>
                <small>+62 812-4900-9899</small>
              </div>
            </a>

            <a href="mailto:info@jbb.co.id" class="btn btn-email py-3">
              <i class="bi bi-envelope-at-fill me-2 fs-5"></i>
              <div>
                <span class="d-block fw-bold">Kirim Email</span>
                <small>info@jbb.co.id</small>
              </div>
            </a>

          </div>

          <div class="text-center mt-4">
            <small class="text-muted">Senin - Jumat | 08.00 - 17.00 WIB</small>
          </div>

        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
/* --- STYLE NAVBAR LAMA (TETAP) --- */
.nav-item {
  padding-right: 20px;
}

.nav-link {
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
}

.navbar {
  font-weight: bold;
  z-index: 1000;
  background: transparent;
  transform: translateY(0);
  box-shadow: none;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  margin-top: 50px;
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
  cursor: pointer;
  transition: transform 0.2s;
}

.icon-search:hover {
  transform: scale(1.1);
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
  font-size: 15px;
}

/* Style Kontak Trigger */
.top-bar-contact {
  font-size: 15px;
  cursor: pointer;
  font-weight: 600;
  transition: color 0.3s;

}

.top-bar-contact:hover {
  color: #e63946;
  text-decoration: none;
}

/* --- SEARCH MODAL STYLES --- */
.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 43, 73, 0.95);
  z-index: 9999;
  backdrop-filter: blur(5px);
}

.search-content {
  max-width: 700px;
  margin: 0 auto;
}

.search-input {
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 0;
  color: #fff;
  font-size: 1.5rem;
  padding: 15px 0;
  text-align: center;
}

.search-input:focus {
  background: transparent;
  box-shadow: none;
  border-bottom-color: #fff;
  color: #fff;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
  font-style: italic;
}

.close-btn {
  position: absolute;
  top: 30px;
  right: 40px;
  background: none;
  border: none;
  color: #fff;
  font-size: 3rem;
  cursor: pointer;
  transition: transform 0.3s;
}

.close-btn:hover {
  transform: rotate(90deg);
  color: #e63946;
}

/* --- CONTACT MODAL STYLES (BARU) --- */
.contact-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  /* Overlay Gelap */
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
}

.contact-modal-card {
  background: #fff;
  width: 90%;
  max-width: 400px;
  border-radius: 15px;
  padding: 30px;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.modal-close-icon {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #999;
  cursor: pointer;
}

.modal-close-icon:hover {
  color: #333;
}

/* Tombol Kontak */
.btn-whatsapp {
  background-color: #25d366;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: transform 0.2s;
}

.btn-whatsapp:hover {
  background-color: #1ebc57;
  color: #fff;
  transform: translateY(-3px);
}

.btn-email {
  background-color: #002b49;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: transform 0.2s;
}

.btn-email:hover {
  background-color: #001f36;
  color: #fff;
  transform: translateY(-3px);
}

.text-blue {
  color: #002b49;
}

/* Animation */
@keyframes popIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>