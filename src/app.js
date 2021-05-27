
window.addEventListener("scroll",function(){
    
    var row = document.getElementById("row");
    var row2 = document.getElementById("row2");
 
    if (this.screen.width > 1024){

        if(window.scrollY > 500){
            row.classList.add("aparece");
        }
        
        if(window.scrollY > 1000){
            row2.classList.add("aparece2");
        }
    }
    
});


if (this.screen.width < 450){
    row2.classList.add("aparece2");
    row.classList.add("aparece");
    
}




// Responsive Navegation.
function activar(){
    let nav = document.getElementById("nav");
    let html = document.getElementsByTagName("html")[0]
    nav.classList.toggle("open");
    //Desactivar scroll al abrir el menu en movil.
    html.classList.toggle("noscroll");
    
}

