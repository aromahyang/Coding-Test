import Foundation

func solution(_ N:Int, _ stages:[Int]) -> [Int] {
    var counts = Array.init(repeating: 0, count: N+2) // because stage range : [1, N+1]
    for e in stages {
        counts[e] += 1
    }
    
    var failures = Array.init(repeating: 0.0, count: N+1)
    var total = stages.count
    for i in 1...N {
        failures[i] = total == 0 ? Double(total) : Double(counts[i]) / Double(total)
        total -= counts[i]
    }
    
    failures.removeFirst()
    let sortedFailures = failures.enumerated().sorted { $0.element > $1.element }
    let answer = sortedFailures.map { $0.offset + 1 }
    
    return answer
}