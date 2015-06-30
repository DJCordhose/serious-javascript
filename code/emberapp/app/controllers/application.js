import Ember from 'ember';

export default Ember.Controller.extend({
  myText : "Hello",
  actions: {
    clear: function() {
      this.set('myText','');
    }
  }
});
