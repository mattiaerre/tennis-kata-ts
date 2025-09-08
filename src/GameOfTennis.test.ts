import { GameOfTennis } from './GameOfTennis';

test('GameOfTennis is not null', () => {
  const game = new GameOfTennis();
  expect(game).not.toBe(null);
});
