const app = Vue.createApp({
    data() {
        return {
            todos: [], 
            newTodo: '' 
            
        }
    },
    methods: {
        addTodo(){
            this.todos.push(this.newTodo);
            console.log(this.todos);
            this.newTodo = '';
            
        },
        remove() {
            this.todos = [];
        },
        removeTodo(todo) {
            this.todos.splice(todo, 1);
        }
    }
})

app.mount('#app')