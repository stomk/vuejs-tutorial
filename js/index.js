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
