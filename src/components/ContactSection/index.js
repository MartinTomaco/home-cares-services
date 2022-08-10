import React from 'react';


import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import '../ContactSection/styles.css';

export const ContactSection = (props) => {
  // const {icon,title,description} = props
  const SIZE = '32px';
  const INSTAGRAM = '@hcs.homecareservices' ;
  const WHATSAPP = '+5492213144094' ;
  const MAIL = 'hcs.homecareservices@gmail.com' ;
  return (
    <section className='contact-section'>
    <article className='contact-title'>
    <h2>Contact Us</h2>
    <p>When you need in-home care services, look to "Home Care Services" to deliver the excellence and compassion you deserve. Learn more about the experienced senior in home care​ we deliver.</p>
    </article>
    <article className='contact-types'>

      <div>
      <BsInstagram size={SIZE}/>
      <span> {INSTAGRAM} </span>
      </div>
      <div>
      <BsWhatsapp size={SIZE}/>
      <span> {WHATSAPP} </span>
      </div>
      <div>
      <HiOutlineMail size={SIZE}/>
      <span> {MAIL} </span>
      </div>

    
    </article>
             
    
  </section>
  );
};
