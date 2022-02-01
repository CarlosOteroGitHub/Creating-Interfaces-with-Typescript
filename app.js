"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var Suma = /** @class */ (function () {
    function Suma() {
    }
    Suma.prototype.operacionMatematica = function (num1, num2) {
        return num1 + num2;
    };
    return Suma;
}());
var Resta = /** @class */ (function () {
    function Resta() {
    }
    Resta.prototype.operacionMatematica = function (num1, num2) {
        return num1 - num2;
    };
    return Resta;
}());
var MainClass = /** @class */ (function () {
    function MainClass() {
    }
    MainClass.prototype.mainMethod = function () {
        var guardar = "";
        var objeto1 = new Suma();
        guardar += "La suma es: " + objeto1.operacionMatematica(12, 7).toString() + "<br>";
        var objeto2 = new Resta();
        guardar += "La Resta es: " + objeto2.operacionMatematica(9, 3).toString();
        return guardar;
    };
    return MainClass;
}());
app.get('/', function (req, res) {
    var objeto = new MainClass();
    res.send(objeto.mainMethod());
});
;
app.listen(3000, function () {
    console.log('Servidor corriendo en el puerto 3000!');
});
/*

Programa de ExpressJS del lado del servidor con javascript que ejemplifica la usabilidad de las interfaces utilizando typescript.

NOTAS:

    1. Para crear el archivo de Javascript precedido por Typescript utilice: npm run tsc
    2. Para ejecutar el archivo de Javascript utilice: node app.js

*/ 
