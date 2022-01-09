<template>
  <div class="about">
    <h1>Liste des messages de la catégorie : {{ categorie.libelle }}</h1>
      
      <b-card v-for="message in categorie.test" :key="message.id">
        <b-card-title>{{ message.titre }}</b-card-title>
        <b-card-text>
          {{message.message}}
        </b-card-text>
        <button class="btn btn-danger" @click="delet(message.id)">Delete</button>
        <router-link class="btn btn-warning" :to="'/update-message/'+message.id">modifier</router-link>
        <b-card-text class="small text-muted">Publié le {{ message.date_publication }}</b-card-text>
      </b-card>
  </div>
</template>

<script>
import {getCategorie} from '../api/categorie'
import {deleteMessage} from '../api/message'
export default {
  name: 'CategoriesMessages',
  data () {
    return {
      categorie: {},
      id:null
    }
  },
  watch: {
    $route () {
      this.actualiseCategorie()
    }
  },
  async mounted () {
    this.actualiseCategorie()
  },
  methods: {
    async actualiseCategorie () {
      console.log(this.$route.params.id)
      this.categorie = await getCategorie(this.$route.params.id).then((response) => {
        return response.data
      })
    },
    delet(id) { 
      deleteMessage(id).then(() => {
        this.actualiseCategorie()
      })
  },
  }
}
</script>