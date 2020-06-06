import Foundation

let input = readLine()!
var answer = 0

for i in 1..<Int(input)! {
	let numbers = String(i).map{ String($0) }
	
	for n in numbers {
		if n == "3" || n == "6" || n == "9" {
			answer += 1
		}
	}
}

print(answer)