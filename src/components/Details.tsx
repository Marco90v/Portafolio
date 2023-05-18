import { useContext } from "react";
import { Context } from "../context/MyContext";
import iconDetails from "../assets/detail-solid-24.png";

function Details({data}:{data:project | project}) {
    const { dispatch } = useContext(Context);
    return(
        <button onClick={()=>dispatch({type:"addDataModal", data})}>
            <img src={iconDetails} alt="details" />
        </button>
    );
}
export default Details;
export { Details };