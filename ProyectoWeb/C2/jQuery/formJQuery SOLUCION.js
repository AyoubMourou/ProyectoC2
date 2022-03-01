
function myFunction() {
    var inputTitle = $("#inputTitle").val();
    var date = $("#inputStartDate").val();

    var selectLoc = $("#selecLocation").find(':selected').text(); 
    var selectType = $("#selectType").find(':selected').text();
    var selectCrit = $("#selectCriticity").find(':selected').text();

    var c1 = $("#checkPr").is(':checked');
    var c2 = $("#checkDp").is(':checked');
    var c3 = $("#checkDm").is(':checked');

    var txtDur = $("#textDuration").val();

    var selectStat = $("#selectStatus").find(':selected').text();

    var selectPerc = $("#selectPercent") .find(':selected').text();

    var checkMail = $("#checkMail").is(':checked');

    var inputDni = $("#inputDni").val();

    var dniValidate = "";
    
    dniValidate = getDni(inputDni);

    if(dniValidate == inputDni)
        alert("Title: "+inputTitle+"\n"
            +"Location: "+selectLoc+"\n"
            +"Type: "+selectType+"\n"
            +"Criticity: "+selectCrit+"\n"
            +"Enviroment: Prod: "+c1+ " Deprod: "+c2+ " Demo: "+c3+"\n"
            +"Description: "+jQuery("textarea#txtDescription").val()+"\n"
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