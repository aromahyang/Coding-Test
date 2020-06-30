import Foundation

func solution(_ brown:Int, _ yellow:Int) -> [Int] {
    let totalTiles = brown + yellow
    var answer = [Int]()
    
    var h = 3
    while h <= Int(Double(totalTiles).squareRoot()) {
        if totalTiles%h == 0 {
            let w = totalTiles/h
            let expectedBrown = (w + h) * 2 - 4
            let expectedYellow = (w-2) * (h-2)
            
            if expectedBrown == brown && expectedYellow == yellow {
                answer += [w, h]
            }
        }
        
        h += 1
    }
    
    return answer
}