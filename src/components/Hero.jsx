import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  const [logoError, setLogoError] = useState(false);

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden bg-white px-5 pt-24 md:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(47,168,213,0.06),transparent_42%)]" />
      <div className="absolute left-5 top-0 hidden h-full w-[3px] bg-accent/80 md:block" />
      <div className="relative mx-auto flex w-full max-w-content justify-center md:justify-start">
        <div className="max-w-2xl text-center md:text-left">
          {logoError ? (
            <div className="mb-6 text-lg font-bold tracking-[0.08em] text-primary">Veloa Studio</div>
          ) : (
            <span className="mx-auto mb-6 inline-flex rounded bg-white px-2 py-1 md:mx-0">
              <img
                src="/images/logo.png"
                alt="Veloa Studio"
                className="h-16 w-auto max-w-[240px] object-contain md:h-20 md:max-w-[300px]"
                onError={() => setLogoError(true)}
              />
            </span>
          )}

          {/* OPTION A: "당신의 이야기를, 우리의 언어로" */}
          {/* OPTION B: "평범한 일상에서 건져 올린 특별한 순간들" */}
          {/* OPTION C: "재미있으면 다 돼" */}
          <motion.h1
            className="text-2xl font-bold leading-[1.25] tracking-[-0.03em] text-primary md:text-4xl lg:text-5xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
          >
            당신의 이야기를, 우리의 언어로
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-xl text-muted md:mx-0"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
          >
            술 토크쇼부터 연애 예능, 독립영화까지— VeloaStudio는 공감과 독창성, 그리고 재미로 이야기를 만듭니다.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.6}
          >
            <a href="#works" className="button-primary bg-primary text-white hover:bg-primary/95">
              작업물 보기
            </a>
            <a href="#contact" className="button-primary border border-primary text-primary hover:bg-primary hover:text-white">
              문의하기
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
