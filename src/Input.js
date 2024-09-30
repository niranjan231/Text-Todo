import { useState } from "react";
import "./Input.css";
import { MdDelete } from "react-icons/md";

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

    const handleDelete=(index)=>{
// console.log(index)
const filterData = data.filter((item2 , index2)=>{
    return index2 != index;
})
setData(filterData)
    }

    return(
        <div className="input-1">
            <input onChange={handleInp} value={inp} type="text" placeholder="Enter"></input>
            <button onClick={handleBtn}>Submit</button>
            <>
                {
                    data.map((item,index)=>{
                        return <div className="inp-2"> <span>{item}</span><span onClick={()=>handleDelete(index)}><MdDelete /></span></div>
                    })
                }

            </>
        </div>
       
    )
}
export default Input;