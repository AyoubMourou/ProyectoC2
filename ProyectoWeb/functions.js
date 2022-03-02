// comprueba que el usuario ha introducido bien los datos para logearse
function comprobarDatosIntroducidos() {
    var correo = "esplai22@gmail.com";
    var contra = "esplai22";
    var nomCookie = "login_Cookie";

    if ($('#correo').val() != correo || $('#contra').val() != contra) {
        document.getElementById("errorDatos").style.display = "block";
    } else {
        setCookie(nomCookie, correo, 30);
        VolverPagPrincipal();
    }
}

// guardamos la cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// funcion por si queremos recuperar la cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function RatonEncima(c){
    
    c.style.maxWidth= 425+"px";
    c.style.maxHeight=425+"px";
    
}

function RatonFuera(c){
    c.style.maxWidth=400+"px";
    c.style.maxHeight=400+"px";
}

// cambiar a pagina C1
function EntrarEn_C() {
    location.replace("pag_C.html")
}

// cambiar a pagina principal
function VolverPagPrincipal(){
    location.replace("pag_principal.html")
}


window.onload=function(){
    $('.contenidoSesion').hide()
}

// mostrar y ocultar nombres de los temas
function HideShowSesion(value){
    var sesion=$('.contenidoSesion').eq(value)
    sesion.toggle()
    /*if(sesion.is(":hidden"))
        sesion.show()
    else
        sesion.hide()*/

        $(".iconoFlecha").eq(value).toggleClass("bi bi-chevron-down")
        $(".iconoFlecha").eq(value).toggleClass("bi bi-chevron-up")
}

// abrir formulario de peticion
function AbrirForm(){
    $('#modal1').show();
};

// cerrar formulario de peticion
function cerrarForm() {
    $('#modal1').hide(); // Now the pop up is hided.
}

// comprobar que los datos del registro son correctos
function comprobarClave(){

    var clave1 = $('#password').val();
    var clave2 = $('#repetir-password').val();
    var nombre = $('#nombre').val();
    var apellido = $('#apellidos').val();
    var correo = $('#email').val();
    
    var condicionesContra = /^(?=.*\d)(?=.*[a-záéíóúüñ])/;

    if (correo == '' || clave2 == '' || clave1 == '' || nombre == '' || apellido == '') {
        alert("Rellena los campos")
    }
    else
        if (!validarEmail(correo)) {
            alert("el correo es incorrecto")
        } else if (!condicionesContra.test(clave1) || clave1.length < 6) {
                alert("la contraseña debe contener al menos un numero y una letra. Tiene que tener 6 caracteres")
            } else if (clave1 == clave2) {
                location.replace("loginPage.html")
                } else 
                    alert("las contraseñas no coinciden")

}

// validacion del formato del correo
function validarEmail(valor) {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
        return true;
    } else {
      return false;
    }
}

// funcion para salir de la pagina principal
function logOut() {
    location.replace("loginPage.html");
}
