import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.store.find('location');
  }
});
