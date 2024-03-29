/**
 * Definición de variable y constantes
 */
let size = null;
const screen = {
    imgMovil : window.matchMedia( '(max-width: 425px)' ),
    imgTablet: window.matchMedia( '(max-width: 768px) and (min-width: 425px)' ),
    imgLaptop : window.matchMedia( '(min-width: 1024px)' ),
    imgDesktop : window.matchMedia( '(min-width: 1440px)' )
};
const dataSkills = [];
const dataProyects = [];
const dataRetos = [];

const hora = document.querySelector("header > div.left > span");

const menu = document.querySelector("div.menu > ul");
const menuHabilidades = document.querySelector("#menuHabilidades");
const skills = document.querySelector(".habilidades > ul#skills");

const URLproyects = document.querySelector(".barNavigation > h1");
const contentProyects = document.querySelector(".contentProyects > .content");
const leftProyects = document.querySelector(".proyectos > .contentProyects > div#left");
const rightProyects = document.querySelector(".proyectos > .contentProyects > div#right");

const URLretos = document.querySelector(".barGallery > h1");
const contentRetos = document.querySelector(".contentRetos > .content");
const leftRetos = document.querySelector(".retos > .contentRetos > div#left");
const rightRetos = document.querySelector(".retos > .contentRetos > div#right");

const close = document.querySelectorAll(".close");

/**
 * Esta función cambia las clases de las ventanas, se elimina o se agrega la clase ventanaOpen igual con la clase active para el menu y la imagen clicada
 * @param {Objeto} target 
 */
function handlerClickMenu({target}) {
    
    if (target.id === "acercade" || target.id === "habilidades" || target.id === "proyectos" || target.id === "retos" || target.id === "contacto"){
        const listImg = menu.querySelectorAll("img");
        const ventanas = document.querySelectorAll("main > div.ventanas > div");
        menu.parentElement.classList.remove("active");
        ventanas.forEach(vetana=>{
            vetana.className === target.id ? vetana.classList.toggle("ventanaOpen") : vetana.classList.remove("ventanaOpen");
            vetana.classList.contains("ventanaOpen") && menu.parentElement.classList.add("active");
        });
        listImg.forEach(img=>{
            img.id === target.id ? img.classList.toggle("active") : img.classList.remove("active");
        });
    }
}

/**
 * Esta función cambia la forma en que se ven las habilidades, en forma de lista o de grilla.
 */
function changeViewSkills(){
    const listGrid = document.querySelector(".habilidades > ul#skills");
    listGrid.classList.toggle("grid");
}

/**
 * Esta funcion carga las Habilidades y recupera el tipo de dispositivo para saber que tamaño de imagenes mostrar.
 */
function cargaSkill (){
    if(dataSkills.length > 0){
        skills.innerHTML='';
        const px = size === "imgLaptop" || size === "imgDesktop" ? "128px" : "32px";
        dataSkills.forEach((ele,index)=>{
            const item = `
                <li id="${index}">
                    <a href="${ele.url}" target="_blank">
                        <img src="./assets/icons/${ele.icon}_${px}.png" alt="${ele.name}">
                        <h3>${ele.name}</h3>
                    </a>
                </li>
            `;
    
            skills.insertAdjacentHTML("beforeend",item);
        });
    }
}

/**
 * Carga los badge, no se usa el metodo map porque crea comas entre cada elemento.
 * @param {Array} badges
 * @return {String}
 */
function cargaBadge(badges) {
    let badge = "";
    badges.forEach((ele,index)=>{
        badge += `<span id="${index}">${ele}</span>`;
    });
    return badge;
}

/**
 * Carga los elemento de recuperados en Data y se carga en el elemento Content y URL. esto es para Proyectos y Retos
 * @param {Element} content 
 * @param {Array} data 
 * @param {Element} URL 
 */
function cargaItems (content,data,URL){
    if(data.length > 0){
        content.innerHTML='';
        data.forEach((ele,index)=>{
            const item = `
                <div id="${index}" style="background-image: url(${ele[size]})">
                    <div class="info">
                        <h2>${ele.title}</h2>
                        <div class="badge">
                            ${cargaBadge(ele.badge)}
                        </div>
                    </div>
                    <div class="repo">
                        <p> <a href="${ele.repo}" target="_blank">Repositorio</a></p>
                    </div>
                </div>
            `;
            content.insertAdjacentHTML("beforeend",item);
        });
        URL.innerHTML = `<a href="${data[0].demo}" target="_blank">${data[0].demo}</a>`;
    }
}


/**
 * Previo de slide segun el contenedor que se pase como parametro
 * @param {String} content 
 */
function prev(content) {
    const element = document.querySelector(content + " > .content > div");
    const total = content === ".contentProyects" ? dataProyects.length-1 : dataRetos.length-1;
    let ml = element.style.marginLeft || 0;
    if( ml === 0 || Number(ml.split("%")[0]) === 0 ){
        ml = -((total+1) * 100);
    }else{
        ml = Number(ml.split("%")[0]);
    }
    element.style.marginLeft = (ml+100)+"%";
    if(content === ".contentProyects") {
        const URL = document.querySelector(".barNavigation > h1");
        const newURL = dataProyects[-(ml+100)/100].demo;
        if (dataProyects.length > 0) URL.innerHTML = `<a href="${newURL}" target="_blank">${newURL}</a>`;
    }else{
        const URL = document.querySelector(".barGallery > h1");
        const newURL = dataRetos[-(ml+100)/100].demo;
        if (dataRetos.length > 0) URL.innerHTML = `<a href="${newURL}" target="_blank">${newURL}</a>`;
    }
}

/**
 * Siguiente de slide segun el contenedor que se pase como parametro
 * @param {String} content 
 */
function next(content) {
    const element = document.querySelector(content + " > .content > div");
    const total = content === ".contentProyects" ? dataProyects.length-1 : dataRetos.length-1;
    let ml = element.style.marginLeft || 0;
    if(ml !== 0){
        ml = Number(ml.split("%")[0]);
        if( -(ml/100) === total){
            ml = 100;
        }
    }
    element.style.marginLeft = (ml-100)+"%";
    if(content === ".contentProyects") {
        const URL = document.querySelector(".barNavigation > h1");
        const newURL = dataProyects[-(ml-100)/100].demo;
        if (dataProyects.length > 0) URL.innerHTML = `<a href="${newURL}" target="_blank">${newURL}</a>`;
    }else{
        const URL = document.querySelector(".barGallery > h1");
        const newURL = dataRetos[-(ml-100)/100].demo;
        if (dataRetos.length > 0) URL.innerHTML = `<a href="${newURL}" target="_blank">${newURL}</a>`;
    }
}

/**
 * Función para cerrar ventanas abiertas
 */
function handlerCloseVentana(){
    const ventanas = document.querySelectorAll("main > div.ventanas > div");
    const listImg = menu.querySelectorAll("img");
    ventanas.forEach(vetana=>{
        vetana.classList.contains("ventanaOpen") && vetana.classList.remove("ventanaOpen");
    });
    listImg.forEach(img=>{
        img.classList.contains("active") && img.classList.remove("active");
    })
}

/**
 * Función de que recupera un JSON con las habilidades
 */
async function listSkills(){
    const rest = await fetch("./dataSkills.json",{cache:"no-cache"}).then(e=>e.json());
    dataSkills.push(...rest);
    cargaSkill();
}

/**
 * Función de que recupera un JSON con los Proyectos
 */
async function listProyects(){
    const rest = await fetch("./dataProyects.json",{cache:"no-cache"}).then(e=>e.json());
    dataProyects.push(...rest);
    cargaItems(contentProyects,dataProyects,URLproyects);
}

/**
 * Función de que recupera un JSON con los Retos
 */
async function listRetos(){
    const rest = await fetch("./dataRetos.json",{cache:"no-cache"}).then(e=>e.json());
    dataRetos.push(...rest);
    cargaItems(contentRetos,dataRetos,URLretos);
}

/**
 * Agrega o elimina eventolistener a los botones close, que cierran las ventanas de las vistas
 */
function addOrRemoveEventClose(){
    if (size === "imgLaptop" || size === "imgDesktop"){
        close.forEach(element => {
            element.addEventListener("click",handlerCloseVentana);
        });
    }else{
        close.forEach(element => {
            element.removeEventListener("click",handlerCloseVentana);
        });
    }
}

/**
 * Se recargarnas la imagenes de los retos o proyecto para cargar las imagenes correcpondientes a las dimensiones del dispositivo, se agregan o eliminan eventos del boton cerrar
 */
function mqHandler() {
    for (let [scr, mq] of Object.entries(screen)) {
      if (!mq || mq.matches) size = scr;
    }
    cargaItems(contentProyects,dataProyects,URLproyects);
    cargaItems(contentRetos,dataRetos,URLretos);
    cargaSkill();
    addOrRemoveEventClose();
}

/**
 * Función para cargar la hora
 */
function setHora(){
    const currentTime = new Date();
    const h = currentTime.getHours();
    const mm = currentTime.getMinutes();
    hora.innerHTML = h + ":" + (mm < 10 ? "0" : "") + mm;
}

/**
 * oculta el overlay
 */
function sistemaCargado(){
    document.querySelector("div.overlay").style.display = "none";
    document.querySelector("div.acercade").classList.add("ventanaOpen");
    document.querySelector("div.menu").classList.add("active");
    document.querySelector("li.menuAcercade > picture > img").classList.add("active");
}

for (let [scr, mq] of Object.entries(screen)) {
    if (mq) mq.addEventListener('change', mqHandler);
    if (!mq || mq.matches) size = scr;
    // console.log(size);
    addOrRemoveEventClose();
}

menu.addEventListener("click",handlerClickMenu);
menuHabilidades.addEventListener("click", changeViewSkills);

leftProyects.addEventListener("click",()=>prev(".contentProyects"));
rightProyects.addEventListener("click",()=>next(".contentProyects"));

leftRetos.addEventListener("click",()=>prev(".contentRetos"));
rightRetos.addEventListener("click",()=>next(".contentRetos"));

// se ejecuta al cargar body
window.onload = () => {
    for (let [scr, mq] of Object.entries(screen)) {
        if (!mq || mq.matches) size = scr;
    }
    sistemaCargado();
    listSkills();
    listProyects();
    listRetos();
    setHora();
    setInterval(setHora,10000);
}