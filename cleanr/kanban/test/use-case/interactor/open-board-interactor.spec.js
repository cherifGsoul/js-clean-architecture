const { expect } = require('chai');
const sinon = require('sinon');
const openBoard = require('../../../lib/use-case/interactor/open-board-interactor');
const makeBoardGateway = require('../../../lib/infrastructure/persistence/memory/board-gateway');


describe('open board use case', function (done) {
  
  beforeEach(function (done) {
    this.boardGateway = makeBoardGateway();
    done();
  });

  afterEach(function (done) {
    this.boardGateway.nextIdentity.restore();
    this.boardGateway.save.restore();
    done();
  });

  it('delegates persistence to gateway', function (done) {
    const nextIdentity = sinon.spy(this.boardGateway, "nextIdentity");
    const save = sinon.spy(this.boardGateway, "save");
    const openBoardService = openBoard(this.boardGateway);
    openBoardService({title: 'Board foo'});
    expect(nextIdentity.called).to.be.true;
    expect(save.called).to.be.true;
    done();
  });
});