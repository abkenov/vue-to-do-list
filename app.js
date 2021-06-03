const App = {
  data() {
    return {
      myPlaceholder: 'Add new task',
      tasks: [],
      newTaskValue: '',
      total: 0
    }
  },
  methods: {
    newTaskChangeHandler(event) {
      this.newTaskValue = event.target.value
    },

    addTask() {
      if(this.newTaskValue.length) {
        this.tasks.push(this.newTaskValue)
        this.newTaskValue = ''
      }
    },

    removeTask(idx) {
      this.tasks.splice(idx, 1)
    }
  },

  computed: {
    totalComputed() {
      return this.tasks.length
    }
  }
}

Vue.createApp(App).mount('#app')