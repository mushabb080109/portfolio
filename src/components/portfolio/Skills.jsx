import Chapter, { FadeUp } from "./Chapter";
import { SKILLS } from "./data";
import { Code2, Music, Palette, Mountain, FileCode, Paintbrush, Braces, Atom } from "lucide-react";

const ICONS = { Code2, Music, Palette, Mountain };
const TAG_ICONS = { FileCode, Paintbrush, Braces, Atom, Mountain };

const SIZE_CLASS = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-2",
    small: "md:col-span-1",
};

export default function Skills() {
    return (
        <Chapter id="skills" number="03" title="Skills" ghostWord="SKILL">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3" data-testid="skills-bento">
                {SKILLS.map((s, i) => {
                    const Icon = ICONS[s.icon];
                    return (
                        <FadeUp
                            key={s.id}
                            delay={0.08 * i}
                            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-colors duration-500 hover:border-silver/35 ${SIZE_CLASS[s.size]}`}
                        >
                            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-silver/0 blur-3xl transition-colors duration-700 group-hover:bg-silver/10" />
                            <div className="flex items-start justify-between">
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                                    <Icon size={s.size === "large" ? 26 : 22} className="text-silver" />
                                </span>
                                <span className="font-jbmono rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                                    {s.level}
                                </span>
                            </div>
                            <h3
                                className={`font-display mt-8 font-semibold uppercase tracking-tight text-white ${
                                    s.size === "large" ? "text-4xl sm:text-5xl" : "text-2xl"
                                }`}
                            >
                                {s.title}
                            </h3>
                            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400 sm:text-base">
                                {s.desc}
                            </p>
                            {s.tags && s.tags.length > 0 && (
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {s.tags.map((tag) => {
                                        const TagIcon = TAG_ICONS[tag.icon];
                                        return (
                                            <span
                                                key={tag.label}
                                                className="font-jbmono inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.15em] text-neutral-300 transition-colors duration-300 group-hover:border-silver/25"
                                            >
                                                {TagIcon && <TagIcon size={13} className="text-silver" />}
                                                {tag.label}
                                            </span>
                                        );
                                    })}
                                </div>
                            )}
                        </FadeUp>
                    );
                })}
            </div>
        </Chapter>
    );
}
