import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  rooms: DS.hasMany({async: true}),
  allWorkstations: function() {
    var array = []
    this.get('rooms').map(function(room) {
      room.get('workstations').forEach(function(workstation) {
        console.log('workstation', workstation.get('name'));
        array.pushObject(workstation);
      });
    })
    return array;
  }.property('rooms.workstations.@each')
});
