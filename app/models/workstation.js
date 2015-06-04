import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    href: DS.attr(),
    x: DS.attr(),
    y: DS.attr(),
    height: DS.attr(),
    width: DS.attr(),
    room: DS.belongsTo('room', {async: true})
});
