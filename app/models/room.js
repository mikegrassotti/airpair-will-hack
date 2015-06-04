import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.belongsTo('location', {async: true}),
  workstations: DS.hasMany('workstation', {async: true})
});
