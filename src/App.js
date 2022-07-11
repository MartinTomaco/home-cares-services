import React from 'react';
import { ServiceCard } from './components/ServiceCard';
import { NavBar } from './components/NavBar';
import { languageMainApp, availableServices } from './assets/availableLanguages'

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
          <h2>{languageMainApp['EN'].heroTitle}</h2>
          <p>{languageMainApp['EN'].heroParagraph}</p>
        </div>
      </section>
      <article>
        <div className='services-header'>
          <p>{languageMainApp['EN'].subTitleOfService}</p>
          <h2>{languageMainApp['EN'].typeOfService}</h2>
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
          <p>{languageMainApp['EN'].servicesDisclaimer}</p>
        </section>
      </article>

      <footer>
        <span>{languageMainApp['EN'].footerRights}</span>
      </footer>
    </div>
  );
}

export default App;
