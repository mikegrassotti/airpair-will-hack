module.exports = function(app) {
  var express = require('express');
  var locationsRouter = express.Router();

  locationsRouter.get('/', function(req, res) {
    res.send({
      'locations': [
        {
          id: 1,
          name: 'oaks castle',
          rooms: [1]
        }
      ],
      'rooms': [
        {
          id: 1,
          name: 'patio',
          location: 1,
          workstations: [1,2]
        },
      ],
      'workstations': [
        {
          id: 1,
          room: 1,
          name: 'workstation 1',
          type: 'workstation',
          href: 'http://dhappy.org/.../image/icon/computer/',
          x: "1800",
          y: "800",
          height: "150px",
          width: "150px"
        },
        {
          id: 2,
          room: 1,
          name: 'workstation 2',
          type: 'workstation',
          href: 'http://dhappy.org/.../image/icon/computer/',
          x: "2800",
          y: "400",
          height: "150px",
          width: "150px"
        }
      ]
    });
  });

  locationsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  locationsRouter.get('/:id', function(req, res) {
    res.send({
      'locations': {
        id: req.params.id
      }
    });
  });

  locationsRouter.put('/:id', function(req, res) {
    res.send({
      'locations': {
        id: req.params.id
      }
    });
  });

  locationsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/locations', locationsRouter);
};
