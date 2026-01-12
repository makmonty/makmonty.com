<script lang="ts" setup>
import { MazeGenerator } from '~/lib/maze';
const props = defineProps<{
  cols: number,
  rows: number,
}>();
const maze = new MazeGenerator(props.cols, props.rows);
maze.generate();
</script>

<template>
  <table>
    <tbody>
      <tr v-for="y in maze.cells[0].length">
        <MazeCell v-for="x in maze.cells.length" :cell="maze.cells[x-1][y-1]" />
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border: 1px solid black;
}
</style>
