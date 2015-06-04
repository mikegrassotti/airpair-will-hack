import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('location', {path: '/location/:location_id'}, function() {
    this.resource('room', {path: '/room/:room_id'}, function() {
      this.route('workstation', {path: '/workstation/:workstation_id'});
    });
  });
});

export default Router;
