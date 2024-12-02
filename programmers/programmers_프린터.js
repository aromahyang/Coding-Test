function solution(priorities, location) {
    let requests = Array.from(Array(priorities.length), (_, i) => i + 1);
    requests = sortRequests(requests, priorities);
    
    let index = requests.findIndex(e => e == location+1);
    return index+1;
}

function sortRequests(requests, priorities) {
    const num = requests.length;
    for(let i = 0 ; i < num ; ) {
        let changeFlag = false;
        
        for(let j = i+1 ; j < num ; j++) {
            if(priorities[j] > priorities[i]) {
                let request = requests.splice(i, 1);
                let priority = priorities.splice(i, 1);
                
                requests.push(request[0]);
                priorities.push(priority[0]);
                
                changeFlag = true;
                break;
            }
        }
        
        if(!changeFlag) {
            i++;
        }
    }
    
    return requests;
}