<?php
session_start();
if (strlen($_SESSION['id']==0)) {
  header('location:logout.php');
  } else{
	
?><!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="./css/styled.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Damion|New+Rocker|Merienda+One|Marck+Script&display=swap" rel="stylesheet">
    <title>ESTOHUT</title>
</head>
<body>
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="welcome.php">Home</a>
        <a href="about.html">About us</a>
        <a href="house.html">My Houses</a>
        <a href="gallery.html">Gallery</a>
        <a href="indexp.php">Landlord/Landlady</a>
        <a href="Contact.html">Contact Us</a>
        <a href="help.html">help</a>
    </div>
        <span id="pimp" style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;<b>Menu</b></span> 
        <center>

            <div class="goro">
                    
               
            <h2 id="bottom">ESTOHUT</h2> 
            <img class="dot" src="./images/background2.webp" alt="background image" width="1300px"height="540px">
                <img id="keep" src="./images/logo3.png" width="150px" height="150px">
                <p id="toot"><b>“The ache for home lives in all of us, the safe place where we can go as we are and not be questioned.”</b></p>
                <p id="put"><b>LETS GET YOU YOUR DREAM HOME....</b></p>
                <img id="boyz" src="./images/logo4.png" width="250px" height="250px">
                <img id="girlz" src="./images/key.jpg" width="130px" height="130px">
                <p id="grow">"Life without dreams is like a bird with a broken wing - it can't fly.</p><br>
             
            </div>    
        </center>
       

    <div id="maindiv">
        <div class="speak">    
        <center>
                            
        <h4>~WELCOME TO ESTOHUT~</h4>
        <p>~~Thanks for trying out our services!!!!~~</p>
        </center>
         </div>    
        
    </div><br>
     

   
    <script src="js/scripts.js"></script> 
</body>

</html>
<?php } ?>