const React = require('react');

export default class APIForm extends React.Component {
  render() {
    return (
      <div>
        <form >
          <input
            onChange={this.props.handleZipChange}
            type="text" name="zip"
            placeholder="Zipcode"
          />
          <button />
        </form>
      </div>
    );
  }
}
