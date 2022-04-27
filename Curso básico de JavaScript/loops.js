/* for */

let alumnos = ["Matias", "Juan", "Sergio", "Martin"];

function saludarAlumnos(alumno){
    console.log(`Hola, ${alumno}`);
}

for(let i=0; i < alumnos.length; i++){ // saluda alumnos teniendo en cuenta la longitud del array principal
    saludarAlumnos(alumnos[i]);
}


 /* for of */


for(let alumno of alumnos){ //alumno es el SINGULAR de alumnos. 
    saludarAlumnos(alumno); //los arrays son en olural y el singular el el nombre
}                           // individual de cada uno




/* while */

while(alumnos.length > 0){
    let alumno = alumnos.shift();  // genera un loop que scaa los nombres
    saludarAlumnos(alumno);     // del array y los muestra en consola
}