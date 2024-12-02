function solution(bandage, health, attacks) {
    const [healDuration, healPerSec, successiveHeal] = bandage;
    const duration = attacks[attacks.length - 1][0];
    
    let answer = health;
    let second = 0;
    for (const attack of attacks) {
        const [attackSecond, damage] = attack;
        
        // 공격 받기 전까지 회복
        const diff = attackSecond - 1 - second;
        answer += (diff * healPerSec) + (successiveHeal * Math.floor(diff / healDuration));
        if (answer >= health) {
            answer = health;
        }
        
        // 공격
        answer -= damage;
        second = attackSecond;
        
        // 공격받은 후 체력 확인
        if (answer <= 0) {
            break;
        }
    }
    return answer <= 0 ? -1 : answer;
}