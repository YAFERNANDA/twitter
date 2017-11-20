function formulario () {
// esta variable nos ayudara se verificar que la funcion se cumpla.
  var submit = true;

  var number = document.getElementById('number');

  var textArea = document.getElementById('textarea').value;

//validamos que el formulario no este vacio.

 if (textArea == ''){
   number.classList.add ('red');

   //cuando el contenido sea vacio el boton submit se deshabilita.
   var button = document.getElementById('button');
   button.disabled = true;
 };
  /*else if(textArea.length > 120){
  number.classList.add ('green');
 };
   else if(textArea.length > 130){
   number.classList.add ('yellow');
 };*/


 var text = document.createElement ('div');
 text.setAttribute('class', 'text');
 text.texContent = textArea;

};

// al momento que el usuario ingrese el texto se restara del maximo de caracteres que se esta agregando.Por lado posterio se agraga atrivutos(eventos)a tiqueta texarea del HTML.
//se realiza un conteo regresivo.
function calcular () {
  var contadorBox = document.getElementById('number').innerHTML= 140 - document.formulario1.textarea1.value.length;
  //console.log(contadorBox);
};

// añadimos evento onclick
window.onload= function(){
  var buttonSubmit = document.getElementById('button');
  buttonSubmit.onclick = formulario;
};
