<template>
  <div class="about">
    <b-row>
      <b-col sm="8">
       <h1 class="red" vue add vuetify>Liste des catégories</h1>
      </b-col>
      <b-col sm="4">
        <b-button variant="primary" to="/nouvelle-categorie">Nouvelle catégorie</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="8">
        <b-list-group>
          <b-list-group-item v-for="categorie in categories" :key="categorie.id">
            <router-link :to="{name:'categorie_messages', params: {id: categorie.id}}">
            {{categorie.libelle}}
            </router-link>
            <button class="btn btn-danger" @click="delet(categorie.id)">Delete</button>
            <router-link class="btn btn-warning" :to="'/update-categorie/'+categorie.id">modifier</router-link>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col sm="8">
       <router-view></router-view>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {getCategories} from '../api/categorie'
import {deleteCategorie} from '../api/categorie'
export default {
  name: 'Categories',
  data () {
    return {
      categories: null,
    }
  },
  mounted () {
    this.getData()
  },
  methods:{
    async getData(){
       this.categories = await getCategories().then((response) => {
       return response.data['hydra:member']
    })
    },
    delet(id) {
       deleteCategorie(id).then(()=>{
         this.getData();
       })
    },
  }
}
</script>