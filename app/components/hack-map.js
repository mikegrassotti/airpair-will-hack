import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    makeReservation: (area) => {
      alert(area);
    }
  }
});
