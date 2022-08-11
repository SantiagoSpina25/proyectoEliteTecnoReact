import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <header className="header">
            <CartWidget/>
            <h1>Elite Tecno</h1>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/categoria/procesadores">Procesadores</NavLink></li>
                    <li><NavLink to="/categoria/graficas">Graficas</NavLink></li>
                    <li><NavLink to="/categoria/perifericos">Perifericos</NavLink></li>
                    <li><NavLink to="/carrito" className="material-symbols-rounded">shopping_cart</NavLink></li>
                </ul>    
            </nav>
        </header>
        </>
        

    )
}

export default NavBar;

