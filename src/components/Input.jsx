
export default function Input({label, onChange, ...props}){
    
    return(
        <div className="InputCont">
            <label><span>{label}</span></label>
            <input onChange={onChange} {...props} />
        </div>
    )
}