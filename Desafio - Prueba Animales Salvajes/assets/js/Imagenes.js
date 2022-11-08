import Animales from './Consulta.js'

const selectAnimales = document.getElementById('animal');

selectAnimales.addEventListener('change', async () => {

    const { animales } = await Animales.getData();

    const anim = document.getElementById('animal').value;

    let previewImagen = document.getElementById('preview');

    animales.forEach((elemento) => {
        if (elemento.name == anim){
            previewImagen.innerHTML = `<img height='200px' src='assets/imgs/${elemento.imagen}'>`;
        };
    })
});