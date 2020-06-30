function solution(skill, skill_trees) {
    var answer = 0;
    
    let skills = skill.split('');
    for(const tree of skill_trees) {
        let indices = Array(skills.length).fill(-1);
        for(const [i, s] of skills.entries()) {
            indices[i] = tree.indexOf(s);
        }
        
        let prev = indices[indices.length-1];
        let existFlag = prev > -1 ? true : false;
        let countFlag = true;
        for(let i = indices.length-2 ; i >= 0 ; i--) {
            if(prev != -1) {
                if(indices[i] == -1 || prev < indices[i]) {
                    countFlag = false;
                    break;
                }
            }
            prev = indices[i];
        }

        // console.log(indices, countFlag);
        if(countFlag && prev != -1) {
            answer += 1;
        }
    }
    return answer;
}