import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
    { id: "about", label: "About" },
    { id: "projects", label: "Works" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (id) => {
        if (window.__lenis) {
            window.__lenis.scrollTo(`#${id}`, { offset: -20, duration: 1.4 });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-0 z-50"
            data-testid="main-nav"
        >
            <div className="px-6 pt-5 sm:px-12 lg:px-24">
                <div
                    className={`flex items-center justify-between rounded-full px-6 py-3.5 transition-colors duration-500 ${
                        scrolled
                            ? "border border-white/10 bg-black/60 backdrop-blur-xl"
                            : "border border-transparent bg-transparent"
                    }`}
                >
                    <button
                        data-testid="nav-logo"
                        onClick={() => window.__lenis?.scrollTo(0, { duration: 1.4 })}
                        className="font-display text-lg font-semibold uppercase tracking-tight"
                    >
                        UCA<span className="text-silver">©</span>
                    </button>
                    <nav className="hidden items-center gap-1 md:flex">
                        {LINKS.map((l) => (
                            <button
                                key={l.id}
                                data-testid={`nav-link-${l.id}`}
                                onClick={() => go(l.id)}
                                className="font-jbmono rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-neutral-400 transition-colors duration-300 hover:bg-white/5 hover:text-silver-light"
                            >
                                {l.label}
                            </button>
                        ))}
                    </nav>
                    <span className="font-jbmono hidden rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-neutral-500 lg:block">
                        SMAN 1 CKT — 2026
                    </span>
                </div>
            </div>
        </motion.header>
    );
}
