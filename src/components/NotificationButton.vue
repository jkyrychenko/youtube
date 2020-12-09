<template>
  <div class="relative">
    <icon-button :icon="icon" class="text-xl" @clicked="toggleDropdown"></icon-button>
    <div
      ref="dropdown"
      v-if="dropdown.length && isDropdownVisible"
      class="absolute top-0 right-0 text-base bg-white border-gray-600 border-b border-r border-l mt-12">
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-600">
        <span class="text-gray-900 text-lg">Notifications</span>
        <font-awesome-icon class="text-gray-700 text-2xl cursor-pointer" :icon="settingsIcon"/>
      </div>
      <div
        v-for="item in dropdown"
        :key="item.title"
        class="flex flex-auto items-stretch justify-start px-6 py-4 hover:bg-gray-500 cursor-pointer"
      >
        <div class="w-10 h-10 mr-4 flex-shrink-0">
          <img
            class="w-full h-full rounded-full object-cover"
            :src="item.logo"
            :alt="item.chanel">
        </div>
        <div class="mr-4">
          <div>{{ item.title }}</div>
          <div class="mt-2 text-gray-700">{{ item.date }}</div>
        </div>
        <div class="flex-shrink-0 w-24">
          <img
            class="w-full"
            :src="item.img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'NotificationButton',
  components: {
    IconButton,
    FontAwesomeIcon,
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
      settingsIcon: faCog,
      isDropdownVisible: false,
    }
  }
}
</script>