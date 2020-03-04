<template>
  <div class="ml-3 relative" @clickaway="open = false">
    <div>
      <button
        class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
        @click="open = !open"
      >
        <slot name="heading" />
      </button>
    </div>
    <div v-show="open" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
      <div class="py-1 rounded-md bg-white shadow-xs">
        <slot name="menu" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { open: false };
  },
};
</script>
