<script setup>
import { ref, onMounted } from 'vue'
import HeroPage from '@/components/HeroPage.vue'

// --- ASSETS ---
const heroBg = 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop'

// --- FORM LOGIC (CLIENT INQUIRY) ---
const form = ref({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    location: '',
    message: '',
    file: null
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const handleFileUpload = (event) => {
    form.value.file = event.target.files[0]
}

const submitForm = () => {
    isSubmitting.value = true

    // Simulasi kirim ke Sales/Engineering
    setTimeout(() => {
        isSubmitting.value = false
        submitSuccess.value = true

        // Reset form
        form.value = {
            name: '', company: '', email: '', phone: '',
            serviceType: '', location: '', message: '', file: null
        }

        setTimeout(() => { submitSuccess.value = false }, 5000)
    }, 2000)
}

onMounted(() => {
    window.scrollTo(0, 0)
})
</script>

<template>
    <div class="contact-page">

        <HeroPage title="Hubungi Kami" :bgImage="heroBg" />

        <div class="container py-5">
            <div class="row gx-lg-5">

                <div class="col-lg-5 mb-5 mb-lg-0">
                    <div class="contact-info-wrapper">
                        <h2 class="section-title mb-3">Konsultasi Proyek</h2>
                        <p class="text-muted mb-4">
                            Butuh solusi kelistrikan untuk pabrik atau gedung Anda? Tim engineer kami siap memberikan
                            solusi teknis dan penawaran harga terbaik.
                        </p>

                        <div class="info-item d-flex mb-4">
                            <div class="icon-box">
                                <i class="bi bi-geo-alt-fill"></i>
                            </div>
                            <div class="text-box">
                                <h5 class="fw-bold mb-1">Kantor Pusat</h5>
                                <p class="text-muted mb-0">
                                    Jl. Raya Industri No. 88, Cikarang Selatan<br>
                                    Kawasan Industri Jababeka II<br>
                                    Bekasi, Jawa Barat 17530
                                </p>
                            </div>
                        </div>

                        <div class="info-item d-flex mb-4">
                            <div class="icon-box">
                                <i class="bi bi-whatsapp"></i>
                            </div>
                            <div class="text-box">
                                <h5 class="fw-bold mb-1">Hotline Sales & Teknik</h5>
                                <p class="text-muted mb-0">
                                    <a href="https://wa.me/628123456789" target="_blank"
                                        class="text-decoration-none text-muted hover-blue">
                                        +62 812-3456-7890 (Pak Budi - Sales)
                                    </a><br>
                                    <a href="https://wa.me/628129876543" target="_blank"
                                        class="text-decoration-none text-muted hover-blue">
                                        +62 812-9876-5432 (Technical Support)
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div class="info-item d-flex mb-4">
                            <div class="icon-box">
                                <i class="bi bi-envelope-fill"></i>
                            </div>
                            <div class="text-box">
                                <h5 class="fw-bold mb-1">Email Penawaran</h5>
                                <p class="text-muted mb-0">
                                    <a href="mailto:sales@jbb.co.id"
                                        class="text-decoration-none text-muted hover-blue">sales@jbb.co.id</a><br>
                                    <a href="mailto:engineering@jbb.co.id"
                                        class="text-decoration-none text-muted hover-blue">engineering@jbb.co.id</a>
                                </p>
                            </div>
                        </div>

                        <div class="map-container mt-5 rounded-4 overflow-hidden shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.891526246236!2d107.13937737499086!3d-6.278001993710869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6984c8a9eb226d%3A0x7320466094654c4!2sKawasan%20Industri%20Jababeka!5e0!3m2!1sen!2sid!4v1708328472123!5m2!1sen!2sid"
                                width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                    </div>
                </div>

                <div class="col-lg-7">
                    <div class="form-wrapper p-5 rounded-4 shadow-sm bg-white border">

                        <div class="mb-4">
                            <h3 class="form-title">Sampaikan Kebutuhan Anda</h3>
                            <p class="text-muted">
                                Isi formulir di bawah ini untuk mendapatkan <strong>Penawaran Harga (Quotation)</strong>
                                atau <strong>Survei Lokasi Gratis</strong>.
                            </p>
                        </div>

                        <div v-if="submitSuccess" class="alert alert-success d-flex align-items-center" role="alert">
                            <i class="bi bi-check-circle-fill me-2"></i>
                            <div>Permintaan Anda terkirim! Tim Marketing kami akan menghubungi Anda via WhatsApp/Email
                                segera.</div>
                        </div>

                        <form @submit.prevent="submitForm">

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Nama Lengkap</label>
                                    <input v-model="form.name" type="text" class="form-control" placeholder="Bpk/Ibu..."
                                        required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Nama Perusahaan / Pabrik</label>
                                    <input v-model="form.company" type="text" class="form-control" placeholder="PT..."
                                        required>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">No. WhatsApp (Aktif)</label>
                                    <input v-model="form.phone" type="tel" class="form-control" placeholder="08..."
                                        required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Email</label>
                                    <input v-model="form.email" type="email" class="form-control"
                                        placeholder="email@kantor.com" required>
                                </div>
                            </div>

                            <hr class="my-4 text-muted opacity-25">

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Jenis Kebutuhan</label>
                                    <select v-model="form.serviceType" class="form-select" required>
                                        <option value="" disabled selected>Pilih Layanan...</option>
                                        <option value="Instalasi Baru">Instalasi Baru (Gardu/Panel)</option>
                                        <option value="Maintenance">Maintenance / Perawatan Rutin</option>
                                        <option value="Troubleshooting">Perbaikan / Troubleshooting</option>
                                        <option value="Panel Maker">Pemesanan Panel (LVMDP/Capacitor)</option>
                                        <option value="Supply Material">Supply Material Listrik</option>
                                        <option value="Consultation">Konsultasi Desain / Audit Energi</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Lokasi Proyek</label>
                                    <input v-model="form.location" type="text" class="form-control"
                                        placeholder="Kota / Kawasan Industri..." required>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label fw-bold">
                                    Lampiran (Opsional)
                                    <i class="bi bi-info-circle ms-1 text-muted" data-bs-toggle="tooltip"
                                        title="Upload Single Line Diagram (SLD), Foto Lokasi, atau BOQ"></i>
                                </label>
                                <input @change="handleFileUpload" type="file" class="form-control"
                                    accept=".pdf,.jpg,.png,.dwg">
                                <div class="form-text">Upload SLD, Foto Kerusakan, atau BOQ (Max 5MB).</div>
                            </div>

                            <div class="mb-4">
                                <label class="form-label fw-bold">Detail Spesifikasi / Masalah</label>
                                <textarea v-model="form.message" class="form-control" rows="4"
                                    placeholder="Contoh: Saya butuh penawaran untuk panel LVMDP 2000A, atau Trafo saya bocor oli..."
                                    required></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary-custom w-100 py-3 fw-bold"
                                :disabled="isSubmitting">
                                <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status"
                                    aria-hidden="true"></span>
                                {{ isSubmitting ? 'Sedang Mengirim...' : 'Minta Penawaran' }}
                            </button>

                        </form>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
/* --- TYPOGRAPHY & COLORS --- */
.text-blue {
    color: #002b49;
}

.section-title {
    color: #002b49;
    font-weight: 800;
}

.form-title {
    color: #002b49;
    font-weight: 700;
}

/* --- LEFT COLUMN (INFO) --- */
.info-item {
    align-items: flex-start;
}

.icon-box {
    width: 50px;
    height: 50px;
    background-color: #eef5fa;
    color: #00529c;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-right: 20px;
    flex-shrink: 0;
}

.text-box h5 {
    color: #333;
}

.hover-blue:hover {
    color: #00529c !important;
    text-decoration: underline !important;
}

.map-container iframe {
    display: block;
}

/* --- RIGHT COLUMN (FORM CLIENT) --- */
.form-wrapper {
    background-color: #fff;
    border-top: 5px solid #00529c;
    /* Aksen Biru JBB (Fokus Sales) */
}

.form-control,
.form-select {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #dee2e6;
    transition: all 0.3s;
}

.form-control:focus,
.form-select:focus {
    border-color: #00529c;
    box-shadow: 0 0 0 3px rgba(0, 82, 156, 0.1);
}

/* Placeholder Text Style */
::placeholder {
    font-size: 0.9rem;
    color: #aaa;
}

/* Button Style */
.btn-primary-custom {
    background-color: #002b49;
    color: #fff;
    border: none;
    border-radius: 8px;
    transition: all 0.3s;
}

.btn-primary-custom:hover {
    background-color: #e63946;
    /* Merah saat hover (Action) */
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(230, 57, 70, 0.3);
}

.btn-primary-custom:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

/* Responsive */
@media (max-width: 768px) {
    .form-wrapper {
        padding: 30px !important;
    }
}
</style>