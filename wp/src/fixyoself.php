<?php 
  
  // These variables are used to fix the site back to how it was
  $db_name = "i4515336_wp2";
  $db_user = $db_name;
  $db_pass = "F]fEj7H#4d6@bVww(7~08.#7";


  //This function should fix the data the database name in the wp-config.php
  $db_config file("wp-config.php");


    // Read the config file
    $config = file("wp-config.php");
    // run the fix_configFile as a cb to compare with config
    $config = array_map('fix_configFile',$config);

  //This function should fix the data the database name in the wp-config.php
  function fix_configFile($db_config) {


    // check if the wp-config has a different db
    if ($db_config !== ) {
      # code...
    }
  }




  // //This function should connect to the db and fix it
  // function fix_db_config($db_name) {
  //   // Read the config file
  //   $config = file("wp-config.php");
  //   $config = 

  // }

?>