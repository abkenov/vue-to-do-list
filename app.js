const App = {
  data() {
    return {
      myPlaceholder: 'Add new task',
      tasks: [],
      newTaskValue: '',
      total: 0,
      maxInputLength: 40,
      remainingInputLength: 40
    }
  },
  methods: {

    addTask() {
      if(this.newTaskValue.length) {
        this.tasks.push(this.newTaskValue)
        this.newTaskValue = ''
        this.remainingInputLength = this.maxInputLength
      }
    },

    removeTask(idx) {
      this.tasks.splice(idx, 1)
    }
  },
  
  watch: {
    newTaskValue(value) {
      this.remainingInputLength = this.maxInputLength - value.length
    }
  },

  computed: {
    totalComputed() {
      return this.tasks.length
    }
  }
}

Vue.createApp(App).mount('#app')