# Harvest Math: Desa Numeria

MVP game edukasi fungsi eksponen untuk siswa SMA. Dibangun dengan React, JavaScript, Vite, CSS, dan LocalStorage; tanpa backend. Konten tujuh quest dipisahkan di `src/content/quests.js`, sedangkan komponen desa ada di `src/components/Village.jsx`.

## Instalasi dan menjalankan

1. Pasang Node.js versi LTS (npm ikut terpasang).
2. Buka terminal pada folder `outputs/harvest-math`.
3. Jalankan `npm install`.
4. Jalankan `npm run dev`, lalu buka URL lokal yang ditampilkan Vite (biasanya `http://localhost:5173`).

Untuk membuat build produksi: `npm run build`. Untuk meninjau build: `npm run preview`.

## Membuka dari Android dan iPhone/iPad

### Coba di jaringan Wi-Fi yang sama

1. Di komputer, jalankan `npm run dev -- --host 0.0.0.0`.
2. Cari alamat IP lokal komputer (misalnya `192.168.1.20`) dan pastikan ponsel serta komputer berada pada Wi-Fi yang sama.
3. Di ponsel, buka `http://ALAMAT-IP-KOMPUTER:5173` melalui Chrome (Android) atau Safari (iPhone/iPad). Izinkan akses jaringan lokal/firewall pada komputer jika diminta.

Cara ini untuk mencoba game; akses HTTP lewat jaringan lokal tidak selalu mengizinkan instalasi aplikasi dan mode offline.

### Pasang sebagai aplikasi web

Untuk instalasi PWA dan dukungan offline, terbitkan hasil `npm run build` ke hosting yang menggunakan HTTPS. Setelah membuka alamat HTTPS tersebut:

- **Android:** buka situs di Chrome, tekan menu ⋮, lalu pilih **Install app** atau **Tambahkan ke layar utama**.
- **iPhone/iPad:** buka situs di Safari, tekan **Bagikan**, pilih **Tambahkan ke Layar Utama**, lalu tekan **Tambah**.

Setelah pertama kali terbuka online, app shell dan aset yang telah dikunjungi dapat disajikan dari cache service worker. Progres permainan tetap tersimpan lokal pada browser/perangkat masing-masing dan tidak tersinkron antarperangkat.

## Cara menguji permainan

- Mulai permainan dengan memasukkan nama; muat ulang halaman dan gunakan **Lanjutkan permainan tersimpan** untuk memeriksa simpan/muat.
- Di kebun: petak kosong → tanam; klik lagi untuk menyiram; **Akhiri hari** dua kali; klik tanaman untuk panen. Panen memberi benih, koin, dan XP.
- Buka **Lanjutkan misi**, jalani cerita, eksplorasi, pertanyaan, umpan balik, dan refleksi. Jawaban salah dapat dicoba lagi dengan petunjuk.
- Selesaikan misi berurutan untuk membuka quest berikutnya dan mendapatkan XP/koin; temuan masuk ke Jurnal.
- Di Ruang Belajar, geser basis dari 0,3 hingga 3 dan amati grafik serta tabel nilai untuk x = −2 sampai 3.
- Jurnal menyediakan tindakan **Mulai permainan baru** untuk menghapus progres tersimpan.

## Pengembangan berikutnya

- Tambahkan peta desa dan karakter NPC yang dapat diklik dengan sprite pixel art orisinal.
- Tambahkan penyimpanan tanaman yang bertahan jika hari diakhiri tanpa disiram, inventaris item, dan toko benih.
- Perluas pertanyaan adaptif dan bukti pemahaman, serta simpan refleksi per quest.
- Tambahkan audio, animasi panen, aksesibilitas keyboard, dan pengujian lintas ukuran layar.
