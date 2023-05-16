import { ContentProjects } from "../styles/style";
import { projects } from "../utils/projectsData";
import { ProjectsAndChallenges } from ".";

function Projects(){
    return(
        <ContentProjects>
            <div className="title">
                <h1>Projects</h1>
                <span>Here you can find some projects of companies where I worked and are public, some representations of private projects and my personal projects</span>
            </div>
            <ProjectsAndChallenges data={projects} />
        </ContentProjects>
    );
}
export default Projects;
export {Projects};