import { ContentSkill, Skill } from "../styles/style";
import { skills } from "../utils/resumenData";

function Skills(){
    return(
        <ContentSkill>
            <h2>Skills</h2>
            <ul>
                {
                    skills.map((skill:skill, idx:number)=>{
                        const {name, color} = skill;
                        return <Skill className={color} key={idx}>{name}</Skill>;
                    })
                }
            </ul>
        </ContentSkill>
    );
}

export default Skills;
export { Skills };