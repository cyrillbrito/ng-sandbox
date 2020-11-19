import { Component, OnInit } from '@angular/core';

interface Cell {
  value?: number;
  canBe?: [boolean, boolean, boolean, boolean];
  foundCombR?: [number, number, number, number];
  foundComb?: [number, number, number, number];
  percentage?: string;
}

@Component({
  selector: 'app-voltorb',
  templateUrl: './voltorb.component.html',
  styleUrls: ['./voltorb.component.css']
})
export class VoltorbComponent implements OnInit {

  public board: Cell[][];
  public rowCoins: Cell[];
  public colCoins: Cell[];
  public rowBombs: Cell[];
  public colBombs: Cell[];

  public ngOnInit(): void {
    this.reset();
  }

  public reset(): void {

    this.board = [];
    for (let rIndex = 0; rIndex < 5; rIndex++) {
      this.board[rIndex] = [];
      for (let cIndex = 0; cIndex < 5; cIndex++) {
        this.board[rIndex][cIndex] = {
          canBe: [true, true, true, true],
          foundComb: [0, 0, 0, 0],
          foundCombR: [0, 0, 0, 0],
        };
      }
    }

    if (!this.rowBombs) {
      this.rowCoins = [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }];
      this.colCoins = [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }];
      this.rowBombs = [{ value: 5 }, { value: 5 }, { value: 5 }, { value: 5 }, { value: 5 }];
      this.colBombs = [{ value: 5 }, { value: 5 }, { value: 5 }, { value: 5 }, { value: 5 }];
    }
  }

  public brute(): void {

    const flat: Cell[] = [];
    for (let rIndex = 0; rIndex < 5; rIndex++) {
      for (let cIndex = 0; cIndex < 5; cIndex++) {
        const cell = this.board[rIndex][cIndex];
        cell.foundComb = [0, 0, 0, 0];
        flat.push(cell);
      }
    }

    for (let rIndex = 0; rIndex < 5; rIndex++) {
      for (let cIndex = 0; cIndex < 5; cIndex++) {
        const cell = this.board[rIndex][cIndex];

        cell.canBe = cell.foundComb.map(x => !!x) as any;
        if (cell.canBe.filter(x => x).length === 1) {
          cell.value = cell.canBe.indexOf(true);
        }
      }
    }
  }

  public compute(): void {

    for (let rIndex = 0; rIndex < 5; rIndex++) {
      const cells = this.board[rIndex];
      this.updateCanBeNumbers(cells, this.rowBombs[rIndex].value, this.rowCoins[rIndex].value);
      for (const cell of cells) {
        cell.foundCombR = cell.foundComb;
      }
    }

    for (let rIndex = 0; rIndex < 5; rIndex++) {
      const cells = [
        this.board[0][rIndex],
        this.board[1][rIndex],
        this.board[2][rIndex],
        this.board[3][rIndex],
        this.board[4][rIndex],
      ];
      this.updateCanBeNumbers(cells, this.colBombs[rIndex].value, this.colCoins[rIndex].value);
    }

    for (let rIndex = 0; rIndex < 5; rIndex++) {
      for (let cIndex = 0; cIndex < 5; cIndex++) {
        const cell = this.board[rIndex][cIndex];
        if (!cell.value) {
          const total1 = cell.foundComb[0] + cell.foundComb[1] + cell.foundComb[2] + cell.foundComb[3]
          const total2 = cell.foundCombR[0] + cell.foundCombR[1] + cell.foundCombR[2] + cell.foundCombR[3];
          const p1 = cell.foundComb[0] / total1;
          const p2 = cell.foundCombR[0] / total2;
          const p = ((p1 + p2) / 2) * 100;
          cell.percentage = p.toFixed(2);
        }
      }
    }

  }

  private updateCanBeNumbers(cells: Cell[], bombs: number, coins: number): void {

    for (const cell of cells) {
      cell.foundComb = [0, 0, 0, 0];
    }

    this.findComb(cells, 0, coins, bombs, []);

    for (const cell of cells) {
      if (cell.value == null) {
        cell.canBe = cell.foundComb.map(x => !!x) as any;
        if (cell.canBe.filter(x => x).length === 1) {
          cell.value = cell.canBe.indexOf(true);
        }
      }
    }
  }

  private findComb(cells: Cell[], index: number, coins: number, bombs: number, paths: number[]): boolean {

    if (index === 4) {
      return this.lastCellComb(cells, coins, bombs, paths);
    }

    const cell = cells[index];
    index++;

    if (cell.value) {

      if (cell.value === 0) {
        if (bombs) {
          return this.findComb(cells, index, coins, bombs - 1, [...paths, 0]);
        } else {
          return false;
        }
      }

      if (coins - cell.value >= 0) {
        return this.findComb(cells, index, coins - cell.value, bombs, [...paths, cell.value]);
      } else {
        return false;
      }
    }

    let result = false;

    if (cell.canBe[0] && bombs) {
      result = this.findComb(cells, index, coins, bombs - 1, [...paths, 0]) || result;
    }

    if (cell.canBe[1] && coins >= 1) {
      result = this.findComb(cells, index, coins - 1, bombs, [...paths, 1]) || result;
    }

    if (cell.canBe[2] && coins >= 2) {
      result = this.findComb(cells, index, coins - 2, bombs, [...paths, 2]) || result;
    }

    if (cell.canBe[3] && coins >= 3) {
      result = this.findComb(cells, index, coins - 3, bombs, [...paths, 3]) || result;
    }

    return result;
  }

  private lastCellComb(cells: Cell[], coins: number, bombs: number, paths: number[]): boolean {

    const cell = cells[4];

    if (cell.value != null) {
      if (coins - cell.value === 0 && ((bombs === 0 && cell.value !== 0) || (bombs === 1 && cell.value === 0))) {
        this.increaseComb(cells, [...paths, cell.value]);
        return true;
      } else {
        return false;
      }
    }

    if (cell.canBe[0] && bombs === 1 && coins === 0) {
      this.increaseComb(cells, [...paths, 0]);
      return true;
    }

    if (bombs) {
      return false;
    }

    if (cell.canBe[1] && coins === 1) {
      this.increaseComb(cells, [...paths, 1]);
      return true;
    }

    if (cell.canBe[2] && coins === 2) {
      this.increaseComb(cells, [...paths, 2]);
      return true;
    }

    if (cell.canBe[3] && coins === 3) {
      this.increaseComb(cells, [...paths, 3]);
      return true;
    }

    return false;
  }

  private increaseComb(cells: Cell[], paths: number[]): void {
    for (let i = 0; i < 5; i++) {
      cells[i].foundComb[paths[i]]++;
    }
  }

}
