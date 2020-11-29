<template>
  <div class="cursor-pointer">
    <div class="w-full h-48 relative">
        <img
          :src="img"
          :alt="title"
					class="w-full h-full object-cover"
				>
        <span class="absolute px-2 rounded bg-gray-900 text-white text-sm bg-opacity-75 bottom-0 right-0">{{ length }}</span>
    </div>
    <div class="flex flex-auto items-start justify-start py-2 mr-2">
      <div class="w-10 h-10 mr-2 flex-shrink-0">
				<img
					:src="logo"
					class="w-full h-full rounded-full object-cover"
				>
			</div>
			<div>
				<h3 class="text-gray-900">{{ cutTitle(title) }}</h3>
				<div class="text-gray-800">
					<div>{{ subtitle.chanel }} <font-awesome-icon v-if="subtitle.isOfficial" :icon="officialIcon" class="text-sm"/></div>
					{{ subtitle.views }} • {{ subtitle.date }}
				</div>
			</div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default {
	name: 'GridItem',
	components: {
		FontAwesomeIcon,
	},
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: Object,
      default: () => {},
    },
    url: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    logo: {
      type: String,
      default: '',
    },
    length: {
      type: String,
      default: '',
		},
		isOfficial: {
			type: Boolean,
			default: false,
		},
  },
  methods: {
    cutTitle(text) {
      const maxLength = 60;
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...'
      }
      return text
    }
  },
	data () {
		return {
			officialIcon: faCheckCircle,
		}
	}
}
</script>