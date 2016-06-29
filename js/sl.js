function ready() {
    $.ajax({
        method: "GET",
        dataType: "json",
        crossDomain: true,
        url: "http://carminatibartoli.altervista.org/php/service.php",
        success: function (response) {
            
            var servizio = getUrlVars()["Servizio"];
            
            servizio=servizio.replace("%20"," ");
            
            function getUrlVars() {
                var vars = {};
                var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                    vars[key] = value;
                });
                return vars;
            }
            
            var i;
            for (i = 0; i<response.length;i++){
                if ( servizio == response[i].Servizio ) {
                    document.getElementById("foto").innerHTML = "<img class='main-image' src='images/"+response[i].Immagine+".png' alt=''/>";
                    document.getElementById("servizio").innerHTML = response[i].Servizio;
                    document.getElementById("prezzo").innerHTML = response[i].Costo+"€/Mese";
                    document.getElementById("description").innerHTML = "<p>"+response[i].Descrizione+"</p>";
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