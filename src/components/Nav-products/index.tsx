import { NavLink } from 'react-router-dom';

import './styles .css';
import { getComputer } from '../../Data/data-Computer';

export default function NavProducts() {

    return (


        <>
            <div className='container-nav-products container mt20'>

                <NavLink to=':name' className={({ isActive }) => isActive ? 'menu-item-products menu-products-active' : 'menu-item-products'}>
                    Computadores
                </NavLink>

                <NavLink to=':value' className={({ isActive }) => isActive ? 'menu-item-products menu-products-active' : 'menu-item-products'}>
                    Eletrônicos
                </NavLink>

                <NavLink to=':amount' className={({ isActive }) => isActive ? 'menu-item-products menu-products-active' : 'menu-item-products'}>
                    Livros
                </NavLink>

            </div>
        </>



    );
}