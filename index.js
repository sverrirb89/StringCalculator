	function add(numbers){

		const numberArray =numbers.split(",");
		
		if(numbers === ""){
			return 0;
		}
		
		if(numberArray.length == 1){
			return parseInt(numberArray[0]);
		}
		
		if (numberArray.length == 2) {
		
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

