function solution(cacheSize, cities) {
    if (cacheSize < 1) {
        return 5 * cities.length;
    }
    
    const cache = [];
    let answer = 0;
    cities.map((city) => city.toLowerCase()).forEach((city) => {
        const index = cache.findIndex((item) => item === city);
        if (index > -1) { // hit
            answer += 1;
            if (index !== cache.length - 1) {
                // LRU
                cache.splice(index, 1);
                cache.push(city);
            }
            return;
        }
        
        // miss
        answer += 5;
        if (cache.length < cacheSize) {
            cache.push(city);
        } else {
            cache.splice(0, 1);
            cache.push(city);
        }
    });
    return answer;
}
