import { useState, useEffect} from 'react'
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom'
import Checkout from './scenes/checkout/Checkout';
import Confirmation from './scenes/checkout/Confirmation';
import Navbar from './scenes/global/Navar';
import Home from './scenes/home/Home';
import ItemDetails from './scenes/itemDetails/ItemDetails';

const scrollToTop = () =>{
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}

function App() {
 

  return (
    <div className="app">
        <BrowserRouter>
          <Navbar />
          < scrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/item/:itemId' element={<ItemDetails />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='checkout/success' element={<Confirmation />} />
          </Routes>
        </BrowserRouter> 
      
       
    </div>
  )
}

export default App
