<template>
  <div class="sticky top-0 bg-white border-b border-gray-600 z-20 flex flex-auto items-center justify-between py-4 px-6 text-gray-800">
    <div class="flex flex-auto justify-start items-center">
      <icon-button :icon="icons.menu" class="mr-6 text-2xl" @clicked="menuBtnClicked"></icon-button>
      <a href="#" class="w-24 h-6"><img :src="icons.logo" alt=""></a>
    </div>
    <div class="w-6/12">
      <search-form></search-form>
    </div>
    <div class="flex flex-auto justify-end items-center">
      <icon-button :icon="icons.create" :dropdown="dropdownItems.create" class="mr-6 text-2xl"></icon-button>
      <icon-button :icon="icons.apps" :dropdown="dropdownItems.apps" class="mr-6 text-2xl"></icon-button>
      <icon-button :icon="icons.notify" class="text-2xl"></icon-button>
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton.vue'
import SearchForm from '@/components/SearchForm.vue'
import { faBars, faVideo, faBell, faCaretSquareRight, faBroadcastTower, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { faBuromobelexperte, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'AppHeader',
  components: {
    IconButton,
    SearchForm,
  },
  methods: {
    menuBtnClicked() {
      this.$emit('toggle-nav');
    }
  },
  data() {
    return {
      icons: {
        menu: faBars,
        logo: require('@/assets/images/youtube.svg'),
        create: faVideo,
        apps: faBuromobelexperte,
        notify: faBell,
      },
      dropdownItems: {
        create: [
          {
            title: 'Upload video',
            icon: faCaretSquareRight,
          },
          {
            title: 'Go Live',
            icon: faBroadcastTower,
          },
        ],
        apps: [
          {
            title: 'YouTube TV',
            icon: faCaretSquareRight,
          },
          {
            title: 'YouTube Music',
            icon: faPlayCircle,
          },
          {
            title: 'YouTube Kids',
            icon: faYoutube,
          },
          {
            title: 'Creator Academy',
            icon: faYoutube,
          },
          {
            title: 'YouTube for Artists',
            icon: faYoutube,
          },
        ],
        notify: [],
      }
    }
  }
}
</script>