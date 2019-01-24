import React, { Component } from 'react';
import './../App.css';
import Item from './Item';

class List extends Component {
  
  handleItemChange(e){
    e.preventDefault();
    const nextItem = e.target.value;
    this.props.itemChange(nextItem, this.props.listId);
  }

  render(){
    return (
      <div>
        <span className="title">{this.props.list.title}</span><button type="button"
        onClick={() => this.props.deleteList(this.props.listId)}>Delete</button>
        <ul>
          {this.props.list.itemList.map((item, index) =>
            <Item key={index} itemId={index} listId={this.props.listId} item={item} deleteItem={this.props.deleteItem} />
          )}
        </ul>
        <input type="text" name="newItem" size="10" value={this.props.list.nextItem} onChange={(e) => this.handleItemChange(e)}/>
        <button type="button" onClick={() => this.props.addItem(this.props.listId)} >Add Item</button>
        <hr />
      </div>
    );
  }
}

export default List;
