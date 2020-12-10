<template>
  <div class="sticky top-0 bg-white border-b border-gray-600 z-20 flex flex-auto items-center justify-between py-2 px-6 text-gray-800">
    <div class="flex flex-auto justify-start items-center">
      <icon-button :icon="icons.menu" class="mr-4 text-xl" @clicked="menuBtnClicked"></icon-button>
      <a href="#" class="w-24 h-6"><img :src="icons.logo" alt=""></a>
    </div>
    <div class="w-6/12">
      <search-form></search-form>
    </div>
    <div class="flex flex-auto justify-end items-center">
      <dropdown-button :icon="icons.create" :dropdown="dropdownItems.create" class="mr-2 text-xl"></dropdown-button>
      <dropdown-button :icon="icons.apps" :dropdown="dropdownItems.apps" class="mr-2 text-xl"></dropdown-button>
      <notification-button :icon="icons.notify" :dropdown="dropdownItems.notify" class="text-xl mr-2"></notification-button>
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton.vue'
import SearchForm from '@/components/SearchForm.vue'
import DropdownButton from '@/components/DropdownButton.vue'
import NotificationButton from '@/components/NotificationButton.vue'
import { faBars, faVideo, faBell, faCaretSquareRight, faBroadcastTower, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { faBuromobelexperte, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'AppHeader',
  components: {
    IconButton,
    SearchForm,
    DropdownButton,
    NotificationButton,
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
        notify: [
          {
            logo: 'https://lh3.googleusercontent.com/-jM5f5ynDgv0/AAAAAAAAAAI/AAAAAAAAAAA/NoEQqx6P-lQ/s96-mo/photo.jpg',
            chanel: 'Телебачення Торонто',
            title: '"Референдум! Потрібен він комусь чи? ЩЕ з Максом Щербиною" зараз у каналі "Телебачення Торонто"',
            date: '3 hours ago',
            img: 'https://i.ytimg.com/vi/Yuv37_GKNoo/hqdefault.jpg',
            url: 'https://www.youtube.com/watch?v=Yuv37_GKNoo',
          },
          {
            logo: 'https://lh5.googleusercontent.com/-R5LTpQUvKn4/AAAAAAAAAAI/AAAAAAAAAAA/R_tylVEOR98/s96-c-mo/photo.jpg',
            chanel: 'Кинопоиск',
            title: '"Как снимает Макото Синкай, гений аниме и «второй Миядзаки»"',
            date: '4 days ago',
            img: 'https://i.ytimg.com/vi/sAsAdXYAG1c/hqdefault.jpg',
            url: 'https://www.youtube.com/watch?v=sAsAdXYAG1c',
          },
          {
            logo: 'https://lh5.googleusercontent.com/-p31Ot-UmPks/AAAAAAAAAAI/AAAAAAAAAAA/4bKlgSnfyOs/s96-c-mo/photo.jpg',
            chanel: 'Громадське',
            title: '"hromadske": Форум союзників «БАМ!» (бізнес / активізм / медіа)',
            date: '4 week ago',
            img: 'https://i.ytimg.com/vi/03s-bhFBQA8/hqdefault_live.jpg',
            url: 'https://www.youtube.com/watch?v=03s-bhFBQA8',
          },
          {
            logo: 'https://lh3.googleusercontent.com/-jM5f5ynDgv0/AAAAAAAAAAI/AAAAAAAAAAA/NoEQqx6P-lQ/s96-mo/photo.jpg',
            chanel: 'Телебачення Торонто',
            title: '"Референдум! Потрібен він комусь чи? ЩЕ з Максом Щербиною" зараз у каналі "Телебачення Торонто"',
            date: '3 hours ago',
            img: 'https://i.ytimg.com/vi/Yuv37_GKNoo/hqdefault.jpg',
            url: 'https://www.youtube.com/watch?v=Yuv37_GKNoo',
          },
          {
            logo: 'https://lh5.googleusercontent.com/-R5LTpQUvKn4/AAAAAAAAAAI/AAAAAAAAAAA/R_tylVEOR98/s96-c-mo/photo.jpg',
            chanel: 'Кинопоиск',
            title: '"Как снимает Макото Синкай, гений аниме и «второй Миядзаки»"',
            date: '4 days ago',
            img: 'https://i.ytimg.com/vi/sAsAdXYAG1c/hqdefault.jpg',
            url: 'https://www.youtube.com/watch?v=sAsAdXYAG1c',
          },
          {
            logo: 'https://lh5.googleusercontent.com/-p31Ot-UmPks/AAAAAAAAAAI/AAAAAAAAAAA/4bKlgSnfyOs/s96-c-mo/photo.jpg',
            chanel: 'Громадське',
            title: '"hromadske": Форум союзників «БАМ!» (бізнес / активізм / медіа)',
            date: '4 week ago',
            img: 'https://i.ytimg.com/vi/03s-bhFBQA8/hqdefault_live.jpg',
            url: 'https://www.youtube.com/watch?v=03s-bhFBQA8',
          },
        ],
      }
    }
  }
}
</script>