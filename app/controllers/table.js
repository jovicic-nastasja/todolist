import Controller from '@ember/controller';
import faker from 'faker';

export default Controller.extend({
  actions: {
    generate: function(number){
      var randomNumber = '';
      // randomNumber = Math.floor(Math.random() * 10000);
      randomNumber = faker.random.number();

      var table = this.store.createRecord('table', {randomNumber: randomNumber});
      this.model.set('randomNumber', randomNumber);
      // table.save();


    }
  }
});
