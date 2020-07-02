import Foundation

func solution(_ bridge_length:Int, _ weight:Int, _ truck_weights:[Int]) -> Int {
    var totalTicks = 0
    var onGoingTrucks = [Int](), arrivedTrucks = [Int](), ticks = [Int]()
    var idx = 0
    
    while arrivedTrucks.count != truck_weights.count {
        totalTicks += 1
        
        let totalWeight = onGoingTrucks.reduce(0, +)
        if idx < truck_weights.count && totalWeight + truck_weights[idx] <= weight {
            onGoingTrucks.append(truck_weights[idx])
            idx += 1
            ticks.append(0)
        }
        
        ticks = ticks.map { $0 + 1 }
        
        let indices = ticks.indices.filter { ticks[$0] >= bridge_length }
        if indices.count > 0 {
            indices.forEach {
                arrivedTrucks.append(onGoingTrucks[$0])
            }
            onGoingTrucks.removeFirst(indices.last! + 1)
            ticks.removeFirst(indices.last! + 1)
        }
    }
    
    return totalTicks + 1
}