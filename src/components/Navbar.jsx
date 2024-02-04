import { Layout } from "antd";
import todoistLogo from "../assets/todoist-logo.svg";

const { Header} = Layout;

const headerStyle = {
  backgroundColor: "white",
  display:'flex',
  alignItems:'center',
  padding:'0'
};

export default function Navbar() {
  return (
        <Header style={headerStyle}>
          <img src={todoistLogo}></img>
        </Header>
  );
}
