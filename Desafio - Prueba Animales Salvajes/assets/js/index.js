import { Leon, Lobo, Oso, Serpiente, Aguila } from './clases/TiposDeAnimal.js'

let animales = [];

let btnRegistrar = document.getElementById('btnRegistrar');

btnRegistrar.addEventListener('click', () => {

    let nombre = document.getElementById('animal').value;
    let edad = document.getElementById('edad').value;
    let previewElement = document.getElementById('preview').innerHTML;
    let comentarios = document.getElementById('comentarios').value;

    if((nombre == '') || (edad == '') || (previewElement == '') || (comentarios == '')){
        alert('Debe ingresar todos los datos.')
    }
    else {
        let nuevoAnimal;

        if( nombre === 'Leon'){
            nuevoAnimal = new Leon(nombre, edad, previewElement, comentarios, 'rugir')
        }
        else if ( nombre === 'Lobo'){
            nuevoAnimal = new Lobo(nombre, edad, previewElement, comentarios, 'aullar')
        }
        else if ( nombre === 'Oso'){
            nuevoAnimal = new Oso(nombre, edad, previewElement, comentarios, 'gruñir')
        }
        else if ( nombre === 'Serpiente'){
            nuevoAnimal = new Serpiente(nombre, edad, previewElement, comentarios, 'sisear')
        }
        else if ( nombre === 'Aguila'){
            nuevoAnimal = new Aguila(nombre, edad, previewElement, comentarios, 'chillar')
        }

        animales.push(nuevoAnimal);

        reloadTable();

        document.getElementById('animal').value = 'inicial';
        document.getElementById('edad').value = 'inicial';
        document.getElementById('preview').innerHTML = '';
        document.getElementById('comentarios').value = '';
    }
});

const reloadTable = () => {

    const animalesTemplate = document.getElementById('Animales');

    animalesTemplate.innerHTML = '';

    animales.forEach((elemento) => {

        let sonido;
        if(elemento.getSonido() === 'rugir'){
            sonido = elemento.Rugir();
        } 
        else if (elemento.getSonido() === 'aullar'){
            sonido = elemento.Aullar();
        }
        else if (elemento.getSonido() === 'gruñir'){
            sonido = elemento.Gruñir();
        }
        else if (elemento.getSonido() === 'sisear'){
            sonido = elemento.Sisear();
        }
        else if (elemento.getSonido() === 'chillar'){
            sonido = elemento.Chillar();
        }
        animalesTemplate.innerHTML += `
        
            <div class='card m-1'>
                ${elemento.getImg()}
                <div class='card-body'>
                    <h4 class='cart-title'>${elemento.getNombre()}</h4>
                    <hr class='w-50 mx-auto'>
                    <h6 class='card-text'>Edad: ${elemento.getEdad()}</h6>
                    <h6 class='card-text'>Comentarios: ${elemento.getComentarios()}</h6>
                    ${sonido}
                </div>
            </div>
       
                            `;
    })
}