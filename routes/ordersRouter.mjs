import Order from '../models/order';
import axios from 'axios';

export default function ordersRouter(app) {
  app.get('/orders', (req, res) => {
    Order.find({}).exec((err, docs) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json(docs);
    })
  });

  app.post('/orders', async (req, res) => {
    const order = new Order(req.body);
    let sum = 0;

    async function fetchPrice(order) {
      const promises = order.cart.map(async el => {
        const { data: { price } } = await axios.get(`http://localhost:3000/phones/${el.phoneId}`);
        return price * el.phoneCount;
      });
      return (await Promise.all(promises)).reduce((a, b) => a + b, 0);
    }

    async function buildOrder(sum, order) {
      const newSum = await fetchPrice(order);
      order.orderSum = newSum;
      return newSum;
    }

    await buildOrder(sum, order);
    order.save((err, doc) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(201).json(doc);
    });
  });

  app.get('/orders/:id', (req, res) => {
    Order.findById(req.params.id, (err, doc) => {
      if (!doc) {
        res.status(404).json({ status: 'Not found' })
      } else {
        res.status(200).json(doc);
      }
    });
  });
}
