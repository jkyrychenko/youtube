<template>
  <div class="relative">
    <icon-button :icon="icon" class="text-xl" @clicked="toggleDropdown"></icon-button>
    <div
      ref="dropdown"
      v-if="isDropdownVisible"
      v-click-outside="toggleDropdown"
      class="absolute top-0 right-0 text-base bg-white border-gray-600 border-b border-r border-l mt-12">
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-600">
        <span class="mr-4 text-gray-900 text-lg">Notifications</span>
        <font-awesome-icon class="text-gray-700 text-2xl cursor-pointer" :icon="settingsIcon"/>
      </div>
      <div
        v-if="dropdown.length"
        class="h-500 w-500 overflow-y-scroll">
        <div
          v-for="(item, n) in dropdown"
          :key="item.title + n"
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
          <div class="ml-4">
            <font-awesome-icon class="text-gray-800 opacity-50 text-lg cursor-pointer hover:opacity-100" :icon="dots"/>
          </div>
        </div>
      </div>
      <div
        v-else
        class="text-center p-6 flex flex-col justify-center items-center h-500 w-500 overflow-y-scroll">
        <div>
          <font-awesome-icon class="text-gray-700 text-6xl" :icon="bellIcon"/>
        </div>
        <div class="font-bold text-lg mt-6 mb-2">Your notifications live here</div>
        <div>Subscribe to your favorite channels to get notified about their latest videos.</div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import IconButton from '@/components/IconButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCog, faBell, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

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
  mounted () {
    this.popupItem = this.$el
  },
  directives: {
    ClickOutside,
  },
  data() {
    return {
      settingsIcon: faCog,
      bellIcon: faBell,
      dots: faEllipsisV,
      isDropdownVisible: false,
    }
  }
}
</script>