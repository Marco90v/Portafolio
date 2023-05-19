import { InfoProjects, ListProjects } from "../styles/style";
import iconGithub from "../assets/github-logo-24.png";
import iconLive from "../assets/planet-solid-24.png";
import { Details, LinkWithIcon } from ".";

function ProjectsAndChallenges({data}:{data:project[] | challenge[]}) {
    return(
        <div className="projetsOrChallengesList">
            <ul>
                {
                    data.map((d:project | challenge, idx:number)=>{
                        const { title, img, linkGithub, linkLive } = d;
                        return(
                            <ListProjects key={idx}>
                                <img src={img} alt={title} />
                                <InfoProjects>
                                    <h2>{title}</h2>
                                    <div className="icons">
                                        <Details data={d} />
                                        { linkGithub !== "" && <LinkWithIcon link={linkGithub} icon={iconGithub} /> }
                                        { linkLive !== "" && <LinkWithIcon link={linkLive} icon={iconLive} /> }
                                    </div>
                                </InfoProjects>
                            </ListProjects>
                        );
                    })
                }
            </ul>
        </div>
    );
}
export default ProjectsAndChallenges;
export { ProjectsAndChallenges };