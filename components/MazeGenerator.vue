<script setup>
import {Maze} from '~~/lib/maze';

const maze = new Maze(3, 3);
maze.generate();
</script>

<template>
  <div>
    <table>
      <tr v-for="rows in maze.cells"></tr>
    </table>
  </div>
</template>
