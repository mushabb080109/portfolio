import Chapter, { FadeUp } from "./Chapter";
import { ORGANIZATIONS } from "./data";
import { Users } from "lucide-react";

export default function Organizations() {
    return (
        <Chapter id="organizations" number="06" title="Organizations" ghostWord="TEAM">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3" data-testid="organizations-grid">
                {ORGANIZATIONS.map((o, i) => (
                    <FadeUp
                        key={o.org}
                        delay={0.1 * i}
                        className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-colors duration-500 hover:border-silver/35"
                    >
                        <div>
                            <div className="flex items-center justify-between">
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                                    <Users size={20} className="text-silver" />
                                </span>
                                <span className="font-jbmono text-[10px] tracking-[0.2em] text-neutral-600">
                                    {o.period}
                                </span>
                            </div>
                            <h3 className="font-display mt-8 text-xl font-semibold uppercase tracking-tight text-white sm:text-2xl">
                                {o.org}
                            </h3>
                            <p className="mt-3">
                                <span className="font-jbmono inline-block rounded-full border border-silver/25 bg-silver/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-silver">
                                    {o.role}
                                </span>
                            </p>
                        </div>
                        <p className="mt-6 text-sm leading-relaxed text-neutral-400">{o.desc}</p>
                    </FadeUp>
                ))}
            </div>
        </Chapter>
    );
}
