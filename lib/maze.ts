import seedrandom from 'seedrandom';
import { shuffle } from './array';

export enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down',
}

export class MazeCell {
  [Direction.UP] = false;
  [Direction.DOWN] = false;
  [Direction.RIGHT] = false;
  [Direction.LEFT] = false;

  constructor(public x: number, public y: number) {}

  get visited() {
    return this[Direction.UP] || this[Direction.DOWN] || this[Direction.LEFT] || this[Direction.RIGHT];
  }
}

const DirectionOposites = {
  [Direction.UP]: Direction.DOWN,
  [Direction.DOWN]: Direction.UP,
  [Direction.RIGHT]: Direction.LEFT,
  [Direction.LEFT]: Direction.RIGHT,
};

export class MazeGenerator {
  cells: MazeCell[][] = null;

  constructor(private width: number, private height: number) {
    this.cells = Array.from(Array(this.width), (_v, x) =>
      Array.from(Array(this.height), (_v, y) => new MazeCell(x, y))
    );
  }

  generateRecursive(x = 0, y = 0) {
    const cell = this.cells[x][y];
    const directions = this.getAvailableDirections(x, y);
    shuffle(directions);

    directions.forEach((direction) => {
      const neighbourCell = this.getNeighbourCell(x, y, direction);
      if (!neighbourCell.visited) {
        cell[direction] = true;
        neighbourCell[DirectionOposites[direction]] = true;
        this.generate(neighbourCell.x, neighbourCell.y);
      }
    });
  }

  generate(startingX = 0, startingY = 0) {
    const path = [this.cells[startingX][startingY]];

    while (path.length) {
      const cell = path[path.length - 1];
      const directions = this.getAvailableDirections(cell.x, cell.y)
        .filter(direction => !this.getNeighbourCell(cell.x, cell.y, direction).visited);

      if (!directions.length) {
        path.pop();
        continue;
      }

      const direction = shuffle(directions)[0];

      cell[direction] = true;
      const nextCell = this.getNeighbourCell(cell.x, cell.y, direction);
      nextCell[DirectionOposites[direction]] = true;
      path.push(nextCell);
    }
  }

  getAvailableDirections(x: number, y: number) {
    return [
      ...(x > 0 ? [Direction.LEFT] : []),
      ...(x < this.width - 1 ? [Direction.RIGHT] : []),
      ...(y > 0 ? [Direction.UP] : []),
      ...(y < this.height - 1 ? [Direction.DOWN] : []),
    ];
  }

  getNeighbourCell(x: number, y: number, direction: Direction) {
    const [newX, newY] = this.getNeighbourCoordinates(x, y, direction);
    return this.cells[newX][newY];
  }

  getNeighbourCoordinates(x: number, y: number, direction: Direction) {
    let newX = x;
    let newY = y;

    switch (direction) {
      case Direction.LEFT:
        newX--;
        break;
      case Direction.RIGHT:
        newX++;
        break;
      case Direction.UP:
        newY--;
        break;
      case Direction.DOWN:
        newY++;
        break;
    }

    return [newX, newY];
  }

  toString() {
    let output = ' ' + Array(this.width * 2 - 1).fill('_').join('') + '\n';

    for (let y = 0; y < this.height; y++) {
      output += '|';
      for (let x = 0; x < this.width; x++) {
        const cell = this.cells[x][y];
        output += !cell.down ? '_' : ' ';
        output += !cell.right ? '|' : ' ';
      }
      output += '\n';
    }

    return output;
  }
}
