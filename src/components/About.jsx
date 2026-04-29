import { Heart, Smile, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  { icon: Heart, title: "공감", desc: "관객의 마음을 움직이는 이야기를 추구합니다" },
  { icon: Sparkles, title: "독창성", desc: "틀에 갇히지 않는 시각과 접근 방식" },
  { icon: Smile, title: "재미", desc: "보는 사람이 즐거워야 만드는 사람도 즐겁습니다" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section id="about" className="section-shell bg-white">
      <motion.div ref={ref} className="section-inner" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        <div className="section-label">ABOUT</div>
        <h2 className="section-title">우리는 이런 팀입니다</h2>
        <p className="section-copy">
          VeloaStudio는 독립영화 제작에서 시작해 웹드라마, 예능 콘텐츠까지 영역을 넓혀온 소규모 영상 크리에이터 팀입니다. 작지만 밀도 있는 이야기, 형식보다 감각을 우선합니다.
        </p>

        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-3"
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          {values.map(({ icon: Icon, title, desc }) => (
            <motion.article key={title} className="card-base" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
              <Icon className="h-5 w-5 text-accent" />
              <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted">{desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
