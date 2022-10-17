// const ul = document.getElementById("clientesLogo");
// const url = 'json/clientes.json';

function createNode(element) {
    return document.createElement(element);
}
function append(parent, el){
    return parent.appendChild(el);
}
function traer(seccion) {
    if (seccion=="clientes"){
        let url = 'json/clientes.json';
        let objeto = document.getElementById("clientesLogo");
            fetch(url)
                .then(res => res.json())
                .then(datos => {
                        tabla(datos,objeto)
                })
    } else {
        switch(seccion){
            case "marcadores":
                url = 'json/marcadores.json';
                var objeto = document.getElementById("marcadores");
                break;
            case "lapices":
                url = 'json/lapices.json';
                var objeto = document.getElementById("lapices");
                break;
            case "biromes":
                url = 'json/biromes.json';
                var objeto = document.getElementById("biromes");
                break;
            case "resmas":
                url = 'json/resmas.json';
                var objeto = document.getElementById("resmas");
                break;
            case "libretas":
                url = 'json/libretas.json';
                var objeto = document.getElementById("libretas");
                break;
            case "cuadernos":
                url = 'json/cuadernos.json';
                var objeto = document.getElementById("cuadernos");
                break;                
        }
        fetch(url)
            .then(res => res.json())
            .then(datos => {
                productos(datos, objeto);
            })
    }
}

function tabla(datos,ul){
    for(let valor of datos){ 
        let img = createNode('img');
        img.setAttribute("src", `${valor.dir}`);
        img.setAttribute("alt", `${valor.alt}`);
        append(ul, img);
    }

}
function productos(seccion, objeto){
    console.log("cargo")
    for (let item of seccion){
        let producto = createNode('div');
        producto.setAttribute("class", "item-prod");
        let img = createNode('img');
            img.setAttribute('src',`${item.img}`);
            img.setAttribute('alt', `${item.Nombre}`);
        let precio = createNode('p');
            precio.setAttribute("class", "precio-prod");
            precio.innerHTML=`${item.precio}`;
        let boton = createNode('button');
            boton.setAttribute("class", "btn-compra");
            boton.setAttribute('title', "click para comprar");
            boton.setAttribute('onclick', "Form-compra.html");
            boton.innerHTML = "Comprar";
        let nombre = createNode('h6');
            nombre.setAttribute("class", "nombre-prod");
            nombre.innerHTML = `${item.Nombre}`;
        let descrip = createNode('p');
            descrip.setAttribute("class", "detalle-prod");
            descrip.innerHTML = `${item.Descricion}`;
        append(producto,img);
        append(producto,precio);
        append(producto, boton);
        append(producto, nombre);
        append(producto, descrip);
        append(objeto,producto);
    }
}
