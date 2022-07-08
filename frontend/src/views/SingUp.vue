<template>
  <div id="SingUp">
    <h1>SingUp Page</h1>
    <form v-on:submit.prevent="submitForm">
      <label>Usuario</label>
      <input type="email" name="username" v-model="username"> <br><br>
      <label>Contraseña</label>
      <input type="password" name="password" v-model="password"> <br><br>
      <button type="submit">Iniciar Sesion</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'SingUp',
data() {
    return {
      username: '',
      password: ''
    }
  },
  methods:{
    submitForm(e){
      const formData = {
      username: this.username,
      password: this.password
    }
    axios.post('/api/v1/users/', formData)
        .then(response => {
          alert(response)
          this.$router.push('/')
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>