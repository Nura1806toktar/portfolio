import React from 'react';
import { FaChess, FaRunning, FaGlobeEurope } from 'react-icons/fa';

function About({ language }) {
  const content = {
    kk: {
      title: '👨‍💻 Өзім жайлы',
      greeting: `Сәлем! Менің атым Тоқтар Нұрасыл Тұрсынұлы. Мен 3-курс студентімін және менторымның бағыттауы бойынша web development саласына қызығамын. Қазіргі жасым 20-да, мен Laravel, HTML, CSS, JavaScript және React сияқты технологиялармен жұмыс істей аламын.`,
      career: `Web development — менің кәсіби бағытым. Жобалар арқылы тәжірибе жинап, портфолиямды дамытып келемін.`,
      hobbiesTitle: '⚽ Спорт & Хобби',
      hobbies: [
        { icon: <FaChess className="me-2 text-primary" />, text: 'Шахмат, тоғызқұмалақ' },
        { icon: <FaRunning className="me-2 text-danger" />, text: 'Теннис, волейбол, футбол' },
      ],
      motivationTitle: '🎯 Мотивация',
      quote: '"Мен бағдарламашы ретінде дамуым керек. Күн сайын өзімді жақсартуға мүмкіндік бар!"',
      englishLevel: 'Ағылшын деңгейі: B1',
      footer: 'Кел, бірге керемет жобалар жасайық!',
    },
    en: {
  title: '👨‍💻 About Me',
  greeting: `Hi! My name is Toktar Nurasyl Tursynuly. I’m a 3rd year university student with a strong interest in web development. I’m currently 20 years old and have experience with Laravel, HTML, CSS, JavaScript, and React.`,
  career: `Web development is my professional direction. I gain hands-on experience through projects and continue to build my portfolio.`,
  hobbiesTitle: '⚽ Sports & Hobbies',
  hobbies: [
    { icon: <FaChess className="me-2 text-primary" />, text: 'Chess, Toguz Kumalak' },
    { icon: <FaRunning className="me-2 text-danger" />, text: 'Tennis, volleyball, football' },
  ],
  motivationTitle: '🎯 Motivation',
  quote: '"I want to grow as a developer and build useful things for the world. Every day is a chance to improve."',
  englishLevel: (
    <>
      Kazakh — <strong>Native</strong><br />
      Russian — <strong>B2 → C1</strong><br />
      English — <strong>B1</strong><br />
      <em className="text-muted">Planning to learn Turkish in the future</em>
    </>
  ),
  footer: 'Let’s build something amazing together!',
},


  };

  const t = content[language];

  return (
    <div className="py-5 px-3" style={{ backgroundColor: '#f0f4f8' }}>
      <div className="container">
        <h3 className="text-center fw-bold mb-4" style={{ color: '#1a202c' }}>{t.title}</h3>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 bg-white rounded-4 shadow-sm p-4">
            <p className="fs-5 mb-3" style={{ color: '#374151' }}>
              {t.greeting}
            </p>
            <p className="fs-5 mb-3" style={{ color: '#374151' }}>
              {t.career}
            </p>

            <div className="mt-4 mb-3">
              <h5 className="fw-bold" style={{ color: '#1f2937' }}>{t.hobbiesTitle}</h5>
              <ul className="list-unstyled">
                {t.hobbies.map((hobby, index) => (
                  <li key={index}>{hobby.icon} {hobby.text}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 mb-3">
              <h5 className="fw-bold" style={{ color: '#1f2937' }}>{t.motivationTitle}</h5>
              <blockquote className="blockquote text-muted">
                {t.quote}
              </blockquote>
              <p className="mb-1">
                <FaGlobeEurope className="me-2 text-success" /> {t.englishLevel}
              </p>
            </div>

            <p className="text-end fst-italic text-secondary mt-4">
              {t.footer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
