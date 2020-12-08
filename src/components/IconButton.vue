<template>
  <div class="relative">
    <button
      type="button"
      class="w-12 h-12 rounded-full hover:bg-gray-600 transition duration-500 ease-in-out"
      @click.prevent="clicked">
      <font-awesome-icon :icon="icon"/>
      <slot></slot>
    </button>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'IconButton',
  components: {
    FontAwesomeIcon,
  },
  props: {
    icon: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    clicked() {
      this.$emit('clicked');
    }
  },
}
</script>