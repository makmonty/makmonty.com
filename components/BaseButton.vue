<template>
  <a v-if="href" :href="href" :class="className" :disabled="disabled" @click="click">
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="className"
    @click="click"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      className: ['rounded-full', 'border', 'border-primary', 'px-4', 'py-2']
    }
  },
  methods: {
    click (event) {
      this.$emit('click', event)
    }
  }
}
</script>
