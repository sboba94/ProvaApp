function ready() {
    $.ajax({
        method: "GET",
        dataType: "json",
        crossDomain: true,
        url: "http://carminatibartoli.altervista.org/php/tim.php",
        success: function (response) {
            
            var marca = getUrlVars()["Marca"];
            var modello = getUrlVars()["Modello"];
            
            modello=modello.replace("%20"," ");
            
            function getUrlVars() {
                var vars = {};
                var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                    vars[key] = value;
                });
                return vars;
            }
            
            var i;
            for (i = 0; i<response.length;i++){
                if ( modello == response[i].Modello && getUrlVars()["Marca"] == response[i].Marca ) {
                    document.getElementById("foto").innerHTML = "<img class='main-image' src='images/"+response[i].Foto+".jpg' alt=''/>";
                    document.getElementById("modello_marca").innerHTML = response[i].Marca+" "+response[i].Modello;
                    document.getElementById("prezzo").innerHTML = response[i].Costo+"€";
                    document.getElementById("description").innerHTML = "<p>"+response[i].Descrizioni+"</p>";
                    document.getElementById("tecnical").innerHTML = "<p>"+response[i].Caratteristiche+"</p>";
                }
            }
        },
        error: function(error){
        	alert("errore");
        	alert(JSON.stringify(error));
        }
    });
}
$(document).ready(ready);