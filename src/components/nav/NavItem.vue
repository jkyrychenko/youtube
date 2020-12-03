<template>
  <div
    :class="{ 
      'bg-gray-600 hover:bg-gray-700' : isActive,
      'flex-col px-1' : collapsed, 'px-6' : !collapsed 
    }"
    class="py-4 cursor-pointer flex flex-auto whitespace-no-wrap hover:bg-gray-500">
    <div
      :class="{ 'w-auto text-center' : collapsed, 'w-12' : !collapsed }"
      class="flex-shrink-0">
        <font-awesome-icon
          :icon="icon" 
          class="text-xl"
          :class="{ 'text-red-900' : isActive, iconClass : iconClass.length }"/>
    </div>
    <div
      class="text-gray-900"
      :class="{ 'text-xs pt-2 text-center' : collapsed }">
      {{ title }}
    </div>
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
    iconClass: {
      type: String,
      default: '',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    collapsed: {
      type: Boolean,
      default: false,
    }
  }
}
</script>