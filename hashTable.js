/*Básicamente una Hash Table es similar a un objeto JSON.
La única diferencia es que, a la “key” que tu le pases se le va a aplicar una función que convertirá esa key en una referencia de memoria que es en donde se guardarán los valores que tu les pases.
.
Para obtener de regreso tus valores, tienes que usar esa misma key, que será convertida de nuevo en un hash con la referencia de memoria en donde están guardados tus valores y te los devolverá.*/
/*¿Qué es un hash?
Según la definición de Kaspersky:
.
“Una función criptográfica hash- usualmente conocida como “hash”- es un algoritmo matemático que transforma cualquier bloque arbitrario de datos en una nueva serie de caracteres con una longitud fija. Independientemente de la longitud de los datos de entrada, el valor hash de salida tendrá siempre la misma longitud.”
.
En pocas palabras, un hash es un string aleatorio que se genera a partir de un string que le pasamos nosotros, este string que se genera tendrá una longitud fija, no importa si el string que nosotros le pasamos es muy largo.
.
El hash se suele usar mucho al momento de encriptar contraseñas, y la forma de calcularlos es mediante un algoritmo matemático*/
class HashTable {
  constructor(size) {
    this.buckets = new Array(size);
  }
  //creamos la función hasheadora, esta es una de muchas funciones, cuya finalidad es "encriptar" un valor.
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.buckets.length;
    }
    return hash;
  }

  //creamos el metodo que va a guardar el par clave valor en el hashTable
  set(key, value) {
    let address = this.hashMethod(key); // <-- Esta es la dirección en donde se va a guardar nuestra informacion
    if (!this.buckets[address]) {
      this.buckets[address] = [];
    } // <-- Este if lo que hace es verificar si en esa dirección hay información, en caso que no lo haya, crea un array donde va a ir la informacion
    this.buckets[address].push([key, value]);
    return this.buckets;
  }

  //creamos el metodo get
  get(key) {
    const address = this.hashMethod(key); // <-- Convertimos el key en un address para ubicar el bucket
    const currentBucket = this.buckets[address]; // <-- Nos posicionamos en el bucket
    //console.log(currentBucket);
    if (currentBucket) {
      // <-- Recorremos cada uno de los elementos del bucket
      for (let i = 0; i < currentBucket.length; i++)
        //console.log(currentBucket[i])
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      return "No existe esa entrada";
    }
  }
}

const hashTable = new HashTable(35);

//console.log(hashTable.hashMethod("mariana"))
hashTable.set("Diego", 1998);
hashTable.set("Diego1", 1998);
hashTable.set("Mariana", 2001);
hashTable.set("Andres", 1998);
hashTable.get("Diego");
