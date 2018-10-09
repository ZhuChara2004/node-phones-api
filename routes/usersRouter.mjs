import User from '../models/user';

export default function usersRouter(app) {
  app.get('/users', (req, res) => {
    User.find({}).exec((err, docs) => {
      if (err) return next(err);
      res.json(docs);
    })
  });

  app.post('/users', (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    user.save((err, doc) => {
      if (err) return next(err);
      res.status(201);
      res.json(doc);
    });
  });

  app.get('/users/:id', (req, res) => {
    User.findById(req.params.id, (err, doc) => {
      if (!doc) {
        res.status(404).json({ status: 'Not found' })
      } else {
        res.status(200).json(doc);
      }
    });
  });

  app.put('/users/:id', (req, res) => {
    User.findById(req.params.id, (err, doc) => {
      if (!doc) {
        res.status(404).json({ status: 'Not found' })
      } else {
        doc.set(req.body);
        doc.save((err, updated) => {
          if (err) return res.status(500).json({ message: err.message });
          res.status(200).json(updated);
        });
      }
    });
  });

  app.delete('/users/:id', (req, res) => {
    User.findById(req.params.id, (err, doc) => {
      if (!doc) {
        res.status(404).json({ status: 'Not found' })
      } else {
        doc.remove((err) => {
          if (err) return res.status(500).json({ message: err.message });
          res.status(200).json(doc)
        });
      }
    });
  });
}
