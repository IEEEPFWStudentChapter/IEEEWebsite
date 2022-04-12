<template>
  <div>
    <img style="width: 150px" :src="'/officers/' + person.FileName" />
    <div>
        <h3>
            {{person.Name}}
        </h3>
    </div>
    <div>
        {{person.Description}}
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    person: {}
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
