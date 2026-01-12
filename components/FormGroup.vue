<script lang="ts" setup>
const props = defineProps<{
  label?: string,
  labelClass?: string,
  inline?: boolean,
}>();
const { label, labelClass, inline } = toRefs(props);
</script>

<template>
  <div class="form-group" :class="inline ? 'inline' : ''">
    <label v-if="label" :class="labelClass">
      <span>{{ label }}</span>
      <slot />
    </label>
    <slot v-else />
  </div>
</template>
