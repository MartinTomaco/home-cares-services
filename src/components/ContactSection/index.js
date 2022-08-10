import React from 'react';


import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import '../ContactSection/styles.css';

export const ContactSection = (props) => {

  const {title,description} = props
  const SIZE = '32px';
  const WHATSAPP = '+5492213144094' ;
  const INSTAGRAM = '@hcs.homecareservices' ;
  const MAIL = 'hcs.homecareservices@gmail.com' ;

  return (
    <section className='contact-section'>
    <article className='contact-title'>
    <h2>{title}</h2>
    <p>{description}</p>
    </article>
    <article className='contact-types'>

      <div>
      <BsWhatsapp size={SIZE}/>
      <span> {WHATSAPP} </span>
      </div>
      <div>
      <BsInstagram size={SIZE}/>
      <span> {INSTAGRAM} </span>
      </div>
      <div>
      <HiOutlineMail size={SIZE}/>
      <span> {MAIL} </span>
      </div>

    
    </article>
             
    
  </section>
  );
};
