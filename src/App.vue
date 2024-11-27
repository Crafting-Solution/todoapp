<template>
  <main>
    <div class="flex flex-col gap-10">
      <header class="bg-gray-200 h-height1 text-center p-4 flex justify-center items-center max-sm:p-2 max-sm:h-24 max-md:h-28 max-md:p-3">
        <h1 class="text-2xl font-extrabold pt-10 transform -rotate-3">Todo List</h1>
        <img class="h-height1 justify-self-center transform rotate-customRotate pl-5 max-sm:h-24 max-md:h-28" src="/images/todologo2.png" alt="pinia logo">
      </header>

      <!-- Content -->
      <div class="">
        <nav class="p-6 flex gap-2 max-sm:flex max-sm:justify-center">
          <button @click="toggleTodo = 'all'" :class="{activeLink: toggleTodo === 'all'}">All Todo</button>
          <button @click="toggleTodo = 'fav'" :class="{activeLink: toggleTodo === 'fav'}">Fav Todo</button>
        </nav>

        <div class="flex justify-center items-center">
          <form @submit.prevent="handleSubmit">
            <input class="border border-gray-500 rounded-lg p-3 w-72 text-lg max-sm:p-2 max-sm:w-64 max-sm:text-base sm:p-2 sm:text-base md:text-lg md:p-3" type="text" placeholder="I want to..." v-model="newTodo">
            <button class="p-3 bg-green-500 rounded-lg border text-lg text-white max-sm:text-base max-sm:p-2 sm:text-base sm:p-2 md:text-lg md:p-3">Add</button>
          </form>
        </div>

        <!-- All Todos -->
        <div class="mt-4" v-if="toggleTodo === 'all'">
          <p class="text-center text-gray-500 max-sm:text-sm">You have {{ todoStore.totalCount }} To Do</p>
          <div class="p-2 w-full md:w-maxWidth m-auto" v-for="todo in todoStore.todos" :key="todo">
            <TodoDetails :todo="todo"/>
          </div>
        </div>

        <!-- Favourite Todos -->
        <div class="mt-4" v-if="toggleTodo === 'fav'">
          <p class="text-center text-gray-500 ">You have {{ todoStore.favCount }} To Do</p>
          <div class="p-2 w-full md:w-maxWidth m-auto" v-for="todo in todoStore.favs" :key="todo">
            <TodoDetails :todo="todo"/>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="text-center flex flex-col justify-center margin">
        <p class="text-sm">Copyright &copy; 2024. <b>Augustus Ejike</b></p>
        <a class="text-blue-500 underline text-sm" href="#">Software Developer</a>
      </footer>

    </div>
    
  </main>
</template>

<script setup>
import { useTodoStore } from './stores/TaskStore';
import TodoDetails from './components/TodoDetails.vue';
import { ref } from 'vue';

const todoStore = useTodoStore()

// Switch Todo Tabs
const toggleTodo = ref('all')

const activeLink = ref(false)


// Fetch Asynchronously
todoStore.getTodo()

// Add new Todo
const newTodo = ref('')
const handleSubmit = () =>{
  if(newTodo.value.length > 0){
    todoStore.addTodo({
      id: Math.floor(Math.random() * 10000),
      title: newTodo.value,
      isFav: false
    })
  }
}



</script>

<style>


</style>