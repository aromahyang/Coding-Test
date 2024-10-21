/**
 * BigInt()를 출력하면 n이 항상 붙어나오기 때문에 string으로 변환해서 출력함
 */

function extraLongFactorials(n) {
    // Write your code here
    const factorials = [];

    const getFactorial = (value) => {
        if (factorials[value]) {
            return factorials[value];
        }

        if (value < 2) {
            factorials[value] = BigInt(1);
        } else {
            factorials[value] = BigInt(value) * getFactorial(value - 1);
        }
        return factorials[value];
    };

    console.log(getFactorial(n).toString());
}