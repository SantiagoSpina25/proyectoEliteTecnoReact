import { useState, createContext } from "react";

export const CartContext = createContext()

const {Provider} = CartContext

const MyProvider = ({children}) =>{
    
    const [carrito, setCarrito] = useState([])
    
    const estaEnCarrito = (id) => {
        return carrito.some(prod => prod.id === id)
    }

    const agregarItem = (prod, cantidad) => {
        
    const nuevoProducto = {
        ...prod,
        cantidad
    }
    
        if (estaEnCarrito(nuevoProducto.id)){

            const productoBuscado = carrito.find(prod => prod.id === nuevoProducto.id)
            const productoEncontrado = carrito.indexOf(productoBuscado)
            const carritoAuxiliar = [...carrito]
            
            carritoAuxiliar[productoEncontrado].cantidad += cantidad
            setCarrito(carritoAuxiliar)


        }
        else{
            setCarrito([...carrito, nuevoProducto])
        }
        
    }

    const borrarItem =(id)=>{
        
        return setCarrito(carrito.filter(prod => prod.id !== id))
    }

    const vaciarCarrito =()=>{
        return setCarrito([])
    }


    const obtenerCantidad =()=>{
        return carrito.reduce((acc, prod)=> acc += prod.cantidad, 0)
    }

    const obtenerPrecioTotal =()=>{
        return carrito.reduce((acc, prod)=> acc += prod.cantidad * prod.precio, 0)
    }

    return(


        <Provider value={{carrito, agregarItem, borrarItem, vaciarCarrito, estaEnCarrito, obtenerCantidad, obtenerPrecioTotal}}>{children}</Provider>

    )
}

export default MyProvider