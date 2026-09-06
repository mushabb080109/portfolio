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

export default function Chapter({ id, number, title, children }) {
    return (
        <section
            id={id}
            data-testid={`section-${id}`}
            className="relative px-6 py-24 sm:px-12 lg:px-24 lg:py-32"
        >
            <div className="relative grid grid-cols-1 gap-12 md:grid-cols-12">
                <div className="md:col-span-4">
                    <div className="md:sticky md:top-32">
                        <FadeUp>
                            <span className="font-jbmono inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-[11px] tracking-[0.3em] text-neutral-500">
                                {number}
                            </span>
                            <h2 className="font-display mt-6 text-3xl font-semibold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
                                {title}
                            </h2>
                            <div className="mt-6 h-px w-16 bg-white/15" />
                        </FadeUp>
                    </div>
                </div>
                <div className="md:col-span-8">{children}</div>
            </div>
        </section>
    );
}
