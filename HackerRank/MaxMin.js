function maxMin(k, arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    let answer = arr[arr.length - 1];
    for (let i = 0; i < arr.length - k + 1; i++) {
        const diff = arr[i + k - 1] - arr[i];
        if (diff < answer) {
            answer = diff;
        }
    }
    return answer;
}