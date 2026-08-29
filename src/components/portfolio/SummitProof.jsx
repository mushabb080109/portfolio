import { FadeUp } from "./Chapter";
import { SUMMIT_PROOF } from "./data";
import { MapPin } from "lucide-react";

export default function SummitProof() {
    return (
        <section
            id="summit-proof"
            data-testid="summit-proof-strip"
            className="relative overflow-hidden px-6 py-20 sm:px-12 lg:px-24"
        >
            <FadeUp>
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <span className="font-jbmono inline-flex items-center gap-2 rounded-full border border-silver/25 bg-silver/5 px-4 py-1.5 text-[11px] tracking-[0.3em] text-silver">
                            <MapPin size={12} />
                            Bukti Puncak
                        </span>
                        <h3 className="font-display text-metallic mt-4 text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
                            Papan Nama, Saksi Perjalanan
                        </h3>
                    </div>
                    <p className="hidden font-jbmono text-[10px] uppercase tracking-[0.25em] text-neutral-600 sm:block">
                        Geser →
                    </p>
                </div>
            </FadeUp>

            <FadeUp delay={0.1}>
                <div
                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pr-6 [-ms-overflow-style:none] [scrollbar-width:none] sm:pr-12 lg:pr-24 [&::-webkit-scrollbar]:hidden"
                    style={{ marginRight: "calc(-1 * (100vw - 100%))" }}
                >
                    {SUMMIT_PROOF.map((s) => (
                        <div
                            key={s.name}
                            data-testid={`summit-card-${s.name.toLowerCase().replace(/\s+/g, "-")}`}
                            className="group relative w-[78vw] shrink-0 snap-center overflow-hidden rounded-3xl border border-white/10 transition-colors duration-500 hover:border-silver/35 sm:w-[42vw] lg:w-[26vw]"
                        >
                            <img
                                src={s.src}
                                alt={`Papan puncak Gunung ${s.name}`}
                                loading="lazy"
                                className="aspect-[3/4] w-full object-cover grayscale transition-[filter,transform] duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-5">
                                <h4 className="font-display text-xl font-semibold uppercase tracking-tight text-white">
                                    {s.name}
                                </h4>
                                <p className="font-jbmono mt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-300">
                                    {s.elevation}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="w-px shrink-0" aria-hidden />
                </div>
            </FadeUp>
        </section>
    );
}
