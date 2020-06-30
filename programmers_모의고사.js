function solution(answers) {
    var answer = [];
 
 	let s1 = [1, 2, 3, 4, 5];
 	let s2 = [2, 1, 2, 3, 2, 4, 2, 5];
 	let s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

 	let pick1 = [], pick2 = [], pick3 = [];
 	for(let i = 0 ; i < (40/s1.length) ; i++) {
 		pick1 = pick1.concat(s1);
 	}
 	for(let i = 0 ; i < (40/s2.length) ; i++) {
 		pick2 = pick2.concat(s2);
 	}
 	for(let i = 0 ; i < (40/s3.length) ; i++) {
 		pick3 = pick3.concat(s3);
 	}

 	let answerCounts = [{'student': 1, 'count': 0}, {'student': 2, 'count': 0}, {'student': 3, 'count': 0}]
	for(let i = 0 ; i < answers.length ; i++) {
		if(answers[i] == pick1[i%40]) {
			answerCounts[0].count += 1;
		}
		if(answers[i] == pick2[i%40]) {
			answerCounts[1].count += 1;
		}
		if(answers[i] == pick3[i%40]) {
			answerCounts[2].count += 1;
		}
	}
	// console.log(answerCounts)
	answerCounts.sort((a, b) => { return b.count - a.count });
	let answerObject = answerCounts.filter(element => element.count == answerCounts[0].count);
	answer = answerObject.map(obj => obj.student);
    
    return answer;
}

// solution([1,2,3,4,5]);
solution([1,3,2,4,2]);