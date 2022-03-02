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

var constructor =[
    "C1. Introducción a la programación i al diseño de Software-Fundamentos de computadoras, So y redes+C1/ArquitecturaDeLosOrdenadores.pdf-Logica y fundamentos de programación. Algoritmos+C1/AlgoritmosYdiagramasDeFlujo.pdf+C1/SOLUCIONCamelCaseCS.cs+C1/EjercicioEnC#.txt+C1/SOLUCIONMediaCSharp.txt+C1/SOLUCIONMediaJava.txt-GIT. Conceptos y usos.+C1/manualGit.pdf+C1/IntroduccionGIT.pdf+C1/RealidadDeUnProyecto.pdf"
    ,"C2. Introducción al desarrollo WEB"+
    "-Conceptos generales del mundo web+C2/LIBRODesarrollodeaplicacionesweb.pdf+C2/DesarrolloWEBHTML.pdf"+
    "-Lenguaje de Marcas HTML+C2/LenguajeHTML.pdf+C2/Ejercicios/CV_HTML.jpg+C2/Ejercicios/Dracula.PNG"+
    "-CSS(Bootstrap)+C2/Bootstrap/DocBootstrap4.pdf+C2/Bootstrap/EjercicioFormBootstrap.png+C2/Bootstrap/MiprimerapaginaBootstrap.html+C2/Bootstrap/PPTBootstrap.pdf+C2/Bootstrap/SolucionFormbootstrap.zip+C2/Bootstrap/Tutorialbootstrap4.pdf"+
    "-JavaScript y jQuery+C2/Javascript/1EjerciciosdeJavaScript.pdf+C2/Javascript/DOCJavascript.pdf+C2/Javascript/EjerciciosJS.txt+C2/Javascript/Javascript.pdf+C2/Javascript/PracticaJS.html+C2/jQuery/formJQueryEJERCICIO.js+C2/jQuery/formJQuerySOLUCION.js+C2/jQuery/formJQuery.html+C2/jQuery/IniciacionJQuery.pdf+C2/jQuery/jQueryGetStarted.url"+
    "-Mini_proyecto 1, página web estatica+C2/Proyecto/ComoutilizarcookiesenJavaScriptCybMeta.url+C2/Proyecto/Crearunawebparaalmacenarlosapuntes.pdf+C2/Proyecto/HostingSSDNVMeconelmejorsoporte247LucusHost.url+C2/Proyecto/JavaScriptCookies.url+C2/Proyecto/pruebacookies.html"
    
]

// cambiar a pagina C1 y C2
function EntrarEn_C1(){
    location.replace("pag_C1.html")
}
function EntrarEn_C2(){
    location.replace("pag_C2.html")
}

// cambiar a pagina principal
function VolverPagPrincipal(){
    location.replace("pag_principal.html")
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
