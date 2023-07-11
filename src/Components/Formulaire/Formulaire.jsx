import React from 'react';
import "./Formulaire.css"
import backgroundForm from "../../Assets/background-form.png"
import iconTel from "../../Assets/icon-tel.png"
import iconEmail from "../../Assets/icon-mail.png"
import iconLocation from "../../Assets/icon-location.png"
function ContactForm() {

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
        <h2>contactez-nous</h2>

        <form className='form-contact' action="">
          
          <div className="identity-user">
            <input type="text" name='lastname' placeholder='Nom' />
            <input type="text" name='firstname' placeholder='Prénom'/>
          </div>

          <input type="tel" name='phone' placeholder='Téléphone' />
          <input type="email" name='email' placeholder='E-mail' />
          <input type="text" name='subject' placeholder='sujet' />
          <textarea  name="message" placeholder="Message"></textarea>
          <div className="container-btn-form">
            <button type='submit'>S'inscrire</button>
          </div>

        </form>
      </div>

    </div>
  );
}

export default ContactForm;
