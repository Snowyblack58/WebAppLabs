<?php
	$db = new SQLite3('texfiles') or die ('cannot create db');
	$query = 'CREATE TABLE IF NOT EXISTS texfilekeys (key text);';
	$query .= 'INSERT OR REPLACE INTO texfilekeys (key) VALUES ("' . md5(strrev($_POST['userinput'])) . md5(time()) . '");';
	$db -> exec($query);
	echo '<a href=https://www.tjhsst.edu/~2016dzhao/Lab09/php/get.php?key=' . md5(strrev($_POST['userinput'])) . md5(time()) . '>ONE TIME LINK to DOWNLOAD</a>';
	// echo $_POST['userinput'];
?>