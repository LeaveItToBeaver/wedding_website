import './App.css';
import Navbar from './components/navigation/Navbar';
import { Route, Routes } from "react-router-dom";
import Landing from './pages/landing/Landing';
import RSVP from './pages/rsvp/RSVP';
import Gallery from './pages/gallery/Gallery';
import FAQ from './pages/faq/FAQ';
import Registry from './pages/Registry/Registry';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/rsvp' element={<RSVP />}/>
          <Route path='/registry' element={<Registry />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/faq' element={<FAQ />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
