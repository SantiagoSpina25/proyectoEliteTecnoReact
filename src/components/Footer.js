import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <>
        <footer>
            <div className="footer__content">
                <h3>Sobre nosotros</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem non dolores molestias labore saepe voluptatum?</p>
            </div>
            <div className="footer__redes">
                <ul>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Discord</li>
                </ul>
            </div>
        </footer>
        
        
        </>
    )
}

export default Footer;