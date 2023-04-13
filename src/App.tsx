import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HomeBody from "./routes/Home/HomeBody";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Computer from "./routes/Products/Computer";
import Eletronic from "./routes/Products/Eletronic";
import Book from "./routes/Products/Book";
import NotFound from "./routes/NotFound";
import AboutWe from "./components/AboutWe";

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<Navigate to="/home"/>} />
          <Route path="home" element={<HomeBody />} />
          <Route path="products" element={<Products />}>
            <Route path=":name" element={<Computer/>}/>
            <Route path=":value" element={<Eletronic/>}/>
            <Route path=":amount" element={<Book/>}/>
          </Route>
          <Route path="aboutWe" element={<AboutWe/>}/>
          <Route path="*" element={<NotFound/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}


