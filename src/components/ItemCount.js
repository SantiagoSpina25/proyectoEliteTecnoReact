import {Link} from "react-router-dom"


const ItemCount =({contador, setContador, stock, onAdd})=>{

    
    const sumarContador =()=>{
        if(contador < stock){
            setContador(contador + 1)
        }
    }
    
    const restarContador =()=>{
        if(contador > 1){
            setContador(contador - 1)
        }   
    }  

    const confirmar= () =>{
        onAdd(contador)
    }

    return(
        <>
        <button className="material-symbols-outlined" onClick={sumarContador}>add</button>
        <button className="material-symbols-outlined" onClick={restarContador}>remove</button>
        <div className="button__finalizarCompra__container">
        <Link to="/carrito"><button onClick={confirmar}>Terminar Compra</button></Link>
        </div>
        </>
    )
}

export default ItemCount;   