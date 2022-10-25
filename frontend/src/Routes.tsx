import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <h1>teste</h1>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
