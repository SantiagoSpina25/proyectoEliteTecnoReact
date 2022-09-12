import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import ItemList from "./ItemList";
import TituloPage from "./TituloPage"
import Swal from "sweetalert2";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () =>{
    
    const [listaProductos, setListaProductos] = useState([])
    const {id} = useParams()
    const [loading, setLoading]=useState(true)
    
    
    useEffect(() => {
        const productosEnCollection = collection(db, "productos")
        if (!id){
            const consulta = getDocs(productosEnCollection)
            
            consulta
            .then(x =>{
                const productos = x.docs.map(doc=>{
                   return {
                    ...doc.data(),
                    id: doc.id
                    } 
                })
                setListaProductos(productos)
                setLoading(false)
            })
        
            .catch(error =>{
                Swal.fire({
                    icon: "error",
                    title: "ups! se produjo un error"
                })
            })

        }
        else{
            const filtro = query(productosEnCollection, where("categoria","==",id))
            const consulta = getDocs(filtro)

            consulta
            .then(x =>{
                const productos = x.docs.map(doc=>{
                    return {
                        ...doc.data(),
                        id: doc.id
                    } 
                })
                setListaProductos(productos)
                setLoading(false)
            })
        }
        setLoading(true)
 
        }, [id]) 

    if(id === undefined){
        return(
            <>
            <TituloPage titulo="Catálogo de productos"/>
            {loading && <div className="spinner__container"><div className="spinner"></div></div>}
            {!loading && <ItemList listaProductos={listaProductos}/> }    	    
            </>
        )
    }else{
        const productosFiltrados = listaProductos.filter(productos => productos.categoria === id)
        return(
            <>
            {loading && <div className="spinner__container"><div className="spinner"></div></div>}
            {!loading && <ItemList listaProductos={productosFiltrados}/>}
            </>
        )
    }

    }



export default ItemListContainer