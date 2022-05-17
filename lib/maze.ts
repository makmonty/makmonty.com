export enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down',
}

export class MazeCell {
  [Direction.UP]: boolean = false;
  [Direction.DOWN]: boolean = false;
  [Direction.RIGHT]: boolean = false;
  [Direction.LEFT]: boolean = false;
}

export class Maze {

  cells: MazeCell[][] = null;

  constructor(private width: number, private height: number) {
    this.cells = Array.from(Array(this.width), () =>
      Array(this.height).fill(null)
    );
  }

  generate() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const cell = new MazeCell();
        if (x < this.width - 1) {
          cell.right = true;
        }
        if (x > 0) {
          cell.left = true;
        }
        if (y < this.height - 1) {
          cell.down = true;
        }
        if (y > 0) {
          cell.up = true;
        }
        this.cells[x][y] = cell;
      }
    }
  }

  iterate(x: number, y: number) {
    const cell = this.cells[x][y];

    const neighbours = this.getNeighbours(x, y);

    if (neighbours.length) {
      const nextIndex = Math.floor(Math.random() * neighbours.length);
      const nextKey = neighbours[nextIndex];
      cell[nextKey] = true;
      return
    }
    return null;
  }

  getNeighbours(x: number, y: number) {
    return [
      ...(x > 0 ? [Direction.LEFT] : []),
      ...(x < this.width - 1 ? [Direction.RIGHT] : []),
      ...(y > 0 ? [Direction.UP] : []),
      ...(y < this.height - 1 ? [Direction.DOWN] : []),
    ];
  }
}
