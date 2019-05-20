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
		this.eventosFuncion();
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

  eventosFuncion: function(){
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

  limpiarDisplay: function(){

	  this.numeroDisplay = "0";
		this.operacion = "";
		this.operadorA = 0;
		this.operadorB = 0;
		this.resultado = 0;
		this.teclaIgual = false;
		this.todoValor = 0;
		this.actualizarVisor();
	},

  signoIzq: function(){
		if (this.numeroDisplay !="0") {
			var gsel;
			if (this.numeroDisplay.charAt(0)=="-") {
				gsel = this.numeroDisplay.slice(1);
			}	else {
				gsel = "-" + this.numeroDisplay;
			}
		this.numeroDisplay = "";
		this.numeroDisplay = gsel;
		this.actualizarVisor();
		}
	},

  teclaPunto: function(){
		if (this.numeroDisplay.indexOf(".")== -1) {
			if (this.numeroDisplay == ""){
				this.numeroDisplay = this.numeroDisplay + "0.";
			} else {
				this.numeroDisplay = this.numeroDisplay + ".";
			}
			this.actualizarVisor();
		}
	},

  mostrarNumero: function(valor){
		if (this.numeroDisplay.length < 8) {

			if (this.numeroDisplay=="0") {
				this.numeroDisplay = "";
				this.numeroDisplay = this.numeroDisplay + valor;
			} else {
				this.numeroDisplay = this.numeroDisplay + valor;
			}
		this.actualizarVisor();
		}
	},

  procesoOper: function(oper){
		this.operadorA = parseFloat(this.numeroDisplay);
		this.numeroDisplay = "";
		this.operacion = oper;
		this.teclaIgual = false;
		this.actualizarVisor();
	},

  solucion: function(){

		if(!this.teclaIgual){
			this.operadorB = parseFloat(this.numeroDisplay);
			this.operadorB = this.operadorB;
			this.realizarOperacion(this.operadorA, this.operadorB, this.operacion);

		} else {
			this.realizarOperacion(this.operadorA, this.operadorB, this.operacion);
		}

		this.operadorA = this.resultado;
		this.numeroDisplay = "";

		if (this.resultado.toString().length < 9){
			this.numeroDisplay = this.resultado.toString();
		} else {
			this.numeroDisplay = this.resultado.toString().slice(0,8) + "...";
		}

		this.teclaIgual = true;
		this.actualizarVisor();

	},

  realizarOperacion: function(operadorA, operadorB, operacion){
		switch(operacion){
			case "+":
				this.resultado = eval(operadorA + operadorB);
			break;
			case "-":
				this.resultado = eval(operadorA - operadorB);
			break;
			case "*":
				this.resultado = eval(operadorA * operadorB);
			break;
			case "/":
				this.resultado = eval(operadorA / operadorB);
			break;
		}
	},

  actualizarVisor: function(){
		this.display.innerHTML = this.numeroDisplay;
	}

};

calculadora.init();




}
