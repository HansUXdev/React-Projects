<?php 

$TITLE_break = "AutoFix WordPress 101";
$WpUrl       = "http://localhost:8000";
$WpTheme     = "twentynineteen";

  //// Grep the docker-compose file for the correct values
  $tableprefix  ='$table_prefix';
  $database     = shell_exec("grep DB_NAME wp-config.bk | cut -d \' -f4");
  $user         = shell_exec("grep DB_USER wp-config.bk | cut -d \' -f4");
  $host         = shell_exec("grep DB_HOST wp-config.bk | cut -d\' -f4;"); 
  $password     = shell_exec("grep DB_PASSWORD wp-config.bk | cut -d\' -f4;");
  $prefix       = shell_exec("grep '$tableprefix' wp-config.bk | cut -d\' -f2;");
  // echo " 
  //   db >>> $database <<<
  //   usr >>> $user <<<
  //   pw >>> $password <<<
  //   host >>> $host <<<
  //   prefix >>> $prefix <<<
  // ";

// If a post req is made to break
if ($_POST['break']){

/****  RIP wp-config.php *****/
function fix_wp_config($data) {
  if (stristr($data, 'DB_NAME')) {
    $replace = 'define(\'DB_NAME\', \'wordpress\'); ';
    return $replace;
  }
  if (stristr($data, 'DB_USER')) {
    $replace = 'define(\'DB_USER\', \'wordpress\'); ';
    return $replace;
  }
  if (stristr($data, 'DB_PASSWORD')) {
    $replace = 'define(\'DB_PASSWORD\', \'wordpress\'); ';
    return $replace;
  }
  if (stristr($data, 'DB_HOST')) {
    $replace = 'define(\'DB_HOST\', \'db:3306\'); ';
    return $replace;
  }
  else{ return $data;}
}

  // This section reads the wp-config.php file and passes it to the fix_wp_config() function
  $data = file('wp-config.php');
  $data = array_map('fix_wp_config',$data);
  file_put_contents('wp-config.php', implode('', $data));

/****  END RIP wp-config.php  *****/

/* Connect tot the sqldb and fuck it up 
* These queries set the home and site url to http://google.com and the template and stylesheet to twentyfifteen and changes the users password
*/
  $con= mysqli_connect('db:3306' ,'wordpress' ,'wordpress' , 'wordpress');

  if (!$con) {
      echo "Error: Unable to connect to MySQL." . PHP_EOL;
      echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
      echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
      exit;
  }

    // $options = $prefix.'options';
    // $users = $prefix.'users';
    $options = 'wp_options';
    $users = 'wp_users';


    $query1 = "UPDATE `$options` SET `option_value` = '$WpUrl' WHERE `option_name` ='siteurl';";
    $query2 = "UPDATE `$options` SET `option_value` = '$WpUrl' WHERE `option_name` ='home';";
    $query3 = "UPDATE `$options` SET `option_value` = '$WpTheme' WHERE `option_name` ='template';";
    $query4 = "UPDATE `$options` SET `option_value` = '$WpTheme' WHERE `option_name` ='stylesheet';";
  
    // echo " 
    // db >>> $query1 <<< 
    // usr >>> $query2 <<<
    // pw >>> $query3 <<<
    // host >>> $query4 <<<
    // ";

    $result1 = mysqli_query($con, $query1);
    $result2 = mysqli_query($con, $query2);
    $result2 = mysqli_query($con, $query3);
    $result2 = mysqli_query($con, $query4);

  mysqli_close($con);
  echo '<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html>
      <head><title>'.$TITLE_break.'</title></head>
      <div style="text-align: center">
        <div style=\'background-color: #008A32; font-family: Arial,"Helvetica Neue",Helvetica,sans-serif; color:#FFF; width:100%; height: 50px;\'>
          <h1 style="position: relative; top: 5px;">'.$TITLE_break.'</h1>
        </div>
        <p style="font-size: 24px"> JUST KIDDING !</p>
        <p style="font-size: 20px;"> Click continue to start over! </p>
        <form id="get-started" method="post" action='.$file.'>
          <input name="start" value="start" style="display: none;"></input>
          <input type="submit" value="Continue" style=\'background-color: #008A32; color: white; border-color: #008A32; font-family: Arial,"Helvetica Neue",Helvetica,sans-serif; border-style: none; height:30px; text-style: strong;\'></input>
        </form>
  ';
  // "Success: A proper connection to MySQL was made! The my_db database is now being destoryed" . PHP_EOL;
  // echo "Host information: " . mysqli_get_host_info($link) . PHP_EOL;
  
/****** END DB ********/ 


  $file=basename($_SERVER['PHP_SELF']);

}
elseif ($_POST['start']){

  $url =  "http://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
  $file=basename($_SERVER['PHP_SELF']);
  $newurl= str_replace($file,'',$url);

  header('Location:'.$newurl);

  // unlink($file);

}
else{

  $file=basename($_SERVER['PHP_SELF']);

  echo '<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html>
      <head><title> '.$TITLE_break.' </title></head>
      <div style="text-align: center">
        <div style=\'background-color: #008A32; font-family: Arial,"Helvetica Neue",Helvetica,sans-serif; color:#FFF; width:100%; height: 50px;\'>
          <h1 style="position: relative; top: 5px;">'.$TITLE_break.'</h1>
        </div>
        <p style="font-size: 24px; margin-left: 100px; margin-right:100px"> 
          This file will automatically fix the broken site.
          <br>
          <p> Feel shame if you needed this file to fix your life ! </p>
        </p>
        <p style="font-size: 20px;"> Click continue to fail this course... </p>
        <form id="get-started" method="post" action='.$file.'>
          <input name="break" value="break" style="display: none;"></input>
          <input type="submit" value="FAIL THE COURSE" style=\'background-color: red; color: white; border-color: #008A32; font-family: Arial,"Helvetica Neue",Helvetica,sans-serif; border-style: none; height:30px; width: 50em;\'></input>
        </form>
  ';


}

?>