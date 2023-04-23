
import { BrowserRouter, Link, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './routes/Home';
import HomeBody from './routes/Home/HomeBody';
import Products from './routes/Products';
import NotFound from './routes/NotFound';
import ProductCategory from './routes/Products/ProductCategory';
import About from './routes/About';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      <Route index element={<Navigate to='/home' />} />
          <Route path='home' element={<HomeBody />} />
        <Route path="products" element={<Products />}>
          <Route path=":productId" element={<ProductCategory />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        <Route path="aboutwe" element={<About/>}/>
        <Route path="notFould" element={<NotFound />} />
      </Route>
    </Routes>

  </BrowserRouter>
  );
}


