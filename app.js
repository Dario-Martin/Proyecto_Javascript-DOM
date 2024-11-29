// Botón de modo oscuro/claro

let toggleButton = document.getElementById("btn-change-theme");

function darkMode(){
    document.body.classList.toggle("dark-mode")

    if(document.body.classList.contains("dark-mode")){
        document.getElementById("btn-sun").src="images/moon-solid.svg";
    }else{
        document.getElementById("btn-sun").src="images/sun-solid.svg";
    }
}

toggleButton.addEventListener("click", darkMode)


// ------------------------------------------------------------

// SLIDER - Carrusel de 3 imágenes con cambios manuales (flechas) y automático (cada 4 segundos)

let imagenes = [
                "images/carrusel1.jpg",
                "images/carrusel2.jpg",
                "images/carrusel3.jpg",
                "images/carrusel4.jpg"
               ];

document.imagen.src = imagenes[0];

let sliderDerecha = document.querySelector(".slider-derecho");
let sliderIzquierda = document.querySelector(".slider-izquierdo");

let contador = 0;

function moverDerecha(){ //función para mover hacia la derecha
    contador++;
    if(contador > imagenes.length - 1){
        contador = 0
    }

    document.imagen.src = imagenes[contador];
}
let intervalo = setInterval(moverDerecha, 4000);
sliderDerecha.addEventListener("click", function(){
    clearInterval(intervalo); //reinicia el intervalo 
    moverDerecha();
    intervalo = setInterval(moverDerecha, 4000); 
});


function moverIzquierda(){ //función para mover hacia la izquierda
    contador--;
    if(contador < 0){
        contador = imagenes.length - 1;
    }
    document.imagen.src = imagenes[contador];
}
sliderIzquierda.addEventListener("click", function(){
    clearInterval(intervalo); 
    moverIzquierda();
    intervalo = setInterval(moverDerecha, 4000);
});


// ------------------------------------------------------------

// Función de POPUP

let popup = document.getElementById("popup");

setTimeout(() => {
    popup.style.display = "flex"
}, 5000)

let closeBtn = document.getElementById("close-btn");


closeBtn.addEventListener("click",() => {
    popup.style.display = "none";
})


// ------------------------------------------------------------
