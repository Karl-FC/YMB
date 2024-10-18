import './App.css'
import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'

import Header from './Shared/Header';
import Hero from './Shared/hero';
import Footer from './Shared/footer';

function App() {

  return (
    <>
      <Header></Header>
      <div>
        <Hero></Hero>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
