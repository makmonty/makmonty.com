<script lang="ts" setup>
const cols = ref('20');
const rows = ref('20');
const cellSize = ref('20');
const seed = ref('');
</script>

<template>
  <article class="container mx-auto">
    <div>
      Cols <FormInput v-model="cols" type="number" />
    </div>
    <div>
      Rows <FormInput v-model="rows" type="number" />
    </div>
    <div>
      Cell size <FormInput v-model="cellSize" type="number" />
    </div>
    <div>
      Seed <FormInput v-model="seed" type="number" />
    </div>

    <MazeGenerator
      class="mx-auto"
      :cols="parseInt(cols)"
      :rows="parseInt(rows)"
      :cell-size="parseInt(cellSize)"
      :seed="seed"
    />
  </article>
</template>
