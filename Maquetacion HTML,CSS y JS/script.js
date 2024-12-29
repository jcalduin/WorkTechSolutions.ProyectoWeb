//definición de variables
var botonClaro = document.querySelector("#claro");
var modoOscuro = document.querySelector("body");
var mostrarMas = document.querySelector("a#mostrar");
var opinionesOcultas = document.querySelector("div#ocultar");
//esta variable se usa querySelectorAll porque me interesa seleccionar todos los elementos de la clase pregunta, lo que me devuelve una lista de todos esos elementos en el documento
var preguntas = document.querySelectorAll("details.preguntas")

/*funcion oscuro que crea una clase oscuro la cual se encarga de aplicar colores "oscuro". Esta clase se define en el css aplicandose sobre el body,
ya que la variable seleccionada a sido sobre este. Contiene un pequeño efecto con la condicion elvis que se utiliza para cambiar el símbolo*/
function oscuro() {
  botonClaro.textContent = (botonClaro.textContent == "🌜") ? "🌞":"🌜";
  modoOscuro.classList.toggle("oscuro");
}

/*funcion mostrar que crea una clase oculto la cual se usa en el css y aplica el estilo deseado cada que esta función se llama
Contiene un pequeño efecto similar al anterior utilizando una condición elvis*/
function mostrar() {
  opinionesOcultas.classList.toggle("oculto");
  mostrarMas.textContent = (mostrarMas.textContent === "⬇️") ? "⬆️" : "⬇️"; 
}

/*utilizando un bucle foreach el cual recorre todos los elementos de la lista preguntas y para cada elemento de esta aplica una función la cual se encarga de crear una variable simbolo y seleccionar
el span contenido en el elemento pregunta de la lista. Esta funcion crea a su vez un evento que al hacer click sobre la variable preguntas aplique un efecto similar a los anteriores 
utilizando la condicion elvis */
preguntas.forEach(function(pregunta) {
  var simbolo = pregunta.querySelector("span.simbolo");
  pregunta.addEventListener("click", function() {
    simbolo.textContent = (simbolo.textContent === "➕") ? "➖" : "➕";
  });
})

//se crea un evento para cada una de la variables para que al hacer "click" sobre este aplique una de las funciones anteriormente definidas
botonClaro.addEventListener("click",oscuro);
mostrarMas.addEventListener("click",mostrar);