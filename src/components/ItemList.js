import Item from "./Item"


const ItemList =({listaProductos})=>{
console.log(listaProductos)

    return(
        <>
        {listaProductos.map(producto => <Item producto={producto} key={producto.id} />)}
        </>
    )
}

export default ItemList