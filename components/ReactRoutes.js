const React = require('react');
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Navbar from './Navbar';

const Routes = React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <Route path="home" component={Home} />
          <Route path="about" component={About} />
          <Route path="projects" component={Projects} />
          <Route path="contact" component={Contact} />
        </Route>

      </Router>
    );
  },
});

module.exports = Routes;
