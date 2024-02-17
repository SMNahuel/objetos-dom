/* 
Generar un nuevo vector de objetos (llamado “vectorObjetos2”) para poder almacenar las imágenes 
que les proporcionan los docentes junto a tres textos que acompañen a cada imagen. 
Cada objeto tendrá 4 parámetros, 
un string con el nombre de la imagen y tres strings para los textos 
que la acompañan. 
Ya que les proporcionamos 4 imágenes, deberán tener 4 posiciones en dicho vector.
*/

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
    return;
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
    return;
  }
  alert("El segundo input debe ser vacio o tener longitud de 8");
}

agregarTexto1();

/* Segunda parte */

class Objeto2 {
  constructor(imagen, text1, text2, text3) {
    this.imgName = imagen;
    this.text1 = text1;
    this.text2 = text2;
    this.text3 = text3;
  }
}

const vectorObjestos2 = [
  new Objeto2("1.jfif", "texto 1", "texto 2", "texto 3"),
  new Objeto2("2.jfif", "texto 1", "texto 2", "texto 3"),
  new Objeto2("3.jfif", "texto 1", "texto 2", "texto 3"),
  new Objeto2("4.jfif", "texto 1", "texto 2", "texto 3"),
];

function mostrarPrimeraPantalla() {
  document.getElementById("segundaPantalla").style.display = "none";
  document.getElementById("primeraPantalla").style.display = "block";
}

function mostrarSegundaPantalla() {
  document.getElementById("segundaPantalla").style.display = "block";
  document.getElementById("primeraPantalla").style.display = "none";
}

mostrarPrimeraPantalla();

function mostrarImagenes() {
  let div = document.getElementById("segundaPantalla");

  for (let i = 0; i < vectorObjestos2.length; i++) {
    let container = document.createElement("div");
    let checkbox = document.createElement("input");
    checkbox.className = "messageCheckbox";
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    let text1 = document.createElement("h3");
    let text2 = document.createElement("h4");
    let text3 = document.createElement("h5");
    let img = document.createElement("img");
    img.src = vectorObjestos2[i].imgName;
    text1.innerHTML = vectorObjestos2[i].text1;
    text2.innerHTML = vectorObjestos2[i].text2;
    text3.innerHTML = vectorObjestos2[i].text3;
    container.id = i;
    container.appendChild(img);
    container.appendChild(checkbox);
    container.appendChild(text1);
    container.appendChild(text2);
    container.appendChild(text3);
    div.appendChild(container);
  }
}

mostrarImagenes();

function eleminarElemento() {
  let select = document.getElementsByClassName("messageCheckbox");
  let div = document.getElementById("segundaPantalla");
  for (let i = 0; i < select.length; i++) {
    if (select[i].checked) {
      console.log(i)
      let element = document.getElementById(i + 1);
      div.removeChild(element)
    }
  }

}
