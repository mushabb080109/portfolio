import Chapter, { FadeUp } from "./Chapter";
import { ACHIEVEMENTS } from "./data";
import { Trophy } from "lucide-react";

export default function Achievements() {
    return (
        <Chapter id="achievements" number="05" title="Awards" ghostWord="WIN">
            <div className="space-y-4" data-testid="achievements-list">
                {ACHIEVEMENTS.map((a, i) => (
                    <FadeUp key={a.title} delay={0.07 * i}>
                        <div className="group flex items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.02] px-7 py-6 backdrop-blur-md transition-colors duration-500 hover:border-silver/30 hover:bg-white/[0.04]">
                            <span className="font-jbmono w-14 shrink-0 rounded-full border border-silver/25 bg-silver/5 px-3 py-1 text-center text-xs text-silver">
                                {a.year}
                            </span>
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-colors duration-300 group-hover:border-silver/40">
                                <Trophy
                                    size={17}
                                    className="text-neutral-500 transition-colors duration-300 group-hover:text-silver-light"
                                />
                            </span>
                            <div className="min-w-0">
                                <h3 className="font-display truncate text-lg font-medium text-white transition-colors duration-300 group-hover:text-silver-light sm:text-xl">
                                    {a.title}
                                </h3>
                                <p className="font-jbmono mt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                                    {a.org}
                                </p>
                            </div>
                        </div>
                    </FadeUp>
                ))}
            </div>
            <FadeUp delay={0.3}>
                <p className="font-jbmono mt-10 text-xs uppercase tracking-[0.25em] text-neutral-600">
                    — Perjalanan masih panjang, daftar ini akan terus bertambah.
                </p>
            </FadeUp>
        </Chapter>
    );
}
