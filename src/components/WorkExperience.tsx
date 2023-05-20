import { Activitie, ContentList, ContentWorkExperience, ListWork } from "../styles/style";
import { workExperience } from "../utils/resumenData";
import Arrow from "../assets/right-arrow-solid-24.png";

function WorkExperience(){
    return(
        <ContentWorkExperience>
            <h2>Work Experience</h2>
            <ContentList>
                {
                    workExperience.map((wE:workExperience, idx:number)=>{
                        const { company, duration, description, activities, color } = wE;
                        const c:any = color; // <-- usado para evitar error con typescript y el compilado
                        return (
                            <ListWork color={c} key={idx}>
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
            </ContentList>
        </ContentWorkExperience>
    );
}
export default WorkExperience;
export { WorkExperience };