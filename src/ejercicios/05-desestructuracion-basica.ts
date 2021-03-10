/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
  volumen: number;
  segundo: number;
  canción: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  canción: "Mess",
  detalles: {
    autor: "Ed Sheeran",
    anio: 2015,
  },
};

const autor = "Fulano";
const { volumen, segundo, canción, detalles } = reproductor;
const { autor: autorDetalle } = detalles; //Lo renombramos para que no haya conflicto con la otra variable que ya existe con ese nombre

// console.log("El volumen actual es : ", volumen);
// console.log("El segundo actual es : ", segundo);
// console.log("La canción actual es : ", canción);
// console.log("El autor es : ", autor);

const dbz: string[] = ["Goku", "Vegetta", "Trunks"];

const [, , p3] = dbz;

console.log("Personaje 1: ", dbz[0]);
console.log("Personaje 2: ", dbz[1]);
console.log("Personaje 3: ", p3);
