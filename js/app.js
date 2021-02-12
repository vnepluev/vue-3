const App = {
  // data: function () {
    
  // }
  data() {
    return {
      title: 'Список дел',
      placeholderStr: 'Введите текст',
      inputValue: '',
      notes: ['Заметка 1']
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    },
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    removeNote(index) {
      this.notes.splice(index, 1)
    }
    // inputKeyPress(event) {
    //   if (event.code === 'Enter') {
    //     this.addNewNote()
    //   }
    // }
  }
}
// const app = Vue.createApp(App)
// app.mount('#app')

Vue.createApp(App).mount('#app')
