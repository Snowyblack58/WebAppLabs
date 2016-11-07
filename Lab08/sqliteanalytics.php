<!DOCTYPE html>
<html>
	<!--DIV P UL LI SPAN SCRIPT-->
	<head>
		<title>Dictionary Search</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="css/styles.css">
		<link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet' type='text/css'>
	</head>
	<body>
		<div id="back">
			<a href="/~2016dzhao/index.html">< all labs</a>
		</div>
		<div id="title">
		</div>
		<div id="main">
			<?php
				$dbhandle = sqlite_open('data/test.db', 0666, $error);
				if(!dbhandle) die ($error);

				$stm = 'CREATE TABLE Friends(Id integer PRIMARY KEY,' .
						'Name text UNIQUE NOT NULL, Sex text CHECK(Sex In ("M", "F")))';
				$ok = sqlite_exec($dbhandle, $stm, $error)
				if (!$ok)
					die('Cannot execute query. $error');

			 	echo 'Database Friends created successfully.';

			 	sqlite_close($dbhandle);
			?>
		</div>
		<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
		<script type="text/javascript" src="js/script.js"></script>
	</body>
</html>