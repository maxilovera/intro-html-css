//COdigo JS Reusable en todos los html
const url = 'http://localhost:8080/aulas/';

const customHeaders = new Headers();
customHeaders.append('User-Agent', 'PostmanRuntime/7.33.0');
customHeaders.append('Accept', '*/*');
customHeaders.append('Accept-Encoding', 'gzip, deflate, br');
customHeaders.append('Connection', 'keep-alive');

document.addEventListener("DOMContentLoaded", function(event){
    document.getElementById("form").addEventListener("submit", function(event){
        guardarAula(event)
    })
})

function guardarAula(event){
    event.preventDefault();
    // Create an object with the data you want to send
    const data = {
        Nombre: document.getElementById("Nombre").value
    };
    
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: customHeaders        
      })// Realizar la solicitud de búsqueda (fetch) al servidor    
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la solicitud al servidor.");
            }
            
            window.location = 'index.html'
        })
        .catch(error => {
            console.error("Error:", error);
            alert(error)
        });

    return false;
}