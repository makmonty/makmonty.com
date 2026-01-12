<script lang="ts" setup>
import { ref } from 'vue'
import FormGroup from '../FormGroup.vue'
import FormInput from '../FormInput.vue'
import MazeGenerator from './MazeGenerator.vue'

const cols = ref('20');
const rows = ref('20');
const seed = ref('');
const cellSize = ref('20');
</script>

<template>
  <article class="container mx-auto">
    <section class="maze-config">
      <FormGroup label="Cols" label-class="maze-label" inline>
        <FormInput v-model="cols" type="number" />
      </FormGroup>
      <FormGroup label="Rows" label-class="maze-label" inline>
        <FormInput v-model="rows" type="number" />
      </FormGroup>
      <FormGroup label="Seed" label-class="maze-label" inline>
        <FormInput v-model="seed" type="text" />
      </FormGroup>
      <FormGroup label="Cell size" label-class="maze-label" inline>
        <FormInput v-model="cellSize" type="number" />
      </FormGroup>
    </section>

    <MazeGenerator
      class="maze"
      :cols="parseInt(cols)"
      :rows="parseInt(rows)"
      :cell-size="parseInt(cellSize)"
      :seed="seed"
    />
  </article>
</template>

<style scoped>
.maze-config {
  padding-bottom: 32px;

  .form-group {
    width: 300px;
    margin-left: auto;
    margin-right: auto;

    .maze-label {
      > span {
        flex-grow: 0;
        width: 100px;
      }
    }
  }
}

.maze {
  margin: 0 auto;
}
</style>
