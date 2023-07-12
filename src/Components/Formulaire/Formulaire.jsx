import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import "./Formulaire.css"
import backgroundForm from "../../Assets/background-form.png"
import iconTel from "../../Assets/icon-tel.png"
import iconEmail from "../../Assets/icon-mail.png"
import iconLocation from "../../Assets/icon-location.png"


function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mmuapuv', 'template_lm814q8', e.target, 'G2Lyl3lT-i8pW2UQw')
      .then((result) => {
        console.log(result.text);
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 50000); // Masquer le message après 5 secondes (5000 millisecondes)
      }, (error) => {
        console.log(error.text);
        setFormSubmitted(false);
      });

    // Réinitialiser les champs du formulaire après l'envoi
    e.target.reset();
  }

  return (
    <div className='container-contactForm'>
      <div className="container-img-form">
        <img src={backgroundForm} alt="" />
        <div className="container-info-agency">
          <ul>
            <li className="info-agency"><img src={iconLocation} alt="" />19 Rue Yves Toudic, 75010 Paris</li>
            <li className="info-agency"><img src={iconTel} alt="" />01 23 45 67 89</li>
            <li className="info-agency"><img src={iconEmail} alt="" />edjour.marielaure@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="container-form">
      {formSubmitted && (
          <div className="success-message">
            <p>Votre e-mail a été envoyé avec succès !</p>
          </div>
        )}
        <h2>contactez-nous</h2>


        <form className='form-contact' onSubmit={sendEmail}>
          <div className="identity-user">
            <input type="text" name='lastname' placeholder='Nom' required />
            <input type="text" name='firstname' placeholder='Prénom' required />
          </div>

          <input type="tel" name='phone' placeholder='Téléphone' required />
          <input type="email" name='email' placeholder='E-mail' required />
          <input type="text" name='subject' placeholder='Sujet' required />
          <textarea name="message" placeholder="Message" required></textarea>

          <div className="container-btn-form">
            <button type='submit'>S'inscrire</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
