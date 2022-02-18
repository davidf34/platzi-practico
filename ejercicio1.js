//Programa 1
//Elaborado por: David Felipe Sandoval Granados
//22 de noviembre de 2021
var array_in = Array (2000);
var array_out = Array (2000);
var array_aux = Array (2000);
var array = Array (2000);

number_int(array);

function number_int(array){

    for (let i=0; i < array_in.length ; i++){

        for(let j=i+1; j < array_in.length; j++){

            if(array_in[i] < array_in[j]){

                var x = array_in[i];
                array_in[i] = array_in[j];
                array_in[j] = x;
                array_out = array_in;   
                array_aux[j] = -1;
                array_aux[i] = array_aux[j];
            }
        }
    }
    array_in = array_aux;
    console.log(array_out);
    return array_out;
}
