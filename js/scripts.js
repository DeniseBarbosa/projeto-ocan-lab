// Seleção de elementos

// selecionar o botão do menu 
const menuBtn = document.querySelector("#menu");
// selecionar o botão icone de fechamento
const closeMenuBtn = document.querySelector("#close-menu");
// selecionar o proprio menu
const menu = document.querySelector("#mobile-navbar");

// // Eventos para que aquele botão abra o menu
menuBtn.addEventListener("click", (e) =>{
    menu.classList.add("menu-active");
    // isso aqui vai fazer com que o menu abra
});

// // Eventos para que aquele botão abra o menu
closeMenuBtn.addEventListener("click", (e) =>{
    menu.classList.remove("menu-active");
    // isso aqui vai fazer com que o menu fecha
});

// Uma outra maneira simplicada de resumir o envento de abri e fechar o menu
// [menuBtn, closeMenuBtn].forEach((btn)=>{
//   btn.addEventListener("click",(e) =>{
//      menu.classList.toggle("menu-active");
//       });
//    });
// 
// 

//Selecionando os slides
//SelectorAll + de um slides
const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;


// animação slides
// Funções 
function showSlides(){
    
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
        // vai fzer com que o bannner suma
    }
    // suma com o slide atual e já prepara para mostrar o proximo
    slideIndex++
    if (slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 3000);

}

// quando o usuario entrar no site a função sera executada e vai rodar infinitivamente
showSlides();