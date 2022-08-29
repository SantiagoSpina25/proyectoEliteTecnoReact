import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import ItemList from "./ItemList";
import TituloPage from "./TituloPage"
import { db } from "../firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";


const ItemListContainer = () =>{
    
    const [listaProductos, setListaProductos] = useState([])
    const {id} = useParams()
    const [loading, setLoading]=useState(true)
    
    
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
            setListaProductos(productos)
            setLoading(false)
        })

        .catch(error => console.log(error))
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