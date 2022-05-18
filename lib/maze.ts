import {shuffle} from "./array";

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
    this.cells = Array.from(Array(this.width), () =>
      Array.from(Array(this.height), () => new MazeCell())
    );
  }

  generate(x: number = 0, y: number = 0) {
    const cell = this.cells[x][y];
    const directions = this.getAvailableDirections(x, y);
    shuffle(directions);

    directions.forEach(direction => {
      const neighbourCell = this.getNeighbourCell(x, y, direction);
      if (!neighbourCell.visited) {
        cell[direction] = true;
        neighbourCell[DirectionOposites[direction]] = true;
        const [newX, newY] = this.getNeighbourCoordinates(x, y, direction)
        this.generate(newX, newY);
      }
    });
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

    switch(direction) {
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
}
