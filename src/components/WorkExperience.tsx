import { workExperience } from "../utils/resumenData";
import Arrow from "../assets/right-arrow-solid-24.png";
import { Activitie, ContentWorkExperience, ListWork } from "../styles/style";

function WorkExperience(){
    return(
        <ContentWorkExperience>
            <h2>Work Experience</h2>
            <ul>
                {
                    workExperience.map((wE:workExperience, idx:number)=>{
                        const { company, duration, description, activities, color } = wE;
                        return (
                            <ListWork className={color} key={idx}>
                                <h3>{company}</h3>
                                <span>{duration}</span>
                                <p>{description}</p>
                                <h4>Activities</h4>
                                <ul>
                                    {
                                        activities.map((activitie:activitie, idy:number)=>{
                                            return (
                                                <Activitie key={idy}>
                                                    <img src={Arrow} alt="Arrow" />
                                                    <span>{activitie}</span>
                                                </Activitie>
                                            );
                                        })
                                    }
                                </ul>
                            </ListWork>
                        );
                    })
                }
            </ul>
        </ContentWorkExperience>
    );
}
export default WorkExperience;
export { WorkExperience };