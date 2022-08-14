import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import ItemList from "./ItemList";
import { productos } from "../assets/productos";
import TituloPage from "./TituloPage"



const ItemListContainer = () =>{
    
    const [listaProductos, setListaProductos] = useState([])
    const {id} = useParams()
    const [loading, setLoading]=useState(true)
    
    
    useEffect(() => {
        new Promise((res,rej)=>{
            setLoading(true)
            
            setTimeout(()=>{
                res(productos)
            },2000)

        })
        .then(data=> {
            setLoading(false)
            setListaProductos(data)})
        }, [id]) 

    

    if(id == undefined){
        return(
            <>
            <TituloPage titulo="Catálogo de productos"/>
            {loading && <div className="spinner__container"><div className="spinner"></div></div>}
            {!loading && <ItemList listaProductos={listaProductos}/> }    	    
            </>
        )
    }else{
        const productosFiltrados = listaProductos.filter(productos => productos.categoria == id)
        return(
            <>
            {loading && <div className="spinner__container"><div className="spinner"></div></div>}
            {!loading && <ItemList listaProductos={productosFiltrados}/>}
            </>
        )
    }

    }



export default ItemListContainer