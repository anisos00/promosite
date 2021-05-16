import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CreateAccount from './pages/CreateAccount/CreateAccount';
import FeaturesPage from './pages/FeaturePage/FeaturesPage';
import MainPage from './pages/MainPage/MainPage';
import Subscription from './pages/Subscription/Subscription';
import About from './pages/AboutPage/About';



function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/CreateAccount' component={CreateAccount} />
          <Route exact path='/About' component={About} />

          <Route exact path='/FeaturesPage' component={FeaturesPage} />
          <Route exact path='/Subscription' component={Subscription} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
