function ready() {
    $.ajax({
        method: "GET",
        dataType: "json", //type of data
        crossDomain: true, //perche in locale
        url: "http://carminatibartoli.altervista.org/php/tim.php", //Relative or absolute path to file.php file
        success: function (response) {
            
            var marca = getUrlVars()["marca"];
            var prezzo = getUrlVars()["prezzo"];
            var prezzo1 = parseFloat(getUrlVars()["prezzo"]);
        
            function getUrlVars() {
                var vars = {};
                var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                    vars[key] = value;
                });
                return vars;
            }
            
            var output = "";
            var i;
            for (i = 0; i<response.length;i++){
           	
       
                if ( getUrlVars()["prezzo"] != null && getUrlVars()["marca"] !=null ) {
                    if (parseFloat(response[i].Costo) < prezzo1 && response[i].Marca == marca){
                    	
                         output+="<div class='col-xs-6 col-sm-4 '>"+
            	           "<div class='main-image'>"+
            	               "<div class='container-offcanvas'>"+
                                    "<h3 align='center'><font color='#073480'>"+response[i].Marca+"<br>"+response[i].Modello+"</font></h3>"+
                                    "<img src='images/"+response[i].Foto+".png' style='display:block; margin-left:auto; margin-right:auto; max-height:90%;     max-width:90%' alt='' class='images-offcanvas'>"+
                                    "<h2><font color='#D3001F'>"+response[i].Costo+"€</font></h2>"+
                                    "<p class='col-sm-12'>"+
                                        "<a class='btn btn-secondary' href='Device.html?Marca="+response[i].Marca+"&Modello="+response[i].Modello+"' role='button'>View details »</a> "+
                                    "</p>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
                        
                    }
                }
                else if (prezzo!=null && marca==null) {
                    if (parseFloat(response[i].Costo) < prezzo1){
                    	
                         output+="<div class='col-xs-6 col-sm-4 '>"+
            	           "<div class='main-image'>"+
            	               "<div class='container-offcanvas'>"+
                                    "<h3 align='center'><font color='#073480'>"+response[i].Marca+"<br>"+response[i].Modello+"</font></h3>"+
                                    "<img src='images/"+response[i].Foto+".png' style='display:block; margin-left:auto; margin-right:auto; max-height:90%;     max-width:90%' alt='' class='images-offcanvas'>"+
                                    "<h2><font color='#D3001F'>"+response[i].Costo+"€</font></h2>"+
                                    "<p class='col-sm-12'>"+
                                        "<a class='btn btn-secondary' href='Device.html?Marca="+response[i].Marca+"&Modello="+response[i].Modello+"' role='button'>View details »</a> "+
                                    "</p>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
                        
                    }
                }
                else if (prezzo==null && marca!=null) {
                    if (response[i].Marca==marca){
                    	
                         output+="<div class='col-xs-6 col-sm-4 '>"+
            	           "<div class='main-image'>"+
            	               "<div class='container-offcanvas'>"+
                                    "<h3 align='center'><font color='#073480'>"+response[i].Marca+"<br>"+response[i].Modello+"</font></h3>"+
                                    "<img src='images/"+response[i].Foto+".png' style='display:block; margin-left:auto; margin-right:auto; max-height:90%;     max-width:90%' alt='' class='images-offcanvas'>"+
                                    "<h2><font color='#D3001F'>"+response[i].Costo+"€</font></h2>"+
                                    "<p class='col-sm-12'>"+
                                        "<a class='btn btn-secondary' href='Device.html?Marca="+response[i].Marca+"&Modello="+response[i].Modello+"' role='button'>View details »</a> "+
                                    "</p>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
                        
                    }
                }
                
                else if (prezzo==null && marca==null) {

                         output+="<div class='col-xs-6 col-sm-4 '>"+
            	           "<div class='main-image'>"+
            	               "<div class='container-offcanvas'>"+
                                    "<h3 align='center'><font color='#073480'>"+response[i].Marca+"<br>"+response[i].Modello+"</font></h3>"+
                                    "<img src='images/"+response[i].Foto+".png' style='display:block; margin-left:auto; margin-right:auto; max-height:90%;     max-width:90%' alt='' class='images-offcanvas'>"+
                                    "<h2><font color='#D3001F'>"+response[i].Costo+"€</font></h2>"+
                                    "<p class='col-sm-12'>"+
                                        "<a class='btn btn-secondary' href='Device.html?Marca="+response[i].Marca+"&Modello="+response[i].Modello+"' role='button'>View details »</a> "+
                                    "</p>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
                        
                }
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