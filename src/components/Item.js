import {Link} from "react-router-dom"


const Item = ({producto}) => {

  const {id, nombre, marca, imagen, categoria, descripcion, precio} = producto
  

  

  return (
    <article className="card__item">
    <h2>{nombre}</h2>
    <img className="card__item__imagen" src={imagen} alt={nombre}/>
    <p className="card__item__detalle__precio">$ {precio}</p>
    <button><Link className="button" to={`/item/${id}`}>Ver detalle</Link></button>
    </article>
  )
}
export default Item