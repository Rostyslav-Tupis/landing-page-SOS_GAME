import React from 'react';
import './app.css'
import Main from "./Components/main section/main";
import AboutGame from './Components/about/about.game';
import Features from './Components/features/features';
import SystemReq from './Components/system req/systemReq';
import Quotes from './Components/quotes/quotes';
import Subscribe from './Components/subscribe/subscribe';
import Footer from './Components/footer/footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
          <Main/>
          <main>
            <AboutGame/>
            <Features/>
            <SystemReq/>
            <Quotes/>
            <Subscribe/>
          </main>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
