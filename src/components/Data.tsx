import { useContext } from "react";
import { ProjectsAndChallenges } from ".";
import { Context } from "../context/MyContext";

function Data({ item }:{ item:"projectsData" | "challengesData" }){
    const { state:{[item]:data} } = useContext(Context);
    return(
        <ProjectsAndChallenges data={data} />
    );
}
export default Data;
export { Data };