import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <Services/>
    </div>
  );
}

export default App;
