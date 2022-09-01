import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";

const Form = () => {

    const {carrito, vaciarCarrito, obtenerPrecioTotal} = useContext(CartContext)

    const [usuario, setUsuario] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: ""
    })

    const handleChangeInput = (e) =>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })

    }

    

    const handleConfirm = (e) =>{
        
        e.preventDefault()

        const pedido ={
            buyer:{
                name: usuario.nombre,
                phone: usuario.apellido,
                email: usuario.email,
            },
            items: carrito,
            date: serverTimestamp(),
            total: obtenerPrecioTotal(),
            
        }
        console.log(pedido)

        
        const coleccionPedidos = collection(db, "pedidos")
        const consulta = addDoc(coleccionPedidos, pedido)

        consulta
        .then((res)=>{

            Swal.fire({
                icon: "success",
                title: `El id de su compra es: ${res.id}`
            })

            vaciarCarrito()
        })
        .catch(error => console.log(error))
    }

    return (

    <div className="form__container">

        <h2>Para completar la compra, por favor, rellene sus datos:</h2>

        <form className="form">

            <label htmlFor="nombre">Nombre: </label>
            <input onChange={handleChangeInput} className="form__input" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" value={usuario.nombre} required />

            <label htmlFor="apellido">Apellido: </label>
            <input onChange={handleChangeInput} className="form__input" type="text" name="apellido" id="apellido" placeholder="Ingrese su apellido" value={usuario.apellido} required />

            <label htmlFor="email">Email: </label>
            <input onChange={handleChangeInput} className="form__input" type="email" name="email" id="email" placeholder="Ingrese su mail" value={usuario.email} required/>

            <label htmlFor="telefono">Número de teléfono: </label>
            <input onChange={handleChangeInput} className="form__input" type="text" name="telefono" id="telefono" placeholder="Ingrese su número de teléfono" value={usuario.telefono} required/>

            <button onClick={handleConfirm} type="submit">Enviar</button>

        </form>
    </div>
  )
}
export default Form