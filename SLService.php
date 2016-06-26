 <!DOCTYPE html>

<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tim - Device</title>
<!-- Fogli di stile -->
<link href="http://fonts.googleapis.com/css?" family="Lato:400,700,900,400italic" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.css">
<link rel="stylesheet" href="assets/plugins/fancybox/jquery.fancybox.css">
<link rel="stylesheet" href="assets/plugins/flexslider/flexslider.css">
<link rel="stylesheet" href="assets/css/stili-custom.css">
<link rel="stylesheet" href="assets/css/my-css.css">

<script src="js/jquery.js" type="text/javascript"></script>
<script src="js/small_tim.js" type="text/javascript"></script>
</head>
<?php
// SERVE PER EFFETTUARE UNA CONNESSIONE AL DATABASE
//$mysqli = new mysqli('localhost','root','','my_carminatibartoli');
$mysqli = mysqli_connect('localhost','root','','my_carminatibartoli');
if ($mysqli->connect_error) {
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
} else {
	$query = "SELECT * FROM SL_Service WHERE Servizio='".$_GET['Servizio']."'";
    $result = $mysqli->query($query);
    //if there are data available
    $row = mysqli_fetch_row($result);
    //echo json_encode($row);
    //close connection
    $mysqli->close();
}
?>

<body>
<!-- Header e barra di navigazione -->
<header>
<nav class="navbar navbar-default">
<div class="container">
 <div class="navbar-header">
  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
   <span class="icon-bar"></span>
   <span class="icon-bar"></span>
  </button>
  <a class="navbar-brand" href="home.html"></a>
 </div> 
 
 <div id="right-align" class="collapse navbar-collapse navbar-responsive-collapse">
   
   <ul class="nav navbar-nav">
    <li> <a href="Device.html" >Device</a></li>
    <li> <a href="SLservice.html" >Smart life</a></li>
    <li><a href="Assistance.html">assistance</a></li>
    <li class="blue-background"><a href="WhoWeAre.html"><p class="whiteText">who we are</p></a></li>
    <li class="blue-background"><a href="#"><p class="whiteText">the group</p></a></li>
    <li class="blue-background"><a href="ContactUs.html"><p class="whiteText">contact us</p></a></li>
   </ul>
   
 </div><!-- /.nav-collapse -->
 <div id="blueline"></div>
</div>

</nav><!-- /.navbar -->

</header><!-- /header -->

<div class="container">
<div class="col-sm-4 col-md-4"><img class="main-image" src="images/<?=$row[2]?>.png" alt=""/>


</div>
<div class="col-sm-8 col-md-8">
  <h2><font class="servizio" color="#073480"><?php echo $row[0] ?></font></h2>
  <h2><font class="prezzo" color="#D3001F"><?php echo $row[1] ?>€/mese</font></h2>
  <br>
  	<h6><font color="#073480">Descrizione</font></h6>
    <p class="description">
  	<?php echo $row[3] ?>
    </p>
  	<br>
</div>
<br>
    
    
    
<div class="col-sx-12 col-md-12">
	<h5><font color="#073480">Dispositivi che possono usare il servizio</font></h5>
	<div id="blueline"></div>
    <br>
</div>
<div class="col-sx-12 col-sm-12">
	<div id="device" class="row" >
    	<div class="col-sx-2 col-sm-2">
        		<img class="main-image" src="images/HuaweiP9.jpg" alt=""/>
        </div>
        <div class="col-sx-2 col-sm-2">
        		<img class="main-image" src="images/HuaweiP9.jpg" alt=""/>
        </div>
        <div class="col-sx-2 col-sm-2">
        		<img class="main-image" src="images/HuaweiP9.jpg" alt=""/>
        </div>
    </div>
</div>
</div>    

<!-- footer -->
<div class="container">
<div class="blank-spacing"></div>
<footer class="blue-background">
      <div class="container">
        <span class="text-muted">@Carminati-Bartoli all rights reserved</span>
      </div>
 </footer>
 </div>    
    
    
    
<!-- jQuery e plugin JavaScript  -->
<script src="http://code.jquery.com/jquery.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/plugins/flexslider/jquery.flexslider.js"></script>
<script src="assets/plugins/fancybox/jquery.fancybox.pack.js"></script>
<script src="assets/js/scripts.js"></script>
</body>
</html>