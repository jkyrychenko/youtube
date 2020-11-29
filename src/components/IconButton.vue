<template>
  <button
    type="button"
    @click.prevent="clicked">
    <font-awesome-icon :icon="icon"/>
    <slot></slot>
  </button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'IconButton',
  components: {
    FontAwesomeIcon
  },
  props: {
    icon: {
      type: Object,
      default: () => {},
    }
  },
  methods: {
    clicked() {
      this.$emit('clicked');
    }
  }
}
</script>