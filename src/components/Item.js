import React, { Component } from 'react';


class Item extends Component {
  render(){
    return (
      <div>
        <span>{this.props.item}</span><button type="button"
        onClick={() => this.props.deleteItem(this.props.itemId, this.props.listId)}>Delete</button>
      </div>
    );
  }
}

export default Item;
