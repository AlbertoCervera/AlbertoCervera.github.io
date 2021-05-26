
window.addEventListener("scroll",function(){
    
    var row = document.getElementById("row");
    var row2 = document.getElementById("row2");

    if(window.scrollY > 500){
        row.classList.add("aparece");
    }
    
    if(window.scrollY > 1000){
        row2.classList.add("aparece2");
    }
    
});

