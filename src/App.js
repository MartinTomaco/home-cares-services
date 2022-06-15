import React from 'react';
import { NavBar } from './components/NavBar';
import { FaBath } from 'react-icons/fa';
import { TbNurse } from 'react-icons/tb';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { IoIosNutrition } from 'react-icons/io';
import { MdEmojiTransportation } from 'react-icons/md';
import { RiWechatLine } from 'react-icons/ri';
import walkingWithCares from './assets/walkingWithCares.jpg'
import './App.css';

function App() {
  const SIZE = '32px';
  return (
    <div className="App">

      <NavBar />


      <section className='first-section'>
        <div className='score-left'>
          <img className='walkingWithCaresImg'
            alt='A care-partner walking with an old-lady'
            src={walkingWithCares}
          />
        </div>
        <div className='score-right'>
          <h2>Live Well with Our Home Care Services</h2>
          <p>The comfort of home can’t be beat. Home care
            services let people flourish in the everyday life
            they already know and love – while getting a little
            help to stay independent and mobile. Home Instead personalized
            care plans lift the caregiving burden from family members to keep
            those strong family bonds intact.</p>
        </div>
      </section>

      <section className="services-container">
        <div className='services-header'>
            <TbNurse size={SIZE}/>
            <FaHandHoldingHeart size={SIZE}/>
            <IoIosNutrition size={SIZE}/>
            <MdEmojiTransportation size={SIZE}/>
            <RiWechatLine size={SIZE}/>
          <p>Care Services for Aging Adults</p>
          <h2>Types of Home Care</h2>
        </div>
        <div className='service-card'>
          <figure>
            <FaBath size={SIZE}/>

          </figure>
          <div className='service-description'>
            <p>Personal Care Services</p>
            <text>
            Assistance with bathing, grooming and dressing promotes independence, keeps vital routines in place and helps people age in place with dignity
            </text>
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
