import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { works } from "../data/works";

const filters = ["전체", "독립영화", "웹드라마", "예능·콘텐츠"];

export function Works() {
  const [activeFilter, setActiveFilter] = useState("전체");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const filteredWorks = useMemo(
    () => (activeFilter === "전체" ? works : works.filter((item) => item.category === activeFilter)),
    [activeFilter],
  );

  return (
    <section id="works" className="section-shell bg-bg">
      <motion.div ref={ref} className="section-inner" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        <div className="section-label">WORKS</div>
        <h2 className="section-title">제작 작업물</h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const active = filter === activeFilter;
            return (
              <motion.button
                key={filter}
                type="button"
                layout
                onClick={() => setActiveFilter(filter)}
                className={`relative min-h-11 rounded-full border px-4 text-sm font-medium transition ${active ? "border-primary bg-primary text-white" : "border-[#E5E7EB] bg-white text-primary hover:border-primary/40"}`}
              >
                {filter}
              </motion.button>
            );
          })}
        </div>

        <motion.div layout className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.article
                key={work.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative aspect-[2/3] overflow-hidden rounded-lg bg-primary/5"
              >
                <img
                  src={`/images/works/${work.filename}`}
                  alt={work.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <motion.div
                  className="absolute inset-x-0 bottom-0 flex translate-y-full flex-col gap-2 bg-[rgba(26,26,46,0.76)] px-4 py-4 text-white transition duration-300 group-hover:translate-y-0"
                >
                  <span className="w-fit rounded-full border border-white/20 px-2 py-1 text-[11px] font-medium tracking-[0.08em] text-white/80">
                    {work.category}
                  </span>
                  <h3 className="text-sm font-semibold">{work.title}</h3>
                </motion.div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
