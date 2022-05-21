<script lang="ts" setup>
const props = withDefaults(defineProps<{
  type: string,
  modelValue: string,
}>(), {
  type: 'text',
  modelValue: '',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void,
}>();
</script>

<template>
  <input :type="props.type" :value="modelValue" @input="emit('update:modelValue', $event.target.value)" />
</template>
