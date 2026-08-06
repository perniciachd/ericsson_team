type InputProps={

label:string;
type?:string;
placeholder:string;
value:string;
onChange:(e:any)=>void;
}
const Input=({
label,
type="text",
placeholder,
value,
onChange
}:InputProps)=>{

return(
<div className="field">
<label>
{label}
</label>
<input
type={type}
placeholder={placeholder}
value={value}
onChange={onChange}
/>
</div>
)
}
export default Input;