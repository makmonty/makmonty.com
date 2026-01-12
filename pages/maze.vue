<script lang="ts" setup>
const router = useRouter();
const route = useRoute();

const cols = ref(parseInt(route.query.cols as string) || 20);
const rows = ref(parseInt(route.query.rows as string) || 20);
const seed = ref((route.query.seed as string) || '');
const cellSize = ref('20');

watch([ cols, rows, seed ], () => {
  router.replace({ query: { cols: cols.value, rows: rows.value, seed: seed.value } });
}, { immediate: true });
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
      class="mx-auto"
      :cols="parseInt(cols)"
      :rows="parseInt(rows)"
      :cell-size="parseInt(cellSize)"
      :seed="seed"
    />
  </article>
</template>

<style lang="scss">
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
</style>
