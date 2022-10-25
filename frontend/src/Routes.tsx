import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import Search from './Pages/Search';

const Routes = () => (
  <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/api" exact>
        <Search/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
