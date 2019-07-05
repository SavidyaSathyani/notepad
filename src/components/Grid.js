import React from "react";
import Single from "./Single";

class Grid extends React.Component {
  deleteNote(id) {
    this.props.deleteNode(id);
  }

  renderItems() {
    return this.props.notes.map(item => <Single key={item.id} note={item} deleteNode={this.deleteNote.bind(this)} />);
  }
  render() {
    return (
      <div className="row">
        <ul>{this.renderItems()}</ul>
      </div>
    );
  }
}

export default Grid;
