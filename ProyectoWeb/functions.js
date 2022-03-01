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

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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

function EntrarEn_C() {
    location.replace("pag_C.html")
}

function VolverPagPrincipal(){
    location.replace("pag_principal.html")
}

window.onload=function(){
    $('.contenidoSesion').hide()
}

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

function AbrirForm(){
    $('#modal1').show();
};

function cerrarForm() {
    $('#modal1').hide(); // Now the pop up is hided.
}

function comprobarClave(){

    var clave1 = $('#password').val();
    var clave2 = $('#repetir-password').val();
    var correo = $('#email').val();
    
    var condicionesContra = /^(?=.*\d)(?=.*[a-záéíóúüñ])/;

    if (correo == '' || clave2 == '' || clave1 == '') {
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

function validarEmail(valor) {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
        return true;
    } else {
      return false;
    }
  }
