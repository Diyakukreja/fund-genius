import React from 'react';
import Hero from '../components/Hero';
import TopStocks from '../components/TopStocks';
import LatestNews from '../components/LatestNews';

const Home: React.FC = () => {

  return (
    <>
      <Hero />
      <TopStocks />
      <LatestNews />
    </>
  );
};

export default Home;