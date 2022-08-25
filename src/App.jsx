import { Routes, Route } from 'react-router-dom';

import Header from './Header'
import MainContent from './routes/MainContent';
import About from './routes/About';
import Footer from './Footer'

import '../index.css'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />

    </>
  )

}

export default App
