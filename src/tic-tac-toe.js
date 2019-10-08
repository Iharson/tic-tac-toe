class TicTacToe {
    constructor() {   //Empty Field
        this.step = 0;
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }

    getCurrentPlayerSymbol() {  //Current play from two players
        return this.step % 2 ? 'o' : 'x';
    }

    nextTurn(rowIndex, columnIndex) {   // Each turn
        if (this.board[rowIndex][columnIndex] === null) {
            this.board[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.step++;
        }
    }

    isFinished() { //finish condition
        return this.noMoreTurns() || this.getWinner() !== null;
    }

    getWinner() { //Winner
        const boardCell = this.board;
        let winner = null;

        if (boardCell[0][0] === boardCell[1][1] && boardCell[0][0] === boardCell[2][2]) { //diagonal
            winner = boardCell[1][1];
        } else if (boardCell[0][2] === boardCell[1][1] && boardCell[0][2] === boardCell[2][0]) { //reverse diagonal
            winner = boardCell[1][1];
        } else {
            for (let i = 0; i < 3; i++) {
                if (boardCell[i][0] === boardCell[i][1] && boardCell[i][0] === boardCell[i][2]) { //horizontal
                    winner = boardCell[i][0];
                    break;
                }

                if (boardCell[0][i] === boardCell[1][i] && boardCell[0][i] === boardCell[2][i]) { //vertical
                    winner = boardCell[0][i];
                    break;
                }
            }
        }

        return winner;
    }

    noMoreTurns() { //turns
        let nullsCount = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[i][j] === null) nullsCount++;
            }
        }

        return nullsCount === 0;
    }

    isDraw() { //draw condition
        return this.isFinished() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) { //result
        return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
