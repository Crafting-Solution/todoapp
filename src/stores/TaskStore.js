import { defineStore } from "pinia";

export const useTodoStore = defineStore('todoStore', {
    state: () =>({
       todos: []
    }),


    getters: {
        favs(){
            return this.todos.filter(t => t.isFav)
        },
        favCount(state){
            return state.todos.reduce((p, c) => {
                return c.isFav? p+1 : p
            }, 0)
        },
        totalCount(){
            return this.todos.length
        }

    },

    actions: {
        // Fetch Todo
        async getTodo(){
            const res = await fetch('http://localhost:3001/todos')
            const data = await res.json()

            this.todos = data
        },

        // Add Todo
        async addTodo(todo){
            this.todos.push(todo)

            const res = await fetch('http://localhost:3001/todos', {
                method: 'POST',
                body: JSON.stringify(todo),
                headers: {"Content-Type" : "application/json"}
            })

            if(res.error){
                console.log(res.error)
            }
        },

        async deleteTodo(id){
            this.todos = this.todos.filter(t => {
                return t.id !== id
            })
            
            const res = await fetch('http://localhost:3001/todos/' + id, {
                method: 'DELETE',
            })
            
            const error = res.error
            if(error){
                console.log(error)
            }
        },

        // Toggle Fav
        async toggleFav(id){
            const todo = this.todos.find(t => t.id === id)
            todo.isFav = !todo.isFav

            const res = await fetch('http://localhost:3001/todos/' + id, {
                method: 'PATCH',
                body: JSON.stringify({isFav: todo.isFav}),
                headers: {"Content-Type" : "application/json"}
            })
            
            const error = res.error
            if(error){
                console.log(error)
            }

        }
    }


})