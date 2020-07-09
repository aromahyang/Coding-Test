function solution(heights) {
    var answer = Array(heights.length).fill(0);
    
    for(let i = heights.length - 1 ; i >= 0 ; i--) {
        for(let j = i-1 ; j >= 0 ; j--) {
            if(heights[j] > heights[i]) {
                answer[i] = j+1;
                break;
            }
        }
    }
    
    return answer;
}