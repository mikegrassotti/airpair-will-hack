import Ember from 'ember';

export default Ember.Component.extend({
  areas: [
    {
      id: 1,
      href: 'http://dhappy.org/.../image/icon/computer/',
      x: "1800",
      y: "800",
      height: "150px",
      width: "150px"
    },
    {
      id: 2,
      href: 'http://dhappy.org/.../image/icon/computer/',
      x: "2800",
      y: "400",
      height: "150px",
      width: "150px"
    }
  ],
  actions: {
    makeReservation: (area) => {
      alert(area);
    }
  }
});
