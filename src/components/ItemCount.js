

const ItemCount =({contador, sumarContador, restarContador})=>{
    
 
    return(
        <>
        <p>Contador de objetos: {contador}</p>
        <button className="material-symbols-outlined" onClick={sumarContador}>add</button>
        <button className="material-symbols-outlined" onClick={restarContador}>remove</button>
        </>
    )
}

export default ItemCount; 