import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export const FadeUp = ({ children, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay, ease: EASE }}
        className={className}
    >
        {children}
    </motion.div>
);

export default function Chapter({ id, number, title, children, ghostWord }) {
    return (
        <section
            id={id}
            data-testid={`section-${id}`}
            className="relative overflow-hidden px-6 py-28 sm:px-12 lg:px-24 lg:py-40"
        >
            {ghostWord && (
                <span
                    aria-hidden
                    className="text-ghost font-display pointer-events-none absolute -top-6 right-0 select-none text-[22vw] font-bold leading-none tracking-tighter"
                >
                    {ghostWord}
                </span>
            )}
            <div className="relative grid grid-cols-1 gap-12 md:grid-cols-12">
                <div className="md:col-span-4">
                    <div className="md:sticky md:top-32">
                        <FadeUp>
                            <span className="font-jbmono inline-flex items-center gap-2 rounded-full border border-silver/25 bg-silver/5 px-4 py-1.5 text-[11px] tracking-[0.3em] text-silver">
                                {number}
                            </span>
                            <h2 className="font-display text-metallic mt-6 text-4xl font-semibold uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
                                {title}
                            </h2>
                            <div className="mt-7 h-px w-24 rounded-full bg-gradient-to-r from-silver/60 to-transparent" />
                        </FadeUp>
                    </div>
                </div>
                <div className="md:col-span-8">{children}</div>
            </div>
        </section>
    );
}
