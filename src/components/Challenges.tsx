import { ProjectsAndChallenges } from ".";
import { ContentChallenges, ContentTitle, H1, SubTitle } from "../styles/style";
import { challenges } from "../utils/challengesData";

function Challenges(){
    return(
        <ContentChallenges>
            <ContentTitle>
                <H1 marginbottom={"1rem"}>Challenges</H1>
                <SubTitle>Here you can see some of the code challenges I have done from different platforms and personal ideas.</SubTitle>
            </ContentTitle>
            <ProjectsAndChallenges data={challenges} />
        </ContentChallenges>
    );
}
export default Challenges;
export {Challenges};