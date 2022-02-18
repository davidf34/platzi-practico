const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

const inputCoupon = document.getElementById("InputCoupon");
const couponValue = inputCoupon.value;


function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = precio * (porcentajePrecioConDescuento* (0.01));

    return precioConDescuento;
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
    let descuento;
  



    if (!coupons.includes(couponValue)) { //lo que hace esta funcion es verificar si un valor está dentro del array, en este caso para  validar el cupón
        alert("El cupón " + couponValue + " no es válido");
     } else if (couponValue === "JuanDC_es_Batman") {
        descuento = 15;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
     } else if (couponValue === "pero_no_le_digas_a_nadie") {
        descuento = 30;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
     } else if (couponValue === "es_un_secreto") {
        descuento = 25;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
     }
  
  
    
  }
