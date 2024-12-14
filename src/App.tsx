import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Partnership } from './components/Partnership/Partnership';
import { FAQ } from './components/FAQ/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Partnership />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;