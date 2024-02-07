import "./App.css";
// import Container from "./components/Container";
// import Navbar from "./components/Navbar";
// import LoginForm from "./components/LoginForm";

// const contDivStyle = {
//   width: "940px",
//   display: "flex",
//   flexDirection: "column",
//   gap: "32px",
  
// };
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";

const router = createBrowserRouter([
  {path:'/', element: <Home /> }
])

export default function App() {
  return (
    // <div className = "container">
    //   <Container>
    //     <div style={contDivStyle}>
    //       <Navbar />
    //       <h1 className="logInH1">Log in</h1>
    //       <LoginForm />
    //     </div>
    //   </Container>
    // </div>
    <>
      <RouterProvider router = {router}/>
    </>
  );
}
