import { useState } from "react"
import { Link } from "react-router-dom"


const ItemCount =({contador, setContador, stock, onAdd})=>{
    
    const [compraIniciada, setcompraIniciada] = useState(false)
    
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
        setcompraIniciada(true)
        onAdd()
    }

    
    return(
        <>
        <button className="material-symbols-outlined" onClick={sumarContador}>add</button>
        <button className="material-symbols-outlined" onClick={restarContador}>remove</button>
        <div className="button__finalizarCompra__container">
            {compraIniciada === true ? <Link to={"/carrito"}><button>Terminar Compra</button></Link> : <button onClick={confirmar}>Comprar</button>}
        </div>
        </>
    )
    

    

   

}

export default ItemCount;   