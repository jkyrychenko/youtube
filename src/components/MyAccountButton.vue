<template>
  <div class="relative">
    <button
      type="button"
      class="w-12 h-12 rounded-full ml-4"
      @click.prevent="toggleDropdown">
      <img
        :src="profile.img"
        class="w-full h-full rounded-full object-cover">
    </button>
    <div
      ref="dropdown"
      v-if="isDropdownVisible"
      v-click-outside="toggleDropdown"
      class="absolute top-0 right-0 text-base bg-white border-gray-600 border-b border-r border-l mr-16">
        <div class="flex flex-auto items-start justify-start px-6 py-4 border-gray-600 border-b">
          <div class="w-10 h-10 mr-4 flex-shrink-0">
            <img
              :src="profile.img"
              class="w-full h-full rounded-full object-cover">
          </div>
          <div class="text-gray-900">
            <h3 class="font-bold text-lg">{{ profile.name }}</h3>
            <div>{{ profile.email }}</div>
            <div class="mt-2"><a :href="manageLinkUrl" class="text-blue-700">{{ manageLinkTitle }}</a></div>
          </div>
        </div>
        <div class="h-500 overflow-y-auto">
          <div
            v-for="item in profile.settings"
            :key="item.title"
            class="flex flex-auto items-center justify-start whitespace-no-wrap px-6 py-4 hover:bg-gray-500 cursor-pointer"
          >
            <div
              v-if="item.icon"
              class="w-8 mr-4 text-center">
              <font-awesome-icon :icon="item.icon" class="text-xl text-gray-800"/>
            </div>
            <div>{{ item.title }}</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserCircle, faDollarSign, faCog, faUserFriends, faSignOutAlt, faSun, faLanguage, faGlobe, faShieldAlt, faQuestionCircle, faCommentAlt, faKeyboard } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'MyAccountButton',
  components: {
    FontAwesomeIcon,
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
      profile: {
        name: 'Yuliia Kyrychenko',
        img: require('@/assets/images/profile.jpg'),
        email: 'juliiakyrychenko15@gmail.com',
        settings: [
          {
            title: 'Create a chanel',
            icon: faUserCircle,
          },
          {
            title: 'Purchases and memberships',
            icon: faDollarSign,
          },
          {
            title: 'YouTube Studio',
            icon: faCog,
          },
          {
            title: 'Switch account',
            icon: faUserFriends,
          },
          {
            title: 'Sign out',
            icon: faSignOutAlt,
          },
          {
            title: 'Apperance: Light',
            icon: faSun,
          },
          {
            title: 'Language: English',
            icon: faLanguage,
          },
          {
            title: 'Location: Ukraine',
            icon: faGlobe,
          },
          {
            title: 'Settings',
            icon: faCog,
          },
          {
            title: 'Your data in YouTube',
            icon: faShieldAlt,
          },
          {
            title: 'Help',
            icon: faQuestionCircle,
          },
          {
            title: 'Send feedback',
            icon: faCommentAlt,
          },
          {
            title: 'Keyboard shortcuts',
            icon: faKeyboard,
          },
          {
            title: 'Restricted mode: Off',
          },
        ]
      },
      manageLinkTitle: 'Manage your Google Account',
      manageLinkUrl: 'https://myaccount.google.com/u/0/?utm_source=YouTubeWeb&tab=rk&utm_medium=act&tab=rk&hl=en',
      isDropdownVisible: false,
    }
  }
}
</script>