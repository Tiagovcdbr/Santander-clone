/* eslint-disable no-unused-vars */
import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Home from './components/Home';
import ImgSlider from './components/ImgSlider';
import Cards from './components/Cards';
import loader from './components/loader';
import Important from './components/Important';
import HomeSlider from './components/HomeSlider';
import Products from './components/Products';
import News from './components/News';
import Channels from './components/Channels';
import Tips from './components/Tips';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ImgSlider />
      <Cards />
      <loader />
      <Important />
      <HomeSlider />
      <Products />
      <News />
      <Channels />
      <Tips />
      <Footer />
    </div>
  );
}

export default App;
