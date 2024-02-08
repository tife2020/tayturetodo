import Input from "./Input";
import todoistImg from "../assets/todoist-img.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
  });

  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  const userLocal = {
    username: '',
    email: ''
  }

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValue( prevValue => {
      return {
      ...prevValue,
      [name]: value,
    }
  });
  }

  
  function handleSubmit(e) {
    e.preventDefault();
    setUser({
      username: inputValue.username,
      email: inputValue.email,
    });

    localStorage.clear();

    localStorage.setItem("username", user.username);
    localStorage.setItem("email", user.email);

    userLocal.username = localStorage.getItem("username");
    userLocal.email = localStorage.getItem("email");

    console.log(`${userLocal.username}\n${userLocal.email}`);

    navigate('/taytureTodoApp')
  }

  return (
    <div className="containerBody">
      <form className="loginForm" onSubmit={handleSubmit}>
        <hr className="logInHr" />
        <Input
          label="Username"
          name="username"
          type="text"
          placeholder="Enter your username..."
          required
          onChange={handleChange}
          value={inputValue.username}
        />
        <Input
          label="Email"
          name="email"
          type="text"
          placeholder="Enter your email..."
          required
          onChange={handleChange}
          value={inputValue.email}
        />
        <button type="submit" >
          Log in
        </button>
        <p>
          By continuing with Email, you agree to Todoist's
          <span>Terms of Service</span> and <span>Privacy and Policy</span>
        </p>
      </form>
      <img src={todoistImg} className="deskImg"></img>
    </div>
  );
}
