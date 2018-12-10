import Route from '@ember/routing/route';
import faker from 'faker';

export default Route.extend({
  model: function(){
    var randomNumber = '';
    // randomNumber = Math.floor(Math.random() * 10000);
    randomNumber = faker.random.number();

    return this.store.createRecord('table', {randomNumber: randomNumber});
  }
});
