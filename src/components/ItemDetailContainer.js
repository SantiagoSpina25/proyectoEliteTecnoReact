import { useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { db } from "../firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [detalleProducto, setDetalleProducto] = useState({})
    const [loading, setLoading]=useState(true)

    const {id} = useParams() 

    
    
    
    useEffect(() => {
        setLoading(true)
        
        const productosEnCollection = collection(db, "productos")
        const pedido = getDocs(productosEnCollection)
        
        pedido
        .then(x =>{
            const productos = x.docs.map(doc=>{
                return {
                    ...doc.data(),
                    id: doc.id
                } 
            })
            let productoElegido = productos.find(producto => producto.id == id)
            setDetalleProducto(productoElegido)
            setLoading(false)
        })

        .catch(error => console.log(error))
        
    }, [id]) 


    

    
    return(
        <>
        {loading && <div className="spinner__container"><div className="spinner"></div></div>}
        {!loading && <ItemDetail detalleProducto={detalleProducto}/> }    	    
        </>
    )

}
export default ItemDetailContainer 