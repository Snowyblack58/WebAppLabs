<?php
//get ready for terrible coding
	$pageinfo = array(
		"
		<h1>FCPS<br>Java<br>Packets</h1>
		<h2>Unit One - fcpsKarel Programming</h2>
		<p>July 2013</p>
		"
		,
		"
		<p>3.14159265358979</p>
		"
	);
	$curindex = 0;
?>

<!DOCTYPE html>
<html>
	<head>
		<title>LAB 00 LAB 00 LAB 00</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="css/styles.css">
		<link href='http://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet' type='text/css'>
	</head>
	<body>
		<div class="main">
			<?php echo $pageinfo[$curindex] ?>
		</div>
		<input type="button" onclick="next()"></input>
		<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
		<script type="text/javascript" src="js/script.js"></script>
	</body>
</html>