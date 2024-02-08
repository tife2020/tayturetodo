import Input from "./Input";
import todoistImg from "../assets/todoist-img.png";
import { useState } from "react";

export default function LoginForm() {
  const [inputValue,setInputValue] = useState({
    username: '',
    email : ''
  })

  const [user,setUser] = useState({
    username: '',
    email : ''
  })

  function handleSubmit(e){
    e.preventDefault()
    setUser({
      username : inputValue.username,
      email : inputValue.email,
    })
  }

  function handleChange (e){
    const {name,value} = e.target
    setInputValue({
      ...user,
      [name] : value
    })
  }

  return (
    <div className="containerBody">
      <form className="loginForm">
      <hr className="logInHr" />
        <Input
          label="Username"
          name="username"
          type="text"
          placeholder="Enter your username..."
          required
          onChange= {handleChange}
          value={inputValue.username}
        />
        <Input
          label="Email"
          name="email"
          type="text"
          placeholder="Enter your email..."
          required
          onChange= {handleChange}
          value={inputValue.email}
        />
        <button type="submit" onClick={handleSubmit}>Log in</button>
        <p>
          By continuing with Email, you agree to Todoist's
          <span>Terms of Service</span> and <span>Privacy and Policy</span>
        </p>
      </form>
      <img src={todoistImg} className="deskImg"></img>
    </div>
  );
}
