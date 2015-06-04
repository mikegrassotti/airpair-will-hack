module.exports = function(app) {
  var express = require('express');
  var locationsRouter = express.Router();

  locationsRouter.get('/', function(req, res) {
    res.send({
      'locations': [
        {
          id: 1,
          name: 'oaks castle',
          room_ids: [1]
        }
      ],
      'rooms': [
        {
          id: 1,
          name: 'patio',
          location_id: 1
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
