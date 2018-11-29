import React, { Component } from 'react';
import axios from "axios"

import Item from "./Item"

class App extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
      input: ""
    }
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentDidMount() {
    axios.get("/api/items")
    .then(res => {
      this.setState({
        items: res.data
      })
    })
  }

  handleChange(val){
    this.setState({
      input: val
    })
  }

  getItemsByColor(color){
    axios.get(`/api/item?color=${color}`)
    .then(res => {
      this.setState({
        items: res.data
      })
    })
  }

  addItem(){
    let item = {
      name: "ball",
      color: "red"
    }
    axios.post("/api/item", {item})
    .then(res => {
      this.setState({
        items: res.data
      })
    })
  }

  deleteItem(id) {
    axios.delete(`/api/item/${id}`)
    .then(res => {
      this.setState({
        items: res.data
      })
    })
  }

  render() {
    console.log(this.state.items)
    if(this.state.items.length) {
      var items = this.state.items.map((item, i) => {
        return (
          <Item key={i} item={item} deleteItem={this.deleteItem}/>
        )
      })
    }
    return (
      <div className="App">
      <input 
      type="text"
      placeholder="Enter item color"
      value={this.state.input}
      onChange={(e) => this.handleChange(e.target.value)}/>
      <button 
      onClick={() => this.getItemsByColor(this.state.input)} 
      disabled={!this.state.input.length}>Get item by color</button>
      <button onClick={() => this.addItem()}>Add Item</button>
      {items}
      </div>
    );
  }
}

export default App;
