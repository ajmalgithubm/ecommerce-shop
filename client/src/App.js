
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Policy from './pages/Policy';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound/>}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
