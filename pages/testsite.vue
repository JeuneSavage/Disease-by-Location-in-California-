<template>
  <section class="contaioner">
    <div>
      <p>{{msg}} yo yo</p>
      <p>{{newMsg}} test test</p>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data () {
    return {
      msg: 'hello'
    }
  },
  asyncData ({params, error}) {
    return axios.get('/api/test')
      .then((res) => {
        return { newMsg: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'User not found' })
      })
  },
  head () {
    return {
      title: 'test the express call.'
    }
  }
}
</script>
