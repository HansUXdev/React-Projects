<?php

/**
 * Settings
 */

$WP_BL   	= true;
$WP_WC 	 	= "wp-content/plugins/";
$MWP_BL = array(
	"akismet", 		// used for testing purposes but not actually on blacklist
	"6scan-backup", 
	"6scan-protection",
	"adminer",
	"adsense-click-fraud-monitoring",
	"adsense-click-fraud-monitoring",
	"broken-link-checker",
	"contextual-related-posts",
	"clef",
	"ezpz-one-click-backup",
	"fuzzy-seo-booster",
	"google-sitemap-generator",
	"6scan-protection",
	"google-xml-sitemaps-with-multisite-support",
	"InfiniteWP Client",
	"jr-referrer",
	"MailPoet",
	"p3-profiler",
	"portable-phpmyadmin",
	"referrer-wp",
	"seo-alrp",
	"sgcachepress",
	"similar-posts",
	"statpress",
	"synthesis",
	"the-codetree-backup",
	"toolspack",
	"updraft",
	"w3-total-cache",
	"wordpress-beta-tester",
	"wordpress-gzip-compression",
	"wordpress-popular-posts",
	"wp-cache",
	"wp-cachecom",
	"wp-copysafe-web",
	"wp-copysafe-pdf",
	"wp-engine-snapshot",
	"wp-fast-cache",
	"wp-fastest-cache",
	"wp-file-cache",
	"wp-phpmyadmin",
	"wp-postviews",
	"wp-power-stats",
	"wp-slimstat",
	"wp-super-cache",
	"wpengine-common",
	"wponlinebackup",
	"yet-another-featured-posts-plugin",
	"yet-another-related-posts-plugin"
);



echo nl2br("Begin the plugin blacklist test ...\n");

	if ($WP_BL ) {
		foreach ($MWP_BL as $WP_Plugin) {
			// return false if not detected
			echo nl2br(( file_exists( $WP_WC."$WP_Plugin") ) ? rename($WP_WC."$WP_Plugin",$WP_WC."$WP_Plugin"."-bad")."$WP_Plugin detected&&renamed \n": "$WP_Plugin plugin !detected\n");

		}

	}
	if (!$WP_BL ) {

		foreach ($MWP_BL as $WP_Plugin) {
			echo nl2br(( file_exists( $WP_WC."$WP_Plugin"."-bad") ) ? rename($WP_WC."$WP_Plugin"."-bad",$WP_WC."$WP_Plugin")."$WP_Plugin has been putback to normal \n": " $WP_Plugin plugin !detected \n");
		}
		unlink('MWP_blacklist.php');
	}
?>