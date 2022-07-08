<template>
  <div id="LogIn">
    <h1>LogIn Page</h1>
     <form v-on:submit.prevent="submitForm">
      <label>Usuario</label>
      <input type="username" name="username" v-model="username"> <br><br>
      <label>Contraseña</label>
      <input type="password" name="password" v-model="password"> <br><br>
      <button type="submit">Iniciar Sesion</button>
    </form>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'LogIn',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods:{
    submitForm(e){
      axios.defaults.headers.common['Authorization']=''
      localStorage.removeItem('access')
      const formData = {
      username: this.username,
      password: this.password
      }
      axios.post('/api/v1/jwt/create/',formData)
          .then(response=>{
            const access = response.data.access
            this.$store.commit('setAccess',access)
            axios.defaults.headers.common['Authorization']='JWT '+access
            localStorage.setItem('access',access)
            this.$router.push('/')
            console.log(response)
          })
          .catch(error=>{
            console.log(error)
          })
    }
  }
}
</script>