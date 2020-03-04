<template>
  <div class="mt-1 relative rounded-md shadow-sm border">
    <textarea
      :id="`id_${name}`"
      :name="name"
      class="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default() {
        return "text";
      },
    },
  },
};
</script>

<style lang="postcss" scoped>
textarea {
  min-height: 2rem;
}
</style>
