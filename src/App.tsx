import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeBody from "./routes/Home/HomeBody";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Computer from "./routes/Products/Computer";

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home" element={<HomeBody />} />
          <Route path="/products" element={<Products />}/>
          <Route path= ":name" element={<Computer/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}


