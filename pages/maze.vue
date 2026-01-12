<script lang="ts" setup>
const cols = ref('20');
const rows = ref('20');
const cellSize = ref('20');
const seed = ref('');
</script>

<template>
  <article class="container mx-auto">
    <FormGroup label="Cols" inline>
      <FormInput v-model="cols" type="number" />
    </FormGroup>
    <FormGroup label="Rows" inline>
      <FormInput v-model="rows" type="number" />
    </FormGroup>
    <FormGroup label="Cell size" inline>
      <FormInput v-model="cellSize" type="number" />
    </FormGroup>
    <FormGroup label="Seed" inline>
      <FormInput v-model="seed" type="number" />
    </FormGroup>

    <MazeGenerator
      class="mx-auto"
      :cols="parseInt(cols)"
      :rows="parseInt(rows)"
      :cell-size="parseInt(cellSize)"
      :seed="seed"
    />
  </article>
</template>
