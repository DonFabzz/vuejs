<template>
    <div>
        <div>
            <label for="libelle"></label>
            <input type="text" placeholder="libelle" name="libelle" v-model="categorie.libelle">
        </div>
        <div>
            <label for="couleur"></label>
            <input type="text" placeholder="couleur" name="couleur" v-model="categorie.couleur">
        </div>
        <button v-on:click="update">Mettre à jour</button>
    </div>
</template>

<script>
import {getCategorie} from '../api/categorie'
import {putCategorie} from '../api/categorie'
export default {
  name: 'Update',
  data () {
    return {
        categorie:{
            libelle:null,
             couleur:null
        }
    }
  },
  async mounted () {
     getCategorie(this.$route.params.id).then(response=>{
          this.categorie = response.data
     })
  },
  methods:{
    async update(){
        await putCategorie(this.$route.params.id, {
        couleur: this.categorie.couleur,
        libelle: this.categorie.libelle
      }).then(response=>{
          console.log(response)
      });
    }
  }
}

</script>