<script lang="ts" setup>
import { ref, watch, toRefs } from 'vue';
import { Maze, MazeGenerator } from '@/lib/maze';
import MazeCell from './MazeCell.vue';

const props = defineProps<{
  cols: number,
  rows: number,
  cellSize: number,
  seed: string
}>();
const { cols, rows, cellSize, seed } = toRefs(props);

const maze = ref<Maze>();
const mazeGenerator = new MazeGenerator();

watch([ cols, rows, seed ], () => {
  if (cols.value > 0 && rows.value > 0) {
    maze.value = mazeGenerator.generate({ width: cols.value, height: rows.value, seed: seed.value });
  }
}, { immediate: true });
</script>

<template>
  <table v-if="maze" class="maze">
    <tbody>
      <tr v-for="y in rows" :key="y">
        <MazeCell v-for="x in cols" :key="x" :cell="maze?.cells[x-1][y-1]" :size="cellSize" />
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.maze {
  background: white;
  border-collapse: collapse;
}
</style>
