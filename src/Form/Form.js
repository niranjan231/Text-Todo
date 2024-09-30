import { useState } from "react";
import "./Form.css";





const Form=()=>{
    const [email,setEmail] = useState( );
    const [pasword,setPasword] = useState( );
    const handleData=(e)=>{
e.preventDefault();
const user={
    email,pasword
}
console.log(user);
    }
    const handleInput=(e)=>{
const Fielsset = e.target.value;
if(Fielsset===email)
setEmail(e.target.value);
if(Fielsset===pasword)
    setPasword(e.target.value);

    }
    return(
        <div id="main">
           <form onSubmit={handleData} className="form-1">
            <div className="form-group">
                <input className="form-control" autoComplete="off" value={email} onChange={handleInput} style={{width:"300px",height:"50px"}} type="email" placeholder="email"></input>
            </div>
            <div>
                <input  value={pasword} onChange={handleInput} style={{width:"300px",height:"30px"}} type="pasword" placeholder="pasword"></input>
            </div>
            <div>
                <button style={{width:"300px", height:"30px"}}>serch</button>
            </div>
           </form>
        </div>
    )
}
export default Form;