import { Film, LayoutGrid, Video } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { icon: Film, title: "기획 & 개발", desc: "콘텐츠 아이디어 발굴부터 기획안 작성, 포맷 설계까지 함께합니다" },
  { icon: Video, title: "영상 제작", desc: "촬영·편집·색보정까지, 완성도 있는 영상 제작을 지원합니다" },
  { icon: LayoutGrid, title: "콘텐츠 외주", desc: "브랜디드 콘텐츠, 숏폼, 웹드라마 등 다양한 외주 제작이 가능합니다" },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section id="services" className="section-shell bg-white">
      <motion.div ref={ref} className="section-inner" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        <div className="section-label">SERVICES</div>
        <h2 className="section-title">함께 할 수 있는 것들</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.article key={title} className="card-base" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
              <Icon className="h-5 w-5 text-accent" />
              <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted">{desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
