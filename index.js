function add(numbers){

	if(numbers.startsWith("//")){
		var delimiter = numbers.charAt(2);
		var clean = numbers.substring(4);
		for(let i = 0; i < clean.length; i++){
			if(clean.charAt(i) === delimiter){
				clean = clean.replace(delimiter, ",");
			}
		}
		numbers = clean;
	}

	var temp = numbers.replace(/\n/, ",");
	var numberArray =temp.split(",");

	if(numbers === ""){
		return 0;
	}
	
	if(numberArray.length == 1){
		return parseInt(numberArray[0]);
	}
	
	if(numberArray.length >= 2){
		return sum(numberArray);
	}

}

function sum(numberArray){
	var total = 0;
	var negatives = [];
	for (var i = 0; i < numberArray.length; i++){
		if(numberArray[i] < 0){
			negatives.push(numberArray[i]);
		}
		else{
			if(numberArray[i] > 1000){
				numberArray.splice(i, 1);
			}
			total += parseInt(numberArray[i]);
		}	
	}
	if(negatives.length > 0){
		return(`Negatives are not allowed:${negatives}`);
	}
	return total;

}

module.exports = add;