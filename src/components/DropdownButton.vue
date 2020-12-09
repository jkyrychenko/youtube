<template>
  <div class="relative">
    <icon-button :icon="icon" class="text-xl" @clicked="toggleDropdown"></icon-button>
    <div
      ref="dropdown"
      v-if="dropdown.length && isDropdownVisible"
      class="absolute top-0 right-0 text-base bg-white border-gray-600 border-b border-r border-l mt-12">
        <div
          v-for="item in dropdown"
          :key="item.title"
          class="flex flex-auto items-center justify-start whitespace-no-wrap px-6 py-4 hover:bg-gray-500 cursor-pointer"
        >
        <div class="w-8 mr-4 text-center"><font-awesome-icon :icon="item.icon" class="text-xl text-red-900"/></div>
        <div>{{ item.title }}</div>
        </div>
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'DropdownButton',
  components: {
    IconButton,
    FontAwesomeIcon
  },
  props: {
    icon: {
      type: Object,
      default: () => {},
    },
    dropdown: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    }
  },
  data() {
    return {
      isDropdownVisible: false,
    }
  }
}
</script>