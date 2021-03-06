/**  Simulador interactivo **/



//Funcion Saludar al usuario

const saludar = document.getElementById("saludo");
saludar.addEventListener("click", respuestaClick)
function respuestaClick(){
    const nombre = prompt("Ingresa tu nombre");
    const saludo = "Hola! " + nombre;
    Swal.fire(
    saludo,
    'bonito dia! 馃槑',
    'success'
);
    
}


//Funcion promedio de calificaciones:

const promedio = document.getElementById("promedioAlumno");
promedio.addEventListener("mouseup", promedioAlumno)
function promedioAlumno(){
    alert('Ingresa tus calificaciones para obtener tu promedio.');
    const calificaci贸n1 = parseInt(prompt ("Ingrese su calificaci贸n de HTML:"));
    const calificaci贸n2 = parseInt(prompt ("Ingrese su calificaci贸n de CSS:"));
    const calificaci贸n3 = parseInt(prompt ("Ingrese su calificaci贸n de JS:"));
    const sumaDeCalificaciones = calificaci贸n1 + calificaci贸n2 + calificaci贸n3;
    const promedio = sumaDeCalificaciones / 3;
    if(promedio >= 6){
        Swal.fire({
            icon: 'success',
            title: 'Felicidades!',
            text: 'Aprobaste con: ' + promedio,
          })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Reprobaste tu peromedio es menor a 6',
          })
}
}


//Funcion Calculadora con switch:

const botonCalculadora = document.getElementById("botonCalculadora");
botonCalculadora.addEventListener("click",calculadora)

function calculadora(primernum, segundonum, operacion) {
    switch (operacion) {
        case "+":
           return primernum + segundonum;
            break;
        case "-":
            return primernum - segundonum;
            break;
        case "*":
            return primernum * segundonum;
            break;
        case "/":
            return primernum / segundonum;
            break;
        default: "Valores nulos";
            break;
    }

        let pregunta1 = Number(prompt("ingresa el primer numero"))
        let operadorMat = prompt("Ingresa el operador +,-,* 贸 /.")
        let pregunta2 = Number(prompt("ingresa el segundo numero"));
        alert(calculadora(pregunta1,pregunta2,operadorMat))
    }


//Funcion calculadora iva:

const botonCalculadoraIva = document.getElementById("botonCalculadoraIva");
botonCalculadoraIva.addEventListener("click", calculadoraIva)

function calculadoraIva(){
    const precioDelProducto = Number(prompt("Ingrese el precio del producto"));
    const iva = 1.15;
    const precioConIva = precioDelProducto * iva;
    Swal.fire({
        icon: 'success',
        title: precioConIva ,
        text: 'es el precio con iva!',
      })

}



//Funcion carrito de compras:

const botonCarrito = document.getElementById("botonCarrito");
botonCarrito.addEventListener("click", agregarCarrito)

function agregarCarrito(){
    alert("Esta funci贸n muestra los 3 productos que argeges en la consola." )
    for(i=1;i<=3;i++){
        let producto = prompt("Ingresa el nombre del producto");
        alert(producto + " agregado correctamente")
        console.log("Los productos ingresados son: " + producto)
    }
    alert("abre la consola para ver los productos agregados")
}

//Funcion password:

const botonCicloWhile = document.getElementById("botonCicloWhile");
botonCicloWhile.addEventListener("click", cicloWhile)

function cicloWhile(){
alert('Ciclo while...');
alert('Recodatorio de contrase帽a: contrase帽a');
let password = '';
while(password != 'contrase帽a'){
    password = prompt('Introduzca su contrase帽a:')
}
Swal.fire({
    icon: 'success',
    title: 'Acceso concedido!',
    text: 'Bienvenido',
  })
}


//Funcion do while:

const botonDoWhile = document.getElementById("botonDoWhile");
botonDoWhile.addEventListener("click", doWhile)

function doWhile(){
alert('Ciclo do while...');
alert('Recodatorio de contrase帽a: contrase帽a');
do{
    password = prompt('Introduzca su contrase帽a:')
}while(password != 'contrase帽a')
Swal.fire({
    icon: 'success',
    title: 'Acceso concedido!',
    text: 'Bienvenido',
  })
}


//Funcion Arrays

const botonArray = document.getElementById("botonArray");
botonArray.addEventListener("click", array);

function array(){
    alert('Agrega 3 nombres al array')
    const nombresArray = ["Nivardo","Maria Jose","Rene"];
    for(i=1;i<=3;i++){
        let nuevoNombre = prompt("Ingresa el nombre");
        nombresArray.push(nuevoNombre)
        alert(nuevoNombre + " agregado correctamente")
    }
    alert("Estos son los nombres agregados a la lista " + nombresArray + " un total de "+ nombresArray.length + " nombres")
}


//Array.filter

const botonArrayFilter = document.getElementById("botonArrayFilter");
botonArrayFilter.addEventListener("click", arrayFilter);

function arrayFilter(){
    alert("Busca precios entre 23 y 123234");
    let precio = prompt("Buscar productos de precio menor a:");
    let productos = [
        {nombre: "Arroz", precio: 123},
        {nombre: "Pan", precio: 1233},
        {nombre: "Harina", precio: 1263},
        {nombre: "Leche", precio: 23},
        {nombre: "Cafe", precio: 123234},
        ];

    //filter ingresa el precio
    
    let filtrados = productos.filter(el => el.precio < precio);
    console.log(filtrados);
    alert("Se mostro precios menores a " + (precio) + " en la consola." );
}

const botonArrayFind = document.getElementById("botonArrayFind");
botonArrayFind.addEventListener("click", arrayFind);

//Array.find
function arrayFind(){
    let busqueda = prompt("Busca productos como: Arroz,Pan,Harina,Leche o Cafe.");
    let productos = [
        {nombre: "Arroz", precio: 123},
        {nombre: "Pan", precio: 1233},
        {nombre: "Harina", precio: 1263},
        {nombre: "Leche", precio: 23},
        {nombre: "Cafe", precio: 123234},
        ];

    //find "Pan"
    let producto = productos.find(el => el.nombre === busqueda);
    console.log(producto);
    alert("Se mostro " + (busqueda) + " y su precio en la consola.")
}


//botonDinamico()

let botonDinamico = document.getElementById("botonDinamico");
botonDinamico.addEventListener("click" ,cambiaColor)

function cambiaColor(){

    let color = prompt("Ingresa si, si quieres cambiar el color");
    
    if(color === "si"){
        botonDinamico.className = "container1";
        Swal.fire({
            icon: 'success',
            title: 'Se cambio el color exitosamente!',
          })
    }else if(color !== "si"){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hubo ningun cambio',
          })
    }
}


//eliminarBoton

const botonEliminarBoton = document.getElementById("botonEliminarBoton");
botonEliminarBoton.addEventListener("click" , eliminarBoton);

function eliminarBoton(){
botonEliminarBoton.remove();
Swal.fire(
  'Eliminado!',
  'Boton eliminado correctamente!',
  'success'
);

}

//agregarBoton

const botonesBox = document.getElementById("botones-box");

const botonAgregarBoton = document.getElementById("botonAgregarBoton");
botonAgregarBoton.addEventListener("click" , agregarBoton);

function agregarBoton(){
    const boton = document.createElement("button");
    boton.className = "boton";
    boton.setAttribute("id", "botonEliminarBoton")
    boton.innerHTML = `Boton Nuevo <img class="imgnew" src="./imagenes/new.png" alt="imgnew">`;
    botonesBox.appendChild(boton);
    Swal.fire({
        icon: 'success',
        title: 'Agregado',
        text:'Boton agregado correctamente',
      });
}

botonEliminarBoton.addEventListener("click" , eliminarBoton);




