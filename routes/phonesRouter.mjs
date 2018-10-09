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
}
