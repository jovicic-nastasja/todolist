import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default Controller.extend({
  filter: '',
  filteredContent: function(){
    var filter = this.get('filter');
    var regex = new RegExp(filter, 'gi');
    var todos = this.model;

    return todos.filter(function(todo){
      return todo.get('title').match(regex) || todo.get('body').match(regex);
    });
  }.property('arrangedContent', 'filter'),
  sortedProperties: ['date:asc'],
  sortedTodos: sort('model', 'sortedProperties')
});
