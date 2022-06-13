import React from 'react';
import { NavBar } from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
      <NavBar />
        <nav>
          Nav
        </nav>

      </header>
      <main>
         <p>
          Home Care Services
        </p>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
