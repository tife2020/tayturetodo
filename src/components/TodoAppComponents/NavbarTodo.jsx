import "./TodoApp.css";
import { BsLayoutSidebar } from "react-icons/bs";
import { IoOptionsOutline } from "react-icons/io5";

export default function NavbarTodo() {
  return (
    <>
      <nav className="navTodoApp">
        <div className="NavTodoIconCont">
          <BsLayoutSidebar
            style={{
              color: "#666",
              height: "32px",
              width: "20px",
            }}
          />
        </div>
        <div className="NavTodoIconCont">
          <IoOptionsOutline
            style={{
              color: "#666",
              height: "32px",
              width: "20px",
            }}
          />
          
        </div>
      </nav>
    </>
  );
}
