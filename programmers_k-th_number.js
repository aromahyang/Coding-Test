function solution(array, commands) {
    var answer = [];
    
    for(const command of commands) {
        let currentArray = [...array];
        currentArray = currentArray.slice(command[0]-1, command[1]);
        // console.log('currentArray = ', currentArray);
        currentArray.sort(function(a, b) {
        	return a-b;
        });
        answer.push(currentArray[command[2]-1]);
    }
    return answer;
}