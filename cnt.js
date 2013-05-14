$("button").click(function(){
    this.disabled = true;
    createjs.Sound.addEventListener("loadComplete", createjs.proxy(this.loadHandler, this));
    createjs.Sound.registerSound("flute_c_long_01.wav", "sound");
    function loadHandler(event) {
      // This is fired for each sound that is registered.
      var instance = createjs.Sound.play("sound");  // play using id.  Could also use source.
      instance.addEventListener("complete", createjs.proxy(this.handleComplete, this));
      instance.setVolume(0.5);
    }


	var REST_TIMEOUT = 5;
	var TRAIN_TIMEOUT = 30;
	var EXERCISES = ["Jacks", "Wall sit", "Push up", "Abdominal crunch", "Step-up onto chair", "Squat", "Triceps chair dip", "Plank",
	                 "High knees", "Lunge", "Push up and rotation", "Side plank"];
	var timeout = 3;


	var current = 0;

	var rest = function(){
		timeout -= 1;
		$("#which").html("REST, next " + EXERCISES[current]);
		$("#counter").html(timeout);

		if(timeout > 0){
			setTimeout(rest, 1000);
		}
		else{
            createjs.Sound.play("sound");
			timeout = TRAIN_TIMEOUT;
			setTimeout(train, 1000);
		}
	}

	var train = function(){
		timeout -= 1;
		$("#which").html((current + 1) + ". " + EXERCISES[current]);
		$("#counter").html(timeout);
		if(timeout > 0){
			setTimeout(train, 1000);
		}
		else{
            createjs.Sound.play("sound");
			timeout = REST_TIMEOUT;
			current++;
			current %= EXERCISES.length
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
            createjs.Sound.play("sound");
			timeout = TRAIN_TIMEOUT;

			setTimeout(train, 1000);
		}
	};
	setTimeout(start, 1000);
});
