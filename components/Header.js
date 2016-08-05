const React = require('react');
import Radium from 'radium';
const styles = {
  logo: {
    width: '15.6em',
    margin: '0em 10em',
    display: 'inline-block',
  },
  searchBar: {
    display: 'inline-block',
    margin: '-1em 8em',
  },
  searchField: {
    display: 'inline-block',
    height: '1.8em',
    border: 0,
  },
  searchButton: {
    border: 0,
    display: 'inline-block',
    float: 'right',
    height: '2em',
  },
};

class Header extends React.Component {
  render() {
    return (
      <div>
        <img
          style={styles.logo}
          src="http://imgh.us/devtest-whitelogo.svg"
          onerror="this.src='http://imgh.us/devtest-whitelogo.png'"
          alt="DEVTEST.XYZ"
        />
        <div style={styles.searchBar}>
          <input
            style={styles.searchField}
            placeholder="type your search here"
          />
          <input
            style={styles.searchButton}
            type="image"
            src="https://s31.postimg.org/kyk90yxff/Screen_Shot_2016_08_04_at_6_23_40_PM.png" alt="Submit"
          />
        </div>
      </div>
    );
  }
}
export default Radium(Header);
