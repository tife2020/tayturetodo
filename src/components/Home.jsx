import Container from "./Container";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";

const contDivStyle = {
  width: "940px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
};

export default function Home() {
  return (
    <div className = "container">
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
