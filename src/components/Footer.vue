<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer-section">
    <div class="container pt-5 pb-4">
      <div class="row">

        <div class="col-lg-5 col-md-6 mb-4">
          <div class="footer-logo mb-3">
            <img src="../assets/images/logo-light.png" alt="JBB Logo" width="50">

          </div>

          <div class="contact-info text-white fs-7">
            <p class="mb-3">
              Jl. Raya Serpong Kilometer 7 No.50 Blok Q, <br /> Lengkong Karya, Serpong Utara,
              <br />South Tangerang City, Banten 15310
            </p>
            <p class="mb-1">Telepon: (021) 123-4567</p>
            <p class="mb-3">Email: contact@jbb-power.com</p>
          </div>

          <div class="social-icons d-flex gap-3 mt-3">
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-tiktok"></i></a>
            <a href="#"><i class="bi bi-twitter-x"></i></a> <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-youtube"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 col-6 mb-4">
          <h6 class="footer-heading">Tautan</h6>
          <ul class="footer-links list-unstyled">
            <li>
              <RouterLink to="/product">Layanan & Produk</RouterLink>
            </li>
            <li>
              <RouterLink to="/project">Portofolio Proyek</RouterLink>
            </li>
            <li>
              <RouterLink to="/career">Karir</RouterLink>
            </li>
            <li>
              <RouterLink to="/news">Berita & Artikel</RouterLink>
            </li>
            <li>
              <RouterLink to="/safety">K3 / Safety</RouterLink>
            </li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 col-6 mb-4">
          <h6 class="footer-heading">Principal & Partner</h6>
          <ul class="footer-links list-unstyled">
            <li><a href="#">Siemens Indonesia</a></li>
            <li><a href="#">Schneider Electric</a></li>
            <li><a href="#">PLN (Persero)</a></li>
            <li><a href="#">Kementerian ESDM</a></li>
            <li><a href="#">JBB Group</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 text-md-end text-start">
          <div class="wbs-button-wrapper d-flex justify-content-md-end">
            <a href="#" class="wbs-btn">
              <i class="bi bi-megaphone-fill me-2"></i>
              <div class="text-start lh-1">
                <span class="d-block fw-bold">Project Inquiry</span>
                <small style="font-size: 10px;">Get a quote for your project</small>
              </div>
            </a>
          </div>

        </div>
      </div>

      <hr class="footer-divider my-4">

      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start">
          <p class="copyright-text mb-0">
            &copy; Copyright 2025 | PT JBB Javas Berkah Bistari. All Rights Reserved.
            <a href="#" class="text-decoration-none text-white-50 ms-1">Kebijakan Privasi</a>
          </p>
        </div>
        <div class="col-md-6 text-center text-md-end mt-3 mt-md-0">
          <!-- <h3 class="footer-tagline">Energizing Your Business</h3> -->
        </div>
      </div>
    </div>

    <div class="bottom-strip">
      <span class="strip-blue"></span>
      <span class="strip-green"></span>
      <span class="strip-yellow"></span>
      <span class="strip-red"></span>
    </div>
  </footer>
</template>

<style scoped>
/* Import Font Script untuk Tagline agar mirip "Energizing Your Journey" */


.footer-section {
  background-color: #002b49;
  /* Warna Biru Gelap Khas Pertamina/Corporate */
  color: #fff;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
}

.fs-7 {
  font-size: 0.9rem;

}

/* --- HEADINGS & LINKS --- */
.footer-heading {
  font-weight: 700;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  font-size: 1rem;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #e0e0e0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s, padding-left 0.3s;
}

.footer-links a:hover {
  color: #fff;
  padding-left: 5px;
  /* Efek geser sedikit saat hover */
}

/* --- SOCIAL ICONS --- */
.social-icons a {
  color: #fff;
  font-size: 1.2rem;
  transition: transform 0.3s;
}

.social-icons a:hover {
  transform: scale(1.2);
}

/* --- BUTTONS --- */
.wbs-btn {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 8px 15px;
  border-radius: 50px;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s;
}

.wbs-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: #fff;
}

/* --- DIVIDER & COPYRIGHT --- */
.footer-divider {
  border-color: rgba(255, 255, 255, 0.15);
}

.copyright-text {
  font-size: 0.8rem;
  color: #bbb;
}

/* --- TAGLINE SCRIPT --- */
.footer-tagline {
  font-family: 'Dancing Script', cursive;
  /* Font sambung */
  margin-bottom: 0;
  color: #fff;
}

/* --- COLORFUL STRIP BOTTOM --- */
.bottom-strip {
  display: flex;
  height: 8px;
  width: 100%;
}

.strip-blue {
  background-color: #00529c;
  flex: 1;
}

.strip-green {
  background-color: #9dc41a;
  flex: 1;
}

/* Hijau Pertamina */
.strip-yellow {
  background-color: #ffcf00;
  flex: 1;
}

/* Kuning */
.strip-red {
  background-color: #ed1c24;
  flex: 1;
}

.contact-info {
  margin-top: 50px;
}

/* Merah */

/* Responsiveness for center alignment on mobile */
@media (max-width: 768px) {
  .wbs-button-wrapper {
    justify-content: flex-start !important;
  }

  .call-center-badge {
    margin-top: 20px;
  }
}
</style>