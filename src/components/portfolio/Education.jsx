import Chapter, { FadeUp } from "./Chapter";
import { EDUCATION } from "./data";
import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <Chapter id="education" number="02" title="Education" ghostWord="SMA">
            <div className="space-y-4" data-testid="education-timeline">
                {EDUCATION.map((e, i) => (
                    <FadeUp key={e.school} delay={0.1 * i}>
                        <div className="group grid grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-md transition-colors duration-500 hover:border-silver/30 hover:bg-white/[0.04] sm:grid-cols-12 sm:p-8">
                            <div className="sm:col-span-3">
                                <span className="font-jbmono text-xs uppercase tracking-[0.2em] text-silver">
                                    {e.period}
                                </span>
                                <p className="mt-3">
                                    <span className="font-jbmono inline-block rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                                        {e.tag}
                                    </span>
                                </p>
                            </div>
                            <div className="sm:col-span-9">
                                <h3 className="font-display flex items-center gap-3 text-2xl font-medium text-white transition-colors duration-300 group-hover:text-silver-light sm:text-3xl">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                                        <GraduationCap size={18} className="text-silver" />
                                    </span>
                                    {e.school}
                                </h3>
                                <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-400">
                                    {e.detail}
                                </p>
                            </div>
                        </div>
                    </FadeUp>
                ))}
            </div>
        </Chapter>
    );
}
