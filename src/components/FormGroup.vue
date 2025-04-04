<script lang="ts" setup>
import { toRefs } from 'vue';

const props = defineProps<{
  label?: string,
  labelClass?: string,
  inline?: boolean,
}>();
const { label, labelClass, inline } = toRefs(props);
</script>

<template>
  <div class="form-group" :class="inline ? 'inline' : ''">
    <label class="form-group-label" v-if="label" :class="labelClass">
      <span>{{ label }}</span>
      <slot />
    </label>
    <slot v-else />
  </div>
</template>

<style scoped>
.form-group {
  display: block;
  margin: 15px 0;


  > label {
    display: block;

    span:first-child {
      display: block;
    }
  }

  &.inline {
    > label {
      display: flex;
      flex-direction: row;

      > * {
        flex-grow: 1;
      }

      span:first-child {
        padding-right: 15px;
      }
    }
  }

  > :is(input:is([type="text"],[type="number"],[type="email"]), textarea) {
    width: 100%;
  }
}
</style>
