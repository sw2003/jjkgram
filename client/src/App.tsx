import React from 'react';
import Page0 from './pages/page0'
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import { MainProvider } from './mainContext';
import { StoryProvider } from './storyContext';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import "./app.css"

function App() {
  const location = useLocation();

  return (
    <div className=' sm:h-screen sm:flex sm:items-center'>
      
      <div className=' sm:max-w-[454px] sm:max-h-[600px] sm:mx-auto sm:overflow-scroll sm:border sm:shadow'>
        
        <AnimatePresence>
          <MainProvider>
            <StoryProvider>
              <Routes location={location} key={location.pathname}>
                <Route path='/home' element={<Page0></Page0>}></Route>
                <Route path='/' element={<Page1></Page1>}></Route>
                <Route path='/message' element={<Page2></Page2>}></Route>
              </Routes>
            </StoryProvider>
          </MainProvider>
        </AnimatePresence>
      </div>
    </div>
  )
}

/*
      <div className=' sm:max-w-xs sm:max-h-[600px] sm:mx-auto sm:overflow-scroll sm:border sm:shadow'>
        
        <AnimatePresence>
          <MainProvider>
            <StoryProvider>
              <Routes location={location} key={location.pathname}>
                <Route path='/home' element={<Page0></Page0>}></Route>
                <Route path='/' element={<Page1></Page1>}></Route>
                <Route path='/message' element={<Page2></Page2>}></Route>
              </Routes>
            </StoryProvider>
          </MainProvider>
        </AnimatePresence>
      </div>
*/

export default App;


