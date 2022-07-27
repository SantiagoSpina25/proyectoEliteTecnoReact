import { useState } from "react";
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer";







const App = () => {


  const [contador, setContador] = useState(0)
  let stock = 14
  
  
  return (
    <>
    <NavBar/>
    <main>
    <ItemListContainer greeting= "Soy una lista" contador={contador} stock={stock} setContador={setContador}/>
    </main>
    <Footer contador={contador}></Footer>
    </> 
  )
}

export default App;

