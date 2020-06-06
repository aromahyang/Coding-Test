import Foundation

func solution(_ clothes:[[String]]) -> Int {
    var types:[String:Int] = [:]
    
    for c in clothes {
        if types.keys.contains(c[1]) {
            types[c[1]]! += 1
        } else {
            types[c[1]] = 1
        }
    }
    
    var answer = 1
    for t in types {
        answer *= (t.value + 1)
    }
    
    return answer-1
}
