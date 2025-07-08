import './App.css';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import OrderPage from './components/OrderPage';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
