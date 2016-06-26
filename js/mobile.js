function ready() {
    $.ajax({
        method: "GET",
        dataType: "json", //type of data
        crossDomain: true, //perche in locale
        url: "php/mobile.php", //Relative or absolute path to file.php file
        success: function (response) {
            //var smartphones = JSON.parse(response);
            var output = "";
            var i;
            for (i = 0; i<response.length;i++){
                
                output+="<div class='col-xs-12 col-sm-12 '>"+
            	           "<div class='main-image'>"+
            	               "<div class='container-offcanvas'>"+
                                    "<a href='AssistanceService.php?Servizio="+response[i].Servizio+"'>"+
                                        "<br><h2><font color='#073480'>"+response[i].Servizio+"</font></h2><br>"+
                                    "</a>"+
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