import Chapter, { FadeUp } from "./Chapter";
import { Quote } from "lucide-react";

const STATS = [
    { value: "12", label: "Kelas / Grade" },
    { value: "04", label: "Minat Utama" },
    { value: "18", label: "Tahun Perjalanan" },
    { value: "∞", label: "Rasa Penasaran" },
];

export default function About() {
    return (
        <Chapter id="about" number="01" title="About" ghostWord="UCA">
            <FadeUp>
                <p className="max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
                    Halo! Gue <span className="text-silver-light font-medium">Mushab Adibaa</span> —
                    tapi semua orang manggil gue <span className="text-white">Uca</span>.
                    Sekarang kelas 3 di SMAN 1 Cikarang Timur, sibuk nyeimbangin antara
                    UTBK, ngoding, dan rencana pendakian berikutnya.
                </p>
            </FadeUp>
            <FadeUp delay={0.15}>
                <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                    Website ini bukan resume formal. Ini kumpulan jejak: proyek yang pernah
                    dibangun, panggung yang pernah diinjak, puncak yang pernah didaki, dan
                    karya yang lahir tengah malam. Semuanya bagian dari cerita yang masih
                    panjang.
                </p>
            </FadeUp>

            <FadeUp delay={0.25}>
                <div className="mt-12 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md">
                    <Quote size={20} className="mb-4 text-silver" />
                    <p className="font-display text-xl italic leading-snug text-neutral-200 sm:text-2xl">
                        &ldquo;Belajar bukan buat nilai doang — tapi buat jadi versi diri
                        yang lebih menarik dari kemarin.&rdquo;
                    </p>
                </div>
            </FadeUp>

            <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4" data-testid="about-stats">
                {STATS.map((s, i) => (
                    <FadeUp
                        key={s.label}
                        delay={0.1 * i}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-colors duration-500 hover:border-silver/30"
                    >
                        <p className="font-display text-metallic text-4xl font-semibold sm:text-5xl">
                            {s.value}
                        </p>
                        <p className="font-jbmono mt-3 text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                            {s.label}
                        </p>
                    </FadeUp>
                ))}
            </div>
        </Chapter>
    );
}
