import ClipLoader from "react-spinners/ClipLoader";
import todoistIcon from "../assets/todoist-icon.svg";

export default function LoadingPage() {
  return (
    <div
      style={{
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        transition: 'all ease-in-out'
      }}
    >
      <img
        src={todoistIcon}
        className="mobileLogo"
        style={{ paddingBottom: "20px", width: "65px" }}
      ></img>
      <ClipLoader color="#c3392c" size={25} paddingTop={20} />
    </div>
  );
}
