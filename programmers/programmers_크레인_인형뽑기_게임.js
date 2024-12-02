function solution(board, moves) {
    let basket = [];
    let newBoard = switchRowAndColumn(board);
    
    for(const m of moves) {
        let index = newBoard[m-1].findIndex(element => element != 0);
        
        if(index > -1) {
            basket.push(newBoard[m-1][index]);
            newBoard[m-1][index] = 0;
        }
    }
    
    let answer = countSameValues(basket);
    return answer * 2;
}

function switchRowAndColumn(board) {
    let array = [...Array(board.length)].map(val => []);
    
    for(const row of board) {
        for(const [idx, col] of row.entries()) {
            array[idx].push(col);
        }
    }
    
    return array;
}

function countSameValues(basket) {
    let newBasket = [...basket];
    let prevIndex = 0;
    for(let i = 1 ; i < newBasket.length ; i++) {
        if(newBasket[prevIndex] == newBasket[i]) {
            newBasket.splice(prevIndex, 2);
            break;
        }
        
        prevIndex = i;
    }
    
    if(prevIndex == basket.length-1 || basket.length == 0) {
        return 0;
    } else {
        return 1 + countSameValues(newBasket);
    }
}