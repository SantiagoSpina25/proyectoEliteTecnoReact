import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList";
import { productos } from "../assets/productos";



const ItemListContainer = () =>{

    const [contador, setContador] = useState(0)
    const [listaProductos, setListaProductos] = useState([])
    const [loading, setLoading]=useState(true)
    let stock = 5

    const sumarContador =()=>{
        if(contador < stock){
        setContador(contador + 1)
        }
    }
    
    const restarContador =()=>{
        if(contador >1){
        setContador(contador - 1)
    }
    }    

    useEffect(() => {
        new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productos)
            },2000)
    
        })
        .then(data=> {
            setLoading(false)
            setListaProductos(data)})
    }, []) 


    
    



    
    return(
        <>
        {loading && <h2>...Cargando</h2>}
        {!loading && <ItemList listaProductos={listaProductos}/> }    	    
        <ItemCount stock={stock} contador={contador} setContador={setContador} sumarContador={sumarContador} restarContador={restarContador}></ItemCount>

        </>
    )
}



export default ItemListContainer