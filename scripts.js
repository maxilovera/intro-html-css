document.addEventListener("DOMContentLoaded", function(event){
    obtenerAulas();

    document.getElementById("btnFiltrar").addEventListener("click", function(event){
        obtenerAulas();
    })    
})

function obtenerAulas(){
    console.log('obtenerAulas');

    const elementosTable = document.getElementById("elementosTable").querySelector("tbody");
    const filtroNombre = document.getElementById("FiltroNombre");

    urlConFiltro = `http://localhost:8080/aulas/?nombre=${filtroNombre.value}`;

    fetch(urlConFiltro, {
        method: 'GET',            
      })// Realizar la solicitud de búsqueda (fetch) al servidor    
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la solicitud al servidor.");
        }
        return response.json();
    })
    .then(data => {
        // Llenar la tabla con los datos obtenidos
        data.forEach(elemento => {
            const row = document.createElement("tr"); //crear una fila


            row.innerHTML = ` 
                <td>${elemento.ID}</td>
                <td>${elemento.Nombre}</td>
                <td class="acciones"><a href="form.html?id=${elemento.ID}&tipo=EDITAR">Editar</a> | <a href="form.html?id=${elemento.ID}&tipo=ELIMINAR">Eliminar</a></td>
            `; //crear una celda por cada campo que quiera mostrar

            elementosTable.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Error:", error);
        alert(error)
    });
}