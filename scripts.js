// Función flecha que manipula un arreglo
const manipulateArray = (arr, operation) => {
  if (operation === "pop") {
    arr.pop();
  } else if (operation === "push") {
    arr.push(10); // Agregamos el valor 10 al arreglo.
  }
  console.log(`Teniendo en cuenta la modificación del arreglo este queda así: ${arr}`);
};

// Función flecha que toma dos parámetros y no usa return
const printSum = (a, b) => {
  console.log("Sum:", a + b);
};

// Función flecha que es un callback function
const callbackFunction = (arr, operation, a, b) => {
  manipulateArray(arr, operation);
  printSum(a, b);
};

// Ejemplo de uso
const myArray = [1, 2, 3, 4];
const operation = "push"; // Cambiar a "pop" si se desea probar la operación pop.
const numA = 5;
const numB = 7;

console.log("Array antes:", myArray);
console.log("Ejecutando la callback function...");
callbackFunction(myArray, operation, numA, numB);
console.log(myArray);
