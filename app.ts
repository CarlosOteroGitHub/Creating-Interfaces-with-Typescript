import express = require("express");
const app: express.Application = express();

interface OperacionI {

    operacionMatematica(val1:number, val2:number): number;  
}

class Suma implements OperacionI {
    operacionMatematica(num1:number, num2:number):number {
        return num1 + num2;
    }
}

class Resta implements OperacionI {
    operacionMatematica(num1:number, num2:number):number {
        return num1 - num2;
    }
}

class MainClass {

    mainMethod():string {
        let guardar:string = "";

        let objeto1 = new Suma();
        guardar += "La suma es: " + objeto1.operacionMatematica(12, 7).toString() + "<br>";

        let objeto2 = new Resta();
        guardar += "La Resta es: " + objeto2.operacionMatematica(9, 3).toString();

        return guardar;
    }
}

app.get('/', function (req, res) {
    let objeto = new MainClass();
    res.send(objeto.mainMethod(););
});

app.listen(3000, function () {
  console.log('Servidor corriendo en el puerto 3000!');
});

/*

Programa de ExpressJS del lado del servidor con javascript que ejemplifica la usabilidad de las interfaces utilizando typescript.

NOTAS:

    1. Para crear el archivo de Javascript precedido por Typescript utilice: npm run tsc
    2. Para ejecutar el archivo de Javascript utilice: node app.js

*/