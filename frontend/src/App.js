import {Routes,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Header from './components/header.js';
import  Homepage from './components/home.js';
import  Categories from './components/Categories.js';
import  CatProducts from './components/catProducts.js'
import Checkout from './components/Checkout.js';
import Login from './components/login.js';
import Register from './components/register.js';
import Dashboard from './components/dashboard.js';
import Orders from './components/comp_orders.js';
import Productsdetail from './components/prodetail.js';
import Allprod from './components/allproducts.js';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={< Homepage/>} />
        <Route path="/Checkout" element = {< Checkout/>}/>
        <Route path="/Categories" element={< Categories/>} />
        <Route path="/Category/:category_slug/:category_id" element={< CatProducts/>} />
        <Route path="/Product/:product_slug/:product_id" element={< Productsdetail/>} />
        <Route path="/Register" element={< Register/>} />
        <Route path="/Login" element={< Login/>} />
        <Route path="/dashboard" element={< Dashboard/>} />
        <Route path="/orders" element={< Orders/>} />
        <Route path="/allproducts" element={< Allprod/>} />
      </Routes>
    </>
  );
}



export default App;
