import { useState } from "react";
import { ContentContact } from "../styles/style";

const initialForm = {
    fullName:"",
    email:"",
    subject:"",
    message:"",
};

function Contacts(){

    const [formContact, setFormContact] = useState(initialForm);

    const handlerChange = (e:any) => {
        const key = e.target.name;
        const value = e.target.value;
        setFormContact((p)=>{
            return {...p, [key]:value};
        });
    };

    const submit = (e:any) => {
        e.preventDefault();
        console.log(formContact);
    };

    return(
        <ContentContact>
            <div className="title">
                <h1>Contact</h1>
                <span>In this section you can contact me to inquire about my work or to schedule a meeting.</span>
            </div>
            <form onSubmit={submit} >
                <input type="text" placeholder="Full name" name="fullName" onChange={handlerChange} value={formContact.fullName} />
                <input type="email" placeholder="Email" name="email" onChange={handlerChange} value={formContact.email} />
                <input type="text" placeholder="Subject" name="subject" onChange={handlerChange} value={formContact.subject} />
                <textarea cols={30} rows={10} placeholder="Message" name="message" onChange={handlerChange} value={formContact.message} />
                <input type="submit" value="Send message" />
            </form>
        </ContentContact>
    );
}
export default Contacts;
export {Contacts};