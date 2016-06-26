function ready() {
    $.ajax({
        method: "GET",
        dataType: "json", //type of data
        crossDomain: true, //perche in locale
        url: "php/tim.php", //Relative or absolute path to file.php file
        success: function (response) {
            //var smartphones = JSON.parse(response);
            var output = "";
            var i;
            for (i = 0; i<response.length;i++){
                
                /*
                output +="<p><img src='"+response[i].Foto+"'/><br>"+
                			response[i].Marca+"<br>"+
                          	response[i].Modello+"<br>"+
                           	response[i].Costo+"<br>"+
                            response[i].Descrizioni+"<br>"+
                            response[i].Caratteristiche+"<br>"+
                "</p>";             
                */
                /*
                output+="<div class='col-xs-6 col-lg-4 '><div class='container-offcanvas'>"+
                        "<h2>"+response[i].Marca+"<br>"+response[i].Modello+"</h2>"+
                        "<img class='images-offcanvas' src='images/"+response[i].Foto+".png'/>"+
                        "<h2>"+response[i].Costo+"</h2>"+    
                        "<p><a class='btn btn-secondary' href='index.html' role='button'>View details &raquo;</a>"+
                        "</div></div><!--/span-->"
                        <h3 align="center"><font color="#073480">LG<br>G5 128GB</font></h3>
                */
                output+="<div class='col-xs-6 col-sm-4 '>"+
            	           "<div class='main-image'>"+
            	               "<div class='container-offcanvas'>"+
                                    "<h3 align='center'><font color='#073480'>"+response[i].Marca+"<br>"+response[i].Modello+"</font></h3>"+
                                    "<img src='images/"+response[i].Foto+".png' style='display:block; margin-left:auto; margin-right:auto; max-height:90%;     max-width:90%' alt='' class='images-offcanvas'>"+
                                    "<h2><font color='#D3001F'>"+response[i].Costo+"€</font></h2>"+
                                    "<p class='col-sm-12'>"+
                                        "<a class='btn btn-secondary' href='Device.php?Marca="+response[i].Marca+"&Modello="+response[i].Modello+"' role='button'>View details »</a> "+
                                    "</p>"+
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