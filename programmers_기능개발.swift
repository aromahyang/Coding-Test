import Foundation

func solution(_ progresses:[Int], _ speeds:[Int]) -> [Int] {
    var durations:[Int] = []
    var answer:[Int] = []
    
    for i in 0..<progresses.count {
        let div = (100-progresses[i]) % speeds[i] == 0 ? Int((100-progresses[i]) / speeds[i]) : Int((100-progresses[i]) / speeds[i]) + 1
        durations.append(div)
    }

    var max = 0
    for duration in durations {
        if duration > max {
            answer.append(1)
            max = duration
        } else {
            let lastIndex = answer.count - 1
            answer[lastIndex] += 1
        }
    }
    
    return answer
}