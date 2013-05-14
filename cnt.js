$("button").click(function(){
	var REST_TIMEOUT = 10;
	var TRAIN_TIMEOUT = 30;
	
	var timeout = 3;
	var excercise = ["Jacks", "Wall sit", "Push up", "Abdominal crunch", "Step-up onto chair", "Squat", "Triceps chair dip", "Plank",
	                 "High knees", "Lunge", "Push up and rotation", "Side plank"];
	
	var current = 0;
	
	var rest = function(){
		timeout -= 1;
		$("#which").html("REST, next " + excercise[current]);
		$("#counter").html(timeout);
		
		if(timeout > 0){
			setTimeout(rest, 1000);
		}
		else{
			document.getElementById('audiotag1').play();
			timeout = TRAIN_TIMEOUT;
			setTimeout(train, 1000);
		}
	}
	
	var train = function(){
		timeout -= 1;
		console.log(current, excercise[current]);
		$("#which").html(excercise[current]);
		$("#counter").html(timeout);
		if(timeout > 0){
			setTimeout(train, 1000);
		}
		else{
			document.getElementById('audiotag1').play();
			timeout = REST_TIMEOUT;
			current++;
			current %= excercise.length
			setTimeout(rest, 1000);
		}
	};
	
	
	
	
	var start = function(){
		timeout -= 1;
		$("#counter").html(timeout);
		if(timeout > 0){
			setTimeout(start, 1000);
		}
		else{
			document.getElementById('audiotag1').play();
			timeout = TRAIN_TIMEOUT;
			setTimeout(train, 1000);
		}
	};
	setTimeout(start, 1000);
});