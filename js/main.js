//PROMEDIO DE ALUMONOS POR SUMA DE 2 NOTAS Y POR NUMERO DE ALUMNOS  //


//Variable //
let nombreAlumno;
 let nota1;
 let nota2;
 let cantidadAlumnos = prompt(" ¿Que numero de alumnos quiere consultar?");

 //ciclo para determinar la cantidad de alumnos y la cantidad de notas a promediar//
 for(i=1; i<=cantidadAlumnos; i++){
     nombreAlumno = prompt("Escriba el nombre del  alumno " + i).toUpperCase();
     alert("El nombre del alumno " + i + ` es ${nombreAlumno}`);
     const promedio = (nombreAlumno)=>{
         nota1 = parseInt(prompt(`Ingrese la nota del primer parcial de ${nombreAlumno}`));
         nota2 = parseInt(prompt(`Ingrese la nota del segundo parcial de ${nombreAlumno}`));
         if((nota1<1) || (nota1>10)){
             alert("Ingrese nuevamente la nota del PRIMER PARCIAL de " + `${nombreAlumno}` + " corroborando que los números esten bien tipeados");
             return;
         }
         else if((nota2<1) || (nota2>10)){
             alert("Ingrese nuevamente la nota del SEGUNDO PARCIAL de " + `${nombreAlumno}` + " corroborando que los números esten bien tipeados");
             return;
         }
         else{
             alert(`el promedio de ${nombreAlumno} es `+ ((nota1 + nota2)/2));
         }
     }
    promedio(nombreAlumno);
 }

 