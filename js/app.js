
window.addEventListener('load',function(){

// creo una variable para obtener el valor de mi id container
var textarea = document.getElementById('textarea').value;

// variable boton que almacenara el contenido de container
var button = document.getElementById('button');

// agrego un evento a mi boton para que luego guarde el valor de container
button.addEventListener('click', function(event) {
  button = textarea;
  // console.log(event);

  var text = document.createElement('p');
  text.setAttribute('class', 'text');
  text.texContent = button;
  // console.log(text);
});

// crear una funcion para deshabilitar el boton cuando tenga un valor vacio.

  /*function disabled(){
   if (textarea == ''){
     button.disabled = true;
   };
 };*/

var number = document.getElementById('number').value;
 //contador de forma regresiva
 function contador() {
 // var que acumula la cantidad de caracteres
   var long = 140;
 // otro var resta que se envia vacio
   var resta = '';
 // recuperar caja de texto
   var contenedor = textarea.length;

  resta = long-contenedor;

  if(resta > 140 ) {
    document.number.classList.add ('red');
    document.button.disabled= true;
  };
  else if (resta > 120) {
    document.number.classList.add ('green');
    document.number.classList.remove ('red');
    document.number.classList.remove ('yellow');
  };
  else if (resta > 130) {
    document.number.classList.add ('yellow');
    document.number.classList.remove ('green');
    document.number.classList.remove ('red');
  };
  document.getElementById('number').value=resta;

};

});
