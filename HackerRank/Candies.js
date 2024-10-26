function candies(n, arr) {
    // Write your code here
    const candyArr = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        const prev = arr[i - 1];
        if (prev < arr[i]) {
            candyArr[i] = candyArr[i - 1] + 1;
        }
    }
    for (let i = n - 1; i > 0; i--) {
        const prev = arr[i - 1], prevCandy = candyArr[i - 1];
        if (prev > arr[i] && prevCandy <= candyArr[i]) {
            candyArr[i - 1] = candyArr[i] + 1;
        }
    }

    return candyArr.reduce((acc, cur) => acc + cur, 0);
}