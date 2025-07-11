import React from 'react';
import { motion } from 'framer-motion';

function HeroSection({ language }) {
  const content = {
  kk: {
    greeting: 'Сәлем 👋 Мен Тоқтар Нұрасыл',
    description:
      'Мен креативті әрі мақсатқа бағытталған веб-әзірлеушімін. Laravel, React және Tailwind сияқты заманауи технологияларды пайдаланып, жоғары сапалы әрі функционалды веб-қосымшалар жасаймын. Мен үшін программалау — бұл тек код жазу емес, әрбір жобаға жан бітіріп, оны шынайы өмірде қолдануға жарамды ету.\n\nТаза код, пайдаланушыға ыңғайлы интерфейс және үздік өнім — менің басты қағидаларым. Мен әрбір жобада жаңа нәрсе үйреніп, өз дағдыларымды жетілдіруге тырысамын.',
    button: 'Менің жобаларымды қарау ↓',
  },
  en: {
    greeting: 'Hi 👋 I am Toktar Nurasyl',
    description:
      'I am a creative and goal-oriented web developer with a passion for building clean, responsive, and functional web applications. I work with modern technologies like Laravel, React, and Tailwind to deliver elegant digital solutions.\n\nFor me, coding is more than just writing code — it’s about breathing life into ideas and transforming them into real, impactful user experiences. I constantly strive to improve, learn new tools, and deliver value in every project I touch.',
    button: 'View My Projects ↓',
  },
};


  const t = content[language];

  return (
    <section
      className="py-5"
      style={{ backgroundColor: '#f8fafc', marginTop: '200px' }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Мәтін жағы */}
          <div className="col-lg-6 text-center text-lg-start">
            <motion.h1
              className="fw-bold mb-3"
              style={{ fontSize: '2.7rem', color: '#1f2937' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t.greeting}
            </motion.h1>

            <motion.p
              className="text-muted fs-5 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {t.description}
            </motion.p>

            <motion.a
              href="#projects"
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.button}
            </motion.a>
          </div>

          {/* Иллюстрация */}
          <motion.div
            className="col-lg-5 text-center mt-4 mt-lg-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <img
              src="/profile5.jpg"
              alt="Nurasyl"
              className="img-fluid rounded-circle shadow-lg border border-3 border-white"
              style={{
                maxHeight: '300px',
                objectFit: 'cover',
                width: '300px',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
