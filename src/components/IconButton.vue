<template>
  <div class="relative">
    <button
      type="button"
      class="w-12 h-12 rounded-full hover:bg-gray-600 transition duration-500 ease-in-out"
      @click.prevent="clicked">
      <font-awesome-icon :icon="icon"/>
      <slot></slot>
    </button>
    <div
      ref="dropdown"
      v-if="dropdown.length && isDropdownVisible"
      class="absolute top-0 right-0 text-base bg-white border-gray-600 border-b border-r border-l mt-12">
      <nav-item
        v-for="item in dropdown"
        :key="item.title"
        :title="item.title"
        :icon="item.icon"
        :iconClass="'text-red-900'"
      ></nav-item>
    </div>
  </div>
</template>

<script>
import NavItem from '@/components/nav/NavItem.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'IconButton',
  components: {
    NavItem,
    FontAwesomeIcon,
  },
  props: {
    icon: {
      type: Object,
      default: () => {},
    },
    dropdown: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    clicked() {
      this.$emit('clicked');
      this.isDropdownVisible = !this.isDropdownVisible;
    }
  },
  data() {
    return {
      isDropdownVisible: false,
    }
  }
}
</script>