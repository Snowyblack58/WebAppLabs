<!DOCTYPE html>
<html>
	<!--DIV P UL LI SPAN SCRIPT-->
	<head>
		<title>Dictionary Search</title>
		<meta charset='UTF-8'>
		<link rel='stylesheet' type='text/css' href='https://www.tjhsst.edu/~2016dzhao/Lab09/css/styles.css'>
		<link href='https://fonts.googleapis.com/css?family=Press+Start+2P' rel='stylesheet' type='text/css'>
	</head>
	<body>
		<div id='back'>
			<a href='https://www.tjhsst.edu/~2016dzhao/Lab09/TEXting.html'>< back</a>
		</div>
		<div id='title'>
		</div>
		<div id='main'>
			<div id='link'>
				<?php
					$db = new SQLite3('texfiles');
					// $statement = $db -> prepare('DROP TABLE texfilekeys');
					// $result = $statement -> execute();
					$statement = $db -> prepare('SELECT * FROM texfilekeys WHERE key = "' . $_GET['key'] . '"');
					$result = $statement -> execute();
					$readable = '';
					while($row = $result -> fetchArray()){
						$readable .= $row['key'];
					}
					// echo $readable;
					if($readable != ''){
						$statement = $db -> prepare('DELETE FROM texfilekeys WHERE key = "' . $_GET['key'] . '"');
						$result = $statement -> execute();
						$tmp = file_get_contents('https://www.tjhsst.edu/~2016dzhao/Lab09/tex/template.tex');
						exec('pdflatex ../tex/template.tex');
						rename('template.pdf', md5($_GET['key']) . '.pdf');
						echo '<a href=https://www.tjhsst.edu/~2016dzhao/Lab09/php/' . md5($_GET['key']) . '.pdf>PDF</a>';
					}
				?>
			</div>
		</div>
		<script src='//code.jquery.com/jquery-1.11.2.min.js'></script>
	</body>
</html>