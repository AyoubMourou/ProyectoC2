
function myFunction() {
    var inputTitle = document.getElementById("inputTitle").value;
    var date = document.getElementById("inputStartDate").value;
    
    var lista = document.getElementById("selecLocation");
    var selectLoc = lista.options[lista.selectedIndex].text;

    var lista2 = document.getElementById("selectType");
    var selectType = lista2.options[lista.selectedIndex].text;

    var lista3 = document.getElementById("selectCriticity");
    var selectCrit = lista3.options[lista.selectedIndex].text;

    var c1 = document.getElementById("checkPr").checked;
    var c2 = document.getElementById("checkDp").checked;
    var c3 = document.getElementById("checkDm").checked;

    var txtDur = document.getElementById("textDuration").value;

    var lista4 = document.getElementById("selectStatus");
    var selectStat = lista4.options[lista.selectedIndex].text;

    var lista5 = document.getElementById("selectPercent");
    var selectPerc = lista5.options[lista.selectedIndex].text;

    var checkMail = document.getElementById("checkMail").checked;

    var inputDni = document.getElementById("inputDni").value;

    var dniValidate = "";
    
    dniValidate = getDni(inputDni);

    if(dniValidate == inputDni)
        alert("Title: "+inputTitle+"\n"
            +"Location: "+selectLoc+"\n"
            +"Type: "+selectType+"\n"
            +"Criticity: "+selectCrit+"\n"
            +"Enviroment: Prod: "+c1+ " Deprod: "+c2+ " Demo: "+c3+"\n"
            +"Description: "+document.getElementById("txtDescription").value+"\n"
            +"Start date: "+date+"\n"
            +"Duration (In hours): "+txtDur+"\n"
            +"Status: "+selectStat+"\n"
            +"Percent completed: "+selectPerc+"\n"
            +"Check e-mail: "+checkMail);
    else
        alert(dniValidate);
}

function getDni(inputDni){
    
    var dniCopy = inputDni.substring(0, inputDni.length - 1);
    var dniNum = parseInt(dniCopy) % 23;
    
    var letras = ["T","R","W","A","G","M","Y","F","P","D",
                  "X","B","N","J","Z","S","Q","V","H","L",
                  "C","K","E"]

    dniCompare = dniCopy + letras[dniNum];
    
    if(dniCompare == inputDni)
        return dniCompare;
    else
        return "DNI no válido";
}
