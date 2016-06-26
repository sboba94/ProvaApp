<?php

// SERVE PER EFFETTUARE UNA CONNESSIONE AL DATABASE
$mysqli = new mysqli('localhost', 'carminatibartoli','', 'my_carminatibartoli');

if ($mysqli->connect_error) {
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
} else {
    
    $query = "SELECT * FROM SmartPhone ORDER BY Costo";
    
    if ( $_GET['prezzo'] != NULL && $_GET['marca'] !=NULL ) {
        $query = "SELECT * FROM SmartPhone WHERE Costo<'".$_GET['prezzo']."' AND Marca='".$_GET['marca']."'";
    }
    elseif ($_GET['prezzo']!=NULL) {
        $query = "SELECT * FROM SmartPhone WHERE Costo<'".$_GET['prezzo']."'";
    }
    elseif ($_GET['marca']!=NULL) {
        $query = "SELECT * FROM SmartPhone WHERE Marca='".$_GET['marca']."'";
    }

    $result = $mysqli->query($query);
    //if there are data available
    
    if($result->num_rows >0)
    {
        $myArray = array();//create an array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = $row;
        }
        //while($row= mysqli_fetch_array($result, MYSQLI_ASSOC)){
        //   $myArray[] = $row;
        //}  
        echo json_encode($myArray);
    }

    //free result
    $result->close();

    //close connection
    $mysqli->close();
}

?>