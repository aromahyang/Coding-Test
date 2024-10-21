function getMinimum(...args) {
    const min = Math.min(...args);
    return min < 0 ? 0 : min;
}

function queensAttack(n, k, r_q, c_q, obstacles) {
    // Write your code here
    let top = n - r_q;
    let bottom = r_q - 1;
    let left = c_q - 1;
    let right = n - c_q;

    let topleft = getMinimum(top, left);
    let bottomleft = getMinimum(bottom, left);
    let topright = getMinimum(top, right);
    let bottomright = getMinimum(bottom, right);

    for (const obstacle of obstacles) {
        // check row
        const [x, y] = obstacle;
        if (x === r_q) {
            if (y > c_q) {
                right = getMinimum(right, y - c_q - 1);
            } else {
                left = getMinimum(left, c_q - 1 - y);
            }
        }

        // check column
        if (y === c_q) {
            if (x > r_q) {
                top = getMinimum(top, x - r_q - 1);
            } else {
                bottom = getMinimum(bottom, r_q - 1 - x);
            }
        }

        // check diagonal
        if (Math.abs(x - r_q) === Math.abs(y - c_q)) {
            if (x < r_q && y < c_q) {
                bottomleft = getMinimum(bottomleft, r_q - 1 - x, c_q - 1 - y);
            } else if (x < r_q && y > c_q) {
                bottomright = getMinimum(bottomright, r_q - 1 - x, y - c_q - 1);
            } else if (x > r_q && y < c_q) {
                topleft = getMinimum(topleft, x - r_q - 1, c_q - 1 - y);
            } else {
                topright = getMinimum(topright, x - r_q - 1, y - c_q - 1);
            }
        }
    }

    return top + bottom + left + right + topleft + topright + bottomleft + bottomright;
}