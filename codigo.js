const fotosMarcadas = 0;

function marcardas(evt) {
    if(evt.target.dataset.marcadas == undefined) {
        evt.target.style.filter = "sepia()";
        evt.target.dataset.marcadas = true;
        fotosMarcadas++;
    } else {
        evt.target.style.filter = "";
        evt.target.dataset.marcadas = false;
        fotosMarcadas--;
    }
    document.getElementById("marcadas").value = fotosMarcadas;
}

const fotos = document.querySelectorAll("#fotos img")
for (const foto of fotos) {
    foto.addEventListener("clic", marcarFoto);
}