import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lists: [],
      nextTitle: ''
    };
  }

  handleTitleChange(e){
    e.preventDefault();
    this.setState({nextTitle: e.target.value});
  }

  handleAddList(e){
    e.preventDefault();
    const newTitle = this.state.nextTitle;
    this.setState({nextTitle: '', lists: this.state.lists.concat({title: newTitle, itemList: [], nextItem: ''})});
  }

  handleDeleteList(listId){
    const newLists = this.state.lists.filter((list, index) => index !== listId);
    this.setState({lists: newLists});
  }

  handleItemChange(nextItem, listId){
    const newLists = this.state.lists.slice();
    newLists[listId].nextItem = nextItem;
    this.setState({lists: newLists})
  }

  handleAddItem(listId){
    const newLists = this.state.lists.slice();
    const newItem = this.state.lists[listId].nextItem;
    newLists[listId].itemList.push(newItem);
    newLists[listId].nextItem = '';
    this.setState({lists: newLists});
  }

  handleDeleteItem(itemId, listId){
    const newLists = this.state.lists.slice();
    const newItemList = this.state.lists[listId].itemList.filter((item, index) => index !== itemId);
    newLists[listId].itemList = newItemList;
    this.setState({lists: newLists});
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.lists.map((list, index) =>
            <List key={index} listId={index} list={list} itemChange={(nextItem, listId) => this.handleItemChange(nextItem, listId)}
            addItem={(listId) => this.handleAddItem(listId)} deleteItem={(itemId, listId) => this.handleDeleteItem(itemId, listId)}
            deleteList={(listId) => this.handleDeleteList(listId)} />
          )}
        </ul>
        <input type="text" name="newListTitle" size="10" value={this.state.nextTitle} onChange={(e) => this.handleTitleChange(e)}/>
        <button type="button" onClick={(e) => this.handleAddList(e)}>Add Title</button>
      </div>
    );
  }
}

export default App;
