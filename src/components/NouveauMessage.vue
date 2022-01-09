<template>
  <div class="about">
    <h1>Création d'un message</h1>
    <div v-if="confirm">
      Catégorie ajoutée avec succès !
    </div>
    

    <select name="categorie" v-model="categorie" id="categorie">
        <option v-for="categorie in categories" :key="categorie.id" :value="'/lpapi/public/index.php/api/categories/'+categorie.id">{{categorie.libelle}}</option>
    </select>
    <div>
      <label for="titre">Titre</label>
      <input type="text" name="titre" v-model="titre"  id="titre"/>
    </div>
    <b-form-group>
      <label for="message">Message</label>
      <b-form-input type="text" name="message" v-model="message"  id="message"/>
    </b-form-group>
    <div>
       <b-button @click="ajoutMessage" variant="outline-primary">Ajouter</b-button>
    </div>
  </div>
</template>

<script>
import {postMessage} from '../api/message'
import {getCategories} from '../api/categorie'
export default {
  name: 'NouveauMessage',
  data () {
    return {
      categorie: '',
      titre: '',
      categories:false,
      message:'',
      date:'',
      confirm: false
    }
  },
  async mounted () {
    this.categories = await getCategories().then((response) => {
      return response.data['hydra:member']
    })
  },
  methods: {
    async ajoutMessage() {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date +' '+ time;
      await postMessage({
        categorie: this.categorie,
        titre: this.titre,
        message: this.message,
        user: '/lpapi/public/index.php/api/users/1',
        datePublication: dateTime,
      }).then((reponse) => {
        this.confirm = true //activation d'un bandeau de confirmation
        console.log(reponse)
      })
    },
  }
}
</script>