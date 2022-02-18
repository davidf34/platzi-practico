function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce( //suma o divide o multiplica los argumentos de la funcion
    function (valorAcumulado = 0, nuevoElemento ){
        return valorAcumulado + nuevoElemento;
    }
    );

const promedioLista = sumaLista/lista.length;

return promedioLista;
}

const lista1 = [100,200,800,1,500,1000000,5,8];
//
console.log("Originales: ", lista1.join());
const mitadLista1 = parseInt(lista1.length /2);
var lista1_order = lista1.sort ((a,b)=>a-b);



function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

let mediana;

if(esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1-1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedioElemento1y2;
}
else{
    mediana = lista1[mitadLista1];
}