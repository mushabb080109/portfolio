import { Github, Instagram, Mail, Globe } from "lucide-react";
import { SOCIALS } from "./data";

const ICON_MAP = { Github, Instagram, Mail, Globe };

export default function SocialIcons({ size = "sm", className = "" }) {
    const dims = size === "lg" ? "h-11 w-11" : "h-9 w-9";
    const iconSize = size === "lg" ? 18 : 15;

    return (
        <div className={`flex items-center gap-2 ${className}`} data-testid="social-icons">
            {SOCIALS.map((s) => {
                const Icon = ICON_MAP[s.icon];
                return (
                    <a
                        key={s.label}
                        href={s.href}
                        target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        title={s.label}
                        data-testid={`social-icon-${s.label.toLowerCase()}`}
                        className={`group flex ${dims} items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-neutral-400 backdrop-blur-md transition-colors duration-300 hover:border-silver/40 hover:text-silver-light`}
                    >
                        {Icon && <Icon size={iconSize} />}
                        <span className="sr-only">{s.label}</span>
                    </a>
                );
            })}
        </div>
    );
}
