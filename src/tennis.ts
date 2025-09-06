export type Player = 'player1' | 'player2';

const pointsToName = (p: number): string => {
  switch (p) {
    case 0:
      return 'Love';
    case 1:
      return 'Fifteen';
    case 2:
      return 'Thirty';
    case 3:
      return 'Forty';
    default:
      return '';
  }
};

export class TennisGame {
  private p1 = 0;
  private p2 = 0;

  score(): string {
    if (this.p1 === this.p2) {
      if (this.p1 >= 3) return 'Deuce';
      return `${pointsToName(this.p1)}-All`;
    }

    if (this.p1 >= 4 || this.p2 >= 4) {
      const diff = this.p1 - this.p2;
      if (diff === 1) return 'Advantage player1';
      if (diff === -1) return 'Advantage player2';
      if (diff >= 2) return 'Win for player1';
      return 'Win for player2';
    }

    return `${pointsToName(this.p1)}-${pointsToName(this.p2)}`;
  }

  wonPoint(player: Player): void {
    if (player === 'player1') this.p1 += 1;
    else this.p2 += 1;
  }
}
