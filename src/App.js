import React, { useContext } from 'react';
import { ServiceCard } from './components/ServiceCard';
import { NavBar } from './components/NavBar';
import { languageMainApp, availableServices } from './assets/availableLanguages'

import { LangContextProvider } from './context/LangContext'
import LangContext from './context/LangContext';
import walkingWithCares from './assets/walkingWithCares.jpg';
import './App.css';

function App() {
  let {lang} = useContext(LangContext);
  console.log('langFromContent' ,lang)
  


  return (
      <LangContextProvider>
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
              <h2>{languageMainApp[`${lang}`].heroTitle}</h2>
              <p>{languageMainApp[`${lang}`].heroParagraph}</p>
            </div>
          </section>
          <article>
            <div className='services-header'>
              <p>{languageMainApp[`${lang}`].subTitleOfService}</p>
              <h2>{languageMainApp[`${lang}`].typeOfService}</h2>
            </div>
            <section className="services-container">
              {availableServices[`${lang}`].map((service) => (
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  key={service.id}
                />
              ))}

            </section>
            <section className='services-disclaimer'>
              <p>{languageMainApp[`${lang}`].servicesDisclaimer}</p>
            </section>
          </article>

          <footer>
            <span>{languageMainApp[`${lang}`].footerRights}</span>
          </footer>
        </div>
      </LangContextProvider>
  );
}

export default App;
