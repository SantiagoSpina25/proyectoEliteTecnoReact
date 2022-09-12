import { useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { db } from "../firebase";
import { collection, getDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";

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

        .catch(error =>{
            Swal.fire({
                icon: "error",
                title: "ups! se produjo un error"
            })
        })
        setLoading(false)
        },[id])


    

    
    return(
        <>
        {loading && <div className="spinner__container"><div className="spinner"></div></div>}
        {!loading && <ItemDetail detalleProducto={detalleProducto}/> }    	    
        </>
    )}

export default ItemDetailContainer 