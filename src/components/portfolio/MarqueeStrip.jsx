import Marquee from "react-fast-marquee";
import { Asterisk } from "lucide-react";

export default function MarqueeStrip({ items, accent = false }) {
    return (
        <div
            data-testid="marquee-strip"
            className={`overflow-hidden border-y py-5 ${
                accent ? "border-silver/15 bg-silver/[0.04]" : "border-white/5 bg-black"
            }`}
        >
            <Marquee speed={35} gradient={false} pauseOnHover>
                {items.map((item, i) => (
                    <span key={i} className="flex items-center">
                        <span
                            className={`font-jbmono mx-6 text-sm uppercase tracking-[0.3em] sm:text-base ${
                                accent ? "text-silver/70" : "text-white/25"
                            }`}
                        >
                            {item}
                        </span>
                        <Asterisk
                            size={16}
                            className={accent ? "text-silver" : "text-silver/50"}
                        />
                    </span>
                ))}
            </Marquee>
        </div>
    );
}
