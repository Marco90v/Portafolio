// variables
const screen = {
    imgMovil : window.matchMedia( '(max-width: 425px)' ),
    imgTablet: window.matchMedia( '(max-width: 768px) and (min-width: 425px)' ),
    imgLaptop : window.matchMedia( '(min-width: 1024px)' ),
    imgDesktop : window.matchMedia( '(min-width: 1440px)' )
};
const dataSkills = [];
const dataProyects = [];
const dataRetos = [];
let size = null;

const skills = document.querySelector(".habilidades > ul#skills");

const URLproyects = document.querySelector(".barNavigation > h1");
const contentProyects = document.querySelector(".contentProyects");
const leftProyects = document.querySelector(".proyectos > div#left");
const rightProyects = document.querySelector(".proyectos > div#right");

const URLretos = document.querySelector(".barGallery > h1");
const contentRetos = document.querySelector(".contentRetos");
const leftRetos = document.querySelector(".retos > div#left");
const rightRetos = document.querySelector(".retos > div#right");



// Muestra datos de perfil
const menu = document.querySelector("div.menu > ul");

function handlerClickMenu({target}) {
    const ventanas = document.querySelectorAll("main > div.ventanas > div");
    menu.parentElement.classList.remove("active");
    ventanas.forEach(vetana=>{
        vetana.className === target.id ? vetana.classList.toggle("ventanaOpen") : vetana.classList.remove("ventanaOpen");
        vetana.classList.contains("ventanaOpen") && menu.parentElement.classList.add("active");
    });
}
menu.addEventListener("click",handlerClickMenu)


// Realiza cambio vista de habilidades
const menuHabilidades = document.querySelector("#menuHabilidades");

function changeViewSkills(){
    const listGrid = document.querySelector(".habilidades > ul#skills");
    listGrid.classList.toggle("grid");
}
menuHabilidades.addEventListener("click", changeViewSkills);


// list Skills
function cargaSkill (){
    if(dataSkills.length > 0){
        skills.innerHTML='';
        dataSkills.forEach((ele,index)=>{
            const item = `
                <li id="${index}"><a href="${ele.url}" target="_blank"><img src="./assets/icons/${ele.icon}" alt="${ele.name}"><h3>${ele.name}</h3></a></li>
            `;
    
            skills.insertAdjacentHTML("beforeend",item);
        });
    }
}


// lista Proyectos y Retos
function cargaItems (content,data,URL){
    if(data.length > 0){
        content.innerHTML='';
        data.forEach((ele,index)=>{
            const item = `
                <div id="${index}" style="background-image: url(${ele[size]})">
                    <div class="info">
                        <a href="${ele.repo}" target="_blank">
                        <h2>${ele.title}</h2>
                        <div class="badge">
                            ${ele.badge.map(b=>`<span>${b}</span>`)}
                        </div>
                        </a>
                    </div>
                </div>
            `;
    
            content.insertAdjacentHTML("beforeend",item);
        });
        URL.innerHTML = `<a href="${data[0].demo}" target="_blank">${data[0].demo}</a>`;
    }
}



function prevProyects() {
    const a = document.querySelector(".contentProyects > div");
    totalProyects = dataProyects.length-1;
    let ml = a.style.marginLeft || 0;
    if( ml === 0 || Number(ml.split("%")[0]) === 0 ){
        ml = -((totalProyects+1) * 100);
    }else{
        ml = Number(ml.split("%")[0]);
    }
    a.style.marginLeft = (ml+100)+"%";
    const newURL = dataProyects[-(ml+100)/100].demo;
    if (dataProyects.length > 0) URLproyects.innerHTML = `<a href="${newURL}" target="_blank">${newURL}</a>`;

}

function nextProyects() {
    const a = document.querySelector(".contentProyects > div");
    totalProyects = dataProyects.length-1;
    let ml = a.style.marginLeft || 0;
    if(ml !== 0){
        ml = Number(ml.split("%")[0]);
        if( -(ml/100) === totalProyects){
            ml = 100;
        }
    }
    a.style.marginLeft = (ml-100)+"%";
    const newURL = dataProyects[-(ml-100)/100].demo;
    if (dataProyects.length > 0) URLproyects.innerHTML = `<a href="${newURL}" target="_blank">${newURL}</a>`;
}

leftProyects.addEventListener("click",prevProyects);
rightProyects.addEventListener("click",nextProyects);




function prevRetos() {
    const a = document.querySelector(".contentRetos > div");
    totalRetos = dataRetos.length-1;
    let ml = a.style.marginLeft || 0;
    if( ml === 0 || Number(ml.split("%")[0]) === 0 ){
        ml = -((totalRetos+1) * 100);
    }else{
        ml = Number(ml.split("%")[0]);
    }
    a.style.marginLeft = (ml+100)+"%";
    const newURL = dataRetos[-(ml+100)/100].demo;
    if (dataRetos.length > 0) URLretos.innerHTML = `<a href="${newURL}" target="_blank">${newURL}</a>`;

}

function nextRetos() {
    const a = document.querySelector(".contentRetos > div");
    totalRetos = dataRetos.length-1;
    let ml = a.style.marginLeft || 0;
    if(ml !== 0){
        ml = Number(ml.split("%")[0]);
        if( -(ml/100) === totalRetos){
            ml = 100;
        }
    }
    a.style.marginLeft = (ml-100)+"%";
    const newURL = dataRetos[-(ml-100)/100].demo;
    if (dataRetos.length > 0) URLretos.innerHTML = `<a href="${newURL}" target="_blank">${newURL}</a>`;
}

leftRetos.addEventListener("click",prevRetos);
rightRetos.addEventListener("click",nextRetos);



function mqHandler() {
    // let size = null;
    for (let [scr, mq] of Object.entries(screen)) {
      if (!mq || mq.matches) size = scr;
    }
    cargaItems(contentProyects,dataProyects,URLproyects);
    cargaItems(contentRetos,dataRetos,URLretos);
}

for (let [scr, mq] of Object.entries(screen)) {
    if (mq) mq.addEventListener('change', mqHandler);
}

async function listSkills(){
    const rest = await fetch("./dataSkills.json",{cache:"no-cache"}).then(e=>e.json());
    dataSkills.push(...rest)
    // cargaItems(contentRetos,dataRetos,URLretos);
    cargaSkill();
}

async function listProyects(){
    const rest = await fetch("./dataProyects.json",{cache:"no-cache"}).then(e=>e.json());
    dataProyects.push(...rest);
    cargaItems(contentProyects,dataProyects,URLproyects);
}

async function listRetos(){
    const rest = await fetch("./dataRetos.json",{cache:"no-cache"}).then(e=>e.json());
    dataRetos.push(...rest)
    cargaItems(contentRetos,dataRetos,URLretos);
}

mqHandler();

listSkills();
listProyects();
listRetos();