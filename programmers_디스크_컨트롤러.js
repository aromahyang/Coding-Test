function solution(jobs) {
	var answer = 0;

	let tick = 0;
	let queue = [];

	while(true) {
		let index = 0;
        while(true){
            if(index >= jobs.length) break;
            if(jobs[index][0] <= tick){
            // 요청이 들어온 작업
                queue.push(jobs.splice(index,1)[0])
            }else{
            // 요청 전 작업
                index++;
            }
        }

		if(queue.length == 0) {
			if(jobs.length == 0) {
				break;
			} else {
				tick++;
			}
		} else { // queue에서 작업량이 가장 작은 작업 수행
			let minIndex = 0;
			for(let i = 0 ; i < queue.length ; i++) {
				if(queue[minIndex][1] > queue[i][1]) {
					minIndex = i;
				}
			}

			// 수행한 만큼 tick 증가
			tick += queue[minIndex][1];

			answer += (tick - queue[minIndex][0]);

			queue.splice(minIndex, 1);
		}
	}

	return Math.floor(answer/jobs.length);
}