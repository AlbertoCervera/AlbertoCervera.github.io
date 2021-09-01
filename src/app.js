// Efecto aparición de elementos en pantallas grandes.
window.addEventListener("scroll", function () {
  var row = document.getElementById("row");
  var row2 = document.getElementById("row2");
  var loader1 = document.getElementById("loader-1");
  var loader2 = document.getElementById("loader-2");
  var loader3 = document.getElementById("loader-3");
  var loader4 = document.getElementById("loader-4");

  if (this.screen.width > 1024) {
    if (window.scrollY > 500) {
      row.classList.add("aparece");
    }

    if (window.scrollY > 1000) {
      row2.classList.add("aparece2");
    }

    if (window.scrollY > 1576) {
      loader1.style.animation = "myloader 1s";
      loader1.style.animationDelay = ".1s";
      loader1.style.animationFillMode = "forwards";
      loader2.classList.add("load2");
      loader3.classList.add("load3");
      loader4.classList.add("load4");
    }
  }
});

// Elimina el efecto aparecer al hacer scroll que está aplicado en pantalla grande.

if (this.screen.width < 670) {
  row2.classList.add("aparece2");
  row.classList.add("aparece");
}

// Responsive Navegation. --> Abre Menú Navegación.
function activar() {
  var nav = document.getElementById("nav");
  let html = document.getElementsByTagName("html")[0];
  nav.classList.toggle("open");
  //Desactivar scroll al abrir el menu en movil.
  html.classList.toggle("noscroll");
}

// Responsive --> Cierra el menu cuando le damos click a un enlace de la navegación.
function navegar() {
  let button = document.getElementById("button");
  if (this.screen.width < 450) {
    button.click();
  }
}

// ----Loader de Experiencia---------
// escucha el evento scroll y cuando la pantalla sea inferior a 400px de anchura y se sobrepase la cordenada Y, se aplicarán los estilos.  
window.addEventListener("scroll", function () {

  if (this.screen.width < 400 && window.scrollY > 510) {
    let loader1 = document.getElementById("loader-1");
    let loader2 = document.getElementById("loader-2");
    let loader3 = document.getElementById("loader-3");
    let loader4 = document.getElementById("loader-4");
    loader1.style.animation = "myloader 1s";
    loader1.style.animationDelay = ".1s";
    loader1.style.animationFillMode = "forwards";
    loader2.classList.add("load2");
    loader3.classList.add("load3");
    loader4.classList.add("load4");
  }
});

// Darkmode Switch
const switchDarkMode = document.getElementById("switch");
const rowsText = document.getElementsByClassName("txt")[1];
const rowsText2 = document.getElementsByClassName("txt")[4];

const item1 = document.getElementById("item-1");
const item2= document.getElementById("item-2");
const item3 = document.getElementById("item-3");
const item4 = document.getElementById("item-4");

const hamburguerMobile = document.getElementsByClassName("line")


switchDarkMode.addEventListener("click", () => {

  switchDarkMode.classList.toggle("active-btn");
  document.body.classList.toggle("dark");
  rowsText.classList.toggle("dark");
  rowsText2.classList.toggle("dark");
  item1.classList.toggle("dark2");
  item2.classList.toggle("dark2");
  item3.classList.toggle("dark2");
  item4.classList.toggle("dark2");
  nav.classList.toggle("dark");
  hamburguerMobile[0].classList.toggle("dark3");
  hamburguerMobile[1].classList.toggle("dark3");
  hamburguerMobile[2].classList.toggle("dark3");
})


