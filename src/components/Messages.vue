<template>
  <div class="about">
      <b-card v-for="mess in messages" :key="mess.id">
        <b-card-title>{{ mess.titre }}</b-card-title>
        <b-card-text>
          {{mess.message}}
        </b-card-text>
        <b-card-text class="small text-muted">Publié le {{ mess.date_publication }}</b-card-text>
      </b-card>
  </div>
</template>

<script>
import {getMessages} from '../api/message'
export default {
  name: 'Message',
  data () {
    return {
      messages: null
    }
  },
  async mounted () {
    this.messages = await getMessages().then((response) => {
      return response.data['hydra:member']
    })
  }
}
</script>