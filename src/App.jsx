import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import TodoApp from "./components/TodoAppComponents/TodoApp";

const router = createBrowserRouter([
  {path:'/', element: <Home /> },
  {path:'/taytureTodoApp', element: <TodoApp /> },
  
])

export default function App() {
  return (
    <>
      <RouterProvider router = {router}/>
    </>
  );
}
