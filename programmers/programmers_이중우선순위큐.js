function solution(operations) {
    var answer = [];

    let numbers = [];

    for(let op of operations) {
    	let operation = op.split(' ');
    	if(operation[0] == 'I') {
    		numbers.push(Number(operation[1]));
    		numbers.sort((a, b) => { return a - b; });
    	}
    	else if(operation[0] == 'D' && numbers.length) {
    		if(operation[1] == '-1') {
    			numbers.splice(0, 1);
    		}
    		else if(operation[1] == '1') {
    			numbers.splice(numbers.length-1, 1);
    		}
    	}
    }

    if(numbers.length < 2) {
    	answer = [0, 0];
    } else {
	    answer = [numbers[numbers.length-1], numbers[0]];
	}

    return answer;
}