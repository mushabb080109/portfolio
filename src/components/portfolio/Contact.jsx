import { useState } from "react";
import { motion } from "framer-motion";
import { SOCIALS } from "./data";
import { ArrowUpRight, Github, Instagram, Mail, Globe, Send } from "lucide-react";
import { FadeUp } from "./Chapter";
import SocialIcons from "./SocialIcons";

const ICON_MAP = { Github, Instagram, Mail, Globe };
const CONTACT_EMAIL = "mushabadibaa@gmail.com";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Pesan dari ${form.name || "pengunjung web"} — via Portfolio`;
        const body = `${form.message}\n\n—\nDari: ${form.name || "-"}\nEmail: ${form.email || "-"}`;
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <footer
            id="contact"
            data-testid="contact-footer"
            className="relative overflow-hidden px-6 pb-12 pt-32 sm:px-12 lg:px-24 lg:pt-48"
        >
            <div className="ambient-glow pointer-events-none absolute inset-0" aria-hidden />
            <span
                aria-hidden
                className="text-ghost font-display pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none text-[26vw] font-bold leading-none tracking-tighter"
            >
                UCA
            </span>

            <div className="relative z-10">
                <FadeUp>
                    <span className="font-jbmono inline-flex items-center rounded-full border border-silver/25 bg-silver/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.35em] text-silver">
                        09 — Contact
                    </span>
                    <h2 className="font-display mt-8 text-[13vw] font-bold uppercase leading-[0.9] tracking-tighter sm:text-[9vw]">
                        <span className="text-metallic">Let&apos;s</span>{" "}
                        <span className="text-ghost-accent">Talk</span>
                    </h2>
                    <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                        Mau ngobrol soal kode, gunung, musik, atau kolaborasi karya?
                        Sapa aja lewat salah satu kanal di bawah ini.
                    </p>
                </FadeUp>

                <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" data-testid="contact-socials">
                    {SOCIALS.map((s, i) => {
                        const Icon = ICON_MAP[s.icon];
                        return (
                            <FadeUp key={s.label} delay={0.08 * i}>
                                <motion.a
                                    href={s.href}
                                    target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    data-testid={`social-link-${s.label.toLowerCase()}`}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                    className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-colors duration-500 hover:border-silver/40 hover:bg-white/[0.05]"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-jbmono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                                            {s.label}
                                        </span>
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-silver/40">
                                            <ArrowUpRight
                                                size={15}
                                                className="text-neutral-500 transition-colors duration-300 group-hover:text-silver-light"
                                            />
                                        </span>
                                    </div>
                                    {Icon && (
                                        <Icon
                                            size={36}
                                            strokeWidth={1.3}
                                            className="mt-10 text-white transition-colors duration-300 group-hover:text-silver-light"
                                        />
                                    )}
                                </motion.a>
                            </FadeUp>
                        );
                    })}
                </div>

                <FadeUp delay={0.1}>
                    <div className="mt-24 grid grid-cols-1 gap-12 border-t border-white/10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="lg:col-span-2">
                            <p className="font-display text-lg font-semibold uppercase tracking-tight">
                                UCA<span className="text-silver">©</span>
                            </p>
                            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
                                Arsip perjalanan seorang pelajar — kode, panggung, puncak, dan
                                kanvas. Masih ditulis, masih berjalan.
                            </p>
                        </div>

                        <div>
                            <p className="font-jbmono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                                Navigasi
                            </p>
                            <ul className="mt-5 space-y-3">
                                {[
                                    { id: "about", label: "About" },
                                    { id: "projects", label: "Works" },
                                    { id: "gallery", label: "Gallery" },
                                    { id: "contact", label: "Contact" },
                                ].map((l) => (
                                    <li key={l.id}>
                                        <button
                                            data-testid={`footer-link-${l.id}`}
                                            onClick={() =>
                                                window.__lenis
                                                    ? window.__lenis.scrollTo(`#${l.id}`, { offset: -20, duration: 1.2 })
                                                    : document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })
                                            }
                                            className="text-sm text-neutral-400 transition-colors duration-300 hover:text-silver-light"
                                        >
                                            {l.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="font-jbmono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                                Kontak
                            </p>
                            <SocialIcons className="mt-5" />
                        </div>
                    </div>
                </FadeUp>

                <FadeUp delay={0.15}>
                    <div className="mt-16 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md sm:p-10">
                        <p className="font-jbmono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                            Kirim Pesan Langsung
                        </p>
                        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <input
                                type="text"
                                name="name"
                                required
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Nama kamu"
                                data-testid="contact-form-name"
                                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-white placeholder:text-neutral-600 outline-none transition-colors duration-300 focus:border-silver/40"
                            />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email kamu (opsional)"
                                data-testid="contact-form-email"
                                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-white placeholder:text-neutral-600 outline-none transition-colors duration-300 focus:border-silver/40"
                            />
                            <textarea
                                name="message"
                                required
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Mau ngobrolin apa?"
                                data-testid="contact-form-message"
                                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-white placeholder:text-neutral-600 outline-none transition-colors duration-300 focus:border-silver/40 sm:col-span-2"
                            />
                            <button
                                type="submit"
                                data-testid="contact-form-submit"
                                className="font-jbmono inline-flex w-fit items-center gap-2 rounded-full border border-silver/30 bg-silver/5 px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-silver-light transition-colors duration-300 hover:border-silver/60 hover:bg-silver/10 sm:col-span-2"
                            >
                                Kirim Pesan
                                <Send size={14} />
                            </button>
                        </form>
                        <p className="mt-4 text-xs text-neutral-600">
                            Tombol ini bakal buka aplikasi email kamu, udah keisi otomatis ke {CONTACT_EMAIL}.
                        </p>
                    </div>
                </FadeUp>

                <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
                    <p className="font-jbmono text-[10px] uppercase tracking-[0.25em] text-neutral-600">
                        © 2026 Uca — All Rights Reserved
                    </p>
                    <p className="font-jbmono text-[10px] uppercase tracking-[0.25em] text-neutral-600">
                        Dibuat dengan kode, kopi, dan rasa penasaran
                    </p>
                </div>
            </div>
        </footer>
    );
}
