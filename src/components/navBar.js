import CartWidget from "./CartWidget";
import {Link, NavLink} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext"; 

const NavBar = () => {


    const {carrito,obtenerCantidad} = useContext(CartContext)

    return (
        <>
        <header className="header">
            <Link to={"/"}><img src="../LogoEliteTecno.png" className="logo" alt="logo"/></Link>
            <h1 className="titulo">Elite <span>Tecno</span></h1>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/categoria/procesadores">Procesadores</NavLink></li>
                    <li><NavLink to="/categoria/graficas">Graficas</NavLink></li>
                    <li><NavLink to="/categoria/perifericos">Perifericos</NavLink></li>
                    {carrito.length !== 0 ? <div className="nav__carrito"> <p><b>{obtenerCantidad()}</b></p></div> : null}
                    <CartWidget/>
                </ul>    
            </nav>
        </header>
        </>
        

    )
}

export default NavBar;

