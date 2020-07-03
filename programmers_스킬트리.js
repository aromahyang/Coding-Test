function solution(skill, skill_trees) {
    var answer = 0;
    let skills = skill.split('');
    
    for(const tree of skill_trees) {
        let indices = [];
        for(const s of skills) {
            let index = tree.indexOf(s);
            indices.push(index);
        }
        
        let prev = indices[0], countFlag = true;
        for(let i = 1 ; i < indices.length ; i++) {
            if(prev == -1) {
                if(indices[i] > -1) {
                    countFlag = false;
                    break;
                } else {
                    prev = indices[i];
                }
            } else {
                if(prev < indices[i] || indices[i] == -1) {
                    prev = indices[i];
                } else {
                    countFlag = false;
                    break;
                }
            }
        }
        
        if(countFlag) {
            answer++;
        }
    }
    
    return answer;
}