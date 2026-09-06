import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";
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
    const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section
            ref={ref}
            data-testid="hero-section"
            className="relative flex min-h-screen flex-col justify-center px-6 sm:px-12 lg:px-24"
        >
            <div className="relative z-10 grid gap-8 pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
                <motion.div style={{ opacity: fade }} className="lg:order-1">
                    <MaskedLine delay={0.2}>
                        <span className="font-jbmono inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs uppercase tracking-[0.35em] text-neutral-400 backdrop-blur-md sm:text-sm">
                            <MapPin size={14} className="text-silver" />
                            Student&apos;s — SMAN 1 Cikarang Timur
                        </span>
                    </MaskedLine>

                    <h1 className="font-display mt-8 font-semibold leading-[1.05] tracking-tight">
                        <MaskedLine delay={0.35} className="text-4xl sm:text-5xl lg:text-6xl">
                            <span className="text-metallic">Mushab Adibaa</span>
                        </MaskedLine>
                        <MaskedLine delay={0.5} className="mt-2 text-2xl font-normal sm:text-3xl lg:text-4xl">
                            <span className="text-neutral-400">Portfolio</span>
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
                    className="relative order-first lg:order-2"
                >
                    <IdCard3D />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
                className="relative z-10 mt-10 flex justify-end"
                data-testid="hero-contact-card"
            >
                <SocialIcons />
            </motion.div>
        </section>
    );
}
