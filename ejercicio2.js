//Programa 2
//Elaborado por: David Felipe Sandoval Granados
//22 de noviembre de 2021

var array_name = '';
var only_name = '';
var final_array_salary = Array (173);
var final_array_aux = Array (173);

var info = ['Julian',300,'Andres',200,'Andrea', 250,'Felipe', 310];// --> Ejemplo de datos de entrada: nombre, sueldo.

organiced(info);

function organiced (info){
    var avrg;
    var sum;
    var result=0;
    var salary = 0;

    for(let i = 0; i<info.length ; i++){

        if(/^-?\d+$/.test(info[i])){

            salary += parseInt(info[i]);//en salary está el string de valor del salario de cada empleado
            final_array_salary[i] = parseInt(info[i]);
        } 
        else {
            only_name += info[i]; //en only_name está el string del nombre de cada empleado
        }
    }
   
    var length_1 = info.length/2;
    
    avrg = salary/length_1;
    
    for(let i = 0; i<info.length ; i++){
 
        if(final_array_salary>(0.1*avrg)+final_array_salary[i] && final_array_salary<(0.05*avrg)+final_array_salary[i]){
            final_array_aux[i+1] =final_array_salary[i];
        }
    }
    return final_array_aux;
}
