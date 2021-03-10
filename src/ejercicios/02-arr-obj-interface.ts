/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ["Bash", "Counter", "Healing"];

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  pueblo?: string;
}

const personaje: Personaje = {
  nombre: "strider",
  hp: 100,
  habilidades: ["Bash", "Counter", "Healing"],
};

personaje.pueblo = "Pueblo Paleta";

console.table(personaje)