import Foundation

func solution(_ numbers:[Int]) -> String {
    let answer = numbers.map({ String($0) })
        .sorted(by: { Int($0+$1)! > Int($1+$0)! })
        .joined(separator: "")
    return answer[answer.startIndex] == "0" ? "0" : answer
}
