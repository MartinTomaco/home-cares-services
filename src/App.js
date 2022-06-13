import React from 'react';
import { NavBar } from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
      <NavBar />
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
