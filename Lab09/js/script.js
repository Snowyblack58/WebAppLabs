$('#submit').click(function(){
	$.ajax({
		type: 'POST',
		url: 'https://www.tjhsst.edu/~2016dzhao/Lab09/php/key.php',
		data: {'userinput':$('#userinput').text()},
		success: function(result){
			$('#link').html(result);
			console.log('good' + result);
		},
		error: function(result){
			console.log('bad' + result);
		}
	});
});



$('#file-select').change(function(){
	if($('#file-select').val() != 'FILES'){
		window.location.href = 'https://www.tjhsst.edu/~2016dzhao/Lab09/' + $('#file-select').val();
	}
});