import { useContext } from "react";
import { DetailsModal } from "../context/MyContext";
import iconDetails from "../assets/detail-solid-24.png";

function Details({data}:{data:project | project}) {
    const { setData } = useContext(DetailsModal);
    return(
        <button onClick={()=>setData(data)}>
            <img src={iconDetails} alt="details" />
        </button>
    );
}
export default Details;
export { Details };