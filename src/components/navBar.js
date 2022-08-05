import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
        <header className="header">
            <CartWidget/>
            <h1>Elite Tecno</h1>
            <nav className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Procesadores</a></li>
                    <li><a href="#">Graficas</a></li>
                    <li><a href="#">Perifericos</a></li>
                </ul>    
            </nav>
        </header>
        </>
        

    )
}

export default NavBar;

