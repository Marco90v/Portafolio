// const menuAcercade = document.querySelector(".menuAcercade");
// const ventanaAcercade = document.querySelector(".acercade");
// console.log(ventanaAcercade);

// function actionAcercade(e) {
//     console.log(e);
//     // ventanaAcercade.classList.toggle("ventanaOpen");
// }

// Muestra datos de perfil
const ventanas = document.querySelector("main > div.ventanas");
const menu = document.querySelector("div.menu > ul");

function handlerClickMenu({target}) {
    // const ventana = ventanas.querySelector("."+target.id);
    // ventana.classList.toggle("ventanaOpen");
    const oV = document.querySelectorAll("main > div.ventanas > div");
    menu.parentElement.classList.remove("active");
    oV.forEach(vetana=>{
        // console.log(vetana.className)
        vetana.className === target.id ? vetana.classList.toggle("ventanaOpen") : vetana.classList.remove("ventanaOpen");
        vetana.classList.contains("ventanaOpen") && menu.parentElement.classList.add("active");
    });
    // console.log(oV)
}
menu.addEventListener("click",handlerClickMenu)



// Realiza cambio vista de habilidades
const menuHabilidades = document.querySelector("#menuHabilidades");
const listGrid = document.querySelector(".habilidades > ul#skills");

function changeViewSkills(){
    // console.log("aqui se cambiara la vista de las habilidades");
    listGrid.classList.toggle("grid");
}
menuHabilidades.addEventListener("click", changeViewSkills);