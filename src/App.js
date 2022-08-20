import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import MyProvider from "./context/CartContext";






const App = () => {
  
  return (
    <BrowserRouter>
      <MyProvider>
      <NavBar/>
      <Main/>
      <Footer/>
      </MyProvider>
    </BrowserRouter> 
  )
}

export default App;

