function ready() {
    $.ajax({
        method: "GET",
        dataType: "json",
        crossDomain: true,
        url: "http://carminatibartoli.altervista.org/php/mobile.php",
        success: function (response) {
            
            var servizio = getUrlVars()["Servizio"];
 
            function getUrlVars() {
                var vars = {};
                var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                    vars[key] = value;
                });
                return vars;
            }
            
            var i;
            for (i = 0; i<response.length;i++){
                if ( servizio == response[i].Servizio) {
                    document.getElementById("name_service").innerHTML = response[i].Servizio;
                    document.getElementById("description").innerHTML = response[i].Descrizione;
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