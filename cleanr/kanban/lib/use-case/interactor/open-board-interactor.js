const openBoard = require('../../domain/model/board/board');

module.exports = (boardGateway) => {
  return ({title}) => {
    const board = openBoard(boardGateway.nextIdentity(), title);
    boardGateway.save(board);
    return board;
  }
}