function solution(n, times) {
    let minTime = 0;
    let maxTime = Math.max(...times) * n;
    while (minTime !== maxTime) {
        const midTime = Math.floor((maxTime + minTime) / 2);
        const done = times.reduce((acc, cur) => acc + Math.floor(midTime / cur), 0);
        if (done < n) {
            minTime = midTime + 1;
        } else {
            maxTime = midTime;
        }
    }
    
    return minTime;
}
