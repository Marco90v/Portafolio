import { ContentResumen } from "../styles/style";
import { EducationalBackground, Skills, WorkExperience } from ".";

function Resumen(){
    return(
        <ContentResumen>
            <div className="title">
                <h1>Resumen</h1>
                <span>Here you can see some of my skills, experience and professional studies</span>
            </div>
            <Skills />
            <WorkExperience />
            <EducationalBackground />
        </ContentResumen>
    );
}
export default Resumen;
export {Resumen};