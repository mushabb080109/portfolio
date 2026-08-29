import { motion } from "framer-motion";
import Chapter, { FadeUp } from "./Chapter";
import { PROJECTS } from "./data";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
    return (
        <Chapter id="projects" number="04" title="Projects" ghostWord="WORK">
            <div className="space-y-20" data-testid="projects-list">
                {PROJECTS.map((p, i) => (
                    <FadeUp key={p.title} delay={0.05 * i}>
                        <article
                            className="group grid grid-cols-1 gap-8 lg:grid-cols-12"
                            data-testid={`project-card-${i}`}
                        >
                            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 lg:aspect-auto lg:col-span-7">
                                <motion.img
                                    src={p.image}
                                    alt={p.title}
                                    loading="lazy"
                                    initial={{ scale: 1.15 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0 h-full w-full object-cover grayscale transition-[filter,transform] duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />
                            </div>
                            <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md transition-colors duration-500 group-hover:border-silver/30 lg:col-span-5">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-jbmono rounded-full border border-silver/25 bg-silver/5 px-3 py-1 text-[11px] tracking-[0.25em] text-silver">
                                            {p.year}
                                        </span>
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-silver/40">
                                            <ArrowUpRight
                                                size={18}
                                                className="text-neutral-500 transition-colors duration-300 group-hover:text-silver-light"
                                            />
                                        </span>
                                    </div>
                                    <h3 className="font-display mt-5 text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
                                        {p.title}
                                    </h3>
                                    <p className="mt-4 text-base leading-relaxed text-neutral-400">
                                        {p.desc}
                                    </p>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {p.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="font-jbmono rounded-full border border-white/15 px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] text-neutral-400"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </FadeUp>
                ))}
            </div>
        </Chapter>
    );
}
