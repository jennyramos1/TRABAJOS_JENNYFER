
// ========================================
// 1. BUSCADOR DE LIBROS
// ========================================

const buscador = document.querySelector('input[type="search"]');
const libros = document.querySelectorAll('.libro');

buscador.addEventListener('input', function () {

    const texto = buscador.value.toLowerCase();
    let encontrados = 0;

    libros.forEach(function (libro) {

        const nombre = libro.querySelector('h3').textContent.toLowerCase();

        if (nombre.includes(texto)) {
            libro.style.display = 'block';
            encontrados++;
        } else {
            libro.style.display = 'none';
        }

    });

    // Avisar si no hay resultados
    let mensaje = document.getElementById('sin-resultados');

    if (!mensaje) {
        mensaje = document.createElement('p');
        mensaje.id = 'sin-resultados';
        mensaje.textContent = 'No se encontraron libros.';
        document.querySelector('.libros').appendChild(mensaje);
    }

    mensaje.style.display = encontrados === 0 ? 'block' : 'none';

});


// ========================================
// 2. BOTONES VER MÁS DETALLES
// ========================================

const botones = document.querySelectorAll('.libro button');

const informacionLibros = [
    'Hasta que el verano nos separe: una historia romántica llena de emociones y momentos inolvidables.',
    'La naranja mecánica: una novela que explora la violencia, la libertad y el comportamiento humano.',
    'Animales del bosque: descubre diferentes animales y conoce más sobre la naturaleza.',
    'Reyes caídos: una historia de poder, conflictos y personajes inolvidables.'
];

botones.forEach(function (boton, indice) {

    boton.addEventListener('click', function () {

        const libro = libros[indice];
        const titulo = libro.querySelector('h3').textContent;

        alert(
            'LIBRERÍA JENDAN\n\n' +
            titulo + '\n\n' +
            informacionLibros[indice]
        );

    });

});


// ========================================
// 3. MENSAJE DE BIENVENIDA
// ========================================

console.log('Bienvenido a la Librería Digital JENDAN');