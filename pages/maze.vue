<script lang="ts" setup>
const cols = ref('20');
const rows = ref('20');
const cellSize = ref('20');
</script>

<template>
  <article class="container mx-auto">
    <div>
      Cols <FormInput type="number" v-model="cols" />
    </div>
    <div>
      Rows <FormInput type="number" v-model="rows" />
    </div>
    <div>
      Cell size <FormInput type="number" v-model="cellSize" />
    </div>

    <MazeGenerator
      class="mx-auto"
      :cols="parseInt(cols)"
      :rows="parseInt(rows)"
      :cellSize="parseInt(cellSize)"
    />
  </article>
</template>
