<script lang="ts" setup>
import { toRefs } from 'vue';
import { MazeCell } from '@/lib/maze';

const props = defineProps<{
  cell: MazeCell,
  size: number,
}>();

const { size } = toRefs(props);
</script>

<template>
  <td
    class="cell"
    :class="{ up: cell.up, down: cell.down, left: cell.left, right: cell.right }"
    :style="{ width: size + 'px', height: size + 'px' }"
  >
  </td>
</template>

<style scoped>
.cell {
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
