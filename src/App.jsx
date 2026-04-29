import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const sectionIds = ["hero", "about", "works", "services", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0.2, 0.4, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Works />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
