import seedrandom from 'seedrandom';

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

  toString() {
    let output = !this.down ? '_' : ' ';
    output += !this.right ? '|' : ' ';
    return output;
  }
}

const DirectionOposites = {
  [Direction.UP]: Direction.DOWN,
  [Direction.DOWN]: Direction.UP,
  [Direction.RIGHT]: Direction.LEFT,
  [Direction.LEFT]: Direction.RIGHT,
};

export class Maze {
  cells: MazeCell[][] = null;

  constructor(public width: number, public height: number) {
    this.cells = Array.from(Array(width), (_v, x) =>
      Array.from(Array(height), (_v, y) => new MazeCell(x, y))
    );
  }

  getAvailableDirections(x: number, y: number) {
    return [
      ...(x > 0 ? [ Direction.LEFT ] : []),
      ...(x < this.width - 1 ? [ Direction.RIGHT ] : []),
      ...(y > 0 ? [ Direction.UP ] : []),
      ...(y < this.height - 1 ? [ Direction.DOWN ] : []),
    ];
  }

  getNeighbourCell(x: number, y: number, direction: Direction) {
    const [ newX, newY ] = this.getNeighbourCoordinates(x, y, direction);
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

    return [ newX, newY ];
  }

  toString() {
    let output = ' ' + Array(this.width * 2 - 1).fill('_').join('') + '\n';

    for (let y = 0; y < this.height; y++) {
      output += '|';
      for (let x = 0; x < this.width; x++) {
        output += this.cells[x][y].toString();
      }
      output += '\n';
    }

    return output;
  }
}

export interface MazeGenerationOptions {
  seed?: string;
  width?: number;
  height?: number;
}

export class MazeGenerator {
  generate({
    width = 1,
    height = 1,
    seed
  }: MazeGenerationOptions = {}) {
    const maze = new Maze(width, height);
    const random = seedrandom(seed);
    const startingX = Math.floor(random() * width);
    const startingY = Math.floor(random() * height);
    const path = [ maze.cells[startingX][startingY] ];

    while (path.length) {
      const cell = path[path.length - 1];
      const directions = maze.getAvailableDirections(cell.x, cell.y)
        .filter(direction => !maze.getNeighbourCell(cell.x, cell.y, direction).visited);

      if (!directions.length) {
        path.pop();
        continue;
      }

      const randomDirectionIndex = Math.floor(random() * directions.length);

      const direction = directions[randomDirectionIndex];

      cell[direction] = true;
      const nextCell = maze.getNeighbourCell(cell.x, cell.y, direction);
      nextCell[DirectionOposites[direction]] = true;
      path.push(nextCell);
    }

    return maze;
  }
}
