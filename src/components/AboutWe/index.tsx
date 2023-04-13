import { Link } from 'react-router-dom';
import './styles.css';
import { NavLink } from 'react-router-dom';

export default function AboutWe() {

    return (

        <div className='about container'>
            <NavLink to='*' className={({ isActive }) => isActive ? 'menu-item-products menu-products-active' : 'menu-item-products'}>
       <h1>Sobre nós</h1>
            </NavLink>

        </div>
    );
}