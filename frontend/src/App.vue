<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Inicar Sesión</router-link> |
    <router-link to="/register">Registrarse</router-link> |

    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>
<script>
import axios from 'axios'
export default{
  name: 'App',
  beforeCreate(){
    this.$store.commit('initializeStore')
    const access = this.$store.state.access
    if(access){
      axios.defaults.headers.common['Authorization'] = 'JWT ' + access
    }else{
      axios.defaults.headers.common['Authorization'] = ''
    }
  },
  mounted(){
    setInterval(()=>{
      this.getAcces()
    },59000)
  },
  methods:{
    getAcces(e){
      const accessData={
        refresh: this.$store.state.refresh,
      }
      axios.post('/api/v1/jwt/refresh/',accessData)
          .then(response=>{
            const access = response.data.access
            this.$store.commit('setAccess',access)
            axios.defaults.headers.common['Authorization']='JWT '+access
            localStorage.setItem('access',access)
          })
          .catch(error=>{
            console.log(error)
          })
    }
  }


}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
