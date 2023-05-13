import Home from '../assets/home-solid-24.png';
import HomeActive from '../assets/home-solid-24-active.png';

import Resume from '../assets/spreadsheet-solid-24.png';
import ResumeActive from '../assets/spreadsheet-solid-24-active.png';

import Projects from '../assets/briefcase-solid-24.png';
import ProjectsActive from '../assets/briefcase-solid-24-active.png';

import Challenges from '../assets/laptop-regular-24.png';
import ChallengesActive from '../assets/laptop-regular-24-active.png';

import Contacts from '../assets/contact-solid-24.png';
import ContactsActive from '../assets/contact-solid-24-active.png';

type data = {
    name:string, root:string, imgNotActive:string, imgActive: string
}

const data:data[] = [
    { name:"Home", root:"/", imgNotActive: Home, imgActive: HomeActive },
    { name:"Resumen", root:"/resumen", imgNotActive: Resume, imgActive: ResumeActive },
    { name:"Projects", root:"/projects", imgNotActive: Projects, imgActive: ProjectsActive },
    { name:"Challenges", root:"/challenges", imgNotActive: Challenges, imgActive: ChallengesActive },
    { name:"Contacts", root:"/contacts", imgNotActive: Contacts, imgActive: ContactsActive },
];

export default data;
export {data};