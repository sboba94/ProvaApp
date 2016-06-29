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
                
                output+="<div class='col-xs-12 col-sm-12 '>"+
            	           "<div class='main-image' style='max-height:100%; max-width:100%'>"+
            	               "<div class='container-offcanvas'>"+
                                    "<a href='SLservice.html?Servizio="+response[i].Servizio+"'>"+
                                    "<img src='images/"+response[i].Immagine+".jpg' style='display:block; margin-left:auto; margin-right:auto; max-height:100%; max-width:100%' alt='' class='images-offcanvas'>"+
                                    "</a>"+
                                 "<h2><font color='#D3001F'>"+response[i].Costo+"€/mese</font></h2>"+
                                "</div>"+
                            "</div>"+
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