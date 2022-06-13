import React from 'react';
import { NavBar } from './components/NavBar';
import walkingWithCares from './assets/walkingWithCares.jpg'
import './App.css';

function App() {
  return (
    <div className="App">

      <NavBar />

      <main>
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
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
