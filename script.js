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