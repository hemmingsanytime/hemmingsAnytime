import React from 'react';
import { Hero } from '../components/Hero';
import { ServiceCarousel } from '../components/ServiceCarousel';
import { Services } from '../components/Services';
import { Benefits } from '../components/Benefits';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <ServiceCarousel />
      <Services />
      <Benefits />
      <Contact />
    </>
  );
};
