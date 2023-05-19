import { useContext } from "react";
import { AlertContact, ContentContact, ContentTitle, H1, SubTitle } from "../styles/style";
import { Context } from "../context/MyContext";
import emailjs from '@emailjs/browser';
import iconSuccess from "../assets/check-circle-solid-24.png";
import iconError from "../assets/error-circle-solid-24.png";

const SERVICE_ID = "service_gvdn1yc";
const TEMPLATE_ID = "template_yyeh6th";
const PUBLIC_KEY = "cuaNdUhdGOg7KbRC3";

function FormContact(){
    const { state:{formContact, alert}, dispatch } = useContext(Context);
    
    const handlerChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const key = e.target.name;
        const value = e.target.value;
        const data = {[key]:value};
        dispatch({type:"setValueForm",data});
    };

    const submit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type:"resetAlert"});
        emailjs.send(SERVICE_ID, TEMPLATE_ID, formContact, PUBLIC_KEY).then(()=>{
            const msgAlert = {result:"Message sent successfully.", type:"success", icon:iconSuccess};
            dispatch({type:"changeAlert", msgAlert});
            dispatch({type:"resetForm"});
        }).catch(()=>{
            const msgAlert = {result:"The message could not be sent, please try again.", type:"error", icon:iconError};
            dispatch({type:"changeAlert", msgAlert});
        });
    };
    return(
        <form onSubmit={submit} >
            <input type="text" placeholder="Full name" name="fullName" onChange={handlerChange} value={formContact.fullName} />
            <input type="email" placeholder="Email" name="email" onChange={handlerChange} value={formContact.email} />
            <input type="text" placeholder="Subject" name="subject" onChange={handlerChange} value={formContact.subject} />
            <textarea cols={30} rows={10} placeholder="Message" name="message" onChange={handlerChange} value={formContact.message} />
            <AlertContact className={alert.type}><img src={alert.icon} alt="icon" />{alert.result}</AlertContact>
            <input type="submit" value="Send message" />
        </form>
    );
}

function Contacts(){
    return(
        <ContentContact>
            <ContentTitle>
                <H1 marginbottom={"2rem"}>Contact</H1>
                <SubTitle>In this section you can contact me to inquire about my work or to schedule a meeting.</SubTitle>
            </ContentTitle>
            <FormContact />
        </ContentContact>
    );
}
export default Contacts;
export {Contacts};