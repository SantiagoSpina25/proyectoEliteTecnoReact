import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate()

    

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

        
        const coleccionPedidos = collection(db, "pedidos")
        const consulta = addDoc(coleccionPedidos, pedido)

        consulta
        .then((res)=>{

            Swal.fire({
                icon: "success",
                title: "Gracias por su compra!",
                html: `El id de su compra es: <b>${res.id}</b>`,
                confirmButtonText: "Aceptar"
            }).then((res)=>{
                if(res.isConfirmed)
                Swal.fire({
                    icon: "info",
                    text: "Seras redirigido al home en 3 segundos..."
                })  
                setTimeout(()=>{
                    navigate("/")
                },3000)
            })

            vaciarCarrito()
            
        })

        .catch(error =>{
            Swal.fire({
                icon: "error",
                title: "ups! se produjo un error"
            })
        })
    }

    return (

    <div className="form__container">

        <h2 className="form__text">Para completar la compra, por favor, rellene sus datos:</h2>

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