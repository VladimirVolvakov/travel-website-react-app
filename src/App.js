import React from 'react';
// Components:
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Destinations from './components/Destinations/Destinations';
import Search from './components/Search/Search';
import Options from './components/Options/Options';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Options />
      <ImageCarousel />
      <Footer />
    </div>
  );
}

export default App;
