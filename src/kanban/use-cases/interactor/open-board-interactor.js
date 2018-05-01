const makeBoard = require('../../domain/model/board/board');

module.exports = (boardGateway) => {
  return ({title}) => {
    const board = makeBoard(boardGateway.nextIdentity(), title);
    boardGateway.save(board);
    return board;
  }
}