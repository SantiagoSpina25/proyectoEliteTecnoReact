import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import Carrito from "./Carrito";
import Form from "./Form";

const Main = () => {
  return (
    <main>
        
        
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<Carrito/>}/> 
          <Route path="/formulario" element={<Form/>}/>
        </Routes >
    </main>
  )
}
export default Main