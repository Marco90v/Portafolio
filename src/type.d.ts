// type color = "green" | "red" | "blue" | "yellow"
type data = { name:string, root:string, imgNotActive:string, imgActive: string }
type skill = {  name:string, color:string }
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
