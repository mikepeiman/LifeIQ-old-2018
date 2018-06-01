<template>
	<form><p>Hello, {{ name }}</p>
      <MdInput name="name" v-model="username">Your name</MdInput>
      <input name="name" v-model="username">Your name</input>
    </form>
</template>

<script>
import { MdInput } from 'vue-material/dist/components'
export default {
  name: 'item-title',
  data () {
    return {
      name: 'Dude'
    }
  },
  components: {
    MdInput
  }
}
</script>