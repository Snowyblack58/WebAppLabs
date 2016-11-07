<?php
	function search(){
		$regex = '/';
		if($_POST['param-0'] == '' && $_POST['param-1'] == '' && $_POST['param-2'] == '' && $_POST['param-3'] == ''){
			return [];
		}
		if($_POST['param-0'] != ''){
			$regex .= '(?=\b[' . $_POST['param-0'] . '])';
		}
		if($_POST['param-1'] != ''){
			$regex .= '(?=.*[' . $_POST['param-1'] . ']\b)';
		}
		if($_POST['param-2'] == ''){
			$regex .= '.*';
		} else {
			$regex .= '\b.{' . $_POST['param-2'] . '}\b';
		}
		$regex .= '/';
		if($_POST['param-3'] != ''){
			$regex = '/\b(?!.*[^' . $_POST['param-3'] . '].*).{2,8}\b/';
		}
		echo $regex;
		// echo 0;
	    if($regex != '//'){
		    $file = file_get_contents("../data/dict.txt");
		    preg_match_all($regex, $file, $matches);
		}
		return $matches;
	}

	function display(){
		$matches = search();
		// if($matches)
		$html = "<select size=\"20\">";
		foreach ($matches[0] as $match) {
			$html .= "<option>" . $match . "</option>";
		}
		$html .= "</select>";
		echo $html;
	}

	$action = $_POST['action'];
	$data = $action();
	echo $data;
?>