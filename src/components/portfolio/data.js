import hikingCloudsSignature from "../../assets/images/hiking-clouds-signature.jpg";
import hikingTrailCleanup from "../../assets/images/hiking-trail-cleanup.jpg";
import hikingWaterfallPose from "../../assets/images/hiking-waterfall-pose.jpg";
import hikingWaterfallView from "../../assets/images/hiking-waterfall-view.jpg";
import hikingSispalaGroup from "../../assets/images/hiking-sispala-group.jpg";
import hikingMarketFriends from "../../assets/images/hiking-market-friends.jpg";
import hikingMountainView from "../../assets/images/hiking-mountain-view.jpg";
import hikingTrailSign from "../../assets/images/hiking-trail-sign.jpg";
import classmeetCostume from "../../assets/images/classmeet-costume.jpg";

export const IMAGES = {
    coding: "https://images.unsplash.com/photo-1754039984985-ef607d80113a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    hiking: hikingCloudsSignature,
    music: "https://images.unsplash.com/photo-1682268910181-a2f9b3e6be0b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    art: "https://images.unsplash.com/photo-1635183783375-98e857771351?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
};

import summitGedePangrangoGate from "../../assets/images/summit-gede-pangrango-gate.jpg";
import summitPangrangoSign from "../../assets/images/summit-pangrango-sign.jpg";
import summitPapandayan from "../../assets/images/summit-papandayan.jpg";
import summitSanggabuana from "../../assets/images/summit-sanggabuana.jpg";
import summitLembu from "../../assets/images/summit-lembu.jpg";

export const SUMMIT_PROOF = [
    { src: summitPangrangoSign, name: "Pangrango", elevation: "3.019 MDPL" },
    { src: summitGedePangrangoGate, name: "Gede — Pangrango", elevation: "TN Gede Pangrango" },
    { src: summitPapandayan, name: "Papandayan", elevation: "Kab. Garut" },
    { src: summitSanggabuana, name: "Sanggabuana", elevation: "1.291 MDPL" },
    { src: summitLembu, name: "Lembu", elevation: "Purwakarta" },
];

export const EDUCATION = [
    {
        period: "2023 — Sekarang",
        school: "SMAN 1 Cikarang Timur",
        detail: "Kelas 12 (Kelas 3 SMA). Fokus di mata pelajaran informatika dan aktif di kegiatan sekolah.",
        tag: "SMA",
    },
    {
        period: "2020 — 2023",
        school: "SMP Islam Azzhahiriyah",
        detail: "Masa-masa pertama kenal komputer dan mulai iseng ngulik kode.",
        tag: "SMP",
    },
    {
        period: "2014 — 2020",
        school: "SD Karang Sambung 03",
        detail: "Awal mula semua cerita. Suka menggambar dan berpetualang.",
        tag: "SD",
    },
];

export const SKILLS = [
    {
        id: "coding",
        title: "Coding",
        icon: "Code2",
        desc: "Belajar web development otodidak — HTML, CSS, JavaScript, dan mulai eksplor React. Bagi Uca, kode itu seperti puzzle yang nggak pernah bosan dipecahkan.",
        level: "FOKUS UTAMA",
        size: "large",
        tags: [
            { label: "HTML", icon: "FileCode" },
            { label: "CSS", icon: "Paintbrush" },
            { label: "JavaScript", icon: "Braces" },
            { label: "React", icon: "Atom" },
        ],
    },
    {
        id: "music",
        title: "Music",
        icon: "Music",
        desc: "Main gitar di waktu luang. Dari lagu indie sampai pop punk.",
        level: "HOBI",
        size: "small",
    },
    {
        id: "art",
        title: "Art",
        icon: "Palette",
        desc: "Sketsa dan ilustrasi digital. Cara lain bercerita tanpa kata.",
        level: "HOBI",
        size: "small",
    },
    {
        id: "hiking",
        title: "Mendaki",
        icon: "Mountain",
        desc: "Gunung adalah tempat reset terbaik. Sudah beberapa puncak di Jawa Barat ditaklukkan.",
        level: "PASSION",
        size: "medium",
        tags: [
            { label: "Gede", icon: "Mountain" },
            { label: "Pangrango", icon: "Mountain" },
            { label: "Parang", icon: "Mountain" },
            { label: "Papandayan", icon: "Mountain" },
            { label: "Sanggabuana", icon: "Mountain" },
            { label: "Lembu", icon: "Mountain" },
            { label: "Ciremai", icon: "Mountain" },
        ],
    },
];

export const PROJECTS = [
    {
        year: "2026",
        title: "Portfolio Website",
        desc: "Website portfolio personal — yang sedang kamu buka sekarang. Dibangun dengan React, animasi, dan banyak kopi.",
        tags: ["React", "Design", "Motion"],
        image: IMAGES.coding,
    },
    {
        year: "2025",
        title: "Web Profil Ekskul",
        desc: "Website sederhana untuk ekskul sekolah: jadwal latihan, galeri kegiatan, dan formulir pendaftaran anggota baru.",
        tags: ["HTML/CSS", "JavaScript"],
        image: IMAGES.art,
    },
    {
        year: "2025",
        title: "Bot Pengingat Tugas",
        desc: "Bot chat pengingat deadline tugas kelas. Proyek iseng yang ternyata kepakai satu angkatan.",
        tags: ["Python", "Automation"],
        image: IMAGES.music,
    },
];

export const ACHIEVEMENTS = [
    { year: "2026", title: "Panitia Inti Acara Classmeet", org: "SMAN 1 Cikarang Timur" },
    { year: "2025", title: "Peserta Olimpiade Informatika Tingkat Kabupaten", org: "KOSP / OSN" },
    { year: "2025", title: "Tim Kreatif Pensi Sekolah", org: "OSIS SMAN 1 Cikarang Timur" },
    { year: "2024", title: "Juara 3 Lomba Desain Poster Digital", org: "Lomba Antar-Sekolah" },
];

export const ORGANIZATIONS = [
    {
        role: "Seksi IT & Kreatif",
        org: "OSIS SMAN 1 Cikarang Timur",
        period: "2024 — 2026",
        desc: "Urus konten digital, desain poster acara, dan dokumentasi kegiatan sekolah.",
    },
    {
        role: "Anggota",
        org: "SISPALA — Pecinta Alam",
        period: "2023 — Sekarang",
        desc: "Ekspedisi pendakian, diklat dasar, dan kegiatan konservasi alam.",
    },
    {
        role: "Gitaris",
        org: "Ekskul Musik / Band Sekolah",
        period: "2024 — Sekarang",
        desc: "Tampil di pensi dan acara-acara sekolah. Kadang manggung, kadang latihan doang.",
    },
];

export const HOBBIES = [
    { key: "coding", title: "Coding", sub: "Ngulik sampai lupa waktu", image: IMAGES.coding },
    { key: "hiking", title: "Mendaki", sub: "Puncak demi puncak", image: IMAGES.hiking },
    { key: "music", title: "Musik", sub: "Gitar & playlist andalan", image: IMAGES.music },
    { key: "art", title: "Art", sub: "Sketsa & ilustrasi", image: IMAGES.art },
];

export const GALLERY = [
    { src: hikingCloudsSignature, caption: "Di atas awan — momen paling dramatis pas turun gunung", tall: true },
    { src: hikingTrailCleanup, caption: "Trail cleanup bareng tim pendakian", tall: false },
    { src: hikingWaterfallPose, caption: "Curug tersembunyi di jalur pendakian", tall: true },
    { src: hikingWaterfallView, caption: "Pemandangan air terjun dari bawah", tall: false },
    { src: hikingSispalaGroup, caption: "Ekspedisi bareng SISPALA SMAN 1 Cikarang Timur", tall: true },
    { src: hikingMarketFriends, caption: "Istirahat di basecamp sebelum pulang", tall: false },
    { src: hikingMountainView, caption: "Pemandangan pegunungan menjelang senja", tall: true },
    { src: hikingTrailSign, caption: "Papan cerita di jalur pendakian", tall: false },
    { src: classmeetCostume, caption: "Momen iseng pas jadi panitia Classmeet", tall: false },
];

export const SOCIALS = [
    { label: "Instagram", icon: "Instagram", href: "https://instagram.com/msshab08" },
    { label: "GitHub", icon: "Github", href: "https://github.com/mushabadibaa-code" },
    { label: "Email", icon: "Mail", href: "mailto:mushabadibaa@gmail.com" },
    { label: "Sekolah", icon: "Globe", href: "https://sman1cikarangtimur.sch.id" },
];
