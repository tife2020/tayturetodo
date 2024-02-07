import todoistLogo from "../assets/todoist-logo.svg";
import todoistIcon from "../assets/todoist-icon.svg";
import { styled } from "styled-components";


const Header = styled.nav`
  backgroundColor: white;
  display: flex;
  alignItems: center;
  padding: 0;

  & .deskLogo{
      display:none;
    }

  @media (min-width:768px){
    padding-bottom: 32px;

    & .mobileLogo{
      display:none;
    }

    & .deskLogo{
      display:block;
    }


  }
`;


export default function Navbar() {
  return (
    <Header>
      <img src={todoistIcon} className="mobileLogo"></img>
      <img src={todoistLogo} className="deskLogo"></img>
    </Header>
  );
}
