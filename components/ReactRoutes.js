const React = require('react');
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Rates from './Navbar/Rates';
import About from './Navbar/About';
import Requirements from './Navbar/Requirements';
import Faq from './Navbar/Faq';
import Apply from './Navbar/Apply';

const Routes = React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <Route path="about" component={About} />
          <Route path="rates" component={Rates} />
          <Route path="requirements" component={Requirements} />
          <Route path="faq" component={Faq} />
          <Route path="apply" component={Apply} />
        </Route>

      </Router>
    );
  },
});

module.exports = Routes;
