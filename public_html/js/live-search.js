$(document).ready(function(){

	$('#customer-name').keyup(function(){

		var SortBy = $('[name=sort]:checked').val();
		// If there is nothing in the search bar
		if($(this).val() == ''){
			return;
		}

		// Prepare ajax
		$.ajax({
			type: 'get',
			url: 'api/live-search.php?query='+$(this).val(),
			data: {
				sort:SortBy
			},
			success:function(dataFromServer){
				console.log(dataFromServer);
				$('#result').html('');
				for(var i = 0; i < dataFromServer.length; i++){

					var html = 	'<li>FirstName: '+dataFromServer[i][0]+'</li>'+
								'<li>LastName: '+dataFromServer[i][1]+'</li>'+
								'<li>Email: '+dataFromServer[i][2]+'</li>'+
								'<li>Phone: '+dataFromServer[i][3]+'</li>';
					// $('#result').append('<ul>');
					// $('#result').append('<li>FirstName: '+dataFromServer[i][0]+'</li>');
					// $('#result').append('<li>LastName: '+dataFromServer[i][1]+'</li>');
					// $('#result').append('<li>Email: '+dataFromServer[i][2]+'</li>');
					// $('#result').append('<li>Phone: '+dataFromServer[i][3]+'</li>');
					// $('#result').append('</ul>');
					$('#result').append('<ul>'+html+'</ul>');
				} 
			},
			error:function(){
				console.log("Cannot connect to server.");
			}	

		});

	});

});

$('#result').append();