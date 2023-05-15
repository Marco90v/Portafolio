import { ContentProjects, ListProjects } from "../styles/style";
import iconGithub from "../assets/github-logo-24.png";
import iconLive from "../assets/planet-solid-24.png";
import iconDetails from "../assets/detail-solid-24.png";
import { projects } from "../utils/ProjectsData";
import { useContext } from "react";
import { DetailsModal } from "../context/MyContext";
import LinkWithIcon from "./LinkWithIcon";
// import ProjectDetails from "./ProjectDetails";

function Details({data}:{data:project}) {
    const { setData } = useContext(DetailsModal);
    return(
        <button onClick={()=>setData(data)}>
            <img src={iconDetails} alt="details" />
        </button>
    );
}
// function LinkWithIcon({link, icon}:LinkWithIcon) {
//     return(
//         <a href={link} target="_blank">
//             <img src={icon} alt="repositori" />
//         </a>
//     );
// }

function Projects(){
    return(
        <ContentProjects>
            <div className="title">
                <h1>Projects</h1>
                <span>Here you can find some projects of companies where I worked and are public, some representations of private projects and my personal projects</span>
            </div>
            <div className="projectsList">
                <ul>
                    {
                        projects.map((project:project, idx:number)=>{
                            const { title, img, linkGithub, linkLive } = project;
                            return(
                                <ListProjects key={idx}>
                                    <img src={img} alt={title} />
                                    <div className="info">
                                        <h2>{title}</h2>
                                        <div className="icons">
                                            <Details data={project} />
                                            { linkGithub !== "" && <LinkWithIcon link={linkGithub} icon={iconGithub} /> }
                                            { linkLive !== "" && <LinkWithIcon link={linkLive} icon={iconLive} /> }
                                        </div>
                                    </div>
                                </ListProjects>
                            );
                        })
                    }
                </ul>
            </div>
            {/* <ProjectDetails /> */}
        </ContentProjects>
    );
}
export default Projects;
export {Projects};