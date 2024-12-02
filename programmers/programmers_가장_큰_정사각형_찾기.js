function solution(board)
{
    var answer = 0;
    
    if(board.length == 1) {
        return 1;
    }
    
    for(let i = 1 ; i < board.length ; i++) {
        for(let j = 1 ; j < board[i].length ; j++) {
            if(board[i][j] != 0) {
                let min = Math.min(board[i][j-1], board[i-1][j], board[i-1][j-1]);
                board[i][j] = min + 1;
                
                if(answer < board[i][j]) {
                    answer = board[i][j];
                }
            }
        }
    }
    
    return Math.pow(answer, 2);
}