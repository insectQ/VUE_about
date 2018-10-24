<template>
  <li  @mouseover="isShow = true" @mouseout="isShow = false">
      <input type="checkbox" @click="changeItem()" :checked="todoItem.state">
      <span :class="{[$style.lineThrough]:todoItem.state}">{{todoItem.item}}</span>
      <span v-show="isShow" :class="$style.delete" @click="deleteItem()">删除</span>
  </li>
</template>

<script>
export default {
  name: 'myComponent',
  props:{
    index:Number,
    todoItem:Object
  },
  data () {
    return {
      isShow:false,
    }
  },
  methods:{
    deleteItem(){
      this.$store.commit("deleteTodoItem",this.index)
    },
    changeItem(){      
      this.$store.commit("changeTodoItem",{index:this.index,text:this.todoItem.item,state:!this.todoItem.state})
    }
  }
}
</script>

<style module>

.delete{
  margin-left: 20px;
  cursor: pointer;
}
.lineThrough{
  text-decoration: line-through
}
</style>
