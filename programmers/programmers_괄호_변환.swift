import Foundation

func solution(_ p:String) -> String {
    let str = getCorrectString(p)
    return str
}

func getCorrectString(_ p: String) -> String {
    var stack = [Character]()
    var leftCount = 0, rightCount = 0
    var u = "", v = "", index = 0
    
    for c in p {
        stack.append(c)
        
        if c == "(" {
            leftCount += 1
        } else {
            rightCount += 1
        }
        
        if leftCount == rightCount {
            u = String(stack)
            
            let start = p.index(p.startIndex, offsetBy: index+1)
            let rest = p[start..<p.endIndex]
            v = String(rest)
            break
        }
        
        index += 1
    }
    
    if isCorrectString(u) {
        if v == "" {
            return u
        }
        
        let str = getCorrectString(v)
        return u + str
    } else {
        var str = convertString(u, v)
        return getCorrectString(str)
    }
}

func isCorrectString(_ str: String) -> Bool {
    var stack = [Character]()
    var isCorrect = true
    
    for c in str {
        if c == "(" {
            stack.append(c)
        } else {
            if stack.isEmpty {
                isCorrect = false
                break
            } else {
                stack.removeLast()
            }
        }
    }
    
    return isCorrect
}

func convertString(_ u: String, _ v: String) -> String {
    let start = u.index(u.startIndex, offsetBy: 1)
    let end = u.index(before: u.endIndex)
    let middleStr = String(u[start..<end])
    
    var convertedStr = ""
    for c in middleStr {
        if c == "(" {
            convertedStr.append(")")
        } else {
            convertedStr.append("(")
        }
    }
    
    return String("(") + getCorrectString(v) + String(")") + convertedStr
}