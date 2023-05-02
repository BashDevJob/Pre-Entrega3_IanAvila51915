//ARRAY
let semillas = [
    {
      id: 1,
      nombre: "semillas de acelga",
      temporada : "anual",
      precio: 250,
      stock: 3,
      imagen: "https://www.floresyplantas.net/wp-content/uploads/acelgas-de-penca-ancha.jpg"
    },
    {
      id: 2,
      nombre: "semillas de lechuga",
      temporada : "anual",
      precio: 250,
      stock: 5, 
      imagen: "https://semillasagroecologicas.com.ar/1899-large_default/semillas-de-lechuga-prima-mantecosa.jpg"
    },
    {
      id: 3,
      nombre: "semillas de zapallo anco",
      temporada: "calor",
      precio: 200,
      stock: 1,
      imagen: "https://www.fecoagro.com.ar/wp-content/uploads/2017/01/anco2.jpg"
    },
    {
      id: 4,
      nombre: "semillas de salvia",
      temporada : "anual",
      precio: 200,
      stock: 8,
      imagen: "https://www.mundodeportivo.com/files/image_948_465/files/fp/uploads/2022/10/05/633d8704b83e0.r_d.2816-2723-1829.jpeg"
    },
    {
      id: 5,
      nombre: "semillas de menta",
      temporada: "calor",
      precio: 350,
      stock: 2,
      imagen: "https://media.admagazine.com/photos/618a61cc2f01962557ac402d/master/w_1600,c_limit/83667.jpg"
    },
    {
      id: 6,
      nombre: "semillas de calendula",
      temporada: "calor",
      precio: 450,
      stock: 6,
      imagen: "https://www.floresyplantas.net/wp-content/uploads/cultivo-de-calendula-officinalis-en-maceta.jpg"
    },
    {
      id: 7,
      nombre: "semillas de morron",
      temporada: "calor",
      precio: 450,
      stock: 15,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/5/59/Pimiento_morrón_%28Capsicum_annuum%29.jpg"
    },
    {
      id: 8,
      nombre: "semillas de repollitos de bruselas",
      temporada: "calor",
      precio: 450,
      stock: 12,
      imagen: "https://d2r9epyceweg5n.cloudfront.net/stores/097/859/products/coles-de-bruselas1-2b7fa0f20e6528a9d316000964659080-480-0.jpg"
    },
    {
      id: 9,
      nombre: "semillas de lenteja",
      temporada: "calor",
      precio: 450,
      stock: 18,
      imagen: "https://trucosdejardineria.com/wp-content/uploads/2018/08/lentejas-590x466.jpg.webp"
    },
    {
      id: 10,
      nombre: "semillas de aji tabasco",
      temporada : "calor",
      precio: 450,
      stock: 9,
      imagen: "https://www.diet-health.info/images/recipes/1400/thai-peppers.jpg.webp"
    },
    {
      id: 11,
      nombre: "semillas de maiz multicolor",
      temporada: "calor",
      precio: 500,
      stock: 3,
      imagen: "https://img.travesiasdigital.com/2020/06/maiz-de-colores-Foto-FB-glassgemcorn.jpg"
    },
    {
      id: 12,
      nombre: "semillas de maiz blanco",
      temporada: "calor",
      precio: 500,
      stock: 3,
      imagen: "https://cdn.www.gob.pe/uploads/document/file/1870067/standard_Cusco%3A%20bondades%20nutricionales%20del%20maíz%20blanco%20gigante%20son%20promovidas%20por%20el%20programa%20Qali%20Warma.jpg"
    },
    {
      id: 13,
      nombre: "semillas de soja",
      temporada: "calor",
      precio: 500,
      stock: 10,
      imagen: "https://mercado.com.ar/wp/wp-content/uploads/2023/03/soja.jpg"
    },
    {
      id: 14,
      nombre: "semillas de girasol",
      temporada: "calor",
      precio: 500,
      stock: 17,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Helianthus_annuus_001.JPG"
    },
    {
      id: 15,
      nombre: "semillas de tomate cherry",
      temporada: "calor",
      precio: 500,
      stock: 15,
      imagen: "https://www.ecojardinmagico.com/wp-content/uploads/2022/05/Tomates-cherry-cultivar.jpg.webp"
    },
    {
      id: 16,
      nombre: "semillas de valeriana",
      temporada: "calor",
      precio: 500,
      stock: 1,
      imagen: "https://www.farmaciadelparque.com.ar/wp-content/uploads/2020/07/VALERIANA.jpg"
    },
    {
      id: 17,
      nombre: "semillas de puerro",
      temporada: "anual",
      precio: 500,
      stock: 10,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/Poireaux.JPG"
    },
    {
      id:30,
      nombre: "ajo",
      temporada: "frio",
      precio: 400,
      stock: 20,
      imagen: "https://www.infocampo.com.ar/wp-content/uploads/2020/05/ajo-huerta-infocampo.jpg"
    }
]

let contenedorCarro = document.getElementById("contenedorCarro")
let botonComprar = document.getElementById("comprar")
botonComprar.addEventListener("click", finalizarCompra)

function finalizarCompra() {
  swal.fire({
    title: "Gracias por escogernos, su compra fue satisfactoria",
    showConfirmButton: false,
    timer: 1350
  })
  localStorage.removeItem("carrito")
  carrito = []
  armarTarjetasCarro(carrito)
}

let carrito = []
if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"))
  armarTarjetasCarro(carrito)
}

let registroInicio = document.getElementById("registroInicio")
let mostrarCarro = document.getElementById("mostrarCarro")

// REGISTRARSE
let usuario = document.getElementById("usuario")
let contrasenia = document.getElementById("contrasenia")
let registrarse = document.getElementById("registrar")

registrarse.addEventListener("click", () => {
  let infoUsuario = { usuario: usuario.value, contrasenia: contrasenia.value}
  localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario))
})

// INICIAR SESION
function alertaIS(titulo, icon){
  swal.fire({
    title: titulo,
    icon: icon,
    showConfirmButton: false,
    timer: 1350
  })
}

let usuarioLogn = document.getElementById("usuarioLogn")
let contraseniaLong = document.getElementById("contraseniaLogn")
let iniciarSesion = document.getElementById("iniciarSesion")

iniciarSesion.addEventListener("click", () => {
  let infoUsuario = JSON.parse(localStorage.getItem("infoUsuario"))
  if (infoUsuario.usuario == usuarioLogn.value && infoUsuario.contrasenia == contraseniaLong.value) {
    alertaIS("todo correcto", "success")
    registroInicio.classList.remove("mostrar")
    registroInicio.classList.add("ocultar")
    mostrarCarro.classList.remove("ocultar")
  } else {
    alertaIS("hubo un error", "error")
  }
})

//"PAG PRINCIPAL"
let contenedorProductos = document.getElementById("contenedorDeProductos")
armarTarjetas(semillas)

let verCarro = document.getElementById("verCarrito")
verCarro.addEventListener("click", () => {
  registroInicio.classList.add("ocultar")
  mostrarCarro.classList.add("ocultar")
  carro.classList.remove("ocultar")
})

let inputs = document.getElementsByClassName("form-check-input")
for (const input of inputs) {
  input.addEventListener("click", filtrarPorTemporada)
}
function filtrarPorTemporada() {
  let filtros = []
  for (const input of inputs) {
    if (input.checked) {
      filtros.push(input.id)
    }
  }
  let arrayFiltrado = semillas.filter(semillas => filtros.includes(semillas.temporada))
  armarTarjetas(arrayFiltrado.length > 0 ? arrayFiltrado : semillas)
}

function armarTarjetas(semillas) {
  contenedorProductos.innerHTML = ""
  semillas.forEach(({nombre, id, imagen, precio, temporada}) => {
    let tarjeta = document.createElement("div")
    tarjeta.className = "productoSemillas"
    tarjeta.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">temporada: ${temporada} </p>
          <p>Precio: $${precio}</p>
          <button type="button" id=${id} class="btn btn-outline-secondary">Comprar</button>
        </div>
      </div>
    `
    contenedorProductos.append(tarjeta)

    let botonIdCompra = document.getElementById(id)
    botonIdCompra.addEventListener("click", agregarAlCarro)
  })
}

function lanzarTostada(){
  Toastify({
    text: "Producto agregado al carro",
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: "top",
    position: "right",
    stopOnFocus: false,
    style: {
      background: "linear-gradient(to right, #83e783, #c9e783)",
    },
  }).showToast();
}

function agregarAlCarro(e){
  lanzarTostada()
  let semillaBuscada = semillas.find(semillas => semillas.id === Number(e.target.id))
  if(carrito.some(semillas => semillas.id == semillaBuscada.id)) {
    let posicion = carrito.findIndex(semilla => semilla.id == semillaBuscada.id)
    carrito[posicion].unidades++
    carrito[posicion].precioTotal = carrito[posicion].precio * carrito[posicion].unidades 
  } else {
    carrito.push({
      id: semillaBuscada.id,
      nombre: semillaBuscada.nombre,
      precio: semillaBuscada.precio,
      unidades: 1,
      precioTotal: semillaBuscada.precio,
      imagen: semillaBuscada.imagen
    })
  }
  localStorage.setItem("carrito", JSON.stringify(carrito))
  armarTarjetasCarro(carrito)
}

function armarTarjetasCarro(carrito) {
  contenedorCarro.innerHTML = ""
  carrito.forEach(({nombre, imagen, precio, unidades, precioTotal}) => {
    let tarjeta = document.createElement("div")
    tarjeta.className = "productoSemillas"
    tarjeta.innerHTML = `
      <div class="card" style="width: 18rem;">
      <img src="${imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p>unidades: ${unidades}</p>
        <p>Precio: $${precio}</p>
        <p class="card-text">Precio Total: $${precioTotal}</p>
      </div>
    </div>
    `
    contenedorCarro.append(tarjeta)
  })
}

//carrito
let carro = document.getElementById("carro")
let seguirComprando = document.getElementById("inicio")

seguirComprando.addEventListener("click", () => {
  registroInicio.classList.add("ocultar")
  mostrarCarro.classList.remove("ocultar")
  carro.classList.add("ocultar")
})