import ClipLoader from "react-spinners/ClipLoader";
import todoistIcon from "../assets/todoist-icon.svg";

export default function LoadingPage() {
    return (
        <div style={{ display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "18em" }} >
        <img src={todoistIcon} 
        className="mobileLogo" 
        style={{paddingBottom:"20px", width:"65px" }} ></img>
            <ClipLoader 
            color="#c3392c"
            size={25} 
            paddingTop={20}

            />
        </div>
    )
}