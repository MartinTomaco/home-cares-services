import React from 'react';


import { FaBath } from 'react-icons/fa';
import '../ServiceCard/styles.css';
const SIZE = '32px';

export const ServiceCard = () => {
  return (
    <article className='service-card'>
    <figure>
      <FaBath size={SIZE}/>

    </figure>
    <div className='service-description'>
      <p>Personal Care Services</p>
      <text>
      Assistance with bathing, grooming and dressing promotes independence, keeps vital routines in place and helps people age in place with dignity
      </text>
    </div>
  </article>
  );
};
