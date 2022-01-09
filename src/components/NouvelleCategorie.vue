<template>
  <div class="about">
    <h1>Création d'une catégorie</h1>
    <div v-if="confirm">
      Catégorie ajoutée avec succès !
    </div>
    <b-form-group>
      <label for="libelle">Libellé</label>
      <b-form-input type="text" name="libelle" v-model="libelle"  id="libelle"/>
    </b-form-group>
    <div>
      <label for="couleur">Couleur</label>
      <input type="text" name="couleur" v-model="couleur"  id="couleur"/>
    </div>
    <div>
       <b-button @click="ajoutCategorie" variant="outline-primary">Ajouter</b-button>
    </div>
  </div>
</template>

<script>
import {postCategorie} from '../api/categorie'
export default {
  name: 'NouvellesCategorie',
  data () {
    return {
      couleur: '',
      libelle: '',
      confirm: false
    }
  },
  methods: {
    async ajoutCategorie() {
      await postCategorie({
        couleur: this.couleur,
        libelle: this.libelle
      }).then((reponse) => {
        console.log(reponse)
        //this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/categories') //redirection
      })
    }
  }
}
</script>