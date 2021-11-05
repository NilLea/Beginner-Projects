// All code should be written in this file.
let playerOneMoveOneType,
    playerOneMoveTwoType,
    playerOneMoveThreeType,
    playerTwoMoveOneType,
    playerTwoMoveTwoType,
    playerTwoMoveThreeType,
    playerOneMoveOneValue,
    playerOneMoveTwoValue,
    playerOneMoveThreeValue,
    playerTwoMoveOneValue,
    playerTwoMoveTwoValue,
    playerTwoMoveThreeValue,
    playerOneWins,
    playerTwoWins;

    /* Create setPlayerMoves() and pass in parameters: player, moveOneType, moveOneValue, moveTwotype, moveTwoValue, moveThreeType,
    moveThreeValue */

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType,
    moveThreeValue) {
        // Create failfast return if any of the values are not provided 
        if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
            return;
        }

        if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType) ) {
            return;
        }

        if (!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)) {
            return;
        }

        if ((moveOneValue + moveTwoValue + moveThreeValue) > 99 ) {
            return;
        }

        if (player === 'Player One') {
            playerOneMoveOneType = moveOneType;
            playerOneMoveOneValue= moveOneValue;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeType = moveThreeType;
            playerOneMoveThreeValue = moveThreeValue;
        } else if (player === 'Player Two') {
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeType = moveThreeType; 
            playerTwoMoveThreeValue = moveThreeValue;  
        }
    }
    /* create a helper function isValidMoveType() with parameter moveType to validate value of 'rock', 'paper' or 'scissors';
    */
        function isValidMoveType (moveType) {
            return (moveType === 'rock') || (moveType === 'paper') || (moveType === 'scissors');
        }

   /* create a helper function isValidMoveValue() with parameter moveValue thats between 1 and 99 (1<= x <=99) */

        function isValidMoveValue (moveValue) {
            return (moveValue >= 1) && (moveValue <= 99);
         }
    
    function getRoundWinner(roundNumber) {
        /* create a switch statement that takes parameter roundNumber that checks for a matching case of 1 2 or 3 */
        switch (roundNumber) {
            case 1:
                return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);

            case 2:
                return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);

            case 3:
                return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
            default:
                return null;
        } 
    }
 
    function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {
        if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
            return null;
        }

        if (playerOneMoveType === playerTwoMoveType) {
            if (playerOneMoveValue > playerTwoMoveValue) {
                return 'Player One';
            } else if(playerOneMoveValue < playerTwoMoveValue){
                return 'Player Two';
            } else {
                return 'Tie';
            }
        }
        if (playerOneMoveType === 'rock') {
            if (playerTwoMoveType === 'scissors') {
                return 'Player One';
            } else {
                return 'Player Two';
            }
        }
        if (playerOneMoveType === 'paper') {
            if (playerTwoMoveType === 'rock') {
                return 'Player One';
            } else {
                return 'Player Two';
            }
        }
        if (playerOneMoveType === 'scissors') {
            if (playerTwoMoveType === 'paper') {
                return 'Player One';
            } else {
                return 'Player Two';
            }
        }
    }

    function getGameWinner() {
        if(!playerOneMoveOneType ||
            !playerOneMoveTwoType ||
            !playerOneMoveThreeType ||
            !playerTwoMoveOneType ||
            !playerTwoMoveTwoType ||
            !playerTwoMoveThreeType ||
            !playerOneMoveOneValue ||
            !playerOneMoveTwoValue ||
            !playerOneMoveThreeValue ||
            !playerTwoMoveOneValue ||
            !playerTwoMoveTwoValue ||
            !playerTwoMoveThreeValue) {
                return null;
            }
    // set playerOneWins and playerTwoWins equal to 0
    playerOneWins = 0;
    playerTwoWins = 0;

    const roundOneWinner = getRoundWinner(1);
    const roundTwoWinner = getRoundWinner(2);
    const roundThreeWinner = getRoundWinner(3);

    addWin(roundOneWinner);
    addWin(roundTwoWinner);
    addWin(roundThreeWinner);

    if (playerOneWins > playerTwoWins){
        return 'Player One';
    } else if ( playerOneWins < playerTwoWins) {
        return 'Player Two';
    } else {
        return 'Tie';
    }
    }

    function addWin(winner) {
        if (winner === 'Player One') {
            playerOneWins = (playerOneWins + 1) || 1;
        } else if (winner === 'Player Two') {
            playerTwoWins = (playerTwoWins +1) || 1;
        }
    }

    function setComputerMoves () {
        const moves = ['rock', 'scissors', 'paper'];

        const moveOneType = moves[Math.floor(Math.random()*3)];
        const moveTwoType = moves[Math.floor(Math.random()*3)];    
        const moveThreeType = moves[Math.floor(Math.random()*3)];    

        const moveOneValue = Math.floor(Math.random()*96) + 1;
        const moveTwoValue = Math.floor(Math.random()*(97- moveOneValue)) + 1;
        const moveThreeValue = 99 - moveOneValue - moveTwoValue;

        setPlayerMoves('Player Two',moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);
    }