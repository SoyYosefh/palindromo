// 3. Palíndromo: Dada una palabra y verifica si es 
// un palíndromo (es decir, si se lee igual de adelante 
// hacia atrás que de atrás hacia adelante).

const palabra = 'reconocer';
// Convertir la palabra a un arreglo de caracteres
const palabraInvertida = palabra
    .toLowerCase()
    .split('')
    .reverse()
    .join('');

// Verificar si la palabra es un palíndromo
if (palabra === palabraInvertida) {
    console.log(`La palabra '${palabra}' es un palíndromo`);
} else {
    console.log(`La palabra '${palabra}' no es un palíndromo`);
}
