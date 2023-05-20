// type color = "green" | "red" | "blue" | "yellow"
type data = { name:string, root:string, imgNotActive:string, imgActive: string }
type skill = {  name:string, color:string, img:string }
type activitie = string
type workExperience = {
    company:string,
    duration:string,
    description:string,
    activities:activitie[],
    color:string,
}
type educationalBackground = {
    study:string,
    date:string,
    institution:string,
    detail:string,
    color:string,
}
type project = {
    title:string,
    img:string,
    linkGithub:string,
    linkLive:string,
    description:string,
    details:string,
    author:string,
    skills:string,
    client:string
}
type challenge = project
type LinkWithIcon = {
    link:string,
    icon:string
}
type alertContact = {
    result:string,
    type:string,
    icon:string
}
type formContact = {
    fullName:string,
    email:string,
    subject:string,
    message:string,
}
type stateContact = {
    formContact:formContact,
    alert:alertContact,
    modal:null | project | challenge,
    showSidebar: boolean,
}