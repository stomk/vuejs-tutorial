new Vue({
  el: '#app',
  data: {
    message: "Hello, Vue.js!",
    people: [
      { name: "John", age: 20 },
      { name: "Bob", age: 25 },
      { name: "Alice", age: 30 }
    ],
  },
  methods: {
    addPerson: function (name, age) {
      this.people = this.people.concat({ name: name, age: age });
    }
  }
})
