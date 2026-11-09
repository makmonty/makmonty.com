<script lang="ts" setup>
const props = withDefaults(defineProps<{
  type: string,
  modelValue: string | number,
}>(), {
  type: 'text',
  modelValue: '',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void,
}>();
</script>

<template>
  <input :type="props.type" :value="modelValue" @input="emit('update:modelValue', $event.target?.value)">
</template>

<style scoped>
input:is([type="text"],[type="number"],[type="email"]) {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  padding: 8px 14px;
  background: var(--bg-secondary-color);
  color: var(--fg-color);
  font: inherit;
  font-size: 0.9rem;
  transition: border-color var(--transition), box-shadow var(--transition);
}

input:is([type="text"],[type="number"],[type="email"]):focus-visible {
  outline: none;
  border-color: var(--acid);
}
</style>
