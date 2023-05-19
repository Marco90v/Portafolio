import { ContentList, ContentSkill, Skill } from "../styles/style";
import { skills } from "../utils/resumenData";

function Skills(){
    return(
        <ContentSkill>
            <h2>Skills</h2>
            <ContentList>
                {
                    skills.map((skill:skill, idx:number)=>{
                        const {name, img} = skill;
                        return (
                            <Skill key={idx}>
                                <img src={img} alt={name} />
                            </Skill>
                        );
                    })
                }
            </ContentList>
        </ContentSkill>
    );
}

export default Skills;
export { Skills };