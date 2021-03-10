/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 2
): number {
  return numero * base;
}

// const resultado = multiplicar(4, 5, 5);

// console.log(resultado);

interface Personaje2 {
  nombre: string;
  pv: number;
  mostrarHp: () => void;
}

function curar(personaje: Personaje2, curarX: number): void {
  personaje.pv += curarX;

  console.log(personaje);
}

const nuevoPersonaje: Personaje2 = {
  nombre: "Matt",
  pv: 50,
  mostrarHp() {
    console.log("Puntos de vida: " + this.pv);
  },
};

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();
