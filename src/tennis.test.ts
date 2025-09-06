import { TennisGame } from './tennis';

describe('Tennis Kata', () => {
  test('Love-All at start', () => {
    const g = new TennisGame();
    expect(g.score()).toBe('Love-All');
  });

  test('Fifteen-Love when player1 wins first point', () => {
    const g = new TennisGame();
    g.wonPoint('player1');
    expect(g.score()).toBe('Fifteen-Love');
  });

  test('Thirty-Fifteen mid-game', () => {
    const g = new TennisGame();
    g.wonPoint('player1'); // 15-0
    g.wonPoint('player1'); // 30-0
    g.wonPoint('player2'); // 30-15
    expect(g.score()).toBe('Thirty-Fifteen');
  });

  test('Deuce at 3-3 and beyond', () => {
    const g = new TennisGame();
    for (let i = 0; i < 3; i++) {
      g.wonPoint('player1');
      g.wonPoint('player2');
    }
    expect(g.score()).toBe('Deuce');
    g.wonPoint('player1'); // Adv p1
    g.wonPoint('player2'); // back to Deuce
    expect(g.score()).toBe('Deuce');
  });

  test('Advantage / Win states', () => {
    const g = new TennisGame();
    // reach 3-3
    for (let i = 0; i < 3; i++) {
      g.wonPoint('player1');
      g.wonPoint('player2');
    }
    g.wonPoint('player1');
    expect(g.score()).toBe('Advantage player1');
    g.wonPoint('player1');
    expect(g.score()).toBe('Win for player1');
  });
});
