
import React from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header';
import APIForm from './Input/APIForm';
import Radium from 'radium';
const topHalfStyles = {
  base: {
    backgroundColor: '#DF5362',
    height: '800px',
    margin: '0',
    padding: '0',
  },
};
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      city: '',
      state: '',
    };
    this.AJAX = this.AJAX.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
  }
  formSubmit(e) {
    // this will be the function that sends the form to the server
    // once the user has inputted a valid zip or all other fields
    e.preventDefault();
  }
  handleZipChange(e) {
    e.preventDefault();
    // if zip is length of 5 auto populate the city and state
    if (e.target.value.length === 5) {
      // hit api route and get city and state back then set state
      this.AJAX(e.target.value);
    }
  }
  AJAX(zip) {
    // get request to API endpoint and set state to given feedback
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://ZiptasticAPI.com/${zip}`);
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          console.log(data, 'API Call response');
          this.setState({ city: data.city, state: data.state });
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
    // bottom half was not completed
    return (
      <div>
        <div style={topHalfStyles.base}>
          <Header />
          <Navbar />
          <APIForm
            locationValues={this.state}
            handleZipChange={this.handleZipChange}
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
