/**
 * mm:ss 포맷을 초(s)로 표현하여 범위 확인
 */

function solution(video_len, pos, op_start, op_end, commands) {
    function getSeconds(str) {
        const [m, s] = str.split(':').map((v) => +v);
        return m * 60 + s;
    }
    function formatMMSS(num) {
        const m = Math.floor(num / 60);
        const s = num % 60;
        return (m < 10 ? `0${m}` : `${m}`) + ':' + (s < 10 ? `0${s}` : `${s}`);
    }
    
    let answer = pos;
    const start = getSeconds(op_start);
    const end = getSeconds(op_end);
    const cur = getSeconds(answer);
    const duration = getSeconds(video_len);

    if (cur >= start && cur <= end) {
        answer = op_end;
    }
    
    for(const command of commands) {
        let seconds = getSeconds(answer);
        if (command === 'next') {
            seconds += 10;
            if (seconds >= duration) {
                seconds = duration;
            }
        } else {
            seconds -= 10;
            if (seconds < 0) {
                seconds = 0;
            }
        }

        if (seconds >= start && seconds <= end) {
            answer = op_end;
        } else {
            answer = formatMMSS(seconds);
        }
    }
    return answer;
}