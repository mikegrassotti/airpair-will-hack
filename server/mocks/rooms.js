module.exports = function(app) {
  var express = require('express');
  var roomsRouter = express.Router();

  roomsRouter.get('/', function(req, res) {
    res.send({
      'rooms': [
        {
          id: 1,
          name: 'patio',
          location_id: 1
        }
      ]
    });
  });

  roomsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  roomsRouter.get('/:id', function(req, res) {
    res.send({
      'rooms': {
        id: req.params.id
      }
    });
  });

  roomsRouter.put('/:id', function(req, res) {
    res.send({
      'rooms': {
        id: req.params.id
      }
    });
  });

  roomsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/rooms', roomsRouter);
};
