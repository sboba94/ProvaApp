function ready() {
    $.ajax({
        method: "GET",
        dataType: "json", //type of data
        crossDomain: true, //perche in locale
        url: "http://carminatibartoli.altervista.org/php/mobile.php", //Relative or absolute path to file.php file
        success: function (response) {
            //var smartphones = JSON.parse(response);
            var output = "";
            var i;
            for (i = 0; i<response.length;i++){
                
                output+="<div class='col-sx-4 col-sm-4'>"+
        					"<div class='main-image'>"+
                   				"<div class='container-offcanvas'>"+
                       				"<a href='AssistanceService.html?Servizio="+response[i].Servizio+"'>"+
                            		"<br>"+
                            		"<h3><font color='#073480'>"+response[i].Servizio+"</font></h3>"+
                            		"<br>"+
                        			"</a>"+
                    			"</div>"+
                			"</div>"+
        				"</div>";
                
            }
            document.getElementById("service_ass").innerHTML = output;
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
