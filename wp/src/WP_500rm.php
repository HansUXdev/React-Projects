<?php

/**
 * Settings
 */

$WP_500   	= false;				
$WP_AC 	 	= ".htaccess";
$WP_WC 	 	= "wp-content";
$WP_mu 		= $WP_WC."mu-plugins";
$WP_obj_c 	= $WP_WC."/object-cache.php";

echo "Remove the 500 error test...";
	if (!$WP_500 ) {
		echo (file_exists($WP_AC.".bad")) ? rename($WP_AC.".bad",$WP_AC): "access.bad file !exist||renamed...";
		echo (file_exists($WP_WC."/plugins-bad")) ? rename($WP_WC."/plugins-bad", $WP_WC."/plugins"):"plugin-bad !exist||renamed...";
		echo (file_exists($WP_mu."-bad")) ? rename($WP_mu."-bad", $WP_mu):"mu-plugin folder !exist||renamed...";
		echo (file_exists($WP_obj_c.".bad")) ? rename($WP_obj_c.".bad", $WP_obj_c):"cache !exist||renamed...";
		unlink('WP_500.php');
	}
?>