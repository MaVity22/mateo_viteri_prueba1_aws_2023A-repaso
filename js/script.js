/* ----------Script para generar los bloques de Info de los desarrolladores---------*/
const html_icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png';
const js_icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png';
const css_icon = 'https://i.pinimg.com/originals/eb/7e/20/eb7e20e646f5b7ec9ed4f8f78a5dee8f.png';
const node_icon = 'https://icon-library.com/images/nodejs-icon/nodejs-icon-17.jpg';
const mongo_icon = 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png';

const developerList = [
    {name:'Carla', photo:'https://i.pinimg.com/236x/6d/5e/38/6d5e38d19bf4c0c9554b1e6beab75952.jpg',
     bio: 'Hola, soy desarrolladora front-end desde hace 5 años...',
     languages: {html: true, javascript: true, css: true, node: false, mongodb: false}},
    {name:'Erick', photo: 'https://i.pinimg.com/564x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg',
     bio: 'Hi, I am back-end developer from ten years ago, and ...',
     languages: {html: true, javascript: true, css: false, node: true, mongodb: true}},
    {name:'Maria', photo: 'https://i.pinimg.com/564x/ed/be/19/edbe19b1fd4866b2d458aaabf8c02073.jpg',
     bio: 'Hola, soy DevOps en Facebook ...',
     languages: {html: false, javascript: false, css: false, node: true, mongodb: true}}
];

/* Cargando los datos al HTML*/
var container = document.getElementById('desarrolladores');
container.innerHTML = listarDevelopers();

function listarDevelopers(){
    let texto = "";
    for(var i of developerList){
        texto += "<div class='info-des'><img src="+i.photo+" alt='foto' class='foto'>";
        texto += "<a href=''>"+i.name+"</a><ul class='icon-leng'>";
        var lengDev = Object.entries(i.languages)
        .filter(([_, value]) => value === true)
        .map(([attribute, _]) => attribute);
        for (var j of lengDev){
            if(j == "html"){
                texto += "<li><img src='"+html_icon+"' alt='Html-icon' class='icono'></img></li>";
            }
            else if(j == "javascript"){
                texto += "<li><img src='"+js_icon+"' alt='js-icon' class='icono'></img></li>";
            }
            else if(j == "css"){
                texto += "<li><img src='"+css_icon+"' alt='css-icon' class='icono'></img></li>";
            }
            else if(j == "node"){
                texto += "<li><img src='"+node_icon+"' alt='node-icon' class='icono'></img></li>";
            }
            else if(j == "mongodb"){
                texto += "<li><img src='"+mongo_icon+"' alt='mongo-icon' class='icono'></img></li>";
            }
        }
        texto += "</ul>";
        texto += "<p id='desc-devel'>"+i.bio+"</p></div>"
    }
    return texto;
}

function addDeveloper(nuevo) {
    developerList.push(nuevo);
    container.innerHTML = listarDevelopers();
}

function verificarDeveloper(elemento) {
    var nombre = document.getElementById('txtNombre').value;
    var avatar = document.getElementById('txtAvatar').value;
    var biogrf = document.getElementById('txtBiograf').value;
    if (nombre == '' || avatar == '' || biogrf == ''){
        alert("No se ha ingresado algún campo obligatorio.")    
    }
    else {
        var Ohtml = document.getElementById('op1').checked;
        var Ojs = document.getElementById('op2').checked;
        var Ocss = document.getElementById('op3').checked;
        var Onode = document.getElementById('op4').checked;
        var Omongo = document.getElementById('op5').checked;

        var nuevo_devp = {name: nombre, photo: avatar,
        bio: biogrf,
        languages: {html: Ohtml, javascript: Ojs, css: Ocss, node: Onode, mongodb: Omongo}};

        addDeveloper(nuevo_devp);

        document.getElementById('txtNombre').value = '';
        document.getElementById('txtAvatar').value = '';
        document.getElementById('txtBiograf').value = '';
        document.getElementById('op1').checked = false;
        document.getElementById('op2').checked = false;
        document.getElementById('op3').checked = false;
        document.getElementById('op4').checked = false;
        document.getElementById('op5').checked = false;

        container.innerHTML = listarBrigadistas();
    }
}