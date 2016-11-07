<?php
	// function save(){
	// 	$info = json_decode(file_get_contents('../data/db.txt'));
	// 	$visits = $info[1];
	// 	$visits += 1;
	// 	$time = $_POST['time'];
	// 	file_put_contents('../data/db.txt', json_encode([$time, $visits]));
	// 	echo $time . ' ' . $visits;
	// }

	// $action = $_POST['action'];
	// $data = $action();
	// echo $data;
	$db = new SQLite3('sitevisits') or die ('cannot create db');
	$query = 'CREATE TABLE IF NOT EXISTS uniquevisits (ip text, port text, time integer); ';
	$query .= 'CREATE TABLE IF NOT EXISTS uniquevisitors (ip text NOT NULL UNIQUE, visits integer); ';
	if($_POST['action'] == 'add'){
		$query .= 'INSERT INTO uniquevisits (ip, port, time) VALUES ("' . get_client_ip() . '", "' . $_SERVER['REMOTE_PORT'] . '", ' . time() . '); ';
		$query .= 'INSERT OR REPLACE INTO uniquevisitors (ip, visits) VALUES ("' . get_client_ip() . '", (SELECT COALESCE((SELECT visits FROM uniquevisitors WHERE ip = "' . get_client_ip() . '")+1, 1)));';
		// $query .= 'INSERT OR REPLACE INTO uniquevisitors ("ip", "visits") VALUES ("' . get_client_ip() . '", 0);';
		// $query .= 'UPDATE uniquevisitors SET visits = visits + 1 WHERE ip = "' . get_client_ip() . '";';
	}
	// $query = 'SELECT COALESCE((SELECT visits FROM uniquevisitors WHERE ip = "' . get_client_ip() . '")+1, 1)';
	// $query = 'SELECT visits FROM uniquevisitors';
	// echo $query;
	$db -> exec($query);

	$statement = $db -> prepare('SELECT * FROM uniquevisitors');
	$result = $statement -> execute();
	$readable = '';
	while($row = $result -> fetchArray()){
		$readable .= $row['ip'] . ' '  . $row['port'] . ' ' . $row['time'] . ' ';
	// 	// echo $readable . '  |  ' . 'SELECT * FROM uniquevisitors WHERE ip = ' . substr($row['ip'], 0, strpos($row['ip'], ' '));
		$tmp_statement = $db -> prepare('SELECT * FROM uniquevisitors WHERE ip = "' . $row['ip'] . '"');
		$tmp_result = $tmp_statement -> execute();
		while($tmp_row = $tmp_result -> fetchArray()){
			$readable .= $tmp_row['visits'] . ' ';
		}
	}

	// // $statement = $db -> prepare('SELECT * FROM uniquevisitors');
	// // $result = $statement -> execute();
	// // while($row = $result -> fetchArray()){
	// // 	$readable .= $row['ip'] . ' ' . $row['visits'] . ' ';
	// // }
	echo $readable;

	//http://stackoverflow.com/questions/15699101/get-the-client-ip-address-using-php
	function get_client_ip() {
	    $ipaddress = '';
	    if ($_SERVER['HTTP_CLIENT_IP'])
	        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
	    else if($_SERVER['HTTP_X_FORWARDED_FOR'])
	        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
	    else if($_SERVER['HTTP_X_FORWARDED'])
	        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
	    else if($_SERVER['HTTP_FORWARDED_FOR'])
	        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
	    else if($_SERVER['HTTP_FORWARDED'])
	        $ipaddress = $_SERVER['HTTP_FORWARDED'];
	    else if($_SERVER['REMOTE_ADDR'])
	        $ipaddress = $_SERVER['REMOTE_ADDR'];
	    else
	        $ipaddress = 'UNKNOWN';
	    return $ipaddress;
	}
?>

<!-- CREATE TABLE IF NOT EXISTS uniquevisits (ip text, port text, time integer);
CREATE TABLE IF NOT EXISTS uniquevisitors (ip text NOT NULL UNIQUE, visits integer);
INSERT INTO uniquevisits (ip, port, time) VALUES ("2001:468:cc0:1:2e44:fdff:fe2d:724f", "49920", 1430744019);
INSERT OR REPLACE INTO uniquevisitors (ip, visits) VALUES ("2001:468:cc0:1:2e44:fdff:fe2d:724f", COALESCE(SELECT visits FROM uniquevisitors WHERE ip = "2001:468:cc0:1:2e44:fdff:fe2d:724f", 1)); -->