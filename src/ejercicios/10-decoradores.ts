/*
    ===== Código de TypeScript =====
*/


function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class miSuperClase {
  public miPropiedad: string = "ABC123";

  imprimir() {
    console.log("Hola mundo");
  }
}

console.log( miSuperClase );

const miClass = new miSuperClase();

console.log(miClass.miPropiedad);
