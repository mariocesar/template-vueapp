<template>
  <nav class="bg-gray-800" @keydown.escape="open = false">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-8" src="@/assets/img/workflow-mark-on-dark.svg" alt="Brand" />
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline">
              <a v-for="(link, n) in links" :key="n" :href="link.url" class="navlink">
                {{ link.text }}
              </a>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button
              class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
            >
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <MenuDropdown>
              <template v-slot:heading>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                />
              </template>
              <template v-slot:menu>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Your Profile</a
                >
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Settings</a
                >
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Sign out</a
                >
              </template>
            </MenuDropdown>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            @click="open = !open"
          >
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                :class="{ hidden: open, 'inline-flex': !open }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                :class="{ hidden: !open, 'inline-flex': open }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="{ block: open, hidden: !open }" class="md:hidden collapsed">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <a v-for="(link, n) in links" :key="n" :href="link.url" class="navlink">
          {{ link.text }}
        </a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">Tom Cook</div>
            <div class="mt-1 text-sm font-medium leading-none text-gray-400">tom@example.com</div>
          </div>
        </div>
        <div class="mt-3 px-2">
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Your Profile</a
          >
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Settings</a
          >
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import MenuDropdown from "./MenuDropdown";

export default {
  components: { MenuDropdown },
  props: { links: { type: Array, required: true } },
  data() {
    return { open: false };
  },
};
</script>

<style lang="postcss" scoped>
.navlink {
  @apply ml-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300;

  &:first-child {
    @apply ml-0;
  }

  &:hover {
    @apply text-white bg-gray-700;
  }

  &:focus {
    @apply outline-none text-white bg-gray-700;
  }
}

.collapsed .navlink {
  @apply mt-1 block px-3 py-2 text-base ml-0;
}

.navlink.active {
  @apply text-white bg-gray-900;
}
</style>
