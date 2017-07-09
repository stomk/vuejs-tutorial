Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegitables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Chicken' }
    ]
  },
  beforeCreate: function () {
    console.log('beforeCreate');
  },
  created: function () {
    console.log('created');
  },
  mounted: function () {
    console.log('mounted');
  },
  updated: function () {
    console.log('updated');
  },
})

var app8 = new Vue({
  el: '#app-8',
  data: {
    message: "hello",
    rawHtml: '<strong>strong</strong>',
    id: '1',
    url: 'https://vuejs.org',
    visible: true,
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('');
    }
  },
  methods: {
    sayHello: function() {
      console.log("Hello");
    }
  },
  filters: {
    toUpper: function (string) {
      return string.toUpperCase();
    },
    addName: function (string, name) {
      return string + ', ' + name;
    }
  }
})

var app9= new Vue({
  el: '#app-9',
  data: {
    question: '',
    answer: 'Answer comes here.'
  },
  watch: {
    question: function (newQuestion) {
      this.answer = 'Waiting for you to stop typing...';
      this.getAnswer();
    }
  },
  methods: {
    getAnswer: _.debounce(
      function () {
        this.answer = 'Thinking...';
        var vm = this;
        axios.get('https://yesno.wtf/api')
          .then(function (res) {
            vm.answer = _.capitalize(res.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API.' + error
          })
      },
      500
    )
  }
})
