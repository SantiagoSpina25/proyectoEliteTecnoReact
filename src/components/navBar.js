import CartWidget from "./CartWidget";
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <header className="header">
            <Link to={"/"}><img src="../LogoEliteTecno.png" className="logo"/></Link>
            <h1 className="titulo">Elite <span>Tecno</span></h1>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/categoria/procesadores">Procesadores</NavLink></li>
                    <li><NavLink to="/categoria/graficas">Graficas</NavLink></li>
                    <li><NavLink to="/categoria/perifericos">Perifericos</NavLink></li>
                    <CartWidget/>
                </ul>    
            </nav>
        </header>
        </>
        

    )
}

export default NavBar;

