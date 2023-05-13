import { ContentResumen } from "../styles/style";
import { educationalBackground, skills, workExperience } from "../utils/resumenData";
import Arrow from "../assets/right-arrow-solid-24.png";

function Resumen(){
    return(
        <ContentResumen>
            <div className="title">
                <h1>Resumen</h1>
                <span>Here you can see some of my skills, experience and professional studies</span>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <ul>
                    {
                        skills.map((skill:skill, idx:number)=>{
                            const {name} = skill;
                            return <li key={idx}>{name}</li>;
                        })
                    }
                </ul>
            </div>
            <div className="workExperience">
                <h2>Work Experience</h2>
                <ul>
                    {
                        workExperience.map((wE:workExperience, idx:number)=>{
                            const { company, duration, description, activities } = wE;
                            return (
                                <li key={idx}>
                                    <h3>{company}</h3>
                                    <span>{duration}</span>
                                    <p>{description}</p>
                                    <h4>Activities</h4>
                                    <ul>
                                        {
                                            activities.map((activitie:activitie, idy:number)=>{
                                                return (
                                                    <li key={idy}>
                                                        <img src={Arrow} alt="Arrow" />
                                                        <span>{activitie}</span>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div className="educationalBackground">
                <h2>Educational Background</h2>
                <ul>
                    {
                        educationalBackground.map((eB:educationalBackground, idz:number)=>{
                            const { study, date, institution, detail } = eB;
                            return (
                                <li key={idz}>
                                    <h3>{study}</h3>
                                    <span>{date}</span>
                                    <p>{institution}</p>
                                    <p>{detail}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </ContentResumen>
    );
}
export default Resumen;
export {Resumen};