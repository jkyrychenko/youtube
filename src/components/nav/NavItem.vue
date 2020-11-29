<template>
  <div
    :class="{ 'bg-gray-700': isActive }"
    class="py-4 px-6 cursor-pointer flex flex-auto hover:bg-gray-600">
    <div class="flex-shrink-0 w-12">
        <font-awesome-icon :icon="icon" class="text-xl" :class="{ 'text-red-900' : isActive }"/>
    </div>
    <div class="text-gray-900">{{ title }}</div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'NavItem',
  components: {
    FontAwesomeIcon
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: Object,
      default: () => {},
    },
    isActive: {
      type: Boolean,
      default: false,
    }
  }
}
</script>