<template>
	<div>
	    <item-image />
	    <item-title>{{ msg }}</item-title>
	    <item-description />
	</div>
</template>

<script>
import ItemTitle from './ItemTitle.vue'
import ItemDescription from './ItemDescription.vue'
import ItemImage from './ItemImage.vue'

export default {
  components: {
    ItemTitle,
    ItemDescription,
    ItemImage
  },
  name: 'item',
  data () {
    return {
      msg: 'Item Title Here'
    }
  }
}
</script>