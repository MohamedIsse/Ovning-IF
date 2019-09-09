
var knappen = document.getElementById("knapp");
knappen.addEventListener("click", function(){
var txten = document.getElementById("txt").value;
txten = Number(txten);
var output;
if (txten < 18 ) {
    output = "du är för ung";
}

else if(txten >= 18 && txten <= 65 ) {
output = "Rätt ålder";
}

else {
    output = "du är för gammal"
}
document.getElementById("svar").innerHTML = output;
    
});
