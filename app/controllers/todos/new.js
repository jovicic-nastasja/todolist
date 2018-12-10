import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    addTodo: function(){
      // Get the data
      var title = this.get('title');
      var date = this.get('date');
      var body = this.get('body');

      // Create new todo
      var newTodo = this.store.createRecord('todo', {
        title: title,
        body: body,
        date: new Date(date)
      });

      // Save data to Firebase
      newTodo.save();

      // Clear the form after saving data
      this.setProperties({
        title: '', body: '', date: ''
      });
    }
  }
});
