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
		<div class="header">
			<div id="back">
				<a href="/~2016dzhao/index.html">< all labs</a>
			</div>
			<div id="title">
			</div>
			<div id="main">
				<form method="post">
					<div class="search-option" id="search-option-0">
						<select id="select-0" name="select-0">
							<option value="first-letter" selected>First letter is</option>
							<option value="last-letter">Last letter is</option>
							<option value="word-length">Word length is</option>
						</select>
						<input type="text" name="param-0" autocomplete="off" maxlength="1">
						<input type="button" value="+"></input>
						<br>
					</div>
					<div class="search-option" id="search-option-1">
						<select id="select-1" name="select-1">
							<option value="first-letter">First letter is</option>
							<option value="last-letter" selected>Last letter is</option>
							<option value="word-length">Word length is</option>
						</select>
						<input type="text" name="param-1" autocomplete="off" maxlength="1">
						<input type="button" value="+"></input>
						<br>
					</div>
					<div class="search-option" id="search-option-2">
						<select id="select-2" name="select-2">
							<option value="first-letter">First letter is</option>
							<option value="last-letter">Last letter is</option>
							<option value="word-length" selected>Word length is</option>
						</select>
						<input type="number" name="param-2" autocomplete="off">
						<input type="button" value="+"></input>
						<br>
					</div>
					<button type="submit" name="submit">Search</button>
				</form>
			</div>
			<?php
			    // echo "select-0 = " . $_POST["select-0"];
			    // if($_POST["select-0"] == "first-letter"){
			    // 	if(strlen($_POST["param-0"]) == 1){
			    // 		$regex = "/\\b" . $_POST["param-0"] . ".*/";
			    // 	}
			    // }
				function search(){
					$select_0 = $_POST["select-0"];
				    $regex = "/(?=\b".$_POST["param-0"].".*".$_POST["param-1"]."\b)\b.{".$_POST["param-2"]."}\b/";
				   	// echo $regex;
				    if($regex != null){
					    $file = file_get_contents("data/dict.txt");
					    preg_match_all($regex, $file, $matches);
					}
					return $matches;
				}

				function display($matches){
					$html = "<select id=\"matches\" size=\"20\">";
					foreach ($matches[0] as $match) {
						$html .= "<option>" . $match . "</option>";
					}
					$html .= "</select>";
					echo $html;
				}

				if(isset($_POST['submit'])){
				   	display(search());
				} 
			?>
		</div>
		<div id='footer'>
			<select id='file-select'>
				<option>FILES</option>
				<option>css/styles.css</option>
				<option>js/script.js</option>
				<option>php/get.phps</option>
				<option>php/key.phps</option>
				<option>tex/template.tex</option>
			</select>
		</div>

		<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
		<script type="text/javascript" src="js/script.js"></script>
	</body>
</html>