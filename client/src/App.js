
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Policy from './pages/Policy';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound/>}/>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
