import Router from 'preact-router';
import { HomePage, MenuPage, OrderPage } from '../pages';

export const AppRouter = () => {
  return (
    <Router>
      <MenuPage path="/" />
      <HomePage path="/home" />
      <MenuPage path="/menu" />
      <OrderPage path="/ordenes" />
    </Router>
  );
}