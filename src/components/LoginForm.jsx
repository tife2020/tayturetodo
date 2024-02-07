import Input from "./Input";
import todoistImg from "../assets/todoist-img.png";

export default function LoginForm() {
  return (
    <div className="containerBody">
      <form className="loginForm">
      <hr className="logInHr" />
        <Input
          label="Username"
          type="text"
          placeholder="Enter your username..."
        ></Input>
        <Input
          label="Email"
          type="text"
          placeholder="Enter your email..."
        ></Input>
        <button type="submit">Log in</button>
        <p>
          By continuing with Email, you agree to Todoist's
          <span>Terms of Service</span> and <span>Privacy and Policy</span>
        </p>
      </form>
      <img src={todoistImg} className="deskImg"></img>
    </div>
  );
}
