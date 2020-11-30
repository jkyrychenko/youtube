<template>
  <div>
    <app-header @toggle-nav="toggleNav"></app-header>
    <nav-container ref="nav" :content="categories" :collapsed="isNavCollapsed" :cssClass="'fixed top-0 bottom-0 left-0 z-10'" style="width: 230px"></nav-container>
    <grid-container ref="grid" :content="videos" :cssClass="'bg-gray-500'" style="margin-left: 230px"></grid-container>
    <!-- <grid-container ref="grid" :content="videos" :cssClass="'bg-gray-500'" :style="`margin-left: ${setGridOffset}`"></grid-container> -->
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import GridContainer from '@/components/grid/GridContainer.vue'
import NavContainer from '@/components/nav/NavContainer.vue'
import gridItems from '@/components/grid/grid-items.js';
import navItems from '@/components/nav/nav-items.js';

export default {
  name: 'Home',
  components: {
      AppHeader,
      GridContainer,
      NavContainer,
  },
  // computed: {
  //   setGridOffset() {
  //     return this.$refs.nav.$el.clientWidth;
  //   }
  // },
  // mounted() {
  //   this.$refs.grid.$el.offsetLeft = this.setGridOffset;
  // },
  methods: {
    toggleNav() {
      this.isNavCollapsed = !this.isNavCollapsed
    }
  },
  data () {
    return {
      isNavCollapsed: false,
      videos: gridItems,
      categories: navItems,
    }
  }
}
</script>