var calculadora = {
  display: document.getElementById("display"),
	numeroDisplay: "0",
	operacion: "",
	operadorA: 0,
	operadorB: 0,
	todoValor: 0,
	resultado: 0,
	teclaIgual: false,

  init: (function(){
    this.tamañoBotones();
		this.asignarEventosaFuncion();
	}),

  tamañoBotones: function(){
    var botones = document.getElementsByClassName("tecla");
    for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("mousedown", function () {
    botones[i].style.transform = "scale(.95, .95)";
    });
    botones[i].addEventListener("mouseup", function () {
    botones[i].setAttribute("style", "transform:scale(1, 1)");
    });
    };
  },

  asignarEventosaFuncion: function(){
		document.getElementById("0").addEventListener("click", function() {calculadora.mostrarNumero("0");});
		document.getElementById("1").addEventListener("click", function() {calculadora.mostrarNumero("1");});
		document.getElementById("2").addEventListener("click", function() {calculadora.mostrarNumero("2");});
		document.getElementById("3").addEventListener("click", function() {calculadora.mostrarNumero("3");});
		document.getElementById("4").addEventListener("click", function() {calculadora.mostrarNumero("4");});
		document.getElementById("5").addEventListener("click", function() {calculadora.mostrarNumero("5");});
		document.getElementById("6").addEventListener("click", function() {calculadora.mostrarNumero("6");});
		document.getElementById("7").addEventListener("click", function() {calculadora.mostrarNumero("7");});
		document.getElementById("8").addEventListener("click", function() {calculadora.mostrarNumero("8");});
		document.getElementById("9").addEventListener("click", function() {calculadora.mostrarNumero("9");});
		document.getElementById("on").addEventListener("click", function() {calculadora.limpiarDisplay();});
		document.getElementById("sign").addEventListener("click", function() {calculadora.signoIzq();});
		document.getElementById("punto").addEventListener("click", function() {calculadora.teclaPunto();});
		document.getElementById("igual").addEventListener("click", function() {calculadora.solucion();});
		document.getElementById("dividido").addEventListener("click", function() {calculadora.procesoOper("/");});
		document.getElementById("por").addEventListener("click", function() {calculadora.procesoOper("*");});
		document.getElementById("menos").addEventListener("click", function() {calculadora.procesoOper("-");});
		document.getElementById("mas").addEventListener("click", function() {calculadora.procesoOper("+");});
	},




}
