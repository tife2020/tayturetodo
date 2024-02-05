import Input from "./Input"

export default function LoginForm(){
    return (
        <form className="loginForm">
            <Input label = 'Username' type = 'text' placeholder = 'Enter your username...'></Input>
            <Input label = 'Email' type = 'text' placeholder = 'Enter your email...'></Input>
            <button type="submit" >Log in</button>
            <p>By continuing with Email, you agree to Todoist's <span>Terms of Service</span> and <span>Privacy and Policy</span></p>
        </form>
    )
    
}