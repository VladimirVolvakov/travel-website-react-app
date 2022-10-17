import React from 'react';
// Components:
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Destinations from './components/Destinations/Destinations';
import Search from './components/Search/Search';
import Options from './components/Options/Options';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Options />
      <ImageCarousel />
    </div>
  );
}

export default App;
