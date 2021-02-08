document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  //Función para comprobar el mail
  function pruebaemail (valor){
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if(!re.exec(valor)){
        return false;
    }
    else return true;
    }
  //Validación del formulario
  function validarFormulario(evento) {
    evento.preventDefault();
    //Nombre
    var usuario = document.getElementById('nombre').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    //Apellidos
    var apellidos = document.getElementById('apellidos').value;
    if(apellidos.length == 0) {
      alert('No has escrito nada en los apellidos');
      return;
    }
    //mail
    var mail = document.getElementById('email').value;
     if (pruebaemail(mail)==false || mail.length == 0)
     {
        alert('Mail no válido/no has escrito nada');
        return;
     }
     //teléfono
     var telefono = document.getElementById('telefono').value;
    if(telefono.length == 0 || telefono.length >9 || telefono.length < 9) {
      alert('No has escrito nada en el teléfono/Teléfono no válido');
      return;
    }
    //Dirección
    var direccion = document.getElementById('direccion').value;
    if(direccion.length == 0) {
      alert('No has escrito nada en la dirección');
      return;
    }
    alert("Cita pedida con éxito, le llamaremos para confirmar fecha y hora.")
    document.getElementById('mandado').innerHTML='Cita pedida con éxito!';
  }