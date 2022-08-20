

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
        onAdd()
    }

    return(
        <>
        <button className="material-symbols-outlined" onClick={sumarContador}>add</button>
        <button className="material-symbols-outlined" onClick={restarContador}>remove</button>
        <div className="button__finalizarCompra__container">
        <button onClick={confirmar}>Terminar Compra</button>
        </div>
        </>
    )
}

export default ItemCount;   