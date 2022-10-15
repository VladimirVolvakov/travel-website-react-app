import React from 'react';
// Components:
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Destinations from './components/Destinations/Destinations';
import Search from './components/Search/Search';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
    </div>
  );
}

export default App;
