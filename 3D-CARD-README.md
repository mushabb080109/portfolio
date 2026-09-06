# 3D ID Card — Integrasi

## Apa yang berubah
- **`src/components/portfolio/IdCard3D.jsx`** — komponen kartu 3D fisika (lanyard) hasil
  porting dari `3D_CARD-main` (aslinya Next.js) ke React 19 / CRA biasa. Interaktif:
  bisa ditarik & dilempar pakai mouse/jari.
- **`src/components/portfolio/idcard3d.css`** — styling wrapper + loading state.
- **`src/components/portfolio/Hero.jsx`** — sekarang 2 kolom di layar besar (teks kiri,
  kartu 3D kanan), stack di mobile. Kartu "Quick Info" lama dihapus karena info-nya
  sekarang ada di kartu 3D.
- **`public/assets/3d-card/kartu.glb`** — model 3D kartu, tekstur depan **didesain
  ulang total**: pakai foto kamu (bukan foto generic), nama "Mushab Adibaa", role
  "WEB DEVELOPER", sekolah, dan tema gelap match sama warna situs (`#050505` + silver).
  Tekstur belakang kartu di-invert jadi motif ukiran putih di atas hitam (dulu hitam
  di atas putih) biar seragam sama tema gelap.
- **`public/assets/3d-card/bandd.png`** — tulisan di tali lanyard diganti dari
  "3D CARD" jadi "WEB DEVELOPER".
- **`package.json`** — ditambah dependency: `@react-three/fiber`, `@react-three/drei`,
  `@react-three/rapier`, `three`, `meshline`.

## Cara jalanin
Karena sandbox saya nggak ada akses internet, `npm install` / `yarn install` **belum**
sempat dijalanin & di-tes beneran. Wajib jalanin ini dulu di komputer kamu:

```bash
yarn install
# atau
npm install --legacy-peer-deps
```

> Kalau ada warning peer-dependency dari `@react-three/drei`, itu wajar — drei masih
> nyusul update peer-range-nya, tapi versi yang dipasang (`^9.122.0`) sudah kompatibel
> dengan React 19 / fiber v9 dari sisi kode.

Lalu jalanin seperti biasa:

```bash
yarn start   # atau: npm start
```

## Kalau mau ganti lagi teks/foto di kartu
Semua digambar langsung di atas file `kartu.glb` (bukan komponen React), jadi kalau mau
ubah foto/nama/role lagi, bilang aja ke saya — saya generate ulang teksturnya terus
saya pack-in ulang ke file `.glb`-nya (nggak perlu edit 3D model manual).

## Catatan performa
Kartu 3D pakai physics engine (Rapier/WASM) + react-three-fiber, agak lebih berat dari
elemen HTML biasa. Kalau nanti kerasa berat di HP low-end, kasih tau — bisa saya kasih
fallback gambar statis buat di bawah breakpoint tertentu.
