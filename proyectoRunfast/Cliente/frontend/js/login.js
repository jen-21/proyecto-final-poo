var irInicioLogin=()=>{
    axios({
        url: urlClientes,
        method: 'get',
        responseType: 'json'
    }).then(res=>{
        //console.log(res);
        Clientes = res.data;
        let verificacion = null;
        console.log(Clientes);
        for(i=0; i<Clientes.length; i++) {
            if (document.getElementById('correo').value == Clientes[i].email && 
                document.getElementById('password').value == Clientes[i].password){
                verificacion = true;
                indiceU = i;
                /**Cambiar localStorage por Session y cookie */
                localStorage.setItem('usuarioSelecto', JSON.stringify(Clientes[i]));
            }
        }

        //----Verificamos el usuario y contraseña
        if(verificacion){
            //console.log(usuariosData[indiceU].email);
            document.getElementById('mensaje').style.display = 'none';
            //usuarioSeleccionado = usuariosData[indiceU];
            //console.log(JSON.parse(localStorage.getItem('usuarioSeleccionado')));
            location.href="../Cliente/frontend/index.html";
        }else{
            document.getElementById('mensaje').style.display = 'block';
        }
    }).catch(err=>{
        console.error(err);
    });
}