<template>
    <div>
        <div>
            <label for="titre"></label>
            <input type="text" placeholder="titre" name="titre" v-model="message.titre">
        </div>
        <div>
            <label for="message"></label>
            <input type="text" placeholder="message" name="message" v-model="message.message">
        </div>
        <button v-on:click="update">Mettre à jour</button>
    </div>
</template>

<script>
import {getMessage} from '../api/message'
import {putMessage} from '../api/message'
import router from "../router"
export default {
  name: 'Update',
  data () {
    return {
        message:{
            message:null,
            titre:null
        }
    }
  },
  async mounted () {
     getMessage(this.$route.params.id).then(response=>{
          this.message = response.data
     })
  },
  methods:{
    async update(){
        await putMessage(this.$route.params.id, {
        message: this.message.message,
        titre: this.message.titre
      }).then(response=>{
          console.log(response)
          router.push('/categories/')
      });
    }
  }
}

</script>