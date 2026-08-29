import { motion } from "framer-motion";
import Chapter, { FadeUp } from "./Chapter";
import { HOBBIES } from "./data";

export default function Hobbies() {
    return (
        <Chapter id="hobbies" number="07" title="Hobbies" ghostWord="PLAY">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" data-testid="hobbies-grid">
                {HOBBIES.map((h, i) => (
                    <FadeUp key={h.key} delay={0.08 * i}>
                        <div
                            className="group relative overflow-hidden rounded-3xl border border-white/10 transition-colors duration-500 hover:border-silver/35"
                            data-testid={`hobby-card-${h.key}`}
                        >
                            <motion.img
                                src={h.image}
                                alt={h.title}
                                loading="lazy"
                                initial={{ scale: 1.15 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                                className="aspect-[3/4] w-full object-cover grayscale transition-[filter,transform] duration-700 group-hover:scale-105 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-6">
                                <span className="font-jbmono inline-block rounded-full border border-silver/30 bg-black/50 px-3 py-1 text-[10px] tracking-[0.3em] text-silver backdrop-blur-md">
                                    0{i + 1}
                                </span>
                                <h3 className="font-display mt-3 text-2xl font-semibold uppercase tracking-tight text-white">
                                    {h.title}
                                </h3>
                                <p className="mt-1 text-sm text-neutral-400">{h.sub}</p>
                            </div>
                        </div>
                    </FadeUp>
                ))}
            </div>
        </Chapter>
    );
}
