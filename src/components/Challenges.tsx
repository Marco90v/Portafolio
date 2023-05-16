import { ProjectsAndChallenges } from ".";
import { ContentChallenges } from "../styles/style";
import { challenges } from "../utils/challengesData";

function Challenges(){
    return(
        <ContentChallenges>
            <div className="title">
                <h1>Challenges</h1>
                <span>Here you can see some of the code challenges I have done from different platforms and personal ideas.</span>
            </div>
            <ProjectsAndChallenges data={challenges} />
        </ContentChallenges>
    );
}
export default Challenges;
export {Challenges};