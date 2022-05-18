<script lang="ts" setup>
import { MazeCell } from '~~/lib/maze';

const props = defineProps<{
  cell: MazeCell
}>();
</script>

<template>
  <td
    class="cell"
    :class="{ up: cell.up, down: cell.down, left: cell.left, right: cell.right }"
  >
  </td>
</template>

<style scoped>
.cell {
  width: 30px;
  height: 30px;
  border: 1px solid black;
}
.up {
  border-top-width: 0;
}
.down {
  border-bottom-width: 0;
}
.left {
  border-left-width: 0;
}
.right {
  border-right-width: 0;
}
</style>
