function ready() {
    $.ajax({
        method: "GET",
        dataType: "json", //type of data
        crossDomain: true, //perche in locale
        url: "http://carminatibartoli.altervista.org/php/service.php", //Relative or absolute path to file.php file
        success: function (response) {
            //var smartphones = JSON.parse(response);
            var output = "";
            var i;
            for (i = 0; i<response.length;i++){
                
                output+="<div class='col-sx-4 col-sm-4'>"+
                			"<a href='SLservice.html?Servizio="+response[i].Servizio+"'>"+
                				 "<img src='images/"+response[i].Immagine+".png' style='display:block; margin-left:auto; margin-right:auto; max-height:90%; max-width:90%' alt='' class='images-offcanvas main-image'>"+
                			"</a>"+
                        "</div>";
            }
            document.getElementById("service").innerHTML = output;
            //document.getElementById("elements").innerHTML = output;
            //$("body").html(output);
        },
        error: function(error){
        	alert("errore");
        	alert(JSON.stringify(error));
        }
    });

}

$(document).ready(ready);