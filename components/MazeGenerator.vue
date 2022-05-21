<script lang="ts" setup>
import { MazeGenerator } from '~/lib/maze';
const props = defineProps<{
  cols: number,
  rows: number,
  cellSize: number,
}>();
let maze = ref(null);
watch(props, () => {
  if (props.cols > 0 && props.rows > 0) {
    maze.value = new MazeGenerator(props.cols, props.rows);
    maze.value.generate();
  }
}, { immediate: true});
</script>

<template>
  <table v-if="maze">
    <tbody>
      <tr v-for="y in props.rows">
        <MazeCell v-for="x in props.cols" :cell="maze.cells[x-1][y-1]" :size="props.cellSize" />
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border: 1px solid black;
}
</style>
