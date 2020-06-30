// function solution(w, h) { // 내가 생각한 풀이
//     var answer = 0;
    
//     let initials = w * h;
//     if(w == h) {
//         answer = initials - w;
//     } else {
//         let min = Math.min(w, h);
//         let max = Math.max(w, h);
//         let slope = max / min;
//         let unusable = 0;
        
//         let prevY = 0;
//         for(let x = 1 ; x <= Math.floor(min/2) ; x++) {
//             let y = slope * x;
//             unusable += (Math.ceil(y) - prevY);
//             prevY = Math.floor(y);
//         }

//         unusable *= 2;
        
//         if(min % 2 != 0) {
//             let x = Math.floor(min/2) + 1;
//             let y = slope * x;
//             console.log(Math.ceil(y) - prevY);
//             unusable += (Math.ceil(y) - prevY);
//         }
        
//         answer = initials - unusable;
//     }
//     console.log(answer);
//     return answer;
// }

function solution(w, h) {
    let val = gcd(w, h);
    let divW = w/val, divH = h/val;
    let usuable = (divW * divH) - (divW + divH - 1);
    let answer = (usuable * val) + (divW * divH) * (Math.pow(val, 2)-val);
    console.log(answer);
    return answer;
}

function gcd(a, b) {
    let min = Math.min(a, b);

    for(let i = min ; i > 0 ; i--) {
        if((a%i == 0) && (b%i == 0)) {
            return i;
        }
    }
}


solution(8, 12) == 80;
// 99999998800000000