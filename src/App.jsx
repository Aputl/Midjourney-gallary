import { Routes, Route } from 'react-router-dom';

import Header from './Header'
import MainContent from './routes/MainContent';
import About from './routes/About';
import NotFound from './routes/NotFound';
import Footer from './Footer'

import '../index.css'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Midjourney-gallary/" element={<MainContent />} />
        <Route path="/Midjourney-gallary/About" element={<About />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />

    </>
  )

}

export default App
