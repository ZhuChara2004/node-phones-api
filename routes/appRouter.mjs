import phonesRouter from './phonesRouter';
import usersRouter from './usersRouter';
import ordersRouter from './ordersRouter';

export default function appRouter(app) {
  phonesRouter(app);
  usersRouter(app);
  ordersRouter(app);
}
