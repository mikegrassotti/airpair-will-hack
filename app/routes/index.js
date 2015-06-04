import Ember from 'ember';

var areas = [
  {
    contains: [
      {
        id: 1,
        name: 'patio',
        contains: [
          {
            id: 1,
            type: 'workstation',
            href: 'http://dhappy.org/.../image/icon/computer/',
            x: "1800",
            y: "800",
            height: "150px",
            width: "150px"
          },
          {
            id: 2,
            type: 'workstation',
            href: 'http://dhappy.org/.../image/icon/computer/',
            x: "2800",
            y: "400",
            height: "150px",
            width: "150px"
          }
        ]
      }
    ]
  }
]


export default Ember.Route.extend({
  model: function() {
   return this.store.find('location');
 }
});
