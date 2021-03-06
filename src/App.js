import React from 'react';
import './App.css';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key:''
      }
     
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    // this.setUpdate = this.setUpdate.bind(this);

  }

  handleInput(e){
    this.setState({
      currentItem: {
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key:''
        }
      })
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filteredItems
    })
  }

  // setUpdate(text, key) {
  //   const items = this.state.items;
  //   items.map(item => {
  //     if (item.key === key) {
  //       item.text = text;
  //     }
  //     this.setState({
  //       items: items
  //     })
  //   })

    // items.filter(item => item.key === key)
    //   .map(item => {
    //     this.setState({
    //        items:items
    //      })
    //   })

  // }

  setUpdate = (event, key) => { 
    const itemIndex = this.state.items.findIndex(p => {
      return p.key === key;
    })
    const item = {
      ...this.state.items[itemIndex]
    };
    item.text = event.target.value;
    const items = [...this.state.items];
    items[itemIndex] = item;

    this.setState({
      items: items
    });

  };

  render() {

    return (
      <div>
        <h1 className="head">To-Do-List App</h1>
      <div className="App">
        
        <header>
          
        <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}/>
          <button type="submit">Add</button>
          </form>
          <ListItems items={this.state.items}
            deleteItem={this.deleteItem}
              changed={this.setUpdate}
              onChange = {this.setUpdate}
            />
          </header>
          
        </div>
       
      </div>
      
    );
  }
}
// setUpdate = { this.setUpdate }
export default App;
