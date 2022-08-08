const Item = ({producto}) => {

  const {id, nombre, marca, imagen, categoria, descripcion, precio, stock} = producto

  return (
    <article className="cardItems">
    <h2>{nombre}</h2>
    <img src={imagen} alt={nombre}/>
    <p>$ {precio}</p>
    <button>Añadir al carrito</button>
    </article>
  )
}
export default Item