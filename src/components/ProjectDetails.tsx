import { useContext } from "react";
import { DetailsModal } from "../context/MyContext";
import { ContentDetails } from "../styles/style";
import LinkWithIcon from "./LinkWithIcon";
import iconGithub from "../assets/github-logo-24.png";
import iconLive from "../assets/planet-solid-24.png";
import iconClose from "../assets/x-circle-solid-24.png";

function ProjectDetails() {
    const { data, setData } = useContext(DetailsModal);
    // console.log(data);
    // const data = {
    //     title: "Orbit360.pe",
    //     img: "/src/assets/projects/orbit360_desktop.webp",
    //     linkGithub: "",
    //     linkLive: "http://www.orbit360.pe",
    //     description: "Multimedia services company",
    //     details: "Website of multimedia services, the web gives to know the vision and mission of the company, as well as its service which is the photography and video in 360 °, the web has a gallery of the various works they have done, the clients with whom they have worked. The website also has a blog where they share news about the services and innovations of their work and the multimedia world.",
    //     author: "Marco Velasquez",
    //     skills: "Wordpress, PHP, JavaScript, CSS, HTML",
    //     client: "Orbit360"
    // };
    

    if(!data) return null;
    const { title, img, linkGithub, linkLive, description, details, author, skills, client } = data;
    return(
        <ContentDetails>
            <div className="modal">
                <div className="title">
                    <div className="contentTitle">
                        <h2>{title}</h2>
                        <span>{description}</span>
                    </div>
                    <button className="close" onClick={()=>setData(null)}>
                        <img src={iconClose} alt="close" />
                    </button>
                </div>
                <div className="description">
                    <p><strong>Author:</strong> {author}</p>
                    <p><strong>Client:</strong> {client}</p>
                    <p>{details}</p>
                </div>
                <div className="info">
                    <p><strong>Skills:</strong><span>{skills}</span></p>
                    <img src={img} alt={title} />
                    <div className="link">
                        { linkGithub !== "" && <LinkWithIcon link={linkGithub} icon={iconGithub} /> }
                        { linkLive !== "" && <LinkWithIcon link={linkLive} icon={iconLive} /> }
                    </div>
                </div>
            </div>
        </ContentDetails>
    );
}
export default  ProjectDetails;
export  { ProjectDetails };