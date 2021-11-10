/*En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
La función debe retornar la altura del triángulo.
Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.*/

console.group("Triángulos");

function alturaTriangulo(lado1,lado2,base){
  
    if(lado1 == lado2){


        console.error("¡Perfecto!, el triángulo es isóceles ");
        base_media = base/2;
        const rta = Math.sqrt((base_media * base_media)-(lado1*lado2));
        return Math.sqrt((base_media * base_media)-(lado1*lado2));
        
    }
    else{
        console.log("Vuelve a ingresar los valores, recuerda que el lado 1 y el lado 2 deben ser iguales ");
        
    }
}

console.groupEnd();