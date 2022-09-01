import { useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { db } from "../firebase";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [detalleProducto, setDetalleProducto] = useState({})
    const [loading, setLoading]=useState(true)

    const {id} = useParams() 

    
    
    
    useEffect(() => {
        
        setLoading(true)
        
        const productosEnCollection = collection(db, "productos")
        const consulta = getDoc(doc(productosEnCollection,id))
        
        consulta
        .then((prod)=>{
            
            const producto = {
                ...prod.data(),
                id: prod.id    
            }
                
                
            setDetalleProducto(producto)
            
        })

        .catch(error => console.log(error))
        setLoading(false)
        },[id])


    

    
    return(
        <>
        {loading && <div className="spinner__container"><div className="spinner"></div></div>}
        {!loading && <ItemDetail detalleProducto={detalleProducto}/> }    	    
        </>
    )}

export default ItemDetailContainer 