<template>
  <div 
    v-if="showedItems.length"
    :class="{ 'border-b border-gray-600 py-0' : !collapsed }">
      <h3 v-if="title" class="uppercase font-bold text-gray-900 pt-6 pb-4 px-6">{{ title }}</h3>
      <nav-item
        v-for="item in showedItems"
        :key="item.title"
        :title="item.title"
        :icon="icons[item.icon]"
        :isShowedMin="item.isShowedMin"
        :isActive="item.isActive"
        :collapsed="collapsed"
      ></nav-item>
  </div>
</template>

<script>
import NavItem from '@/components/nav/NavItem.vue'
import { faHome, faFire, faList, faCaretSquareRight, faHistory, faClock, faThumbsUp, faMusic, faFutbol, faGamepad, faFilm, faBroadcastTower, faCog, faFlag, faQuestionCircle, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'NavBlock',
  components: {
    NavItem,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
    collapsed: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    showedItems() {
      if(this.collapsed) {
        return this.items.filter(item => item.isShowedMin)
      }
      return this.items
    }
  },
  data() {
    return {
      icons: {
        logo: faYoutube,
        home: faHome,
        fire: faFire,
        list: faList,
        play: faCaretSquareRight,
        history: faHistory,
        clock: faClock,
        like: faThumbsUp,
        music: faMusic,
        sport: faFutbol,
        game: faGamepad,
        movie: faFilm,
        live: faBroadcastTower,
        settings: faCog,
        report: faFlag,
        help: faQuestionCircle,
        feedback: faCommentAlt,
      }
    }
  }
}
</script>