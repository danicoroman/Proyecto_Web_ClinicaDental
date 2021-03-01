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
    //Servicio
    var servicio = document.getElementById('servicio').selectedIndex;
    if(servicio ==null || servicio==0)
    {
      alert('TIenes que elegir el servicio que necesites.');
      return;
    }
    //Codigo Postal
    var cp= document.getElementById('postal').value;
    if (cp.length==0 || cp== null|| cp.length<5 ||cp.length>5)
    {
      alert('Pon un Código Postal válido');
      return;
    }
    //Urgencias
    var urge=document.getElementsByName('urge');
    var seleccionado = false;
    for(var i=0; i<urge.length;i++)
    {
      if(urge[i].checked){
        seleccionado = true;
        break;
      }
    }
    if(!seleccionado)
    {
      alert('Por favor,indique la urgencia')
      return
    }




    alert("Cita pedida con éxito, le llamaremos y le mandaremos un correo electrónico para confirmar fecha y hora.")
    document.getElementById('mandado').innerHTML='Cita pedida con éxito!';
  }
