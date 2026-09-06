import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import SocialIcons from "./SocialIcons";
import IdCard3D from "./IdCard3D";

const EASE = [0.16, 1, 0.3, 1];

const MaskedLine = ({ children, delay = 0, className = "" }) => (
    <span className={`block overflow-hidden ${className}`}>
        <motion.span
            className="block"
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay, ease: EASE }}
        >
            {children}
        </motion.span>
    </span>
);

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const ghostY = useTransform(scrollYProgress, [0, 1], [0, 260]);
    const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section
            ref={ref}
            data-testid="hero-section"
            className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 sm:px-12 lg:px-24"
        >
            <div className="ambient-glow pointer-events-none absolute inset-0" aria-hidden />
            <motion.span
                aria-hidden
                style={{ y: ghostY }}
                className="text-ghost font-display pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center text-[34vw] font-bold leading-none tracking-tighter"
            >
                2026
            </motion.span>

            <div className="relative z-10 grid gap-10 pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-6">
                <motion.div style={{ opacity: fade }}>
                    <MaskedLine delay={0.2}>
                        <span className="font-jbmono inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs uppercase tracking-[0.35em] text-neutral-400 backdrop-blur-md sm:text-sm">
                            <MapPin size={14} className="text-silver" />
                            Student&apos;s — SMAN 1 Cikarang Timur
                        </span>
                    </MaskedLine>

                    <h1 className="font-display mt-8 font-bold uppercase leading-[0.9] tracking-tighter">
                        <MaskedLine delay={0.35} className="text-[15vw] sm:text-[12vw] lg:text-[6.2vw]">
                            <span className="text-metallic">Portfolio</span>
                        </MaskedLine>
                        <MaskedLine delay={0.5} className="text-[7vw] sm:text-[5vw] lg:text-[2.6vw]">
                            <span className="text-ghost-accent">Mushab Adibaa</span>
                            <span className="text-silver"> — Uca</span>
                        </MaskedLine>
                    </h1>

                    <MaskedLine delay={0.7} className="mt-8 max-w-xl">
                        <p className="text-base leading-relaxed text-neutral-400 sm:text-lg">
                            Pelajar kelas 12 yang hidup di antara baris kode, jalur pendakian,
                            petikan gitar, dan kanvas digital. Ini arsip perjalanannya —
                            bukti dan kenangan, bukan sekadar CV.
                        </p>
                    </MaskedLine>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: EASE }}
                    className="relative"
                >
                    <IdCard3D />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
                className="relative z-10 mt-16 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
                data-testid="hero-contact-card"
            >
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-neutral-500 backdrop-blur-md w-fit">
                    <motion.span
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown size={16} className="text-silver" />
                    </motion.span>
                    <span className="font-jbmono text-[10px] uppercase tracking-[0.3em]">
                        Scroll untuk menjelajah
                    </span>
                </div>

                <SocialIcons />
            </motion.div>
        </section>
    );
}
