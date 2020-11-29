<template>
  <div class="sticky top-0 bg-white border-b border-gray-600 z-20 flex flex-auto items-center justify-between py-4 px-6 text-gray-800">
    <div>
      <icon-button :icon="icons.menu" class="mr-8 text-2xl"></icon-button>
      <icon-button :icon="icons.logo" class="text-2xl"></icon-button>
    </div>
    <div>
      <search-form></search-form>
    </div>
    <div>
      <icon-button :icon="icons.create" class="mr-8 text-2xl"></icon-button>
      <icon-button :icon="icons.apps" class="mr-8 text-2xl"></icon-button>
      <icon-button :icon="icons.notify" class="text-2xl"></icon-button>
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton.vue'
import SearchForm from '@/components/SearchForm.vue'
import { faBars, faVideo, faBell } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faBuromobelexperte } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'AppHeader',
  components: {
    IconButton,
    SearchForm
  },
  data() {
    return {
      icons: {
        menu: faBars,
        logo: faYoutube,
        create: faVideo,
        apps: faBuromobelexperte,
        notify: faBell
      }
    }
  }
}
</script>