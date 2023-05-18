import { useContext, useEffect, useState } from "react";
import { Context } from "../context/MyContext";
import { ContentDetails } from "../styles/style";
import { LinkWithIcon } from ".";
import iconGithub from "../assets/github-logo-24.png";
import iconLive from "../assets/planet-solid-24.png";
import iconClose from "../assets/x-circle-solid-24.png";
import { useTransition } from "transition-hook";

function ModalDetails() {
    // const { data, setData } = useContext(DetailsModal);
    const { state:{modal:data}, dispatch } = useContext(Context);
    // console.log(data);
    const [transition, setTransition] = useState<boolean>(false);
    const modelTrans = useTransition(transition, 300);

    useEffect(() => {
        if(data){
          setTransition(true);
        }
    }, [data]);
  
    if(!data) return null;

    const { title, img, linkGithub, linkLive, description, details, author, skills, client } = data;

    const close = () => {
        setTransition(false);
        setTimeout(() => {
            // setData(null);
            dispatch({type:"resetModal"});
        }, 300);
    };

    return(
        <ContentDetails>
            {
                modelTrans.shouldMount && (
                    <div className="modal" style={{
                        transition: '.3s',
                        opacity: modelTrans.stage === 'enter' ? 1 : 0,
                        filter: modelTrans.stage === 'enter' ? 'blur(0)' : 'blur(20px)',
                        transform: modelTrans.stage === 'enter' ? 'scale(1)' : 'scale(.6)',
                    }}>
                        <div className="title">
                            <div className="contentTitle">
                                <h2>{title}</h2>
                                <span>{description}</span>
                            </div>
                            <button className="close" onClick={close}>
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
                )
            }
        </ContentDetails>
    );
}
export default  ModalDetails;
export  { ModalDetails };