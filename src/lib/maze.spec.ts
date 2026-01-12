import { describe, test, expect } from 'vitest';
import { MazeGenerator } from './maze';

describe('MazeGenerator', () => {

  describe('#generate', () => {
    test('it creates a MxN maze', () => {
      const generator = new MazeGenerator();
      const maze = generator.generate({
        width: 2,
        height: 3,
        seed: ''
      });
      expect(maze.cells.length).toBe(2);
      expect(maze.cells[0].length).toBe(3);
    });

    test('it links the left cell to the right cell in a 2x1 maze', () => {
      const generator = new MazeGenerator();
      const maze = generator.generate({
        width: 2,
        height: 1,
        seed: ''
      });

      expect(maze.cells[0][0].right).toBeTruthy();
      expect(maze.cells[0][0].left).toBeFalsy();
      expect(maze.cells[0][0].up).toBeFalsy();
      expect(maze.cells[0][0].down).toBeFalsy();
      expect(maze.cells[1][0].left).toBeTruthy();
      expect(maze.cells[1][0].right).toBeFalsy();
      expect(maze.cells[1][0].up).toBeFalsy();
      expect(maze.cells[1][0].down).toBeFalsy();
    });

    test('it links the top cell to the bottom cell in a 1x2 maze', () => {
      const generator = new MazeGenerator();
      const maze = generator.generate({
        width: 1,
        height: 2,
        seed: ''
      });

      expect(maze.cells[0][0].right).toBeFalsy();
      expect(maze.cells[0][0].left).toBeFalsy();
      expect(maze.cells[0][0].up).toBeFalsy();
      expect(maze.cells[0][0].down).toBeTruthy();
      expect(maze.cells[0][1].left).toBeFalsy();
      expect(maze.cells[0][1].right).toBeFalsy();
      expect(maze.cells[0][1].up).toBeTruthy();
      expect(maze.cells[0][1].down).toBeFalsy();
    });

    test('it creates a C, with one wall, in a 2x2 maze', () => {
      const generator = new MazeGenerator();
      const maze = generator.generate({
        width: 2,
        height: 2,
        seed: ''
      });

      expect(maze.cells[0][0].right || maze.cells[0][0].down).toBeTruthy();
      expect(maze.cells[1][0].left || maze.cells[0][0].down).toBeTruthy();
      expect(maze.cells[0][1].right || maze.cells[0][0].up).toBeTruthy();
      expect(maze.cells[1][1].left || maze.cells[0][0].up).toBeTruthy();
      expect(!maze.cells[0][0].right || !maze.cells[0][0].down || !maze.cells[1][1].left || !maze.cells[1][1].up).toBeTruthy();
    });
  });

  describe('#getAvailableDirections', () => {
    test('it returns an empty array if the maze is 1x1', () => {
      const generator = new MazeGenerator();
      const maze = generator.generate({
        width: 1,
        height: 1,
        seed: ''
      });

      expect(maze.getAvailableDirections(0, 0)).toEqual([]);
    });

    test('it does not return left if the cell is in the left edge', () => {
      const generator = new MazeGenerator();
      const maze = generator.generate({
        width: 3,
        height: 3,
        seed: ''
      });

      const neighbours = maze.getAvailableDirections(0, 1);
      expect(neighbours).toContain('right');
      expect(neighbours).toContain('up');
      expect(neighbours).toContain('down');
      expect(neighbours).not.toContain('left');
      expect(neighbours).toHaveLength(3);
    });

    test('it does not return right if the cell is in the right edge', () => {
      const generator = new MazeGenerator();
      const maze = generator.generate({
        width: 3,
        height: 3,
        seed: ''
      });

      const neighbours = maze.getAvailableDirections(2, 1);
      expect(neighbours).toContain('left');
      expect(neighbours).toContain('up');
      expect(neighbours).toContain('down');
      expect(neighbours).not.toContain('right');
      expect(neighbours).toHaveLength(3);
    });

    test('it does not return up if the cell is in the top edge', () => {
      const generator = new MazeGenerator();
      const maze = generator.generate({
        width: 3,
        height: 3,
        seed: ''
      });

      const neighbours = maze.getAvailableDirections(1, 0);
      expect(neighbours).toContain('left');
      expect(neighbours).toContain('right');
      expect(neighbours).toContain('down');
      expect(neighbours).not.toContain('up');
      expect(neighbours).toHaveLength(3);
    });

    test('it does not return down if the cell is in the bottom edge', () => {
      const generator = new MazeGenerator();
      const maze = generator.generate({
        width: 3,
        height: 3,
        seed: ''
      });

      const neighbours = maze.getAvailableDirections(1, 2);
      expect(neighbours).toContain('left');
      expect(neighbours).toContain('right');
      expect(neighbours).toContain('up');
      expect(neighbours).not.toContain('down');
      expect(neighbours).toHaveLength(3);
    });

    test('it returns all sides if the cell is not in an edge', () => {
      const generator = new MazeGenerator();
      const maze = generator.generate({
        width: 3,
        height: 3,
        seed: ''
      });

      const neighbours = maze.getAvailableDirections(1, 1);
      expect(neighbours).toContain('left');
      expect(neighbours).toContain('right');
      expect(neighbours).toContain('up');
      expect(neighbours).toContain('down');
      expect(neighbours).toHaveLength(4);
    });
  });
});
