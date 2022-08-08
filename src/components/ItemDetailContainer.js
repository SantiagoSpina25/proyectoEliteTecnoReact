import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail"
import { productos } from "../assets/productos"


const ItemDetailContainer = () => {

    const [detalleProducto, setDetalleProducto] = useState({})
    const [loading, setLoading]=useState(true)

    let productoElegido = productos.find(producto => producto.id == 1)



    useEffect(() => {
        new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productoElegido)
            },2000)
    
        })
        .then(data=> {
            setLoading(false)
            setDetalleProducto(data)})
    }, []) 


    

    
    return(
        <>
        {loading && <h2>...Cargando</h2>}
        {!loading && <ItemDetail detalleProducto={detalleProducto}/> }    	    
        </>
    )

}
export default ItemDetailContainer 