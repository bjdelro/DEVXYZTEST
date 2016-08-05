const React = require('react');
import { Link } from 'react-router';
import Radium from 'radium';
import color from 'color';
const styles = {
  base: {
    // backgroundColor: '#0074d9',
    // border: 0,
    // borderRadius: '0.3em',
    color: '#fff',
    textDecoration: 'none',
    fontFamily: 'Arial',
    // cursor: 'pointer',
    fontSize: 12,
    // outline: 'none',
    padding: '0em 5.6em',
    // width: '40%',
    ':active': {
      background: color('#FF6600'),
    },
  },
};

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <Link style={styles.base} to="/about"> About </Link>
          <Link style={styles.base} to="/rates"> Rates </Link>
          <Link style={styles.base} to="/requirements"> Requirements </Link>
          <Link style={styles.base} to="/faq"> FAQ </Link>
          <Link style={styles.base} to="/apply"> Apply </Link>
        </ul>
      </nav>

    );
  }
}
export default Radium(Navbar);
