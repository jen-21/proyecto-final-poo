function registraseBiker(){
    document.getElementByClassName('registroFormulario').style.display = 'none';
    document.getElementByClassName('registroAprobado').style.display = 'flex';
   }
   
   function mostrarSolicitud(){
       document.getElementById('orden-solicitud').style.display = 'flex';
       document.getElementById('orden-Tomadas').style.display = 'none';
       document.getElementById('orden-entregadas').style.display = 'none';
   }
   function mostrarTomadas(){
       document.getElementById('orden-solicitud').style.display = 'none';
       document.getElementById('orden-Tomadas').style.display = 'flex';
       document.getElementById('orden-entregadas').style.display = 'none';
   }
   function mostrarEntregadas(){
       document.getElementById('orden-solicitud').style.display = 'none';
       document.getElementById('orden-Tomadas').style.display = 'none';
       document.getElementById('orden-entregadas').style.display = 'flex';
   }
   function mostrarDescripcionOrden(){
       document.getElementById('descripcion-orden').style.display = 'flex';
       document.getElementById('orden-solicitud').style.display = 'none';
       document.getElementById('orden-Tomadas').style.display = 'none';
       document.getElementById('orden-entregadas').style.display = 'none';
   }