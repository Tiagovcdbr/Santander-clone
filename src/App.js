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
    </div>
  );
}

export default App;
