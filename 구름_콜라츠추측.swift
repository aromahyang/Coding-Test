let input = readLine()!
var number = Int(input)!
var answer = 0

while true {
	if number % 2 == 1 {
		number = number * 3 + 1
	} else {
		number /= 2
	}
	answer += 1
	
	if number == 1 {
		break
	}
}

if answer > 500 {
	print("X")
} else {
	print(answer)
}