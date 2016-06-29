function ready() {
    $.ajax({
        method: "GET",
        dataType: "json", //type of data
        crossDomain: true, //perche in locale
        url: "http://carminatibartoli.altervista.org/php/tim.php", //Relative or absolute path to file.php file
        success: function (response) {
            //var smartphones = JSON.parse(response);
            var output = "";
            var i;
            for (i = 0; i<response.length;i++){
                
                output+="<div class='col-xs-4 col-sm-2 '>"+
            	           "<div class='main-image'>"+
            	               "<div class='container-offcanvas'>"+
                                    "<h6 align='center'><font color='#073480'>"+response[i].Marca+"<br>"+response[i].Modello+"</font></h6>"+
                                    "<img src='images/"+response[i].Foto+".png' style='display:block; margin-left:auto; margin-right:auto; max-height:90%;  max-width:90%;' alt='' class='images-offcanvas'>"+
                                    "<h6><font color='#D3001F'>"+response[i].Costo+"€</font></h6>"+
                                    "<p class='col-sm-12'><a class='btn btn-secondary' href='Device.html?Marca="+response[i].Marca+"&Modello="+response[i].Modello+"'><h6> Scopri </h6></a></p>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
            }
            document.getElementById("device").innerHTML = output;
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