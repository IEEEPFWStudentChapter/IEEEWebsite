<template>
  <div>
    <input v-model="username">
    <input type="password" v-model="password">
    <button @click="register">Register</button>
    <textarea v-model="result"></textarea>
    <router-link to='/admin'>Sign in</router-link>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      username: "",
      password: "",
      result: ""
    }
  },
  props: {
    
  },
  methods: {
    async register(){
      let body = JSON.stringify({
        email: this.username,
        password: this.password
      });

      let response = await fetch('http://localhost:4040/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: body 
      });
      let jsonResponse = response.json()
      console.log(jsonResponse)
      this.result = jsonResponse;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
