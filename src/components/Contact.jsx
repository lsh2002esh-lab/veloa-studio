import { Instagram, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="section-shell bg-bg">
      <motion.div ref={ref} className="section-inner" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        <div className="section-label">CONTACT</div>
        <h2 className="section-title">함께 만들어가요</h2>
        <p className="section-copy">프로젝트 문의, 협업 제안은 편하게 연락 주세요.</p>

        <div className="mt-8 space-y-3">
          <a href="mailto:contact@veloa.studio" className="flex min-h-11 items-center gap-2 text-primary transition hover:text-accent">
            <Mail className="h-4 w-4" />
            <span>contact@veloa.studio</span>
          </a>
          <a href="https://instagram.com/veloa.studio" target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-2 text-primary transition hover:text-accent">
            <Instagram className="h-4 w-4" />
            <span>@veloa.studio</span>
          </a>
        </div>

        <div className="mt-10 max-w-xl rounded-lg border border-[#E5E7EB] bg-white p-5 shadow-sm">
          <div className="mb-4 text-[13px] font-medium uppercase tracking-[0.08em] text-muted">Quick Message</div>
          <div className="space-y-3">
            <input type="text" placeholder="이름" className="min-h-11 w-full rounded border border-[#E5E7EB] px-3 text-sm outline-none transition focus:border-primary" />
            <textarea placeholder="메시지" rows="4" className="w-full rounded border border-[#E5E7EB] px-3 py-3 text-sm outline-none transition focus:border-primary" />
            <button type="button" className="button-primary bg-primary text-white hover:bg-primary/95">
              보내기
            </button>
          </div>
          {/* TODO: connect to backend */}
        </div>
      </motion.div>
    </section>
  );
}
