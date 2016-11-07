function updateStats(action){
	$.ajax({
		type: 'POST',
		data: {'action':action},
		url: 'https://www.tjhsst.edu/~2016dzhao/Lab08/php/storeinfo.php',
		success: function(result){
			// console.log('RESULT: ' + result);
			// var iptime = result.split(' ');
			// iptime.pop();
			// // console.log(iptime);
			// var disp = '';
			// for(var cnt = iptime.length - 1; cnt >= 0; cnt -= 3){
			// 	disp += '<p>' + iptime[cnt-2] + ' ' + iptime[cnt-1] + ' ... ' + iptime[cnt] + ' // ' + (new Date(parseInt(iptime[cnt]) * 1000)) + ' ' + '</p>';
			// 	console.log();
			// }
			// // console.log(disp);
			$('#data').html(result);
		},
		error: function(result){
			console.log(result);
		}
	});
}

$(document).ready(function(){
	updateStats('add');
	setInterval(function(){updateStats('update')}, 5000);
});

// THIS IS IN MY PHP SCRIPT
//JSON STUFF <===========================================================================
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
//JSON STUFF <===========================================================================

$('#file-select').change(function(){
	if($('#file-select').val() != 'FILES'){
		window.location.href = 'https://www.tjhsst.edu/~2016dzhao/Lab08/' + $('#file-select').val();
	}
});