import { NavLink, Outlet } from 'react-router-dom';

import './styles .css';

export default function NavProducts() {
    return (


        <>
            <div className='container-nav-products container mt20'>

                <NavLink to='/computer' className={({ isActive }) => isActive ?  'menu-item-products menu-products-active' : 'menu-item-products'}>
                    Computadores
                  
                </NavLink>

                <NavLink to='/eletronicos' className={({ isActive }) => isActive ?'menu-item-products menu-products-active' : 'menu-item-products'}>
                    Eletrônicos
                </NavLink>

                <NavLink to='/livros' className={({ isActive }) => isActive ? 'menu-item-products menu-products-active' : 'menu-item-products'}>
                    Livros
                </NavLink>

            </div>



        </>



    );
}