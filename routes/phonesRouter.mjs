import Phone from '../models/phone';

export default function phonesRouter(app) {
  app.get('/phones', (req, res) => {
    Phone.find({}).exec((err, phones) => {
      if (err) return next(err);
      res.json(phones);
    })
  });

  app.post('/phones', (req, res) => {
    console.log(req.body);
    const phone = new Phone(req.body);
    phone.save((err, phone) => {
      if (err) return next(err);
      res.status(201);
      res.json(phone);
    });
  });

  app.get('/phones/:id', (req, res) => {
    Phone.findById(req.params.id, (err, doc) => {
      if (!doc) {
        res.status(404).json({ status: 'Not found' })
      } else {
        res.status(200).json(doc);
      }
    });
  });

  app.put('/phones/:id', (req, res) => {
    Phone.findById(req.params.id, (err, doc) => {
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

  app.delete('/phones/:id', (req, res) => {
    Phone.findById(req.params.id, (err, doc) => {
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
