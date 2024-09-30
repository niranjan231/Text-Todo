import { useState } from "react";
import "./Input.css";






const Input=()=>{
    const [inp , setInp] = useState("");
    const [data,setData] = useState([])

    const handleInp=(e)=>{
        setInp(e.target.value)
    }

    const handleBtn=(e)=>{
        e.preventDefault()
        const store = [...data , inp]
        setData(store)
        setInp("")
    }

    return(
        <div className="input-1">
            <input onChange={handleInp} value={inp} type="text" placeholder="Enter"></input>
            <button onClick={handleBtn}>Submit</button>
            <>
                {
                    data.map((item)=>{
                        return <h2>item</h2>
                    })
                }

            </>
        </div>
       
    )
}
export default Input;