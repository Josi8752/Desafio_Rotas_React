
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

import { getProducts } from "../../Data/data";
import './styles.css';

export default function Products() {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
    <div className='container-nav-products container mt20'>
      <nav>
        {products
          .filter((product) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = product.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((product) => (
            <NavLink to={`/products/${product.number}`}
              key={product.number} className={({ isActive }) => isActive ? 'menu-item-products menu-products-active' : 'menu-item-products'}
            >
              {product.name}
            </NavLink>
          ))}
      </nav>
    </div>
       <Outlet />
</>
  );
}