import React from "react";

const styles = {
  margin: 10
};

class Form extends React.Component {
  handleChange = event => {
    this.props.handleChange(event);
  };
  handleSubmit = event => {
    this.props.handleSubmit(event);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="col s12">
        <div className="row" style={styles}>
          <div className="input-feild col s3">
            <input
              name="currentTitle"
              type="text"
              value={this.props.currentTitle}
              onChange={this.handleChange}
              placeholder="Title"
            />
          </div>
          <div className="input-feild col s7">
            <input
              name="currentDetails"
              type="text"
              value={this.props.currentDetails}
              onChange={this.handleChange}
              placeholder="Details"
            />
          </div>

          <div className="input-feild col s2">
            <button
              className="btn-large waves-effect waves-light"
              type="submit"
              name="action"
            >
              Add Note
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
