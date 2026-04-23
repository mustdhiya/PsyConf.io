# PsyConf 2026 - Conference Management System

![PsyConf 2026](https://img.shields.io/badge/PsyConf-2026-9B7B9C?style=for-the-badge)
![Django](https://img.shields.io/badge/Django-5.x-092E20?style=flat-square&logo=django)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=flat-square&logo=tailwind-css)
![DaisyUI](https://img.shields.io/badge/DaisyUI-4.x-5A0EF8?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)

Sistem Manajemen Konferensi Ilmiah untuk Program Studi Psikologi Universitas Muhammadiyah Kalimantan Timur. Platform ini dirancang untuk mengelola seluruh alur konferensi akademik mulai dari pendaftaran, submisi paper, proses review, hingga penerbitan sertifikat.

---

## Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Struktur Halaman](#struktur-halaman)
- [Tech Stack](#tech-stack)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Struktur Proyek](#struktur-proyek)
- [Konfigurasi](#konfigurasi)
- [Penggunaan](#penggunaan)
- [Panduan Warna](#panduan-warna)
- [Kontribusi](#kontribusi)
- [Tim Pengembang](#tim-pengembang)
- [Lisensi](#lisensi)

---

## Fitur Utama

### Untuk Publik (Peserta & Pemakalah)
| Modul | Deskripsi |
|-------|-----------|
| **Landing Page** | Halaman utama dengan informasi konferensi, keynote speakers, timeline, dan call for papers |
| **Registrasi** | Pendaftaran peserta/pemakalah dengan kategori batch harga (Early Bird, Normal, On-site) |
| **Submisi Paper** | Upload abstrak dan full paper sesuai template, tracking status review |
| **Pembayaran** | Upload bukti transfer manual dengan status konfirmasi |
| **E-Certificate** | Generate sertifikat otomatis untuk peserta dan pemakalah |

### Untuk Reviewer
| Modul | Deskripsi |
|-------|-----------|
| **Panel Reviewer** | Dashboard dengan statistik paper yang ditugaskan |
| **Form Penilaian** | Skala penilaian 1-5 dengan komentar dan rekomendasi keputusan |
| **Blind Review** | Proses review anonim untuk menjaga objektivitas |
| **Deadline Tracking** | Reminder otomatis untuk paper yang mendekati batas waktu |

### Untuk Admin/Panitia
| Modul | Deskripsi |
|-------|-----------|
| **Dashboard Admin** | Statistik real-time peserta, presenter, dan paper |
| **Manajemen Peserta** | CRUD data peserta, filter, export CSV/Excel |
| **Konfirmasi Pembayaran** | Approve/reject bukti pembayaran dengan notifikasi email |
| **Assignment Reviewer** | Alokasikan paper ke reviewer sesuai bidang keahlian |
| **Broadcast Email** | Kirim notifikasi massal ke peserta |

### Fitur Tambahan (Simulasi)
| Fitur | Deskripsi |
|-------|-----------|
| **QR Code Check-in** | Generate QR code untuk check-in hari H |
| **Proceedings** | Daftar paper lolos yang dapat diunduh publik |
| **Live Schedule** | Jadwal real-time yang update selama konferensi |

---

## Struktur Halaman

| File | Deskripsi | Role |
|------|-----------|------|
| `index.html` | Landing page publik dengan hero, timeline, speakers | Public |
| `regispem.html` | Halaman registrasi peserta/pemakalah | Public |
| `autent.html` | Halaman login/register/forgot password | Public |
| `submisson.html` | Form submisi abstrak dan full paper | Presenter |
| `review.html` | Panel reviewer dengan daftar paper assignment | Reviewer |
| `dashadmin.html` | Dashboard admin utama | Admin |
| `dashadmin2.html` | Dashboard admin alternatif (manajemen lanjutan) | Admin |
| `fitursim.html` | Simulasi fitur tambahan (certificate, QR, proceedings) | Demo |
| `nav-menu.js` | Floating navigation menu untuk semua halaman | Global |

---

## Tech Stack

### Frontend
| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| HTML5 | - | Struktur halaman |
| Tailwind CSS | 3.x | Utility-first CSS framework |
| DaisyUI | 4.x | Komponen UI siap pakai di atas Tailwind |
| Google Material Icons | Latest | Ikonografi konsisten |
| Google Fonts (Inter) | Latest | Tipografi modern |
| QRCode.js | 1.0 | Generate QR code untuk check-in |

### Backend (Rencana)
| Teknologi | Kegunaan |
|-----------|----------|
| Django 5.x | Web framework Python |
| Django REST Framework | API endpoints |
| PostgreSQL | Database production |
| Django Email + SMTP | Notifikasi email |
| ReportLab / WeasyPrint | Generate PDF sertifikat |

---

## Prasyarat

- **Browser modern** (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Koneksi internet** (untuk CDN Tailwind, DaisyUI, Material Icons)
- **Python 3.10+** (untuk backend Django - opsional untuk simulasi frontend)
- **Git** (untuk version control)

---

## Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/username/psyconf-2026.git
cd psyconf-2026
