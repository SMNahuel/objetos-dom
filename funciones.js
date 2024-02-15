class Objeto1 {
  constructor(texto1, texto2, texto3) {
    this.texto1 = texto1;
    if (texto2 != null) {
      this.texto2 = texto2;
      this.texto3 = texto3;
    }
  }
}

const vectorObjetos1 = [
  new Objeto1("Seleccione un valor"),
  new Objeto1("Nico Facón", "Tengo que tener 8", "ChauHola"),
  new Objeto1("Martín Rivas", "Tengo que tener 8 letras", "HolaChau"),
];

function agregarTexto1() {
  for (let i = 0; i < vectorObjetos1.length; i++) {
    var option = document.createElement("option");
    option.text = vectorObjetos1[i].texto1;
    option.value = "";
    var select = document.getElementById("selectScreen");
    select.appendChild(option);
  }
}

/* Cuandop inicie la pagina ocultamos los inputs */
var input1 = (document.getElementById("inputs_1").style.display = "none");
var input2 = (document.getElementById("inputs_2").style.display = "none");
var select = document.getElementById("selectScreen");
var inputs1 = document.getElementById("inputs_1");
var inputs2 = document.getElementById("inputs_2");

select.addEventListener("change", function () {
  ocultarMostrarInp();
});

/* Agregamos un evento escuchador a nuestro select */
inputs1.addEventListener("change", function () {
  corroborarLongitudInput1();
});

inputs2.addEventListener("change", function () {
  corroborarInputs2();
});

function ocultarMostrarInp() {
  var input1 = document.getElementById("inputs_1");
  var input2 = document.getElementById("inputs_2");
  /* Obtener la option seleccionada */
  var text = select.options[select.selectedIndex].text;

  /* Vamos a ir mostrando o ocultando los inputs */
  if (text !== "Seleccione un valor") {
    input1.style.display = "block";
    input2.style.display = "block";
  } else {
    input1.style.display = "none";
    input2.style.display = "none";
  }
}

function corroborarLongitudInput1() {
  if (document.getElementById("inputs_1").value.length < 8) {
    return alert("Debe tener longitud de 8");
  }
}

function corroborarInputs2() {
  if (document.getElementById("inputs_2").value.length === 0) {
    return
  }
  if (document.getElementById("inputs_2").value.length < 8) {
    return alert("Debe tener longitud de 8 o estar vacio");
  }
}

function guardar() {
  var text = select.options[select.selectedIndex].text;
  console.log(text);
  if (text === "Seleccione un valor") {
    return alert("Seleccione una opcion valida");
  }
  if (document.getElementById("inputs_1").value.length < 8) {
    return alert("Debe tener longitud de 8");
  }
  if (
    document.getElementById("inputs_2").value.length === 0 ||
    document.getElementById("inputs_2").value.length > 7
  ) {
    for (let i = 0; i < vectorObjetos1.length; i++) {
      if (vectorObjetos1[i].texto1 === text) {
        vectorObjetos1[i].texto2 = inputs1.value;
        vectorObjetos1[i].texto3 = inputs2.value;
      }
    }
    console.log(vectorObjetos1);
    return
  }
  alert("El segundo input debe ser vacio o tener longitud de 8")
}

agregarTexto1();
