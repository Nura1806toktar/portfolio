import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

function Contact({ language }) {
const form = useRef();

const sendEmail = (e) => {
e.preventDefault();


emailjs
  .sendForm('service_2yk1ebb', 'template_9g7m4fm', form.current, 'kWQrOfi3r4koJ3qPJ')
  .then(
    () => {
      alert(language === 'kk' ? '✅ Хатыңыз сәтті жіберілді!' : '✅ Message sent successfully!');
      form.current.reset();
    },
    () => {
      alert(language === 'kk' ? '❌ Қате! Хат жіберілмеді.' : '❌ Error! Message not sent.');
    }
  );
};

return (
<section id="contact" className="py-5" style={{ backgroundColor: '#f3f4f6' }}>
<div className="container">
<h2 className="text-center mb-4">
{language === 'kk' ? '📬 Байланыс' : '📬 Contact'}
</h2>
<div className="row justify-content-center">
<div className="col-md-10 col-lg-8">
<motion.form
ref={form}
onSubmit={sendEmail}
className="p-4 shadow rounded bg-white"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
>
<div className="mb-3">
<label className="form-label">
{language === 'kk' ? 'Аты-жөніңіз' : 'Your Name'}
</label>
<input type="text" name="user_name" className="form-control" placeholder={language === 'kk' ? 'Толық атыңызды жазыңыз' : 'Enter your full name'} required />
</div>
<div className="mb-3">
<label className="form-label">Email</label>
<input type="email" name="user_email" className="form-control" placeholder={language === 'kk' ? 'Email мекенжайыңыз' : 'Your email address'} required />
</div>
<div className="mb-3">
<label className="form-label">
{language === 'kk' ? 'Тақырып' : 'Subject'}
</label>
<input type="text" name="subject" className="form-control" placeholder={language === 'kk' ? 'Не туралы?' : 'What is this about?'} />
</div>
<div className="mb-3">
<label className="form-label">
{language === 'kk' ? 'Сіз кімсіз?' : 'Who are you?'}
</label>
<select name="identity" className="form-select">
<option value="student">{language === 'kk' ? 'Студент' : 'Student'}</option>
<option value="employer">{language === 'kk' ? 'Жұмыс беруші' : 'Employer'}</option>
<option value="friend">{language === 'kk' ? 'Дос/таныс' : 'Friend'}</option>
<option value="other">{language === 'kk' ? 'Басқа' : 'Other'}</option>
</select>
</div>
<div className="mb-3">
<label className="form-label">
{language === 'kk' ? 'Веб-сайтыңыз (қаласаңыз)' : 'Your website (optional)'}
</label>
<input type="url" name="website" className="form-control" placeholder="https://..." />
</div>
<div className="mb-3">
<label className="form-label">
{language === 'kk' ? 'Хабарлама' : 'Message'}
</label>
<textarea name="message" className="form-control" rows="4" placeholder={language === 'kk' ? 'Хабарыңызды осында жазыңыз' : 'Write your message here'} required></textarea>
</div>
<div className="form-check mb-3">
<input className="form-check-input" type="checkbox" name="urgent" id="urgentCheck" />
<label className="form-check-label" htmlFor="urgentCheck">
{language === 'kk' ? '24 сағат ішінде жауап керек' : 'Need a reply within 24h'}
</label>
</div>
<motion.button type="submit" className="btn btn-primary w-100" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
{language === 'kk' ? 'Жіберу 🚀' : 'Send 🚀'}
</motion.button>
</motion.form>
</div>
</div>
</div>
</section>
);
}

export default Contact;