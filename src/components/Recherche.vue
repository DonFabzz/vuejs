<template>
  <div class="about">
    <h1>Création d'une catégorie</h1>
    <b-form-group>
      <label for="recherche">Recherche</label>
      <b-form-input type="text" name="recherche" v-model="recherche"  id="recherche"/>
    </b-form-group>
    <div>
       <b-button @click="search" variant="outline-primary">Ajouter</b-button>
    </div>
        <b-list-group>
          <b-list-group-item v-for="message in messages" :key="message.id">
            <router-link :to="{name:'categorie_messages', params: {id: message.id}}">
            {{message.message}} | {{message.titre}}
            </router-link>
            <span :to="{name:'categorie_messages', params: {id: message.id}}">delete</span>
          </b-list-group-item>
        </b-list-group>
  </div>
</template>

<script>
import {search} from '../api/message'
export default {
  name: 'Message',
  data () {
    return {
      messages: null,
      recherche:null
    }
  },
  methods:{
    async search () {
        this.messages = await search(this.recherche).then((response) => {
          return response.data['hydra:member']
        })
    },
  }
}
</script>