function solution(numbers, target) {
    var answer = dfs(numbers, 0, 0);

    function dfs(array, index, num) {
    	if(index == array.length) {
    		return num == target ? 1 : 0;
    	} else {
    		return dfs(array, index+1, num+array[index]) + dfs(array, index+1, num-array[index]);
    	}
    }
    
    
    return answer;
}

solution([1, 1, 1, 1, 1], 3);



// 다른 사람 풀이
function solution(numbers, target) {
    let answer = 0;
    getAnswer(0,0);
    function getAnswer(x,value) {
        if(x<numbers.length){
            getAnswer(x+1,value + numbers[x]);
            getAnswer(x+1,value - numbers[x]);
        } else{
            if(value === target){
                answer++
            }
        }
    }
    return answer;
}
