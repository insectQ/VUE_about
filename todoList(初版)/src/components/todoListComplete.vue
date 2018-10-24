<template>
  <div >
    <h3>{{msg}}</h3>
    <ul>
        <todo v-for="(todoItem,index) in todoList" :key="index" :index="index" :todoItem="todoItem"></todo>
    </ul>
  </div>
</template>

<script>
import todo from './todoItem';
export default {
  name: 'default',
  data () {
    return {
      msg: 'Welcome to complete',
    }
  },
  computed:{
    todoList(){
      return this.$store.getters.todoListComplete
    }   
  },
  components:{
    todo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 20px 10px;
  height: 30px;
  font-size: 20px;
  line-height:30px;
}
a {
  color: #42b983;
}
</style>
