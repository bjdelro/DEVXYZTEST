
import React from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header';
import APIForm from './Input/APIForm';
import Radium from 'radium';
const styles = {
  base: {
    backgroundColor: '#DF5362',
    height: '800px',
    margin: '0',
    padding: '0',
  },
};
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      zipcode: '',
      city: '',
      state: '',
    };
  }
  formSubmit(e) {
    // this will be the function that sends the form to the server
    // once the user has inputted a valid zip or all other fields
    e.preventDefault();
  }
  handleZipChange(text) {
    console.log(text);
    // if zip is length of 5 auto populate the city and state
    if (text.length === 5) {
      // hit api route and get city and state back then set state
      console.log('LENGTH 5!');
      this.AJAX(text);
    }
  }

  AJAX(zip) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://ZiptasticAPI.com/${zip}`);
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log('ready state is 4');
        if (xhr.status === 200) {
          console.log(xhr, 'xhr');
          console.log('status is 200');
        } else {
          console.log('Error: ', xhr.status);
        }
      }
    };
  }
  render() {
    // returns the Header for the site and the Navbar
    // API Form is where the user will input their
    // zip, city, and state
    return (
      <div>
        <div style={styles.base}>
          <Header />
          <Navbar />
          <APIForm
            locationValues={this.state}
            handleZipChange={this.handleZipChange.bind(this)}
          />
          {this.props.children}
        </div>
        <div className="bottomHalf">
          bottom
        </div>
      </div>
    );
  }
}
export default Radium(Home);
