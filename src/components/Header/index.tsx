import { NavLink } from "react-router-dom";

import imgHouse from '../../assets/iconHouse.svg'
import './styles.css';

export default function Header() {

    return (
        <header>
            <div className="nav-bar-container container">
                <nav className="nav-bar">
                    <NavLink to='/home' className={({ isActive }) => isActive ? 'menu-item menu-active' : 'menu-item'} >
                        Início
                    </NavLink>
                    <NavLink to='/products' className={({ isActive }) => isActive ? 'menu-item menu-active' : 'menu-item'} >
                        Produtos
                    </NavLink>
                    <NavLink to='/aboutwe' className={({ isActive }) => isActive ? 'menu-item menu-active' : 'menu-item'} >
                        Sobre nós
                    </NavLink>
                </nav>
                <NavLink to='/' className={({ isActive }) => isActive ? 'menu-item menu-active' : 'menu-item'} >
                    <img src={imgHouse} alt="Home" />
                </NavLink>

            </div>
        </header>
    );
}