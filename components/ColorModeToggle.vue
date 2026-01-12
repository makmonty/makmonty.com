<template>
  <BaseButton class="w-12 h-12 border-none bg-opacity-0 hover:bg-opacity-100 ml-auto dark-hover:bg-gray-800 flex flex-no-wrap items-center space-x-4 overflow-hidden" color="light" @click="toggleTheme">
    <transition name="colormode" duration="1000">
      <i :key="colorMode" class="fas" :class="colorMode === 'light' ? 'fa-moon' : 'fa-sun'" />
    </transition>
  </BaseButton>
</template>

<script>
export default {
  computed: {
    colorMode() {
      return this.$colorMode.value;
    }
  },
  methods: {
    toggleTheme() {
      this.$colorMode.value = this.$colorMode.value === 'light' ? 'dark' : 'light';
    }
  }
};
</script>

<style scoped>
.colormode-leave-active {
  transition: margin 1s ease-in-out;
}

.colormode-leave {
  margin-left: 0;
}

.colormode-leave-to {
  margin-left: -30px;
}
</style>
