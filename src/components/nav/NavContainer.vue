<template>
  <div
   :class="cssClass"
   class="bg-white text-gray-800 w-64 overflow-x-auto">
    <div class="py-4 px-6 border-b border-gray-600 flex flex-auto items-center">
      <icon-button :icon="icons.menu" class="mr-8 text-2xl"></icon-button>
      <a href="#" class="w-24 h-6"><img :src="icons.logo" alt=""></a>
    </div>
    <nav-block
      v-for="category in content"
      :key="category.id"
      :title="category.title"
      :items="category.items"
      :collapsed="collapsed"
    ></nav-block>
    <div v-if="!collapsed" class="py-4 px-6">
      <a
        class="text-gray-800 text-sm font-bold mr-2 inline-block whitespace-no-wrap"
        v-for="link in links"
        :key="link.title"
        :href="link.url">
        {{ link.title }}
        </a>
        <div class="pt-4 text-gray-800">© 2020 Google LLC</div>
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton.vue'
import NavBlock from '@/components/nav/NavBlock.vue'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'NavContainer',
  components: {
    IconButton,
    NavBlock,
  },
  props: {
    content: {
      type: Array,
      default: () => [],
    },
    cssClass: {
      tyle: String,
      default: '',
    },
    collapsed: {
      tyle: Boolean,
      default: false,
    },
  },
  data() {
    return {
      icons: {
        menu: faBars,
        logo: require('@/assets/images/youtube.svg'),
      },
      links: [
        {
          title: 'About Us',
          url: 'https://www.youtube.com/about/',
        },
        {
          title: 'Press',
          url: 'https://www.youtube.com/about/press/',
        },
        {
          title: 'Copyright',
          url: 'https://www.youtube.com/about/copyright',
        },
        {
          title: 'Contact Us',
          url: 'https://www.youtube.com/t/contact_us',
        },
        {
          title: 'Creators',
          url: 'https://www.youtube.com/creators',
        },
        {
          title: 'Advertise',
          url: 'https://www.youtube.com/ads',
        },
        {
          title: 'Developers',
          url: 'https://developers.google.com/youtube',
        },
        {
          title: 'Terms',
          url: 'https://www.youtube.com/t/terms',
        },
        {
          title: 'Privacy',
          url: 'https://policies.google.com/privacy?hl=en',
        },
        {
          title: 'Policy & Safety',
          url: 'https://www.youtube.com/about/policies/',
        },
        {
          title: 'How YouTube works',
          url: 'https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen',
        },
        {
          title: 'Test new features',
          url: 'https://www.youtube.com/new',
        },
      ]
    }
  }
}
</script>