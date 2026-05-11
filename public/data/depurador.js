const fs = require('fs');

function limpiarPalabra(palabra) {
    return palabra
        .trim()
        .toLowerCase()
        // Protejo la ñ para que no se convierta en n
        .replace(/ñ/g, '__enie__')
        // Saco acentos: á -> a, é -> e, etc.
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        // Recupero la ñ
        .replace(/__enie__/g, 'ñ');
}

const texto = fs.readFileSync('./public/data/palabras.txt', 'utf-8');

const palabras = texto
    .split(/\r?\n|\s+/)
    .map(limpiarPalabra)
    .filter(palabra => palabra.length > 4)
    .filter(palabra => /^[a-zñ]+$/i.test(palabra));

const palabrasSinRepetir = [...new Set(palabras)];

const contenido = `export const PALABRAS = ${JSON.stringify(palabrasSinRepetir, null, 2)};\n`;

fs.writeFileSync('palabras.ts', contenido, 'utf-8');

console.log(`Se generaron ${palabrasSinRepetir.length} palabras en palabras.ts`);