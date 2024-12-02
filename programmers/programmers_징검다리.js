function solution(distance, rocks, n) {
    const sortedRocks = [...rocks];
    sortedRocks.sort((a, b) => a - b);
    let left = 1, right = distance, answer = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let temp = 0, deleteNum = 0;
        for (let i = 0; i < sortedRocks.length; i++) {
            if (sortedRocks[i] - temp < mid) {
                deleteNum += 1;
            } else {
                temp = sortedRocks[i];
            }
        }
        if (distance - temp < mid) {
            deleteNum += 1;
        }
        if (deleteNum <= n) {
            left = mid + 1;
            answer = Math.max(answer, mid);
        } else {
            right = mid - 1;
        }
    }
    return answer;
}
