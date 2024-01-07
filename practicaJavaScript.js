//OBJETOS

const persona ={
    nombre:"Carlos",
    edad:25,
    ocuapacion:"desarrollador"
};
persona["apellido"]="perez";
console.log(persona);
console.log(persona.edad,persona.nombre);
persona.nombre="Pedrito";
persona.edad=30;
persona.ocupacion="programador";
console.log(persona);

//ARRAY
const colores =["rojo","verde","azul"];
console.log(colores);
console.log(colores.length);
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores[3]);
for(let i = 0; i<colores.length; i++){
    console.log("Elemento "+colores[i]+" indice "+i)
}
colores.push("Amarillo");
console.log(colores);
colores.reverse();
console.log(colores);
colores.sort();
console.log(colores);
colores.push(1);
colores.push(2);
colores.push(3);
console.log(colores);
colores.push(true);
colores.push(3.34);
console.log(colores);
colores.push([1,2,3]);
console.log(colores);
var elemento = colores.pop();
console.log("elemento"+elemento);
console.log(colores);
colores.find="rojo";
console.log(colores.find="amarillo")