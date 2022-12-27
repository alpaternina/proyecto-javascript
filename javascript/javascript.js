
// PROYECTO BOMBAS CENTRIFUGAS //
/* 
alert ("Gracias por visitarnos, esperamos ser la mejor solucion en Bombas Centrifugas para ustedes") */




/* let nombres = prompt("Ingresa tus nombres");
let apellidos = prompt("Ingresa tus apellidos");
let empresa = prompt("Ingresa tu empresa");
let email = prompt("Ingresa tú email corporativo");
let pais = prompt("Ingresa el pais del requerimiento");
let proyecto = prompt("Ingresa el nombre del proyecto"); */

/* let email = document.getElementById("email");
email.value = "Homero Simpson";
let password = document.getElementById("password");
password.value = "compumundohipermegared";
let description = document.getElementById("description");
description.value =
  "Empleado de una planta nuclear como supervisor de seguridad! :P";

let countries = [
  "Argentina",
  "Bolivia",
  "Chile",
  "Uruguay",
  "Perú",
  "Colombia",
];
let selectPaises = document.getElementById("paises");
for (const unPais of countries) {
  let option = document.createElement("option");
  option.innerHTML = unPais;
  selectPaises.appendChild(option);
}
 */

/* console.log("Bienvenido ", nombres); */
// Autocompletar campos del formulario

let btn = document.getElementById("mainButton");

// // Inputs
let name = document.getElementById("name");
let lastName = document.getElementById("lastName");
let company = document.getElementById("company");
let email = document.getElementById("email");
let country = document.getElementById("country");
let project = document.getElementById("project");

let myForm = document.getElementById("myForm");

// // Summary
let nameSummary = document.getElementById("nameSummary");
let lastNameSummary = document.getElementById("lastNameSummary");
let companySummary = document.getElementById("companySummary");
let emailSummary = document.getElementById("emailSummary");
let countrySummary = document.getElementById("countrySummary");
let projectSummary = document.getElementById("projectSummary");

name.addEventListener("input", (event) => {   console.log("--> Evento input en el input nombre.", event.target.value);   nameSummary.innerHTML = event.target.value; }); lastName.addEventListener("input", (event) => {   console.log("--> Evento input en el input apellido.", event.target.value);   lastNameSummary.innerHTML = event.target.value; }); company.addEventListener("input", (event) => {   console.log("--> Evento input en el input compañia.", event.target.value);   companySummary.innerHTML = event.target.value; }); email.addEventListener("input", (event) => {   console.log("--> Evento input en el input correo.", event.target.value);   emailSummary.innerHTML = event.target.value; }); country.addEventListener("input", (event) => {   console.log("--> Evento input en el input País.", event.target.value);   countrySummary.innerHTML = event.target.value; }); project.addEventListener("input", (event) => {   console.log("--> Evento input en el input Proyecto.", event.target.value);   projectSummary.innerHTML = event.target.value; });


myForm.addEventListener("submit", (event) => {
  // Aquí está nuestar función.
  event.preventDefault();

  var fields = event.target.children;

  let fieldName = fields[0].children[1].value;
  let fieldLastName = fields[1].children[1].value;
  let fieldcompany = fields[2].children[1].value;
  let fieldemail = fields[3].children[1].value;
  let fieldcountry = fields[4].children[1].value;
  let fieldproject = fields[5].children[1].value;

  return true;
});


class Category {
  constructor(id = 0, name = "Sin categoría") {
    this.id = id;
    this.name = name;
   }
  toString() {
    return this.name;
    }
    }
  
class Product {
  
  constructor(id = 0, name = "Sin nombre", price = 0, category = null) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.category = category;
  }
  
  toString() {
  if (this.category != null) {
  return this.name.concat(" (" + this.category.toString() + ")");
  }
  return this.name;
  }
  
  getSubTotal(cantidad) {
  if (parseFloat(cantidad) > 0) {
  return this.price * cantidad;
  }
  return 0;
  }
  }

class Order {
  
  constructor(product = null, quantity = 0) {
  this.product = product;
  this.quantity = quantity;
  }
  
  toString() {
  if (this.product != null) {
  return this.product.name.concat(" (" + this.quantity + ")");
  }
  return "product not defined!";
  }
  
  getSubTotal() {
  if (this.product != null) {
  return this.product.getSubTotal(this.quantity);
  }
  return 0;
  }
}

let oh1Category = new Category(1, "OH1: Bomba OH. Bombas con el impulsor o rodete en voladizo");
let oh2Category = new Category(2, "OH2: Bomba OH API. Bombas con el impulsor o rodete en voladizo");
let oh3Category = new Category(3, "OH3: Bomba OH API. Bombas con el impulsor o rodete en voladizo, Vertical en linea");
let bb1Category = new Category(4, "BB1: Bomba BB. Bombas apoyadas entre cojinetes");
let bb2Category = new Category(5, "BB2: Bomba BB API. Bombas apoyadas entre cojinetes");
let bb3Category = new Category(6, "BB3: Bomba BB API. Bombas apoyadas entre cojinetes multietapa");
let vs1Category = new Category(7, "VS1: Bomba VS. Bombas verticales suspendidas, tipo Turbina");
let vs4Category = new Category(8, "VS4: Bomba VS. Bombas verticales suspendidas, tipo Sumidero");
let vs6Category = new Category(9, "VS6: Bomba VS. Bombas verticales suspendidas, tipo Turbina con caneca");


let products = [];

products.push(new Product(1, "OH1: Bomba OH. Bombas con el impulsor o rodete en voladizo", 15000, oh1Category));
products.push(new Product(2, "OH2: Bomba OH API. Bombas con el impulsor o rodete en voladizo", 30000, oh2Category));
products.push(new Product(3, "OH3: Bomba OH API. Bombas con el impulsor o rodete en voladizo, Vertical en linea", 35000, oh3Category));
products.push(new Product(4, "BB1: Bomba BB. Bombas apoyadas entre cojinetes", 25000, bb1Category));
products.push(new Product(5, "BB2: Bomba BB API. Bombas apoyadas entre cojinetes", 40000, bb2Category));
products.push(new Product(6, "BB3: Bomba BB API. Bombas apoyadas entre cojinetes multietapa", 80000, bb3Category));
products.push(new Product(7, "VS1: Bomba VS. Bombas verticales suspendidas, tipo Turbina", 50000, vs1Category));
products.push(new Product(8, "VS4: Bomba VS. Bombas verticales suspendidas, tipo Sumidero", 35000, vs4Category));
products.push(new Product(9, "VS6: Bomba VS. Bombas verticales suspendidas, tipo Turbina con caneca", 75000, vs6Category));

let productsSelect = document.getElementById("selectProducts");

products.forEach((unProducto) => {
let option = document.createElement("option");
option.innerHTML = unProducto.name;
productsSelect.appendChild(option);

});

let addButton = document.getElementById("addButton");

let trolley = [];


function renderRowFooterSummary() {
  let detailsFoot = document.getElementById("detailsFoot");
  detailsFoot.innerHTML = "";
  let record = document.createElement("tr");
  const TOTAL = trolley.reduce(
    (acumulador, unaOrden) => acumulador + unaOrden.getSubTotal(),
    0
  );
  record.innerHTML = `
  <td colspan="3">TOTAL</td>
  <td colspan="2">$ ${TOTAL.toFixed(2)}</td>`;
  detailsFoot.append(record);
}

function removeAllOrders() {
let newTrolleyColelction = [];
localStorage.setItem("trolley", JSON.stringify(newTrolleyColelction));
renderTableDetails(newTrolleyColelction);

}

function removeOrder(id) {
if (id != null) {
let newTrolleyColelction = trolley.filter((element) => {
return element.product.id !== id;

});

localStorage.setItem("trolley", JSON.stringify(newTrolleyColelction));
renderTableDetails(newTrolleyColelction);

}
}

function renderRowDetail(unProducto, quantity) {
let productDetail = document.getElementById("productDetail");
let record = document.createElement("tr");
record.innerHTML = `<th>${unProducto.name}</th>
<td>${unProducto.price}</td>
<td>${quantity}</td>
<td>${unProducto.price * quantity}</td>
<td>
<button onclick="removeOrder(${unProducto.id})" type="button" class="btn btn-danger">Remover</button></td>`;
productDetail.appendChild(record);
}

function addproductToTrolley() {
let selectedName = productsSelect.value;
let selectedQuantity = parseInt(quantity.value);
let unProducto = products.find((element) => {
return element.name == selectedName;
});

if (unProducto !== undefined && selectedQuantity > 0) {
let unaOrdenExistente = trolley.find((e) => {
return e.product.id == unProducto.id;
});

if (unaOrdenExistente !== undefined) {
unaOrdenExistente.quantity =
unaOrdenExistente.quantity + selectedQuantity;

} else {
let unaOrden = new Order(unProducto, selectedQuantity);
trolley.push(unaOrden);

}
localStorage.setItem("trolley", JSON.stringify(trolley));
renderTableDetails(trolley);

}
}

addButton.addEventListener("click", () => addproductToTrolley());
let restoredTrolley = localStorage.getItem("trolley");
function renderTableDetails(temptrolley = []) {
let productDetail = document.getElementById("productDetail");
productDetail.innerHTML = "";
trolley = [];
temptrolley.forEach((element) => {
let unProducto = new Product(
element.product.id,
element.product.name,
element.product.price,

new Category(element.product.category.id, element.product.category.name)

);

let unaOrden = new Order(unProducto, element.quantity);
trolley.push(unaOrden);
renderRowDetail(unProducto, element.quantity);

});

renderRowFooterSummary();

}

if (restoredTrolley !== null) {
let temptrolley = JSON.parse(restoredTrolley);
renderTableDetails(temptrolley);

}




/* class Client{

  constructor(socialNumber, name, lastName, email){
  
  }
  
  toString(){}
  
  } */
  
  /* class Invoice{
    constructor(nroFactura = 1, fecha = new Date(), clienteNombre, details = []){
    this.number = nroFactura;
    this.date = fecha;
    this.client = clienteNombre;
    this.details = details;
  
  }
  
  toString(){
    return this.number;
  
  }
  
  }
  
  // Cómo implementariamos la construcción de la factura
  
  let unaFactura = new Invoice(100, new Date(), "Pepe Sanchez", trolley);
    console.log("--> Estos son los datos del cliente", datoscliente*/












/* //APLICANDO OBJETOS//

let datoscliente = {
nombres: nombres,
apellidos: apellidos,
empresa: empresa,
email: email,
pais: pais,
proyecto: proyecto,
}

console.log("--> Estos son los datos del cliente", datoscliente)


// APLICANDO ARRAYS METODO FIND//

const tiposbombas = ["OH", "BB", "VS"];
let bomba = prompt("Que clase de Bomba Centrifuga te gustaria seleccionar?: OH (Overhaung), BB (Between Bearings) o VS (Vertical Suspended");
let valorminimobombas = prompt("Por favor ingresar el valor minimo en USD de la bomba que desea")
let finded = tiposbombas.find((modelo) => {
  return modelo.toUpperCase() === bomba.toUpperCase()
});
if (finded !== undefined) {

  if (finded.toUpperCase() == "OH") {
    console.log("Bombas OH: Bombas con el impulsor o rodete en voladizo. Dentro de esta clasificación se encuentran las bombas OH1, OH2, OH3, OH4, OH5 y OH6.");
  }
    if (finded.toUpperCase() == "BB") {
    console.log("Bombas BB: Bombas apoyadas entre cojinetes. Dentro de esta clasificacion se encuentran las bombas BB1, BB2, BB3, BB4 y BB5");
    }
      if (finded.toUpperCase() == "VS") {
      console.log("Bombas VS: Bombas verticales suspendidas. Dentro de esta clasificacion encontramos las bombas VS1, Vs2, VS3, VS4, VS5 y VS6")
      }
} else{
  console.log("--> Escribenos al siguiente email bombascentrifugas@hydraulicinstitute.com para ayudarte en tu busqueda")
  } 

// APLICANDO ARRAYS METODO FILTER//

let clasesbombas = [
  { nombrebomba: "OH1", precio: 15000 },
  { nombrebomba: "OH2", precio: 30000 },
  { nombrebomba: "OH3", precio: 35000 },
  { nombrebomba: "BB1", precio: 25000 },
  { nombrebomba: "BB2", precio: 40000 },
  { nombrebomba: "BB3", precio: 80000 },
  { nombrebomba: "VS1", precio: 50000 },
  { nombrebomba: "VS4", precio: 35000 },
  { nombrebomba: "VS6", precio: 75000 },
];

let filterbomba = clasesbombas.filter((unabomba) => {return unabomba.nombrebomba.includes(finded);});

console.log("--> Todas las bombas que tenemos de la seleccion realizada son: ", filterbomba);

let filterbomba2 = clasesbombas.filter((unabomba) => unabomba.precio < valorminimobombas);

console.log(
  "--> Todas las bombas OH, BB y VS que cuestan menos de USD ", valorminimobombas, filterbomba2); 

// USANDO CONDIONALES//

let cOH1 = 0;
let cOH2 = 0;
let cOH3 = 0;
let cBB1 = 0;
let cBB2 = 0;
let cBB3 = 0;
let cVS1 = 0;
let cVS4 = 0;
let cVS6 = 0;

  

while (bomba.toUpperCase() == "OH" || bomba.toUpperCase() == "BB" || bomba.toUpperCase() == "VS" ) {
  
        if (bomba.toUpperCase() == "OH") {
              let overhaung = prompt("Cual bomba OH deseas?: OH1, OH2, OH3");
                  if(overhaung.toUpperCase() == "OH1"){
                      console.log("El valor Bomba OH1 Ex-works USA es $ 15.000 USD")
                      cOH1++;
                      console.log("El número de Bombas a comprar es " + cOH1)
                  } if(overhaung.toUpperCase() == "OH2"){
                      console.log("El valor Bomba OH2 Ex-works USA es $ 30.000 USD")
                      cOH2++;
                      console.log("El número de Bombas a comprar es " + cOH2)
                  } if(overhaung.toUpperCase() == "OH3"){
                        console.log("El valor Bomba OH3 Ex-works USA es $ 35.000 USD")
                        cOH3++;
                        console.log("El número de Bombas a comprar es " + cOH3)
                      }
          }

        if (bomba.toUpperCase() == "BB") {
                let betweenbearing = prompt("Cual bomba BB deseas?: BB1, BB2, BB3");
                  if(betweenbearing.toUpperCase() == "BB1"){
                      console.log("El valor Bomba BB1 Ex-works USA es $ 25.000 USD")
                      cBB1++;
                      console.log("El número de Bombas a comprar es " + cBB1)
                  } if(betweenbearing.toUpperCase() == "BB2"){
                      console.log("El valor Bomba BB2 Ex-works USA es $ 40.000 USD")
                      cBB2++;
                      console.log("El número de Bombas a comprar es " + cBB2)
                    } if(betweenbearing.toUpperCase() == "BB3"){
                        console.log("El valor Bomba BB3 Ex-works USA es $ 80.000 USD")
                        cBB3++;
                        console.log("El número de Bombas a comprar es " + cBB3)
                      }
         }

        if (bomba.toUpperCase() == "VS") {
                let verticalsuspended = prompt("Cual bomba VS deseas?: VS1, VS4, VS6");
                  if(verticalsuspended.toUpperCase() == "VS1"){
                    console.log("El valor Bomba VS1 Ex-works USA es $ 50.000 USD")
                    cVS1++;
                    console.log("El número de Bombas a comprar es " + cVS1)
                  } if(verticalsuspended.toUpperCase() == "VS4"){
                      console.log("El valor Bomba VS4 Ex-works USA es $ 35.000 USD")
                      cVS4++;
                      console.log("El número de Bombas a comprar es " + cVS4)
                    } if(verticalsuspended.toUpperCase() == "VS6"){
                        console.log("El valor Bomba VS6 Ex-works USA es $ 75.000 USD")
                        cVS6++;
                        console.log("El número de Bombas a comprar es " + cVS6)
                      }
        }
        bomba = prompt("Escoge otro producto: OH (Overhaung), BB (Between Bearings) o VS (Vertical Suspended, o presiona culaquier otra tecla para conocer tu oferta")
}

//PRECIO UNITARIO DE BOMBAS OVERHAUNG (VALORES EN USD)

let overhaungOH1 = 15000;
let overhaungOH2 = 30000;
let overhaungOH3 = 35000;

//PRECIO UNITARIO DE BOMBAS BETWEEN BEARINGS (VALORES EN USD)

let betbearingBB1 = 25000;
let betbearingBB2 = 40000;
let betbearingBB3 = 80000;

//PRECIO UNITARIO DE BOMBAS VERTICAL SUSPENDED (VALORES EN USD)

let verticalVS1 = 50000;
let verticalVS4 = 35000;
let verticalVS6 = 75000;

//CONSTANTES

const SUMAR = (numUno, numDos, numTres, numCuatro, numCinco, numSeis, numSiete, numOcho, numNueve) => {return numUno + numDos + numTres + numCuatro + numCinco + numSeis + numSiete + numOcho + numNueve}
const PRECIO = (numUno, numDos, numTres) => {return numUno + numDos + numTres}
const RESTAR = (numUno, numDos) => {return numUno - numDos}
const IVA = precio => (parseFloat(precio)*(0.19) + parseFloat(fletemaritimo)*(0.19));


//PRECIO CALCULADO

let precio = parseFloat(overhaungOH1 * cOH1) + parseFloat(overhaungOH2 * cOH2) + 
parseFloat(overhaungOH3 * cOH3) + parseFloat(betbearingBB1 * cBB1) + 
parseFloat(betbearingBB2 * cBB2) + parseFloat(betbearingBB3 * cBB3) + parseFloat(verticalVS1 * cVS1) + 
parseFloat(verticalVS4 * cVS4) + parseFloat(verticalVS6 * cVS6);

console.log("precio sin IVA y sin flete: " + precio)

//FLETE MARITIMO 

let fletemaritimo = 6000;
console.log("El valor del flete maritimo es " + fletemaritimo)

// DESCUENTO

let descuentoAplicado = (parseFloat(precio * 0.03) + parseFloat(fletemaritimo)*(0.03));
console.log("Descuento aplicado: " + descuentoAplicado)

// IVA     

console.log("IVA: " + IVA(precio));

//VALOR + IVA     

console.log("Valor + IVA: " + PRECIO(precio, IVA(precio), fletemaritimo));

//PRECIO FINAL CON DESCUENTO   

console.log("Valor final con descuento: " + RESTAR(PRECIO(precio, IVA(precio), fletemaritimo), descuentoAplicado)); */