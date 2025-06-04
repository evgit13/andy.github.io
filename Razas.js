const imagenesCaballos = {
    arabe: "caballoarabe.jpg",
    frison: "caballofrison.jpg",
    mustang: "caballomustang.jpg",
    shire: "caballoshire.jpg",
    cuartodemilla: "cuartodemilla (2).jpg",
    criollo: "caballocriollo.jpg",
    español: "caballoespañol.jpg"
};

function mostrarImagen(raza){
    const img = document.getElementById("imagenCaballo");
    img.src = imagenesCaballos[raza];
}