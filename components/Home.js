const React = require('react');
import { Link } from 'react-router';
import Radium from 'radium';
import color from 'color';
const styles = {
  base: {
    backgroundColor: '#0074d9',
    border: 0,
    borderRadius: '0.3em',
    color: '#fff',
    // cursor: 'pointer',
    fontSize: 16,
    outline: 'none',
    padding: '0.4em 1em',
    // width: '40%',
    ':active': {
      background: color('#FF6600'),
    },
  },
};

class Home extends React.Component {
  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}
export default Radium(Home);
