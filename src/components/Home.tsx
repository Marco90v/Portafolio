import { ContentHome } from "../styles/style";
import Avatar from '../assets/DSC_0343.jpg';

function Home(){
    return(
        <ContentHome>
            <h1>Marco Velasquez Figarella</h1>
            <div>
                <h2>Front-end Developer</h2>
                <p>
                    I have experience in building applications and websites for various clients.
                    Skilled in the use of programming languages such as HTML , CSS, JavaScript, React and Angular, and knowledge in design tools such as Figma.
                    Experience using frameworks such as Bootstrap.
                    Ability to collaborate with development and design teams to deliver high quality solutions that meet customer needs.
                    Commitment to constant updating and continuous learning to keep up with the latest trends and technologies in web development.
                    Additional knowledge of NodeJS, Python and PHP.
                </p>
                <img src={Avatar} alt="Marco Velasquez" />
            </div>
        </ContentHome>
    );
}
export default Home;
export {Home};