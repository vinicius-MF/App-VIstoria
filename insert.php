<?php
 include "db.php";

 $nome=$_POST['nome'];
 
 $q=mysqli_query($con,"INSERT INTO `usuario` (`nome`) VALUES ('$nome')");
 if($q)
  echo "success";
 else
  echo "error";
 
 ?>