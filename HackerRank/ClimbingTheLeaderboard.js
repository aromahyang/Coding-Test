/**
 * 이진탐색으로 해결
 */

function climbingLeaderboard(ranked, player) {
    // Write your code here
    const newRanked = [...new Set(ranked)];
    const result = [];
    for (const p of player) {
        let left = 0, right = newRanked.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (newRanked[mid] <= p) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        result.push(left + 1);
    }
    return result;
}