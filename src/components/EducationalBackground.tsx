import { ContentEducationalBackground, ListStudy } from "../styles/style";
import { educationalBackground } from "../utils/resumenData";

function EducationalBackground() {
    return(
        <ContentEducationalBackground>
            <h2>Educational Background</h2>
            <ul>
                {
                    educationalBackground.map((eB:educationalBackground, idz:number)=>{
                        const { study, date, institution, detail, color } = eB;
                        return (
                            <ListStudy className={color} key={idz}>
                                <h3>{study}</h3>
                                <span>{date}</span>
                                <p>{institution}</p>
                                <p>{detail}</p>
                            </ListStudy>
                        );
                    })
                }
            </ul>
        </ContentEducationalBackground>
    );
}
export default EducationalBackground;
export { EducationalBackground };