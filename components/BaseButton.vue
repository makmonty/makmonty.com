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
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  data() {
    return {
      className: [
        'focus:outline-none',
        'rounded-full',
        'hover:text-primary',
        'text-' + (['primary', 'dark'].includes(this.color) ? 'light' : 'primary'), // text-primary text-light
        'border',
        'border-primary',
        'px-4',
        'py-2',
        'bg-' + this.color, // bg-primary bg-light bg-dark
        'hover:bg-gray-300',
        'transition',
        'duration-100'
      ]
    };
  },
  methods: {
    click(event) {
      this.$emit('click', event);
    }
  }
};
</script>
