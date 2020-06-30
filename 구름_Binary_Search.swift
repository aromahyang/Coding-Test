import Foundation

let input1 = readLine()!
let input2 = readLine()!
let input3 = readLine()!

let array = input2.components(separatedBy: " ")
var low = 0
var high = Int(input1)
var mid:Int
var flag = false

while low <= high! {
	mid = (low + high!) / 2
	if Int(array[mid])! == Int(input3)! {
		flag = true
		print(mid+1)
		break
	}
	else if Int(array[mid])! > Int(input3)! {
		high = mid-1
	}
	else {
		low = mid+1
	}
}

if !flag {
	print("X")
}