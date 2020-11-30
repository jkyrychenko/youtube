<template>
  <div
    :class="cssClass"
    class="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6 p-6">
      <grid-item
        v-for="(video, n) in content"
        :key="video.id + n"
        :title="video.title"
        :subtitle="video.subtitle"
        :logo="video.logo"
        :url="video.url"
        :img="video.img"
        :length="video.length"
      ></grid-item>
  </div>
</template>

<script>
import GridItem from '@/components/grid/GridItem.vue'

export default {
  name: 'GridContainer',
  components: {
      GridItem,
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
  }
}
</script>