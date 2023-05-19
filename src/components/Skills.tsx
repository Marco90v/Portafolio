import { ContentSkill, Skill } from "../styles/style";
import { skills } from "../utils/resumenData";

function Skills(){
    return(
        <ContentSkill>
            <h2>Skills</h2>
            <ul>
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
            </ul>
        </ContentSkill>
    );
}

export default Skills;
export { Skills };