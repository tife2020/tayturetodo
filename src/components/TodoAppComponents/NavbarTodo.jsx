import "./TodoApp.css";
import { BsLayoutSidebar } from "react-icons/bs";
import { IoOptionsOutline } from "react-icons/io5";

export default function NavbarTodo({handleleftMenuIsClicked}) {
  return (
    <>
      <nav className="navTodoApp">
        <div className="NavTodoIconCont" onClick={handleleftMenuIsClicked}>
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
