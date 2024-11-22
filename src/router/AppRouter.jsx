import Router from 'preact-router';
import { MenuPage, OrderPage } from '../pages';

export const AppRouter = () => {
  return (
    <Router>
      <MenuPage path="/" />
      <MenuPage path="/menu" />
      <OrderPage path="/ordenes" />
    </Router>
  );
}