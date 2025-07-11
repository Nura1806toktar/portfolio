import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp,
FaLaravel, FaGithub
} from 'react-icons/fa';
import {
SiMongodb, SiMysql, SiBootstrap
} from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const skills = [
{ name: { kk: 'HTML5', en: 'HTML5' }, icon: <FaHtml5 size={40} />, color: '#e34c26' },
{ name: { kk: 'CSS3', en: 'CSS3' }, icon: <FaCss3Alt size={40} />, color: '#264de4' },
{ name: { kk: 'JavaScript', en: 'JavaScript' }, icon: <FaJs size={40} />, color: '#f0db4f' },
{ name: { kk: 'React', en: 'React' }, icon: <FaReact size={40} />, color: '#61dbfb' },
{ name: { kk: 'PHP', en: 'PHP' }, icon: <FaPhp size={40} />, color: '#4F5D95' },
{ name: { kk: 'Laravel', en: 'Laravel' }, icon: <FaLaravel size={40} />, color: '#f05340' },
{ name: { kk: 'Git', en: 'Git' }, icon: <FaGithub size={40} />, color: '#f1502f' },
{ name: { kk: 'GitHub', en: 'GitHub' }, icon: <FaGithub size={40} />, color: '#000' },
{ name: { kk: 'MongoDB', en: 'MongoDB' }, icon: <SiMongodb size={40} />, color: '#4db33d' },
{ name: { kk: 'MySQL', en: 'MySQL' }, icon: <SiMysql size={40} />, color: '#00758f' },
{ name: { kk: 'Bootstrap', en: 'Bootstrap' }, icon: <SiBootstrap size={40} />, color: '#563d7c' },
{ name: { kk: 'EmailJS', en: 'EmailJS' }, icon: <MdEmail size={40} />, color: '#ec4899' },
];

const tools = [
{ name: { kk: 'Laragon', en: 'Laragon' }, color: '#38bdf8' },
{ name: { kk: 'Open Server', en: 'Open Server' }, color: '#f97316' },
{ name: { kk: 'Lavable', en: 'Lavable' }, color: '#8b5cf6' },
];

function Skills() {
const [lang, setLang] = useState('kk');

return (
<section className="py-5" id="skills" style={{ backgroundColor: '#f9fafb' }}>
<div className="container">

javascript
Копировать
Редактировать
    {/* Тіл ауыстырғыш */}
    <div className="text-end mb-3">
      <button
        className="btn btn-outline-primary btn-sm me-2"
        onClick={() => setLang('kk')}
        disabled={lang === 'kk'}
      >
        Қазақша
      </button>
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={() => setLang('en')}
        disabled={lang === 'en'}
      >
        English
      </button>
    </div>

    {/* Негізгі тақырып */}
    <h2 className="text-center mb-5">
      {lang === 'kk' ? '🛠 Менің Навыктарым' : '🛠 My Skills'}
    </h2>

    {/* Skills Grid */}
    <div className="row justify-content-center">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 d-flex justify-content-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <div
            className="text-center p-3 shadow rounded"
            style={{
              backgroundColor: '#ffffff',
              borderBottom: `5px solid ${skill.color}`,
              width: '100px',
              height: '100px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'transform 0.2s ease-in-out',
            }}
          >
            <div style={{ color: skill.color }}>{skill.icon}</div>
            <div className="mt-2" style={{ fontSize: '0.85rem' }}>
              {skill.name[lang]}
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Tools бөлім */}
    <h4 className="text-center mt-5 mb-3">
      {lang === 'kk' ? '🧰 Жұмыс Істеу Құралдарым' : '🧰 My Dev Tools'}
    </h4>

    <div className="row justify-content-center">
      {tools.map((tool, index) => (
        <motion.div
          key={index}
          className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 d-flex justify-content-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
        >
          <div
            className="text-center p-3 shadow rounded"
            style={{
              backgroundColor: '#ffffff',
              borderBottom: `5px solid ${tool.color}`,
              width: '100px',
              height: '80px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="mt-1" style={{ fontSize: '0.85rem', color: '#333' }}>
              {tool.name[lang]}
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    <p className="text-center text-muted mt-3">
      {lang === 'kk'
        ? '🚀 Мен әрқашан жаңа технология мен құрал үйренуге дайынмын!'
        : '🚀 Always ready to explore new technologies and tools!'}
    </p>
  </div>
</section>
);
}

export default Skills;