import Foundation

func solution(_ genres:[String], _ plays:[Int]) -> [Int] {
    var songs:[String:[[Int]]] = [:]
    var answer:[Int] = []
    
    for i in 0..<genres.count {
        if !songs.keys.contains(genres[i]) {
            songs.updateValue([], forKey: genres[i])
        }
        songs[genres[i]]!.append([i, plays[i]])
    }
    
    for genre in songs.keys {
        songs[genre]! = songs[genre]!.sorted(by: { $0[1] > $1[1] })
    }
    
    var sortedSongs = songs.sorted { ($0.1.reduce(0) { $0 + $1[1] }) > ($1.1.reduce(0) { $0 + $1[1] }) }
    // print(sortedSongs)
    
    for i in 0..<sortedSongs.count {
        if sortedSongs[i].value.count == 1 {
            answer.append(sortedSongs[i].value[0][0])
        } else {
            for j in 0..<2 {
                answer.append(sortedSongs[i].value[j][0])
            }
        }
    }
    // print(answer)
    return answer
}
