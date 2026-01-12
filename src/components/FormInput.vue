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
  border: 1px solid #aaa;
  padding: 3px 9px;
}

input:is([type="text"],[type="number"],[type="email"]) {
  border-radius: 10em;
}
</style>
