import { BsLayoutSidebar } from "react-icons/bs";

const username = localStorage.getItem("username");
console.log(username);

export default function Profile() {
  return (
    <>
      <div className="TopBar">
        <div className="profileCont">
          <div className="profileImg">T</div>
          <p>tife2020</p>
        </div>
        <div className="NavTodoIconCont">
          <BsLayoutSidebar
            style={{
              color: "#666",
              height: "32px",
              width: "20px",
            }}
          />
        </div>
      </div>
    </>
  );
}
