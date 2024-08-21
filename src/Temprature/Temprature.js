import "./Temprature.css";
import { FaLocationDot } from "react-icons/fa6";



const Temprature=()=>{
    return(
        < div className="temp">
        <div className="temp-1">
<div>
    <input typt="text" placeholder="serch" className="temp-inp"></input>
</div>
<div className="temp-2">
<h1 className="location"><FaLocationDot />London</h1>
</div>
<div className="temp-3">
<h2>52.53'Cel</h2>
</div>
<div className="temp-4">
<p>Min :5.25'Cel | Max :52.56'Cel</p>
</div>
        </div>
        </div>
    )
}
export default Temprature;