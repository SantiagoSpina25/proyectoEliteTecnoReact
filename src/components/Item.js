import {Link} from "react-router-dom"


const Item = ({producto}) => {

  const {id, nombre, imagen, precio} = producto
  

  

  return (
    <article className="card__item">
    <h2>{nombre}</h2>
    <img className="card__item__imagen" src={imagen} alt={nombre}/>
    <p className="card__item__detalle__precio">$ {precio}</p>
    <Link to={`/item/${id}`}><button>Ver detalle</button></Link>
    </article>
  )
}
export default Item