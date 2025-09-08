import { GameOfTennis } from './GameOfTennis';

test('The score is Love-Love', () => {
  const game = new GameOfTennis();
  expect(game.score()).toEqual('Love-Love');
});

test('When Player 1 gets the point, then the score is 15-Love', () => {
  const game = new GameOfTennis();
  game.pointTo('Player 1');
  expect(game.score()).toEqual('15-Love');
});

test('When Player 2 gets the point, then the score is Love-15', () => {
  const game = new GameOfTennis();
  game.pointTo('Player 2');
  expect(game.score()).toEqual('Love-15');
});

test('P1 P1, then the score is 30-Love', () => {
  const game = new GameOfTennis();
  game.pointTo('Player 1');
  game.pointTo('Player 1');
  expect(game.score()).toEqual('30-Love');
});

test('P1 P2 P1, then the score is 30-15', () => {
  const game = new GameOfTennis();
  game.pointTo('Player 1');
  game.pointTo('Player 2');
  game.pointTo('Player 1');
  expect(game.score()).toEqual('30-15');
});

test('P1 P1 P1 P1, then the score is Player 1 wins', () => {
  const game = new GameOfTennis();
  game.pointTo('Player 1');
  game.pointTo('Player 1');
  game.pointTo('Player 1');
  game.pointTo('Player 1');
  expect(game.score()).toEqual('Player 1 wins');
});

test('P2 P2 P2 P2, then the score is Player 2 wins', () => {
  const game = new GameOfTennis();
  game.pointTo('Player 2');
  game.pointTo('Player 2');
  game.pointTo('Player 2');
  game.pointTo('Player 2');
  expect(game.score()).toEqual('Player 2 wins');
});

test('P1 P2 P1 P2 P1 P2, then the score is Deuce', () => {
  const game = new GameOfTennis();
  game.pointTo('Player 1');
  game.pointTo('Player 2');
  game.pointTo('Player 1');
  game.pointTo('Player 2');
  game.pointTo('Player 1');
  game.pointTo('Player 2');
  expect(game.score()).toEqual('Deuce');
});
