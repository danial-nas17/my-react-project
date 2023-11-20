import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import Todo from "./pages/Todo";
import TodoProvider from "./component/context/TodoProvider";

function App() {

  
  return (
   <BrowserRouter>
   <Header/>
   <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/todo" element={<TodoProvider><Todo/></TodoProvider>}/>

    

   </Routes>
   
   </BrowserRouter>
    
  );
}

export default App;
