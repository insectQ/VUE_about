<template>
  <div :id="$style.app">
    <input :class="$style.input" v-model="todoText" placeholder="想做的事?" @keyup.enter="addTodo()" autofocus >
    <router-view></router-view>
    <div><router-link to="/todoListComplete">跳转完成</router-link></div>
    <div><router-link to="/todoListUncomplete">跳转未完成</router-link></div>
    <div><router-link to="/">跳转主界面</router-link></div>
  </div>
</template>

<script>
export default {
  // 用于vue-devtools调试工具的时候有良好的提示
  name: 'App',
  data(){
    return {
      todoText:""
    }
  },
  computed: {
    todoList () {
      return this.$store.getters.todos
    }
  },
  methods:{
    addTodo(){
      
      if(this.todoText.replace(/\s+/g,"") != "" ){//去空格
        this.$store.commit('addTodoItem',this.todoText)
      } 
      
      this.todoText = ""
    }
  }
}
</script>

<style module>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 800px;
  text-align: left;
  color: #2c3e50;
  margin: 60px auto 0;
}
.input{
  display:block;
  margin: 50px auto;
  width:70%;
  height: 50px;
}
</style>
