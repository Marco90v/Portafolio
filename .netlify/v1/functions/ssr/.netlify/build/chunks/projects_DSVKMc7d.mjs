const data = [
	{
		title: "Illustrator's portfolio",
		img: "https://raw.githubusercontent.com/Marco90v/JSONs/main/imgportfolio/portfolio-zl.webp",
		linkGithub: "https://github.com/Marco90v/portfolio-zl",
		linkLive: "https://zoimarlezama.vercel.app/",
		description: "Artistic illustrations.",
		details: "Portfolio of illustrations of an artist, in this website, she shows some of her work as an illustrator, both as drawings and paintings, also shows her social networks and a little of who she is, and has a contact form available to users. This website was made with NextJs, Tailwind, and Vercel.",
		author: "Marco Velasquez",
		skills: "NextJS, TailwindCSS, Vercel, TypeScript, fetch, HTML",
		client: "Zoimar Lezama"
	},
	{
		title: "Control de Estudio",
		img: "https://raw.githubusercontent.com/Marco90v/ControlEstudio/master/cap/teachers.png",
		linkGithub: "https://github.com/Marco90v/ControlEstudio",
		linkLive: "https://control-estudio.vercel.app/",
		description: "University System - Study Control",
		details: "This is a personal project, the final was to practice my skills and expand my knowledge in other areas, the application has a backend in express with JWT and MySQL and a frontend in react, with styled-components and redeux, has path protection and user roles, the roles are administration, teacher, student. The general functions are CRUD, classes, professions, people, students, teachers and notes. Only the data that were inserted are added and the indicated data are modified or deleted, if a student is added but a profession is not assigned, this information is omitted, if the classes of the teachers are edited only those data are modified omitting the personal data of the same one. It also has an action confirmation system. Use of global and local states, use of localStorage to store refused data and use of RTK.",
		author: "Marco Velasquez",
		skills: "React, Styled-Components, Redux, RTK, React-Router, TypeScript, NodeJs, Express, JWT, MySQL, Dotenv",
		client: "Personal"
	},
	{
		title: "Orbit360.pe",
		img: "https://raw.githubusercontent.com/Marco90v/Portafolio/master/assets/proyects/orbit360/desktop.webp",
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
		img: "https://raw.githubusercontent.com/Marco90v/Portafolio/master/assets/proyects/hackerNews/desktop.webp",
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
		img: "https://raw.githubusercontent.com/Marco90v/Portafolio/master/assets/proyects/passWallet/desktop.webp",
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
		img: "https://raw.githubusercontent.com/Marco90v/Portafolio/master/assets/proyects/portafolio/desktop.webp",
		linkGithub: "https://github.com/Marco90v/Portafolio",
		linkLive: "https://marco90v.github.io/Portafolio/",
		description: "Second version of my portfolio",
		details: "This is the second version of my web portfolio, it is developed in HTML, CSS and JavaScript, the design was made by me, a window design in the style of an operating system, it has a presentation, list of skills, projects, challenges and contacts, in this project I started with the mobile design which is inspired by android systems, I also created my own carousel of images and my resume made with HTML and CSS. This portal has transitions when hiding or showing windows, the data is loaded dynamically from a JSON file.",
		author: "Marco Velasquez",
		skills: "JavaScript, CSS, HTML",
		client: "Personal"
	},
	{
		title: "AnimeAPI",
		img: "https://raw.githubusercontent.com/Marco90v/animeApiRest/master/assets/Top_desktop.webp",
		linkGithub: "https://github.com/Marco90v/animeApiRest",
		linkLive: "https://marco90v.github.io/animeApiRest/",
		description: "Anime search engine",
		details: "This web application is with the purpose of putting into practice, my knowledge in web application development, making APIs consumption, using pagination, component creation, data storage, design creation, responsiveness, use of routes, the application shows the top anime, the recommended and the most watched, the detailed description has the name in Japanese, English or Spanish, number of chapters, if it is a movie or series, duration, date of issue and extract that describes the anime.",
		author: "Marco Velasquez",
		skills: "React, React-Router, Fetch, HTML, CSS, Grid, Flexbox",
		client: "Personal"
	},
	{
		title: "Book application",
		img: "https://raw.githubusercontent.com/Marco90v/apiBooks/master/screenshot/Inicio.webp",
		linkGithub: "https://github.com/Marco90v/apiBooks",
		linkLive: "https://marco90v.github.io/apiBooks/",
		description: "Information on books of different categories",
		details: "Book API consumption application, where books are retrieved by categories, also retrieves detailed information of the book, such as author, publication date, number of pages, publisher, language, tags and an extract of the content, this project was done to put into practice the development skills in Angular and TypeScript, as well as the consumption of APIs.",
		author: "Marco Velasquez",
		skills: "Angular, Openlibra API, CSS, Grid, Flexbox",
		client: "Personal"
	},
	{
		title: "Survey",
		img: "https://raw.githubusercontent.com/Marco90v/Portafolio/master/assets/proyects/appEncuesta/desktop.webp",
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
		img: "https://raw.githubusercontent.com/Marco90v/Portafolio/master/assets/proyects/chat/chatNodeAngularJS.webp",
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
		img: "https://github.com/Marco90v/culebra/raw/master/preview/2024-05-06_00-13.png",
		linkGithub: "https://github.com/Marco90v/culebra",
		linkLive: "https://marco90v.github.io/culebra/",
		description: "Snake game",
		details: "This is a personal project, made in order to improve the programming logic, is the typical snake game which is to move around the map, to eat the fruit, each time you eat the fruit, the snake increases its size and accumulates points, if it collides with his own body or against the walls loses, no images were used, only pixels to facilitate development and focus on logic, HTML (canvas), CSS and JavaScript was used.",
		author: "Marco Velasquez",
		skills: "JavaScript, CSS, HTML",
		client: "Personal"
	}
];

export { data as d };
