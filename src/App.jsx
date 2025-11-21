import './App.css'

//import dependencies
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//import components
import Header from './components/Header'
import Footer from './components/Footer'

//import pages
import { Home } from './pages/Home'
import { Products } from './pages/Products'

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productos' element={<Products />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

