const uuidv4 = require('uuid/v4');

module.exports = () => {
  const boards = [];
  return {
    nextIdentity() {
      return uuidv4();
    },
    save(board) {
      boards.push(board);
    }
  }
}