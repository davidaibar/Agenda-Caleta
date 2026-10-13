function filtrarEventos(categoria) {

    const eventos = document.querySelectorAll(".evento");

    eventos.forEach(function(evento) {

        if (categoria === "todos") {
            evento.style.display = "block";
        } 
        else if (evento.dataset.categoria === categoria) {
            evento.style.display = "block";
        } 
        else {
            evento.style.display = "none";
        }

    });
}