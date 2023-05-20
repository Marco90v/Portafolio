import { ContentEducationalBackground, ContentList, ListStudy } from "../styles/style";
import { educationalBackground } from "../utils/resumenData";
import Arrow from "../assets/right-arrow-solid-24.png";

function EducationalBackground() {
    return(
        <ContentEducationalBackground>
            <h2>Educational Background</h2>
            <ContentList>
                {
                    educationalBackground.map((eB:educationalBackground, idz:number)=>{
                        const { study, date, institution, detail, color } = eB;
                        const c:any = color; // <-- usado para evitar error con typescript y el compilado
                        return (
                            <ListStudy color={c} key={idz}>
                                <h3>{study}</h3>
                                <span>{date}</span>
                                <p>{institution}</p>
                                <p>
                                    <img src={Arrow} alt="Arrow" />
                                    {detail}
                                </p>
                            </ListStudy>
                        );
                    })
                }
            </ContentList>
        </ContentEducationalBackground>
    );
}
export default EducationalBackground;
export { EducationalBackground };