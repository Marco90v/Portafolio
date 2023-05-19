import { ContentHome } from "../styles/style";
import Avatar from '../assets/DSC_0343.jpg';
import IconGithub from '../assets/github-white.png';
import IconLinkedin from '../assets/linkedin-white.png';
import IconPDF from '../assets/file-pdf-white.png';

function Home(){
    return(
        <ContentHome>
            <h1>Marco Velasquez Figarella</h1>
            <div>
                <h2>Front-end Developer</h2>
                <p>
                    I have experience in building applications and websites for various clients.
                    Skilled in the use of programming languages such as <span>HTML , CSS, JavaScript, React and Angular</span>, and knowledge in design tools such as Figma.
                    Experience using frameworks such as Bootstrap.
                </p>
                <p>
                    Ability to collaborate with development and design teams to deliver high quality solutions that meet customer needs.
                    Commitment to constant updating and continuous learning to keep up with the latest trends and technologies in web development.
                </p>
                <p> Additional knowledge of <span>NodeJS, Python and PHP.</span></p>
                <img src={Avatar} alt="Marco Velasquez" />
                <ul>
                    <li>
                        <a href="https://github.com/Marco90v" target="_blank" rel="noopener noreferrer">
                            <img src={IconGithub} alt="github"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/marco90v/" target="_blank" rel="noopener noreferrer">
                            <img src={IconLinkedin} alt="linkedin"/>
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src={IconPDF} alt="PDF"/>
                        </a>
                    </li>
                </ul>
            </div>
        </ContentHome>
    );
}
export default Home;
export {Home};