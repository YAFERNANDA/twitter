/*function accountant (){
  // la cantida de caracteres permitidos
  var lenght = 140;
  //
  var suma = '';
  //recuperar la caja de texto.
  var container= document.getElementById('container').value.lenght;
  suma=lenght+container;

  document.getElementById('number').value=suma;

};*/

window.addEventListener('load',function(){

//creo una variable para obtener el valor de mi id container
var container = document.getElementById('container').value;

//variable boton que almacenara el contenido de container
var button = document.getElementById('button');

//contador de forma regresiva
var number = document.getElementById('number').value;

// agrego un evento a mi boton para que luego guarde el valor de container
button.addEventListener('click', function(event) {
  button = container;
  //console.log(event);

  var text = document.createElement('p');
  text.setAttribute('class', 'text');
  text.texContent = button;
  console.log(text);
});

// crear una funcion para deshabilitar el boton cuando tenga un valor vacio.
/*  function disabled(){
   if (container == ' '){
     button.disabled = true;
   };
  else (container == button) {
      button.disabled = false;
   };
 };*/

});
