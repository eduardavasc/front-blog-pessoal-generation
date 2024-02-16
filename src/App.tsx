import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className='min-h-[80vh]'>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />   
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;