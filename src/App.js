/* eslint-disable no-unused-vars */
import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Home from './components/Home';
import ImgSlider from './components/ImgSlider';
import Cards from './components/Cards';
import loader from './components/loader';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ImgSlider />
      <Cards />
      <loader />
    </div>
  );
}

export default App;
