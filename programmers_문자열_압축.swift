import Foundation

func concatWord(_ count: Int, _ str: Any) -> String {
    var word = ""
    
    if count > 1 {
        word = String(count)
    }
    
    if let str = str as? Character {
        word.append(str)
    } else {
        word += (str as! String)
    }
    
    return word
}

func solution(_ s:String) -> Int {
    var candidates = [Int: Int]()
    var prev = String()
    
    for i in 1...s.count {
        var shortenString = "", lastWord = ""
        var count = 1
        
        for j in stride(from: 0, to: s.count, by: i) {
            let start = s.index(s.startIndex, offsetBy: j)
            let end = s.index(s.startIndex, offsetBy: j+i, limitedBy: s.endIndex)
            var current = ""
            if let end = end {
                current = String(s[start..<end])
            } else {
                current = String(s[start..<s.endIndex])
            }
            
            if j == 0 {
                prev = current
                continue
            }
            
            if prev == current {
                count += 1
            }
            else {
                let word = concatWord(count, prev)
                shortenString += word
                count = 1
                prev = current
            }
            
            if j == s.count-i || end == nil {
                lastWord = concatWord(count, prev)
            }
        }
        
        shortenString += lastWord
        candidates[i] = shortenString.count > 0 ? shortenString.count : s.count
    }
    
    let sortedCandidates = candidates.sorted { $0.1 < $1.1 }

    return sortedCandidates[0].value
}