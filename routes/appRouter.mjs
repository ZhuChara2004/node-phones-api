import phonesRouter from './phonesRouter';
import usersRouter from './usersRouter';

export default function appRouter(app) {
  phonesRouter(app);
  usersRouter(app);
}
