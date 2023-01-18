// BOMBAS CENTRIFUGAS//
//FORMULARIO//
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

name.addEventListener("input", (event) => { console.log("--> Evento input en el input nombre.", event.target.value); nameSummary.innerHTML = event.target.value; }); lastName.addEventListener("input", (event) => { console.log("--> Evento input en el input apellido.", event.target.value); lastNameSummary.innerHTML = event.target.value; }); company.addEventListener("input", (event) => { console.log("--> Evento input en el input compañia.", event.target.value); companySummary.innerHTML = event.target.value; }); email.addEventListener("input", (event) => { console.log("--> Evento input en el input correo.", event.target.value); emailSummary.innerHTML = event.target.value; }); country.addEventListener("input", (event) => { console.log("--> Evento input en el input País.", event.target.value); countrySummary.innerHTML = event.target.value; }); project.addEventListener("input", (event) => {
  console.log("--> Evento input en el input Proyecto.", event.target.value); projectSummary.innerHTML = event.target.value;

})

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

let btnDanger = document.getElementById("mainButton");
btnDanger.addEventListener("click", () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Quieres enviar los datos?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Datos enviados!',
        'Gracias por su visita',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Los datos fueron eliminados :)',
        'error'
      )
    }
  })
})

document.addEventListener("DOMContentLoaded", () => {
  fetchData()
})

const fetchData = async () => {
  try {
    const res = await fetch('json/api.json')
    const data = await res.json()
    // console.log(data)
    doProductos(data)
    decBotones(data)
  } catch (error) {
    console.log(error)
  }
}

const contendorProductos = document.querySelector('#contenedor-productos')

const doProductos = (data) => {
  const template = document.querySelector('#template-productos').content

  const fragment = document.createDocumentFragment()

  console.log(template)

  data.forEach(producto => {

    // console.log(producto)

    template.querySelector('img').setAttribute('src', producto.thumbnailUrl)
    template.querySelector('h5').textContent = producto.title
    template.querySelector('p span').textContent = producto.precio
    template.querySelector('button').dataset.id = producto.id
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
  })

  contendorProductos.appendChild(fragment)

}

let trolley = {}
const decBotones = (data) => {
  const botones = document.querySelectorAll('.card button')
  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      // console.log(btn.dataset.id)
      const producto = data.find(item => item.id === parseInt(btn.dataset.id))
      producto.cantidad = 1
      if (trolley.hasOwnProperty(producto.id)) {
        producto.cantidad = trolley[producto.id].cantidad + 1
      }
      trolley[producto.id] = { ...producto }
      // console.log('trolley', trolley)
      dotrolley()
    })
  })
}

const items = document.querySelector('#items')
const dotrolley = () => {
  //pendiente innerHTML
  items.innerHTML = ''
  const template = document.querySelector('#template-trolley').content
  const fragment = document.createDocumentFragment()
  Object.values(trolley).forEach(producto => {
    // console.log('producto', producto)
    template.querySelector('th').textContent = producto.id
    template.querySelectorAll('td')[0].textContent = producto.title
    template.querySelectorAll('td')[1].textContent = producto.cantidad
    template.querySelector('span').textContent = producto.precio * producto.cantidad
    //botones
    template.querySelector('.btn-info').dataset.id = producto.id
    template.querySelector('.btn-danger').dataset.id = producto.id
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
  })

  items.appendChild(fragment)
  doFooter()
  accionBotones()
}

const footer = document.querySelector('#footer-trolley')
const doFooter = () => {
  footer.innerHTML = ''
  if (Object.keys(trolley).length === 0) {
    footer.innerHTML = `
    <th scope="row" colspan="5">trolley vacío con innerHTML</th>
   `
    return
  }
  const template = document.querySelector('#template-footer').content
  const fragment = document.createDocumentFragment()
  // sumar cantidad y sumar totales
  const nCantidad = Object.values(trolley).reduce((acc, { cantidad }) => acc + cantidad, 0)
  const nPrecio = Object.values(trolley).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)
  // console.log(nPrecio)
  template.querySelectorAll('td')[0].textContent = nCantidad
  template.querySelector('span').textContent = nPrecio
  const clone = template.cloneNode(true)
  fragment.appendChild(clone)
  footer.appendChild(fragment)
  const boton = document.querySelector('#vaciar-trolley')
  boton.addEventListener('click', () => {
    trolley = {}
    dotrolley()
  })
}

const accionBotones = () => {
  const botonesAgregar = document.querySelectorAll('#items .btn-info')
  const botonesEliminar = document.querySelectorAll('#items .btn-danger')
  // console.log(botonesAgregar)
  botonesAgregar.forEach(btn => {
    btn.addEventListener('click', () => {
      // console.log(btn.dataset.id)
      const producto = trolley[btn.dataset.id]
      producto.cantidad++
      trolley[btn.dataset.id] = { ...producto }
      dotrolley()

    })
  })
  botonesEliminar.forEach(btn => {
    btn.addEventListener('click', () => {
      // console.log('eliminando...')
      const producto = trolley[btn.dataset.id]
      producto.cantidad--
      if (producto.cantidad === 0) {
        delete trolley[btn.dataset.id]
      } else {
        trolley[btn.dataset.id] = { ...producto }
      }
      dotrolley()
    })
  })
}

fetch("./json/api.json")
  .then((response) => response.json())
  .then((productos) => {
    console.table(productos)
  })