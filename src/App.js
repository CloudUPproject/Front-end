
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './comp/Footer/footer';
import Home from "./pages/Home";
import OrderPage from './pages/Order';

function App() {
   return (
      <BrowserRouter>
         <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/order" element={<OrderPage/>}/>
         </Routes>
         <Footer/>
      </BrowserRouter>
   );
}

export default App;
