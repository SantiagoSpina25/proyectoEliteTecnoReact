

const ItemCount =({contador, stock, setContador})=>{
    
    const sumarContador =()=>{
        if(contador < stock){
        setContador(contador + 1)
        }
    }
    
    const restarContador =()=>{
        if(contador >0){
        setContador(contador - 1)
    }
    }     

    return(
        <>
        <button className="material-symbols-outlined" onClick={sumarContador}>add</button>
        <button className="material-symbols-outlined" onClick={restarContador}>remove</button>
        <button>Añadir al carrito</button>  
        </>
    )
}

export default ItemCount; 