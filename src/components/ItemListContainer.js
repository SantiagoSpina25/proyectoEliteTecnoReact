import ItemCount from "./ItemCount"



const ItemListContainer = ({greeting, contador, setContador, stock}) =>{


    
    return(
        <>
        <p>Hola! {greeting}</p>
        <p>Contador de objetos: {contador}</p>
        <ItemCount stock={stock} contador={contador} setContador={setContador}></ItemCount>

        </>
    )
}



export default ItemListContainer