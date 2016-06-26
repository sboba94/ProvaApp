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


</head>
<?php
// SERVE PER EFFETTUARE UNA CONNESSIONE AL DATABASE
//$mysqli = new mysqli('localhost','root','','my_carminatibartoli');
$mysqli = mysqli_connect('localhost','root','','my_carminatibartoli');
if ($mysqli->connect_error) {
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
} else {
	$query = "SELECT * FROM SmartPhone WHERE Marca='".$_GET['Marca']."' AND Modello='".$_GET['Modello']."'";
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
<div class="col-sm-4 col-md-4"><img class="main-image" src="images/<?=$row[4]?>.jpg" alt=""/>


</div>
<div class="col-sm-8 col-md-8">
  <h2><font class="modello" color="#073480"><?php echo $row[0] ?> <?php echo $row[1] ?></font></h2>
  <h2><font class="prezzo" color="#D3001F"><?php echo $row[2] ?></font></h2>
  <br>
  	<h6><font color="#073480">Descrizione</font></h6>
    <p class="description">
  	<?php echo $row[5] ?>
    </p>
  	<br>
    <h6><font color="#073480">Caratteristiche Tecniche</font></h6>
	<p class="tecnical">
		<?php echo $row[6] ?>
	</p>

</div>
<br>

<div class="col-sx-12 col-md-12">
	<h5><font color="#073480">Smart Life Device relativi al dispositivo</font></h5>
	<div id="blueline"></div>
    <br>
</div>
<div class="col-sx-12 col-sm-12">
	<div class="row">
    	<div class="col-sx-4 col-sm-4">
            <a href="SLService.php?Servizio=Tim%20Music">
        		<img src="images/timmusic.png" style="display:block; margin-left:auto; margin-right:auto; max-height:90%; max-width:90%" alt="" class="images-offcanvas main-image">
            </a>
        </div>
        <div class="col-sx-4 col-sm-4">
            <a href="SLService.php?Servizio=Tim%20Vision">
        		<img src="images/timvision.png" style="display:block; margin-left:auto; margin-right:auto; max-height:90%; max-width:90%" alt="" class="images-offcanvas main-image">
            </a>
        </div>
        <div class="col-sx-4 col-sm-4">
            <a href="SLService.php?Servizio=Tim%20Games">
        		<img src="images/timgames.png" style="display:block; margin-left:auto; margin-right:auto; max-height:90%; max-width:90%" alt="" class="images-offcanvas main-image">
            </a>
        </div>
    </div>
</div>
<br>
<div class="col-sx-12 col-md-12">
	<h5><font color="#073480">Servizi relativi al dispositivo</font></h5>
	<div id="blueline"></div>
    <br>
</div>
<div class="col-sx-12 col-sm-12">
	<div class="row">
    	<div class="col-sx-4 col-sm-4">
        		<div class='main-image'>
                   <div class='container-offcanvas'>
                        <a href='AssistanceService.php?Servizio=Ricarica'>
                            <br>
                            <h3><font color='#073480'>Ricarica</font></h3>
                            <br>
                        </a>
                    </div>
                </div>
        </div>
        <div class="col-sx-4 col-sm-4">
        		<div class='main-image'>
                   <div class='container-offcanvas'>
                        <a href='AssistanceService.php?Servizio=LoSai'>
                            <br>
                            <h3><font color='#073480'>LoSai</font></h3>
                            <br>
                        </a>
                    </div>
                </div>
        </div>
        <div class="col-sx-4 col-sm-4">
        		<div class='main-image'>
                   <div class='container-offcanvas'>
                        <a href='AssistanceService.php?Servizio=ChiamaOra'>
                            <br>
                            <h3><font color='#073480'>ChiamaOra</font></h3>
                            <br>
                        </a>
                    </div>
                </div>
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