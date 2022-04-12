<template>
  <div>
    This is the home Page
    <Officer v-for="person in officers" :key="person.Name" :person="person"></Officer>
    <!-- <Officer imageLoc='/officers/Me!.jpg'></Officer> -->
    <router-link to='./login'>Login</router-link>
  </div>
</template>

<script>
import Officer from '../components/Officer.vue'
import messages from '../../public/officers/description.json';
export default {
  name: 'Home',
  data(){
    return{
      officers: messages
    }
  },
  components: {
    Officer
  },
  props: {
    msg: String
  },
  methods: {
    
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
