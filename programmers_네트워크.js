function solution(n, computers) { // 미해결
    var answer = 0;

    let visit = [];
    for(let i = 0 ; i < n ; i++) {
    	visit.push(false);
    }

    for(let i = 0 ; i < n ; i++) {
    	if(!visit[i]) {
    		dfs(visit, );
    		answer ++;
    	}
    }

    function dfs(array, start) {
    	array[start] = true;
    	for(let i = 0 ; i < n ; i++) {
    		if(!array[i] && computers[start][i]) {
    			dfs(array, i);
    		}
    	}
    }

    return answer;
}