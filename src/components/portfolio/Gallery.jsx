import { motion } from "framer-motion";
import Chapter, { FadeUp } from "./Chapter";
import { GALLERY } from "./data";

export default function Gallery() {
    return (
        <Chapter id="gallery" number="08" title="Memories" ghostWord="PICS">
            <FadeUp>
                <p className="mb-12 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                    Bukti dan kenangan — dari puncak gunung sampai layar monitor.
                    Arahkan kursor untuk melihat warnanya.
                </p>
            </FadeUp>
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3" data-testid="gallery-grid">
                {GALLERY.map((g, i) => (
                    <FadeUp key={i} delay={0.05 * (i % 3)} className="mb-4 break-inside-avoid">
                        <figure
                            className="group relative overflow-hidden rounded-3xl border border-white/10 transition-colors duration-500 hover:border-silver/35"
                            data-testid={`gallery-item-${i}`}
                        >
                            <motion.img
                                src={g.src}
                                alt={g.caption}
                                loading="lazy"
                                initial={{ scale: 1.15 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                                className={`w-full object-cover grayscale transition-[filter,transform] duration-700 group-hover:scale-105 group-hover:grayscale-0 ${
                                    g.tall ? "aspect-[4/5]" : "aspect-[4/3]"
                                }`}
                            />
                            <figcaption className="absolute inset-x-4 bottom-4 translate-y-2 rounded-full border border-white/10 bg-black/60 px-4 py-2.5 opacity-0 backdrop-blur-xl transition-[opacity,transform] duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                <span className="font-jbmono block truncate text-center text-[10px] uppercase tracking-[0.2em] text-neutral-300">
                                    {g.caption}
                                </span>
                            </figcaption>
                        </figure>
                    </FadeUp>
                ))}
            </div>
        </Chapter>
    );
}
