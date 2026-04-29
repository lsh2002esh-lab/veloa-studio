import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white/70">
      <div className="h-px w-full bg-accent" />
      <div className="mx-auto flex max-w-content flex-col gap-4 px-5 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
        <p>© 2024 VeloaStudio. All rights reserved.</p>
        <a href="https://instagram.com/veloa.studio" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-white/70 transition hover:text-white">
          <Instagram className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
