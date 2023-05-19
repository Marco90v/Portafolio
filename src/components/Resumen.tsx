import { ContentResumen, ContentTitle, H1, SubTitle } from "../styles/style";
import { EducationalBackground, Skills, WorkExperience } from ".";

function Resumen(){
    return(
        <ContentResumen>
            <ContentTitle>
                <H1 marginbottom={"1rem"}>Resumen</H1>
                <SubTitle>Here you can see some of my skills, experience and professional studies</SubTitle>
            </ContentTitle>
            <Skills />
            <WorkExperience />
            <EducationalBackground />
        </ContentResumen>
    );
}
export default Resumen;
export {Resumen};