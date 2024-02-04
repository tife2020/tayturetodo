import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";

const contDivStyle = {
  width: "940px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  backgroundColor: "blue",
};

export default function App() {
  return (
    <div>
      <Container>
        <div style={contDivStyle}>
          <Navbar />
          
        </div>
      </Container>
    </div>
  );
}
