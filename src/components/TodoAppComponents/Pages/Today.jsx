import { MdDateRange } from "react-icons/md";


export default function Today(){
    return(
        <>
         <div
         className="lsp-com"
                style={{
                    display: "flex", 
                    gap: "5px",
                    marginLeft: "18px",
                    marginTop: "2px",
                    width: "100%"
                }}
         >
         <MdDateRange 
            size="25"
         />
         <p
         style={{
            fontSize: "14px"
         }}
         >Today</p>
         </div>   
        </>
    )
}