import { Instagram, MapPin } from "lucide-react";

const officeAddress = "서울특별시 중구 한강대로 416, 서울스퀘어";

export function Footer() {
  return (
    <footer className="bg-primary text-white/70">
      <div className="h-px w-full bg-accent" />
      <div className="mx-auto flex max-w-content flex-col gap-4 px-5 py-8 text-sm md:flex-row md:items-end md:justify-between md:px-8">
        <div className="space-y-2">
          <p>© 2024 VeloaStudio. All rights reserved.</p>
          <div className="flex items-start gap-2 text-white/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{officeAddress}</span>
          </div>
        </div>
        <a href="https://instagram.com/veloa.studio" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-white/70 transition hover:text-white">
          <Instagram className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
