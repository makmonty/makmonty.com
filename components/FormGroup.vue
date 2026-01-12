<script lang="ts" setup>
const props = defineProps<{
  label?: string,
  inline?: boolean,
}>();
const { label, inline } = toRefs(props);
console.log(inline);
</script>

<template>
  <div class="form-group" :class="inline ? 'inline' : ''">
    <label v-if="label">
      <span>{{ label }}</span>
      <slot />
    </label>
    <slot v-else />
  </div>
</template>
