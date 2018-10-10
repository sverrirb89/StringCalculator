	function add(numbers){

		var temp = numbers.replace(/\n/, ",");
		var numberArray =temp.split(",");
		
		if(numbers === ""){
			return 0;
		}
		
		if(numberArray.length == 1){
			return parseInt(numberArray[0]);
		}
		
		if (numberArray.length == 2) {
		
		return sum(numberArray);
		}
		if(numberArray.length > 2){
			return sum(numberArray);
		}

	}


	function sum(numberArray){
	var total = 0;
	for (var i = 0; i < numberArray.length; i++){
			total += parseInt(numberArray[i]);
		}
		return total;

	}
	

	
	module.exports = add;

