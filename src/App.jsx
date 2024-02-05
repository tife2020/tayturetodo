import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";

const contDivStyle = {
  width: "940px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  
};

export default function App() {
  return (
    <div>
      <Container>
        <div style={contDivStyle}>
          <Navbar />
          <h1 className="logInH1">Log in</h1>
          <LoginForm />
        </div>
      </Container>
    </div>
  );
}
