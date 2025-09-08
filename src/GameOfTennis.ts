const PLAYER_1: string = 'Player 1';
const PLAYER_2: string = 'Player 2';

type Player = typeof PLAYER_1 | typeof PLAYER_2;

export class GameOfTennis {
  _points = ['Love', '15', '30', '40'];
  _p1 = 0;
  _p2 = 0;

  pointTo(player: Player): void {
    if (player === PLAYER_1) {
      this._p1 += 1;
    } else {
      this._p2 += 1;
    }
  }

  score(): string {
    if (this._p1 === 4) {
      return `${PLAYER_1} wins`;
    }
    if (this._p2 === 4) {
      return `${PLAYER_2} wins`;
    }
    if (this._p1 === 3 && this._p2 === 3) {
      return 'Deuce';
    }

    return `${this._points[this._p1]}-${this._points[this._p2]}`;
  }
}
