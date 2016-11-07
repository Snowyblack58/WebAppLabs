$("#submit").click(function(){
	// if($('[name="param-0"]').val() != '' && $('[name="param-1"]').val() != '' && $('[name="param-2"]').val() != ''){
		$.ajax({
			type:'POST',
			url:'https://www.tjhsst.edu/~2016dzhao/Lab06/php/matches.php',
			data: {'action': 'display',
					'param-0': $('[name="param-0"]').val(),
					'param-1': $('[name="param-1"]').val(),
					'param-2': $('[name="param-2"]').val(),
					'param-3': $('[name="param-3"]').val(),
				},
			success: function(data){
				$("#matches").html	(data);
			}
		});
	// }
});

$('#file-select').change(function(){
	if($('#file-select').val() != 'FILES'){
		window.location.href = 'https://www.tjhsst.edu/~2016dzhao/Lab06/' + $('#file-select').val();
	}
});