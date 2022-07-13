import logo from "./logo.svg";
import "./App.css";
import Header from "./Mycomponents/Header";
import Todos from "./Mycomponents/Todos";
import Todo from "./Mycomponents/Todo";
import Footer from "./Mycomponents/Footer";

function App() {
  return (
   <>
    <Header tittle = "My Todo List" searchBar = " "/>
    <Todos/>
    <Todo/>
    <Footer/>



   </>
  );
}

export default App;
