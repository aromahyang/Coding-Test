function solution(numbers) {
    var answer = '';

    let candidates = numbers.map(n => n + '')
                        .sort((a, b) => (b + a) - (a + b)).join('');
    console.log(candidates);

    answer = candidates[0] == '0' ? '0' : candidates;
    
    return answer;
}

// solution([6, 10, 2]);
// solution([6, 10, 2]);
// solution([3, 30, 34, 5, 9]);
solution([0, 0, 0, 0]);