import { useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { productos } from "../assets/productos"


const ItemDetailContainer = () => {

    const [detalleProducto, setDetalleProducto] = useState({})
    const [loading, setLoading]=useState(true)

    const {id} = useParams() 

    let productoElegido = productos.find(producto => producto.id == id)



    useEffect(() => {
        new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productoElegido)
            },2000)
    
        })
        .then(data=> {
            setLoading(false)
            setDetalleProducto(data)})
    }, [id]) 


    

    
    return(
        <>
        {loading && <div className="spinner__container"><div className="spinner"></div></div>}
        {!loading && <ItemDetail detalleProducto={detalleProducto}/> }    	    
        </>
    )

}
export default ItemDetailContainer 