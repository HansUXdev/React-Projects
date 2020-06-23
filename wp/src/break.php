<?php 





//This function replaces the database name in the wp-config.php
function replace_a_line($data) {

  if (stristr($data, 'DB_NAME')) {

    $replace = 'define(\'DB_NAME\', \'notarealdatabase\');

    ';

    return $replace;

  }

  else{

    return $data;

  }

}


if ($_POST['break']){

  //These lines get the database connection strings to be used in the following queries
  $tableprefix  ='$table_prefix';
  $database     = shell_exec("grep DB_NAME wp-config.php | cut -d \' -f4");
  $user         = shell_exec("grep DB_USER wp-config.php | cut -d \' -f4");
  $host         = shell_exec("grep DB_HOST wp-config.php | cut -d\' -f4;"); 
  $password     = shell_exec("grep DB_PASSWORD wp-config.php | cut -d\' -f4;");
  $prefix       = shell_exec("grep '$tableprefix' wp-config.php | cut -d\' -f2;");
  
  $database = trim($database);
  $user     = trim($user);
  $password = trim($password);
  $host     = trim($host);
  $prefix   = trim($prefix);

  //These queries set the home and site url to http://google.com and the template and stylesheet to twentyfifteen and changes the users password
  $con = mysqli_connect('http://localhost:8080' ,$user ,$password , $database);

  $options = $prefix.'options';
  $users = $prefix.'users';

  $query1 = "UPDATE `$options` SET `option_value` = 'http://google.com' WHERE `option_name` ='siteurl';";
  $query2 = "UPDATE `$options` SET `option_value` = 'http://google.com' WHERE `option_name` ='home';";
  $query3 = "UPDATE `$options` SET `option_value` = 'twentyfifteeen' WHERE `option_name` ='template';";
  $query4 = "UPDATE `$options` SET `option_value` = 'twentyfifteeen' WHERE `option_name` ='stylesheet';";

  $result1 = mysqli_query($con, $query1);
  $result2 = mysqli_query($con, $query2);
  $result2 = mysqli_query($con, $query3);
  $result2 = mysqli_query($con, $query4);

  mysqli_close($con);

  //This section reads the wp-config.php file and passes it to the replace_a_line() function
  $data = file('wp-config.php');
  $data = array_map('replace_a_line',$data);
  file_put_contents('wp-config.php', implode('', $data));


  $file = basename($_SERVER['PHP_SELF']);

  echo '<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

    <html>
      <head>
        <title>Fixing WordPress Lab</title>
      </head>

      <div style="text-align: center">
        <div style=\'background-color: #008A32;  color:#FFF; width:100%; height: 50px;\'>
          <h1 style="position: relative; top: 5px;">Fixing WordPress LAB</h1>
        </div>

        <p style="font-size: 24px"> Your WordPress site has been broken!</p>
        <p style="font-size: 20px;"> Click continue to begin </p>

        <form id="get-started" method="post" action='.$file.'>
          <input name="start" value="start" style="display: none;"></input>
          <input type="submit" value="Continue" style=\'background-color: #008A32; color: white; border-color: #008A32; font-family: Arial,"Helvetica Neue",Helvetica,sans-serif; border-style: none; height:30px; text-style: strong;\'></input>
        </form>
  ';
}
elseif ($_POST['start']){

  $url =  "http://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
  $file=basename($_SERVER['PHP_SELF']);
  $newurl= str_replace($file,'',$url);

  header('Location:'.$newurl);

  unlink($file);

}
else{

  $file=basename($_SERVER['PHP_SELF']);

  echo '<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

    <html>

      <head>
        <title>Fixing WordPress LAB</title>
      </head>

      <div style="text-align: center">

        <div style=\'background-color: #008A32; font-family: Arial,"Helvetica Neue",Helvetica,sans-serif; color:#FFF; width:100%; height: 50px;\'>

          <h1 style="position: relative; top: 5px;">Fixing WordPress LAB</h1>

        </div>

        <p style="font-size: 24px; margin-left: 100px; margin-right:100px">
           In this lab, you will be troubleshooting common WordPress issues. Upon clicking continue, the most common WordPress breaks will be applied to your site. In order to successfully complete this portion of the lab, you must must fix your WordPress site so it is fully functional, be able to log into the WordPress admin panel, and upload an image.
        </p>

        <p style="font-size: 20px;"> Click continue to break your site </p>

        <form id="get-started" method="post" action='.$file.'>
          <input name="break" value="break" style="display: none;"></input>
          <input type="submit" value="Continue" style=\'background-color: #008A32; color: white; border-color: #008A32; border-style: none; height:30px; text-style: strong;\'></input>
        </form>
  ';


}

?>