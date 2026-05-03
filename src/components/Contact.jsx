import { Instagram, Mail, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const officeAddress = "서울특별시 중구 한강대로 416, 서울스퀘어";
const mapEmbedUrl =
  "https://www.google.com/maps?q=%EC%84%9C%EC%9A%B8%EC%8A%A4%ED%80%98%EC%96%B4%20%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%ED%95%9C%EA%B0%95%EB%8C%80%EB%A1%9C%20416&z=16&output=embed";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contact" className="section-shell bg-bg">
      <motion.div
        ref={ref}
        className="section-inner"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label">CONTACT</div>
        <h2 className="section-title">함께 만들어가요</h2>
        <p className="section-copy">프로젝트 문의, 협업 제안은 편하게 연락 주세요.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card-base">
            <div className="space-y-3">
              <a href="mailto:contact@veloa.studio" className="flex min-h-11 items-center gap-2 text-primary transition hover:text-accent">
                <Mail className="h-4 w-4" />
                <span>contact@veloa.studio</span>
              </a>
              <a href="https://instagram.com/veloa.studio" target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-2 text-primary transition hover:text-accent">
                <Instagram className="h-4 w-4" />
                <span>@veloa.studio</span>
              </a>
              <div className="flex min-h-11 items-start gap-2 text-primary">
                <MapPin className="mt-1 h-4 w-4 shrink-0" />
                <span>{officeAddress}</span>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-[#E5E7EB] bg-white p-5 shadow-sm">
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
          </div>

          <div className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-sm">
            <div className="border-b border-[#E5E7EB] px-5 py-4">
              <div className="text-[13px] font-medium uppercase tracking-[0.08em] text-accent">LOCATION</div>
              <p className="mt-2 text-sm text-muted">서울스퀘어에서 벨로아스튜디오의 위치를 확인해보세요.</p>
            </div>
            <iframe
              title="Veloa Studio Location"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full md:h-[420px]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
