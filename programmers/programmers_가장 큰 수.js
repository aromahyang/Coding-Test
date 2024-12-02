function solution(numbers) {
    const copy = [...numbers];
    copy.sort((a, b) => {
        const strA = a.toString().repeat(3);
        const strB = b.toString().repeat(3);
        return strA > strB ? -1 : 1;
    });
    return copy.every((n) => n === 0) ? '0' : copy.join('');
}
