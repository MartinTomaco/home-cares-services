import React from 'react';


import { FaBath } from 'react-icons/fa';
import { TbNurse } from 'react-icons/tb';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { IoIosNutrition } from 'react-icons/io';
import { MdEmojiTransportation } from 'react-icons/md';
import { RiWechatLine } from 'react-icons/ri';
import '../ServiceCard/styles.css';

export const ServiceCard = (props) => {
  const {icon,title,description} = props
  const SIZE = '32px';
  return (
    <article className='service-card'>
    <figure>
      {icon==='FaBath'&&
      <FaBath size={SIZE}/>}
      {icon==='TbNurse'&&
      <TbNurse size={SIZE}/>}
      {icon==='FaHandHoldingHeart'&&
      <FaHandHoldingHeart size={SIZE}/>}
      {icon==='IoIosNutrition'&&
      <IoIosNutrition size={SIZE}/>}
      {icon==='MdEmojiTransportation'&&
      <MdEmojiTransportation size={SIZE}/>}
      {icon==='RiWechatLine'&&
      <RiWechatLine size={SIZE}/>}
    </figure>
    <div className='service-description'>
      <p>{title}</p>
      <div>
      {description}
      </div>
    </div>
  </article>
  );
};
