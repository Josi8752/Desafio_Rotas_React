import { NavLink } from 'react-router-dom';

import './styles.css';

import House from "../../assets/iconHouse.svg";

export default function Header() {
    return (

        <header>
            <div className='nav-bar-container container'>
                <nav className='nav-bar'>
                    <NavLink to='/home' className={({ isActive }) => isActive ? 'menu-item menu-active' : 'menu-item'}>
                        Início
                    </NavLink>

                    <NavLink to='/products' className={({ isActive }) => isActive ? 'menu-item menu-active' : 'menu-item'}>
                        Produtos
                    </NavLink>

                    <NavLink to='/aboutWe' className={({ isActive }) => isActive ? 'menu-item menu-active' : 'menu-item'}>
                        Sobre nós
                    </NavLink>
                </nav>
                <NavLink to='/aboutWe'>
                    <img src={House} alt="Casa" />
                </NavLink>
            </div>

        </header>
    );
}