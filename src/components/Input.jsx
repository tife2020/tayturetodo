
export default function Input({label, ...props}){
    return(
        <div className="InputCont">
            <label><span>{label}</span></label>
            <input {...props} />
        </div>
    )
}