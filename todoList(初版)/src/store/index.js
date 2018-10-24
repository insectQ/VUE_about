import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    todoList:[]
}

const  getters = {
    todoList(state){
        return state.todoList
    },
    todoListUncomplete(state){
        return state.todoList.filter(function(item){
            return item.state == false
        })
    },
    todoListComplete(state){
        return state.todoList.filter(function(item){
            return item.state === true
        })
    }
}

const mutations = {
    addTodoItem(state,item){
        state.todoList.push({item,state:false})
    },
    changeTodoItem(state,item){
        state.todoList.splice(item.index,1,{item:item.text,state:item.state});
        console.log(state.todoList)
    },
    deleteTodoItem(state,index){
        state.todoList.splice(index,1);
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations
})

export default store