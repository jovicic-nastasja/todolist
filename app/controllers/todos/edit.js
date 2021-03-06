import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    editTodo: function(id){
      var self = this;

      var title = this.get('model.title');
      var body = this.get('model.body');
      var date = this.get('model.date');

      this.store.findRecord('todo', id).then(function(todo){
        todo.set('title', title);
        todo.set('body', body);
        todo.set('date', new Date(date));

        // Save to Firebase
        todo.save();
      });
      // Redirect after save
      self.transitionToRoute('todos');
    },
    deleteTodo: function(id){
      var self = this;

      this.store.findRecord('todo', id).then(function(todo){
        todo.destroyRecord();
      });
      // Redirect after save
      self.transitionToRoute('todos');
    }
  }
});
