import React from 'react';
import Header from './Components/Header'
import { Routes , Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <AnimatePresence>
    <div className='bg-primary w-screen h-auto'>
    <Header/>
    </div>
  </AnimatePresence>
  )
}

export default App
