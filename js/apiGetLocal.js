const ul = document.getElementById("clientesLogo");
const url = 'Imagenes/clientes.json';

function createNode(element) {
    return document.createElement(element);
}
function append(parent, el){
    return parent.appendChild(el);
}
function traer() {
    fetch(url)
        .then(res => res.json())
        .then(datos => {
            tabla(datos)
        })
}

function tabla(datos){
    // console.log(datos)
    for(let valor of datos){ 
        let img = createNode('img');
        img.setAttribute("src", `${valor.dir}`);
        img.setAttribute("alt", `${valor.alt}`)
        append(ul, img);
    }

}