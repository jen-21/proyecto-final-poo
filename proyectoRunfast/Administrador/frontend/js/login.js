
    
function login(){

    axios({
        
        data:{
            email:document.getElementById('email').value,
            password:document.getElementById('password').value
                  
        }
    }).then(res=>{
        if(res.data.codigoResultado==1){
        window.location.href = "index.html";
        }else{
          document.getElementById("error").style.display = 'block';
          document.getElementById("error").innerHTML = res.data.mensaje;
          console.log(res);
        }
        
    }).catch(error=>{
        console.error(error);
    
    });
    }