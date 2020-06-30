function solution(begin, target, words) { // 미해결
    var answer = 0;
    let result = [], count = 0;

    if(words.includes(target)) {
    	//
    }

    function bfs(search, count, result) {
    	let queue = [];

    	for(let i = 0 ; i < words.length ; i++) {
    		let unmatch = words[i].split('').reduce((acc, val, idx) => {
    			return val != search[idx] ? acc + 1 : acc;
    		});

    		if(unmatch == 1) {
    			if(target == words[i]) {
    				result.push(count+1);
    			}

    			let clone = words[i].slice();
    			clone.splice(1, i);
    			queue.push({
    				search: words[i],
    				words: clone
    			})
    		}
    	}

    	if(queue.length) {
    		count++;
    		for(let i = 0 ; i < queue.length ; i++) {
    			bfs(queue[i].search, )
    		}
    	}
    }

    return answer;
}