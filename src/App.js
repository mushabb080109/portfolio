import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import MarqueeStrip from "@/components/portfolio/MarqueeStrip";
import About from "@/components/portfolio/About";
import Education from "@/components/portfolio/Education";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import Organizations from "@/components/portfolio/Organizations";
import Hobbies from "@/components/portfolio/Hobbies";
import SummitProof from "@/components/portfolio/SummitProof";
import Gallery from "@/components/portfolio/Gallery";
import Contact from "@/components/portfolio/Contact";

const MARQUEE_TOP = ["Student", "Developer", "Designer", "Explorer", "Musician", "Hiker"];
const MARQUEE_BOTTOM = ["Mushab Adibaa", "Uca", "SMAN 1 Cikarang Timur", "Class of 2026"];

function App() {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
        window.__lenis = lenis;
        let rafId;
        const loop = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(loop);
        };
        rafId = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);

    return (
        <div className="App bg-[#050505] text-white">
            <div className="noise-overlay" aria-hidden />
            <Nav />
            <main>
                <Hero />
                <MarqueeStrip items={MARQUEE_TOP} />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Achievements />
                <Organizations />
                <Hobbies />
                <SummitProof />
                <Gallery />
                <MarqueeStrip items={MARQUEE_BOTTOM} accent />
                <Contact />
            </main>
        </div>
    );
}

export default App;
