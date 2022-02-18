/* const precioOriginal = 120;
const descuento = 18; */


function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = precio * (porcentajePrecioConDescuento* (0.01));

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $"+ precioConDescuento;
}


var array_in = [5,80,22,10];
var array_out = new Array(2000);

number_int(array_in);

function number_int(array_in){
    for (var i=0;i<array_in.length;i++){

        for(var j=i+1;j<array_in.length;j++){

            if(array_in[i]<array_in[j]){

                array_out[i]=array_in[j];
                array_in[i]=array_in[j];
                array_in[j]=-1;

            }
        }
    }

    return array_out; 
}



/* console.log("El precio original es "+ precioOriginal);
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */