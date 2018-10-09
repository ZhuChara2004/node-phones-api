import Phone from '../models/phone';

export default function phonesRouter(app) {
  app.get('/phones', (req, res) => {
    Phone.find({}).exec((err, phones) => {
      if (err) return next(err);
      res.json(phones);
    })
  });
}
