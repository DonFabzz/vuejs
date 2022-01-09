<template>
  <div class="about">
    <h1>Login</h1>
    <b-form-group>
      <label for="username">username</label>
      <b-form-input type="text" name="username" v-model="username"  id="username"/>
    </b-form-group>
    <div>
      <label for="password">Password</label>
      <input type="password" name="password" v-model="password"  id="password"/>
    </div>
    <div>
       <b-button @click="login" variant="outline-primary">Ajouter</b-button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import router from "../router"

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      axios({url: 'http://localhost/lpapi/public/index.php/authentication_token', data: {username:this.username, password:this.password}, method: 'POST' }) //username et password proviennent du formulaire
          .then(resp => {
            const token = resp.data.token
            const userData = atob(resp.data.token.split('.')[1]) //on récupère les données de l'utilisateur, par défaut, login, rôles
            localStorage.setItem('user', userData) // store the user in localstorage
            localStorage.setItem('usertoken', token) // store the token in localstorage
            router.push('/')
          })
          .catch(err => {
            localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
            console.log(err);
          })
    }
  }
}
</script>