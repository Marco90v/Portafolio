import { ContentProjects, ContentTitle, H1, SubTitle } from "../styles/style";
import { projects } from "../utils/projectsData";
import { ProjectsAndChallenges } from ".";

function Projects(){
    return(
        <ContentProjects>
            <ContentTitle>
                <H1 marginbottom={"1rem"} >Projects</H1>
                <SubTitle>Here you can find some projects of companies where I worked and are public, some representations of private projects and my personal projects</SubTitle>
            </ContentTitle>
            <ProjectsAndChallenges data={projects} />
        </ContentProjects>
    );
}
export default Projects;
export {Projects};