import { useContext } from "react";
import { DetailsModal } from "../context/MyContext";
import { ContentDetails } from "../styles/style";
import { LinkWithIcon } from ".";
import iconGithub from "../assets/github-logo-24.png";
import iconLive from "../assets/planet-solid-24.png";
import iconClose from "../assets/x-circle-solid-24.png";

function ModalDetails() {
    const { data, setData } = useContext(DetailsModal);

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
                    <p><strong>Details:</strong> {details}</p>
                </div>
                <div className="info">
                    <p><strong>Skills:</strong><span>{skills}</span></p>
                    <img src={img} alt={title} />
                    <div className="link">
                        <p>Links:</p>
                        { linkGithub !== "" && <LinkWithIcon link={linkGithub} icon={iconGithub} /> }
                        { linkLive !== "" && <LinkWithIcon link={linkLive} icon={iconLive} /> }
                    </div>
                </div>
            </div>
        </ContentDetails>
    );
}
export default  ModalDetails;
export  { ModalDetails };