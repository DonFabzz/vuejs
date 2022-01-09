<template>

  <div id="app">
    <div>
      <b-nav pills>
        <b-nav-item to="/messages">messages</b-nav-item>
        <b-nav-item to="/nouveau-message">Nouveau messages</b-nav-item>
        <b-nav-item to="/categories">Categories</b-nav-item>
        <b-nav-item v-if="log" to="/logout">Logout</b-nav-item>
        <b-nav-item v-else to="/login">Login</b-nav-item>

        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Dropdown"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item to="/recherche">Recherche</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </div>
  <router-view></router-view>

</div>
</template>

<script>


export default {
  name: 'App',
  data: () => {
     return {
       log:localStorage.getItem('usertoken'),
    }
    
  },
  methods:{
    
  },
  computed :{
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
