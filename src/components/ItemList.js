import Item from "./Item"


const ItemList =({listaProductos})=>{

    return(
        <div className="itemList">
        {listaProductos.map(producto => <Item producto={producto} key={producto.id} />)}
        </div>
    )
}

export default ItemList