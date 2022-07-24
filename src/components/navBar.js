import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <>
        <header className="header">
            <CartWidget/>
            <h1>Elite Tecno</h1>
            <nav className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>    
            </nav>
        </header>
        </>
        

    )
}

export default Navbar;

