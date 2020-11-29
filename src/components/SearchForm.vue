<template>
  <div class="flex flex-auto items-stretch border border-gray-700 rounded-sm w-64">
      <input type="text" class="border-r border-gray-700 rounded-l-sm shadow-inner py-1 px-3" placeholder="Search">
      <button type="search" class="bg-gray-600 rounded-r-sm w-20 opacity-50">
          <font-awesome-icon :icon="searchIcon"/>
      </button>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'SearchForm',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      searchIcon: faSearch
    }
  }
}
</script>