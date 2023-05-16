const projects:project[] = [
    {
        title: "Orbit360.pe",
        img: "/src/assets/projects/orbit360_desktop.webp",
        linkGithub: "",
        linkLive: "http://www.orbit360.pe",
        description: "Multimedia services company",
        details: "Website of multimedia services, the web gives to know the vision and mission of the company, as well as its service which is the photography and video in 360 °, the web has a gallery of the various works they have done, the clients with whom they have worked. The website also has a blog where they share news about the services and innovations of their work and the multimedia world.",
        author: "Marco Velasquez",
        skills: "Wordpress, PHP, JavaScript, CSS, HTML",
        client: "Orbit360"
    },
    {
        title: "Hacker News",
        img: "/src/assets/projects/hackerNews_desktop.webp",
        linkGithub: "https://github.com/Marco90v/hacker-news",
        linkLive: "https://hacker-news-reign-marco.netlify.app/",
        description: "Code testing, frontend developer",
        details: "Code test for the position of frontend developer in the company reign, this is to make a Fetch request from a select element with 3 options, the results will be displayed in a list of cards, also has pagination and infinite scroll, clicking on the card will open a new tab with the detailed news and each news can be stored as favorites in the localStorage, the cards show the title and time elapsed since publication, the design was provided by reign.",
        author: "Marco Velasquez",
        skills: "React, TypeScript, Fetch, localStorage, Netlify, CSS, HTML",
        client: "Reign - CODE TESTING"
    },
    {
        title: "Passwallet",
        img: "/src/assets/projects/passwallet_desktop.webp",
        linkGithub: "https://github.com/Marco90v/passwallet",
        linkLive: "",
        description: "Password manager",
        details: "This is a personal project started to store my personal passwords for access to different web platforms, for this I used React with BootStrap for the design part and Firebase for the authentication and storage of the information, and the \"crypto-js\" library for the encryption of the data. The application not only stores password, but also username, email, bank details, cryptocurrency secret phrases, among others, it also generates complex passwords in case you do not need it, this function does not need to log in. The data can be edited and deleted.",
        author: "Marco Velasquez",
        skills: "React, UseContext, JavaScript, Encrypted, Firebase, BootStrap, CSS, HTML",
        client: "Personal"
    },
    {
        title: "Porfolio V2",
        img: "/src/assets/projects/porfolioV2_desktop.webp",
        linkGithub: "https://github.com/Marco90v/Portafolio",
        linkLive: "https://marco90v.github.io/Portafolio/",
        description: "Second version of my portfolio",
        details: "This is the second version of my web portfolio, it is developed in HTML, CSS and JavaScript, the design was made by me, a window design in the style of an operating system, it has a presentation, list of skills, projects, challenges and contacts, in this project I started with the mobile design which is inspired by android systems, I also created my own carousel of images and my resume made with HTML and CSS. This portal has transitions when hiding or showing windows, the data is loaded dynamically from a JSON file.",
        author: "Marco Velasquez",
        skills: "JavaScript, CSS, HTML",
        client: "Personal"
    },
    {
        title: "Survey",
        img: "/src/assets/projects/encuesta_desktop.webp",
        linkGithub: "https://github.com/Marco90v/appEncuestas",
        linkLive: "https://marco90v.github.io/appEncuestas/",
        description: "Internet survey application",
        details: "This system is a simple representation of a private project, this application allows you to create a survey and generates a link that leads to the form to fill out the survey, also generates graphs that measure the average of the results obtained, being a representation has no backend and the data are stored in the browser's localStorage.",
        author: "Marco Velasquez",
        skills: "Angular, TypeScript, Chart.js, CSS, localStorage, HTML",
        client: "Private"
    },
    {
        title: "Chat",
        img: "/src/assets/projects/chatNodeAngularJs.webp",
        linkGithub: "https://github.com/Marco90v/chat_Nodejs_Angularjs",
        linkLive: "",
        description: "Chat Room",
        details: "This is a personal project that I developed to learn how to use sockets, specially sockets.io, for this I used AngularJS for the frontend and express for the backend, also some CSS for the visual styles, the application allows the insertion of a user name, uses the server for the propagation of the messages, to all the users connected at the moment, the messages are not stored in the server, the messages are stored in the localStorage of the client, the messages can be deleted from the server, the messages are stored in the localStorage of the client, the messages can be deleted from the server and the client can be sent to all the users that are connected at the moment, the messages are not stored in the server, the messages are stored in the localStorage of the client, the messages can be deleted from the localStorage of the client.",
        author: "Marco Velasquez",
        skills: "Angular JS, JavaScript, CSS, localStorage, HTML, NodeJs, Sokect.io",
        client: "Personal"
    },
    
    {
        title: "Snake",
        img: "/src/assets/projects/snake_desktop.webp",
        linkGithub: "https://github.com/Marco90v/culebra",
        linkLive: "https://marco90v.github.io/culebra/",
        description: "Snake game",
        details: "This is a personal project, made in order to improve the programming logic, is the typical snake game which is to move around the map, to eat the fruit, each time you eat the fruit, the snake increases its size and accumulates points, if it collides with his own body or against the walls loses, no images were used, only pixels to facilitate development and focus on logic, HTML (canvas), CSS and JavaScript was used.",
        author: "Marco Velasquez",
        skills: "JavaScript, CSS, HTML",
        client: "Personal"
    },
];

export { projects };