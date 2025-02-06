<template>
  <button
    type="button"
    :class="className"
    aria-label="Toggle dark mode"
    @click="toggleTheme"
  >
    <transition name="colormode" duration="1000">
      <i :key="colorMode" :class="['las', 'la-' + (colorMode === 'light' ? 'moon' : 'sun')]" />
    </transition>
  </button>
</template>

<script>
export default {
  data() {
    return {
      className: [
        'focus:outline-none',
        'w-12',
        'h-12',
        'border-none',
        'bg-opacity-0',
        'hover:bg-opacity-100',
        'text-primary',
        'ml-auto',
        'dark-hover:bg-gray-800',
        'p-0',
        'overflow-hidden',
        'text-lg',
        'rounded-full',
        'hover:bg-gray-300',
        'transition',
        'duration-100'
      ]
    };
  },
  computed: {
    colorMode() {
      return this.$colorMode.value;
    }
  },
  methods: {
    toggleTheme() {
      this.$colorMode.preference = this.$colorMode.value === 'light' ? 'dark' : 'light';
    }
  }
};
</script>

<style scoped>
button {
  white-space: nowrap;
}

.colormode-leave-active {
  margin-right: 12px;
  margin-left: 15px;
}

.colormode-leave-to {
  transition: margin 1s ease-in-out;
  margin-left: -30px;
}
</style>
