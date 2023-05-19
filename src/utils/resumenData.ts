const COLORS = {
    GREEN: "green",
    BLUE: "blue",
    RED: "red",
    YELLOW: "yellow",
    ORANGE: "orange",
    PURPLE: "purple",
    PINK: "pink",
    BLACK: "black",
};

const educationalBackground:educationalBackground[] = [
    {
        study:"Senior computer technician, specializing in programming",
        date:"February 2010",
        institution:"IUTIRLA | Instituto Universitario de Tecnología Industrial Rodolfo Loero Arismendi.",
        detail:"Studies in database, languages acquired in C/C++, C#, Visual Basic, administrative systems, programming logic. Thesis: Automated system for the administration of computer equipment of the police department",
        color:COLORS.YELLOW
    },
    {
        study:"Secondary School | Bachelor of Science",
        date:"July 2010",
        institution:" U.E. Colegio San Francisco de Asís",
        detail:"High school studies",
        color:COLORS.GREEN
    },
];

const skills:skill[] = [
    { name: "JavaScript", color:COLORS.GREEN, img: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1" },
    { name: "TypeScript", color:COLORS.BLUE, img: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" },
    { name: "React", color:COLORS.RED, img: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
    { name: "Redux", color:COLORS.YELLOW, img: "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" },
    { name: "Styled-Components", color:COLORS.ORANGE, img: "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" },
    { name: "Angular", color:COLORS.PURPLE, img: "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" },
    { name: "Node.Js", color:COLORS.PINK, img: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
    { name: "CSS", color:COLORS.BLACK, img: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
    { name: "BootStrap", color:COLORS.GREEN, img: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" },
    { name: "PHP", color:COLORS.BLUE, img: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" },
    { name: "Python", color:COLORS.RED, img: "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" },
    { name: "Electron", color:COLORS.YELLOW, img: "https://img.shields.io/badge/Electron-3B3E48?style=for-the-badge&logo=electron&logoColor=9FEAF9" },
    { name: "MySQL", color:COLORS.ORANGE, img: "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" },
    { name: "FireBase", color:COLORS.PURPLE, img: "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" },
    { name: "Windows", color:COLORS.PINK, img: "https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" },
    { name: "Linux", color:COLORS.BLACK, img: "https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" },
];

const workExperience:workExperience[] = [
   {
        company:"Freelancer",
        duration:"February 2020 | Present",
        description:"Various Projects",
        activities:[
            "Annotate images to train artificial intelligence models.",
            "Label relevant information, such as image class, location of objects, among others, to help train the model more effectively.",
            "Ensure the quality of the labeled data, to achieve an accurate model."
        ],
        color:COLORS.GREEN
   },
   {
        company:"Space Studio Perú",
        duration:"February 2019 | December 2019",
        description:"Application development, maintenance and management of equipment, Collaboration for the acquisition of supplements needed by our customers",
        activities:[
            "Website and blog development with Wordpress and plugins",
            "Web survey system with Angular, PHP, MySQL, Bootstrap, HighCharts (Graphics)",
            "Application for creating images from a form and fingerprint reader with Visual C# and sockets technology",
            "Application of survey and statistical calculation of university event, Unity, C# technology",
            "Dynamic presentation application for conference, Unity and C# technology",
            "Maintenance and addition of plugins to the company's existing web site",
            "Maintenance of computer equipment",
        ],
        color:COLORS.BLUE
    },
    {
        company:"Inversiones E&P",
        duration:"September 2015 | June 2017",
        description:"Sale of communication equipment and related accessories",
        activities:[
            "Maintenance of computer equipment",
            "Template automation for the control and calculation of daily sales",
            "Personalized management according to customer requirements",
            "Product invoicing",
            "Environment optimization for higher productivity",
        ],
        color:COLORS.RED
    },
    {
        company:"Saxon Energy Services de Venezuela, C.A",
        duration:"May 2014 | August 2014",
        description:"Technical Information Support",
        activities:[
            "Automation for data extraction from pre-loaded forms",
            "Installation of computer equipment in oil fields",
            "Solution to work team requirements",
            "Maintenance of computer equipment",
        ],
        color:COLORS.PINK
    },
    {
        company:"ESIS, C.A",
        duration:"October 2013 | May 2014",
        description:"Head of Services",
        activities:[
            "Automation of activity spreadsheet in execution",
            "Management of alerts in the monitoring center",
            "Supervisor of personnel in the operational field",
            "Coordination of equipment installation in operational field",
            "Constant reporting of activities carried out and their status",
            "Communication with clients",
        ],
        color:COLORS.PURPLE
    },
    {
        company:"Vivolca",
        duration:"March 2013 | August 2013",
        description:"Systems Assistant",
        activities:[
            "SAP Business One administrative software management",
            "Updating of internal network",
            "Backup of central server and desktop computers",
            "Maintenance of computer equipment",
            "Sales quotations as support to other departments",
            "Support to team requirements",
        ],
        color:COLORS.YELLOW
    },
    {
        company:"Universidad de Oriente",
        duration:"April 2011 | June 2011",
        description:"Intern: Programmer and technician",
        activities:[
            "Web site maintenance",
            "Solution to problems with the registration system",
            "Administrative solution to students' requirements",
            "Database management for administrative requests",
        ],
        color:COLORS.ORANGE
    },
    
];

export { skills, workExperience, educationalBackground };