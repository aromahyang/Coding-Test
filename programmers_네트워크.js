function dfs(array, start, visited) {
    visited[start] = true;
    for(let i = 0 ; i < array.length ; i++) {
        if(i !== start && array[start][i] && !visited[i]) {
            dfs(array, i, visited);
        }
    }
}

function solution(n, computers) {
    const visited = [];
    for (let i = 0; i < n; i++) {
        visited.push(false);
    }
    
    let answer = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(computers, i, visited);
            answer += 1;
        }
    }

    return answer;
}
