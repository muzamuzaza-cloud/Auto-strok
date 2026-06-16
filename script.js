// DATABASE 100 TOKO ASLI DI SEKITAR YOGYAKARTA DAN CANDI BOROBUDUR
const daftarToko = [
    // --- AREA CANDI BOROBUDUR & MAGELANG (1-40) ---
    { nama: "PUSAT OLEH-OLEH DAUN BUKIT", alamat: "Kawasan Wisata Bukit Rhema, Borobudur, Magelang" },
    { nama: "BAKPIA MUTIARA BOROBUDUR", alamat: "Jl. Balaputradewa, Wanurejo, Borobudur, Magelang" },
    { nama: "WARUNG KOPI JALANAN BOROBUDUR", alamat: "Jl. Pramudawardhani, Borobudur, Magelang" },
    { nama: "TOKO SOUVENIR MANDIRI BOROBUDUR", alamat: "Pintu Keluar Zona II Candi Borobudur, Magelang" },
    { nama: "GUBUG MAKAN MANG ENGKING BOROBUDUR", alamat: "Jl. Mayor Kusen, Mungkid, Magelang" },
    { nama: "STATION KOPI BOROBUDUR", alamat: "Jl. Badrawati No. 9, Borobudur, Magelang" },
    { nama: "WAROENG MAKAN SEHATI BOROBUDUR", alamat: "Jl. Sendangsono, Progowati, Mungkid, Magelang" },
    { nama: "ALFAMART PRAPALAN BOROBUDUR", alamat: "Jl. Jend. Sudirman, Prapalan, Borobudur" },
    { nama: "INDOMARET BOROBUDUR KM 1", alamat: "Jl. Mayor Kusen, Mendut, Mungkid" },
    { nama: "AMATA BOROBUDUR RESORT BOUTIQUE", alamat: "Jl. Mendut-Borobudur, Wanurejo, Magelang" },
    { nama: "TOKO BATIK REJEKI BOROBUDUR", alamat: "Pasar Seni Borobudur Blok A, Magelang" },
    { nama: "WARUNG MAKAN SENENG HATI", alamat: "Jl. Syailendra Raya, Wanurejo, Borobudur" },
    { nama: "RM ES SENREK MAGELANG", alamat: "Jl. Jend. Sudirman No. 122, Magelang" },
    { nama: "BALONDA CAFE BOROBUDUR", alamat: "Jl. Karanganyar, Borobudur, Magelang" },
    { nama: "TOKO KELONTONG REJEKI", alamat: "Jl. Brojonalan, Wanurejo, Borobudur" },
    { nama: "BAKPIA JALUR BOROBUDUR", alamat: "Jl. Magelang-Yogyakarta Km 15, Mungkid" },
    { nama: "BSG CAFE & RESTO BOROBUDUR", alamat: "Jl. Balaputradewa No. 22, Wanurejo" },
    { nama: "WARUNG MAKAN KHAS MANGUT BEONG", alamat: "Jl. Kembanglimus, Borobudur, Magelang" },
    { nama: "ALFAMIDI MAYOR KUSEN", alamat: "Jl. Mayor Kusen No. 88, Mendut, Mungkid" },
    { nama: "SILVER SHOP BOROBUDUR ART", alamat: "Jl. Pramudawardhani No. 45, Borobudur" },
    { nama: "JANJI JIWA BOROBUDUR RAYA", alamat: "Jl. Syailendra Raya, Borobudur" },
    { nama: "KOPALAN COFFEE BOROBUDUR", alamat: "Tuksongo, Borobudur, Magelang" },
    { nama: "SOUVENIR KAOS JOGJA-BOROBUDUR", alamat: "Kompleks Parkir Bus Candi Borobudur" },
    { nama: "TOKO HERBAL DE NATURE MAGELANG", alamat: "Jl. Raya Borobudur, Mungkid, Magelang" },
    { nama: "RM AYAM GORENG NINIT", alamat: "Jl. Jend. Gatot Subroto, Magelang" },
    { nama: "APOTEK K-24 BOROBUDUR SEHAT", alamat: "Jl. Pramudawardhani No. 12, Borobudur" },
    { nama: "TOKO BUAH SEGAR JALUR BOROBUDUR", alamat: "Jl. Raya Mendut, Mungkid, Magelang" },
    { nama: "PATRA BOROBUDUR MINI SHOP", alamat: "Tanjungan, Borobudur, Magelang" },
    { nama: "ARMADA TOWN SQUARE MALL STORE", alamat: "Jl. Mayjen Bambang Soegeng, Magelang" },
    { nama: "SOTO AYAM PAK MAN MUNGKID", alamat: "Jl. Letnan Tukiyat, Mungkid, Magelang" },
    { nama: "OLEH-OLEH GETUK GORENG ECO", alamat: "Jl. Jend. Sudirman No. 55, Magelang" },
    { nama: "BUMI BOROBUDUR ART GALLERY", alamat: "Jl. Raya Borobudur-Yogyakarta Km 2" },
    { nama: "WARUNG INDOMIE CAKRA BOROBUDUR", alamat: "Jl. Medang Kamulan, Borobudur" },
    { nama: "CERITA KOPI CAFE BOROBUDUR", alamat: "Jl. Wanurejo Blok C, Borobudur" },
    { nama: "TOKO SEPATU SPORT MUNGKID", alamat: "Jl. Jend. Sudirman, Blondo, Mungkid" },
    { nama: "COCONUT RESTO BOROBUDUR", alamat: "Jl. Syailendra Raya No. 10, Magelang" },
    { nama: "TOKO OLEH-OLEH WAJIK NY. WEEK", alamat: "Jl. Jend. Sudirman No. 34, Magelang" },
    { nama: "WARUNG ES MARET MUNGKID", alamat: "Jl. Mayor Unus, Murten, Mungkid" },
    { nama: "BOROBUDUR PLAZA CELL", alamat: "Jl. Pramudawardhani Barat, Magelang" },
    { nama: "KULINER NDAS BEONG ASLI", alamat: "Jl. Raya Salaman, Borobudur, Magelang" },

    // --- AREA YOGYAKARTA & MALIOBORO (41-100) ---
    { nama: "IBARBO PARK JOGJA", alamat: "Jl. Magelang No. 14, Caturharjo, Sleman, Yogyakarta" },
    { nama: "HAMZAH BATIK MALIOBORO", alamat: "Jl. Margo Mulyo No. 9, Ngupasan, Yogyakarta" },
    { nama: "TERAS MALIOBORO 1", alamat: "Jl. Malioboro, Gedongtengen, Kota Yogyakarta" },
    { nama: "TERAS MALIOBORO 2", alamat: "Jl. Margo Utomo, Gowongan, Jetis, Yogyakarta" },
    { nama: "BAKPIA PATHOK 25 PUSAT", alamat: "Jl. AIP II Sangidu Kampung Pathuk NG I/504, Jogja" },
    { nama: "BAKPIA KUKUS TUGU - STASIUN TUGU", alamat: "Area Peron Stasiun Tugu Yogyakarta, Sosromenduran" },
    { nama: "TOKO BATIK KERIS MALIOBORO", alamat: "Jl. Malioboro No. 38, Suryatmajan, Yogyakarta" },
    { nama: "GUDEG YU DJUM WIJILAN 167", alamat: "Jl. Wijilan No. 167, Panembahan, Kraton, Jogja" },
    { nama: "GUDEG SAGAN JOGJA", alamat: "Jl. Professor Dr. Herman Yohanes No. 19, Caturtunggal" },
    { nama: "WARUNG KOPI KLOTOK PAKEM", alamat: "Jl. Kaliurang Km 16, Pakembinangun, Sleman" },
    { nama: "ALFAMART MALIOBORO 3", alamat: "Jl. Malioboro No. 115, Sosromenduran, Jogja" },
    { nama: "INDOMARET POINT TUGU JOGJA", alamat: "Jl. Margo Utomo No. 2, Gowongan, Yogyakarta" },
    { nama: "PENGINAPAN & CAFE KALA JOGJA", alamat: "Jl. Malioboro Blok B/4, Suryatmajan" },
    { nama: "HEHA SKY VIEW RESTO SHOP", alamat: "Jl. Dlingo-Patuk No. 2, Patuk, Gunungkidul" },
    { nama: "SOTO KADIPIRO ASLI 1921", alamat: "Jl. Wates No. 33, Kadipiro, Bantul, Yogyakarta" },
    { nama: "ANGKRINGAN PAK JABRIK TUGU", alamat: "Jl. Margo Utomo, Gowongan, Jetis, Yogyakarta" },
    { nama: "HOUSE OF RAMINTEN KOTABARU", alamat: "Jl. Faridan M Noto No. 7, Kotabaru, Yogyakarta" },
    { nama: "JOGJA CITY MALL STORE", alamat: "Jl. Magelang Km 6 No. 18, Sinduadi, Sleman" },
    { nama: "PLAZA AMBARRUKMO MALL", alamat: "Jl. Laksda Adisucipto No. 80, Caturtunggal" },
    { nama: "BAKPIA PATHOK 75", alamat: "Jl. Laksda Adisucipto Km 8, Sleman, Jogja" },
    { nama: "RESTORAN RAMINTEN KALIURANG", alamat: "Jl. Kaliurang Km 15.5, Pakem, Sleman" },
    { nama: "GEBLEK PARI PRONOSUTAN", alamat: "Pronosutan, Nanggulan, Kulon Progo, Jogja" },
    { nama: "SOTO BATHOK MBAH KSTRO", alamat: "Sambisari, Purwomartani, Kalasan, Sleman" },
    { nama: "OSENG MERCON BU NARTI", alamat: "Jl. KH. Ahmad Dahlan No. 107, Notoprajan, Jogja" },
    { nama: "MIE GACOAN KOTABARU", alamat: "Jl. Sudarso No. 13, Kotabaru, Gondokusuman" },
    { nama: "JOGJA TRADITIONAL MARKET", alamat: "Pasar Beringharjo Lt. 1 Sayap Barat, Jogja" },
    { nama: "CHOCOLATE MONGGO KOTAGEDE", alamat: "Jl. Dalem KG III No. 978, Purbayan, Kotagede" },
    { nama: "DAGADU DJOKDJA - ASLI JOGJA", alamat: "Yogyakarta T-Shirt Gedongkuning No. 128" },
    { nama: "BAKPIA 25 BANDARA ADISUTJIPTO", alamat: "Terminal Keberangkatan Adisutjipto, Sleman" },
    { nama: "AYAM GORENG SUHARTI ADISUCIPTO", alamat: "Jl. Laksda Adisucipto No. 208, Sleman" },
    { nama: "EXCELSO MALIOBORO MALL", alamat: "Malioboro Mall Lt. GF, Sosromenduran, Jogja" },
    { nama: "STARBUCKS COFFEE SLEMAN CITY", alamat: "Sleman City Hall Mall Lt. GF, Sleman" },
    { nama: "RESTORAN BALE RAOS KRATON", alamat: "Jl. Kamandungan Magangan, Kraton, Yogyakarta" },
    { nama: "SATE KLATAK PAK BARI", alamat: "Pasar Wonokromo, Jl. Imogiri Timur, Bantul" },
    { nama: "SATE KLATAK PAK JEDE", alamat: "Jl. Janti No. 12, Banguntapan, Bantul, Jogja" },
    { nama: "GUDEG PERMATA BU PUDJO", alamat: "Jl. Gajah Mada No. 2, Gunungketur, Yogyakarta" },
    { nama: "KAOS BOLEH JOGJA SHOP", alamat: "Jl. Sosrowijayan No. 44, Gedongtengen" },
    { nama: "PULANG COFFEE CONNER JOGJA", alamat: "Jl. Margo Utomo No. 56, Jetis, Yogyakarta" },
    { nama: "APOTEK K-24 SUTOYO JOGJA", alamat: "Jl. Mayjend Sutoyo No. 78, Mantrijeron" },
    { nama: "MIE AYAM TUMINI GIPARI", alamat: "Jl. Imogiri Timur No. 187, Giwangan, Jogja" },
    { nama: "KERINGAN KHAS JOGJA BERINGHARJO", alamat: "Pasar Beringharjo Blok D, Yogyakarta" },
    { nama: "YOGYA CHICKEN SUDIRMAN", alamat: "Jl. Jend. Sudirman No. 10, Gowongan, Jogja" },
    { nama: "CIRKLE K GEJAYAN JOGJA", alamat: "Jl. Gejayan No. 22, Caturtunggal, Sleman" },
    { nama: "MINISO PAKUWON MALL JOGJA", alamat: "Pakuwon Mall Jogja Lt. 1, Depok, Sleman" },
    { nama: "KADAI KOPI MATARAM MALIOBORO", alamat: "Jl. Mataram No. 27, Suryatmajan, Jogja" },
    { nama: "GUDEG PAWON JOGJA", alamat: "Jl. Janturan No. 36, Warungboto, Umbulharjo" },
    { nama: "SOTO PAK SHOLEH REJOWINANGUN", alamat: "Jl. Rejowinangun No. 42, Kotagede, Jogja" },
    { nama: "TOKO BUKU TOGAMAS AFANDI", alamat: "Jl. Gejayan, Komplek Colombo No. 4, Sleman" },
    { nama: "SOUVENIR PERAK KOTAGEDE ART", alamat: "Jl. Kemasan No. 14, Purbayan, Kotagede" },
    { nama: "ALFAMIDI JL KALIURANG KM 5", alamat: "Jl. Kaliurang Km 5.2, Caturtunggal, Sleman" },
    { nama: "INDOMARET HYBRID MAGELANG KM 4", alamat: "Jl. Magelang Km 4.5, Sinduadi, Sleman" },
    { nama: "BUKIT BINTANG RESTO KAID", alamat: "Jl. Raya Yogyakarta-Wonosari Km 16, Patuk" },
    { nama: "KOPI JOSS LIK MAN TUGU", alamat: "Jl. Wongsodirjan, Sosromenduran, Yogyakarta" },
    { nama: "MILLES CREPES JOGJA SHOP", alamat: "Jl. Kaliurang Km 7, Condongcatur, Sleman" },
    { nama: "WARUNG PARE ANOM KRATON", alamat: "Jl. Panembahan Senopati No. 12, Jogja" },
    { nama: "GUDEG BU TJITRO 1925", alamat: "Jl. Jend. Sudirman No. 12, Gondokusuman" },
    { nama: "SOTO KREKTEK MALIOBORO", alamat: "Jl. Sosrowijayan, Sosromenduran, Jogja" },
    { nama: "BAKPIA KEMUSUK 033", alamat: "Jl. Kebon Agung, Sleman, Yogyakarta" },
    { nama: "WEDANG RONDE PAK REBO TUGU", alamat: "Jl. Jend. Sudirman, Kotabaru, Yogyakarta" },
    { nama: "WARUNG LESEHAN MALIOBORO SARI", alamat: "Pedestrian Jalan Malioboro Depan Mall" }
];

const daftarBarang = [
    { nama: "BAKPIA PATHOK ISI 20", harga: 45000 },
    { nama: "BAKPIA KUKUS TUGU BOX", harga: 38000 },
    { nama: "KAOS JOGJA DISTRO COTTON", harga: 65000 },
    { nama: "SOUVENIR CANDI BOROBUDUR MINI", harga: 25000 },
    { nama: "BATIK TULIS MATARAMAN PREMIUM", harga: 135000 },
    { nama: "GUDEG KALENG KHAS WIJILAN", harga: 42000 },
    { nama: "CHOCOLATE MONGGO BAR 80G", harga: 29000 },
    { nama: "YANGKO JOGJA ANEKA RASA", harga: 22000 },
    { nama: "GEPLAK BANTUL MANIS PACK", harga: 18000 },
    { nama: "WEDANG UWUH JOGJA ISI 10", harga: 15000 },
    { nama: "SANDAL BATIK MALIOBORO", harga: 20000 },
    { nama: "AIR MINERAL VIT 600ML", harga: 3500 },
    { nama: "TEH BOTOL SOSRO KOTAK", harga: 4000 },
    { nama: "KOPI KLOTOK BUBUK PACK", harga: 30000 },
    { nama: "KERIPIK BELUT KHAS SLEMAN", harga: 32000 },
    { nama: "BLANGKON JOGJA ASLI MATARAM", harga: 55000 },
    { nama: "MINYAK KAYU PUTIH 60ML", harga: 24000 }
];

const daftarKasir = ["Siti", "Budi", "Nugroho", "Sri", "Eko", "Tri", "Agus", "Wati", "Yanto", "Rini"];

// LOGIKA UTAMA: RETROACTIVE RANDOM TIME (Mundur 14 hingga 90 Hari)
function generateOtomatis() {
    // 1. Pilih Toko & Kasir Acak
    const tokoAcak = daftarToko[Math.floor(Math.random() * daftarToko.length)];
    document.getElementById("store-name").innerText = tokoAcak.nama;
    document.getElementById("store-address").innerText = tokoAcak.alamat;

    const kasirAcak = daftarKasir[Math.floor(Math.random() * daftarKasir.length)];
    document.getElementById("cashier-name").innerText = kasirAcak;

    // 2. Buat Nomor Order Acak Berpola Acak
    const randomId = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("order-id").innerText = "ORD-2026-" + randomId;

    // 3. GENERATE TANGGAL MUNDUR (2 Minggu - 3 Bulan Lalu)
    const hariIni = new Date();
    
    // Cari rentang acak antara 14 hari (paling baru) sampai 90 hari (paling lama)
    const jumlahHariMundur = Math.floor(Math.random() * (90 - 14 + 1)) + 14;
    
    // Kurangi waktu saat ini dengan jumlah hari acak tersebut
    const tanggalStruk = new Date(hariIni.getTime() - (jumlahHariMundur * 24 * 60 * 60 * 1000));
    
    // Acak Jam (Antara Jam 07 pagi sampai 21 malam biar rasional waktu toko buka)
    const jamAcak = Math.floor(Math.random() * (21 - 7 + 1)) + 7;
    // Acak Menit & Detik secara total (0-59)
    const menitAcak = Math.floor(Math.random() * 60);
    const detikAcak = Math.floor(Math.random() * 60);
    
    tanggalStruk.setHours(jamAcak, menitAcak, detikAcak);

    // Format tampilan teks tanggal pada struk
    const tgl = String(tanggalStruk.getDate()).padStart(2, '0');
    const bln = String(tanggalStruk.getMonth() + 1).padStart(2, '0');
    const thn = tanggalStruk.getFullYear();
    const jam = String(tanggalStruk.getHours()).padStart(2, '0');
    const mnt = String(tanggalStruk.getMinutes()).padStart(2, '0');
    const dtk = String(tanggalStruk.getSeconds()).padStart(2, '0');
    
    document.getElementById("receipt-date").innerText = `${tgl}/${bln}/${thn} ${jam}:${mnt}:${dtk}`;

    // 4. Pilih 2 hingga 6 Jenis Barang Belanjaan Acak
    const jumlahBarang = Math.floor(Math.random() * 5) + 2; 
    let htmlBarang = "";
    let totalHarga = 0;

    const barangDiacak = [...daftarBarang].sort(() => 0.5 - Math.random());

    for (let i = 0; i < jumlahBarang; i++) {
        const barang = barangDiacak[i];
        const qty = Math.floor(Math.random() * 3) + 1; 
        const subTotal = barang.harga * qty;
        totalHarga += subTotal;

        htmlBarang += `
            <div style="margin-bottom: 6px;">
                <p style="margin: 0; font-weight: bold;">${barang.nama}</p>
                <div class="item-row">
                    <span>${qty} x Rp ${barang.harga.toLocaleString('id-ID')}</span>
                    <span>Rp ${subTotal.toLocaleString('id-ID')}</span>
                </div>
            </div>
        `;
    }

    document.getElementById("receipt-items").innerHTML = htmlBarang;
    document.getElementById("receipt-total-price").innerText = "Rp " + totalHarga.toLocaleString('id-ID');
}

// DOWNLOAD GAMBAR DENGAN TINGKAT SCALE ULTRA HD (Agar Lolos OCR Scan)
function downloadPNG() {
    const target = document.getElementById("receipt-target");
    
    // Menggunakan scale 3 dan mengunci rendering agar tidak merusak bayangan CSS fisik
    html2canvas(target, { 
        scale: 3, 
        backgroundColor: null,
        logging: false,
        useCORS: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'Struk_Real_Jogja_' + Date.now() + '.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

window.onload = generateOtomatis;
