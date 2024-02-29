import { CiSearch } from "react-icons/ci";


export default function Search(){
    return(
        <>
         <div
         className="lsp-com"
                style={{
                    display: "flex", 
                    gap: "5px",
                    marginLeft: "18px",
                    marginTop: "10px",
                    width: "100%"
                }}
         >
         <CiSearch 
            size="25"
         />
         <p
         style={{
            fontSize: "14px"
         }}
         >Search</p>
         </div>   
        </>
    )
}