
const TIENDA = "FLORICIENTA";
let productos = [];
let stock = 0;

// Funcion para agregar productos al inventario
function agregarProducto(nombre, precio, cantidad) {
    productos.push({ nombre, precio, cantidad });
    stock = stock + cantidad;
    console.log("Producto agregado: " + nombre + " - Precio: $" + precio + " - Cantidad: " + cantidad);
  }
  
agregarProducto("alfajor", 1000, 1000)
agregarProducto("caramelos", 120, 2000)
agregarProducto("chupetines", 25, 500)

console.log(productos);

//Funcion para eliminar productos del inventario   
function eliminarProducto(nombre) {
    const PRODUCTO = productos.find(function(p) {
        return p.nombre === nombre;
    }); //utilizo el metodo find (recodatorio, es para buscar el PRODUCTO en el array productos que tenga estrictamente el mismo nombre que el parametro nombre)
    
    if (PRODUCTO) {
        productos = productos.filter(function(p) {
            return p.nombre !== nombre;
        }); //(recordatorio, con el metodo .filter() me devuelve el array productos que no incluya el que busque con el metodo .find, quedan todos los demas  )
        
      stock = stock - PRODUCTO.cantidad;
      console.log("Producto eliminado: " + nombre);
    } else {
      console.log("Producto no encontrado: " + nombre);
    }
  }

eliminarProducto("alfajor")
console.log(productos);

// Funcion para ver el stock 
function verInformes() {
    console.log("Stock total: " + stock); //solo me muestra la cantidad. no la cantidad con nombre, agregar para que detalle por producto..
    productos.forEach(p => console.log("Producto: " + p.nombre + " - Cantidad: " + p.cantidad)); //recordatorio, utilizo el metodo .forEach con la funcion flecha para que me muestre los parametros del array productos.
}
    verInformes()


//interaccion con el usuario, agrego funcion salir para que no se un bucle infinito.
let salir = false;

while (!salir) {
    const opcion = prompt("¿Que deseas hacer? (1) Agregar producto, (2) Eliminar producto, (3) Ver stock, (4) SALIR");
    switch (opcion) {
      case "1":
        const nombre = prompt("Ingrese el nombre del producto");
        const precio = parseFloat(prompt("Ingrese el precio del producto"));
        const cantidad = parseInt(prompt("Ingrese la cantidad del producto"));
        agregarProducto(nombre, precio, cantidad);
        break;
      case "2":
        const nombreEliminar = prompt("Ingrese el nombre del producto a eliminar");
        eliminarProducto(nombreEliminar);
        break;
    case "3":
        verInformes();
        break;
    case "4":
        alert("GRACIAS POR MANTENER CORRECTO EL STOCK!!!!");  
        salir = true; // PARA QUE NO SEA UN BUCLE INFINITO... 
        break;
        default:
        alert("Opción no válida");
        }
      }