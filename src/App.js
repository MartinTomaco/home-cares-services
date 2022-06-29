import React from 'react';
import { ServiceCard } from './components/ServiceCard';
import { NavBar } from './components/NavBar';
import { availableServices } from './assets/availableServices'

import walkingWithCares from './assets/walkingWithCares.jpg'
import './App.css';

function App() {

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
      <article>
        <div className='services-header'>
          <p>Care Services for Aging Adults</p>
          <h2>Types of Home Care</h2>
        </div>
        <section className="services-container">
          {availableServices.map((service) => (
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

        </section>
        <section className='services-disclaimer'>
          <p>Please contact your local Home Care Service office to review which services are permitted and available in your area.</p>
        </section>
      </article>

      <footer>
        <span> ©2022 Home Care Services. All Rights Reserved.</span>
      </footer>
    </div>
  );
}

export default App;
