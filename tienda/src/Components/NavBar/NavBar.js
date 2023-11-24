import React from 'react';
import CartWidget from '../Cart/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
        
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link className="navbar-brand" to='/'>Tienda Botanica</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/plantas">Plantas</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/productos">Productos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/deco">Deco</Link>
            </li>
            </ul>
        </div>
        
        <Link class="nav-link" to="/cart">
        <CartWidget class="cart-icon" />
        </Link>
    
        </div>
    </nav>
    
    
        </div>
        )
    }
    
    export default NavBar;
