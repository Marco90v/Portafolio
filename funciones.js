const skills = [
    {url:"https://developer.mozilla.org/es/docs/Web/JavaScript", img:"assets/javascript-1.svg", name:"JavaScript"},
    {url:"https://es.reactjs.org/", img:"assets/react-2.svg", name:"React"},
    {url:"https://angular.io/", img:"assets/angular-icon-1.svg", name:"Angular"},
    {url:"https://nodejs.org/es/", img:"assets/nodejs-icon.svg", name:"NodeJS"},
    {url:"https://www.php.net/manual/es/intro-whatis.php", img:"assets/php-1.svg", name:"PHP"},
    {url:"https://developer.mozilla.org/es/docs/Web/CSS", img:"assets/css-3.svg", name:"CSS"},
    {url:"https://getbootstrap.com/", img:"assets/bootstrap-5-1.svg", name:"BootStrap"},
    {url:"https://www.python.org/", img:"assets/python-5.svg", name:"Python"},
    {url:"https://www.electronjs.org/", img:"assets/electron-1.svg", name:"Electron"},
    {url:"https://www.mysql.com/", img:"assets/mysql-2.svg", name:"MySQL"},
    {url:"https://firebase.google.com/?hl=es-419", img:"assets/firebase-1.svg", name:"Firebase"},
    {url:"https://www.microsoft.com/es-es/windows", img:"assets/microsoft-windows-22.svg", name:"Windows"},
    {url:"https://www.linux.org/", img:"assets/linux-tux-2.svg", name:"Linux"},
];

const lSkills = document.querySelector("#listSkills");

skills.forEach((e,i)=>{
    const elemento = `<li>
    <a href="${e.url}" target="_blank">
        <img src="${e.img}" alt="${e.name}" >
        <span>${e.name}</span>
    </a>
</li>`;
lSkills.insertAdjacentHTML("beforeend",elemento);
});



const datosProyectos = [
    {titulo: "Orbit360", url: "http://orbit360.pe", img: "orbit360_3.png", detalle: "Web de servicios de fotografia y video en 360°"},
    {titulo: "PassWallet", url: "https://github.com/Marco90v/passwallet", img: "passWallet_new_data.png", detalle: "Detalle"},
    {titulo: "ControlPass", url: "https://github.com/Marco90v/ControlPass", img: "controlPass_lista.png", detalle: "Detalle"},
    {titulo: "AppEncuesta", url: "https://marco90v.github.io/appEncuestas/", img: "appEncuesta_Dashboard.png", detalle: "Detalle"},
    {titulo: "Chat Web", url: "https://github.com/Marco90v/chat_Nodejs_Angularjs", img: "chatNodejs-cap-2.png", detalle: "Detalle"},
    {titulo: "Snake", url: "https://marco90v.github.io/culebra/", img: "Snake.png", detalle: "Detalle"},
    {titulo: "Sistema de Pago", url: "https://github.com/Marco90v/Cuotas_controlDePago", img: "sistPago-cap-2.png", detalle: "Detalle"},
    {titulo: "Scraping en Python", url: "https://github.com/Marco90v/Scraping_CNE/blob/main/Scraping_de_cne.ipynb", img: "ScrapingPython.png", detalle: "Detalle"}
];
const cIndicadores = document.querySelector("#carouselIndicators");
const cProyectos = document.querySelector("#carouselProyectos");
datosProyectos.forEach( (e,i) => {                
    const indicador = `<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${i}" ${ i=== 0 && "class='active' aria-current='true'"} aria-label="Slide ${i+1}"></button>`
    const elemento = `<div class="carousel-item ${i === 0 ? 'active' : ''}" data-bs-interval="10000">
                        <div class="d-block w-100">
                            <div class="pestañaBrowser">
                                <ul>
                                    <li>
                                        ${e.titulo}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <div class="navegadorBrowser">
                                <div class="botonesBrowser">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                                    </svg>
                                </div>
                                <div class="enlaceBrowser overflow-hidden">
                                    <a href="${e.url}">${e.url}</a>
                                </div>
                            </div>
                            <div class="bodyBrowser">
                                <img src="assets/${e.img}" loading="lazy alt="${e.img}">
                            </div>
                        </div>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${e.titulo}</h5>
                            <p>${e.detalle}</p>
                        </div>
                    </div>`
    cIndicadores.insertAdjacentHTML("beforeend",indicador);
    cProyectos.insertAdjacentHTML("beforeend",elemento);
});
