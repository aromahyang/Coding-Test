import Foundation

func getDivisors(_ num:Int) -> [Int] {
	var divisors = [Int]()
	if num == 1 {
		return []
	}
	
	for i in 1...Int(Double(num).squareRoot()) {
		if num % i == 0 {
			if i * i == num || i == 1 {
				divisors += [i]
			} else {
				divisors += [i, num/i]
			}
		}
	}
	
	return divisors
}

let input = readLine()!
let inputs = input.components(separatedBy: " ")
var answer = [Int]()

for i in Int(inputs[0])!...Int(inputs[1])! {
	let divisors = getDivisors(i)
	let sum = divisors.reduce(0, +)
	
	if sum == i {
		answer += [i]
	}
}

print(answer.map{ String($0) }.joined(separator: " ") + " ")
