import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const renderBrand = () =>
    logoError ? (
      <span className="text-lg font-bold tracking-[-0.02em] text-primary">Veloa Studio</span>
    ) : (
      <span className="inline-flex items-center rounded bg-white px-1 py-0.5">
        <img
          src="/images/logo.png"
          alt="Veloa Studio"
          className="h-9 w-auto max-w-[172px] object-contain"
          onError={() => setLogoError(true)}
        />
      </span>
    );

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-[#E5E7EB] bg-white/95 ${scrolled ? "shadow-nav" : ""}`}>
      <div className="mx-auto flex h-14 max-w-content items-center justify-between px-5 md:px-8">
        <a href="#hero" className="flex items-center" aria-label="Veloa Studio home" onClick={() => setMenuOpen(false)}>
          {renderBrand()}
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <a key={item.id} href={`#${item.id}`} className="group flex items-center gap-2 text-sm font-medium text-muted transition hover:text-primary">
                <span className={`h-1.5 w-1.5 rounded-full transition ${active ? "bg-accent" : "bg-transparent border border-transparent group-hover:border-accent"}`} />
                <span className={active ? "text-primary" : ""}>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded text-primary md:hidden"
          aria-label="Open navigation"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={20} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div className="border-t border-[#E5E7EB] bg-white md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.nav
              aria-label="Mobile navigation"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              className="mx-auto max-w-content px-5 py-3"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center">{renderBrand()}</div>
                <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded text-primary" aria-label="Close navigation" onClick={() => setMenuOpen(false)}>
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex min-h-11 items-center border-t border-[#E5E7EB] py-2 text-sm font-medium text-primary"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
