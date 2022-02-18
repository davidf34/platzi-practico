const lista1 = [ 1,4,2,4,5,4,8,5,8,5,5,5,5,5,5];

    const lista1Count = {};

    lista1.map(
        function (elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }
            else{
                lista1Count[elemento] = 1;
            }
        }
    );
 // se convierte en una lista

const lista1Array = Object.entries(lista1Count).sort( //envia el objeto para convertirlo como un array
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1]; //la poisicion 1 porque es el numero de la cantidad de veces que se repite
    }
);
//la ultima posicion del array es la moda
const moda = lista1Array[lista1Array.length - 1];



function moda(array){
        
}