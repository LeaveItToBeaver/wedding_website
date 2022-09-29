import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import ListItems from '../rsvp_list/ListItems.js'

class RSVP extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        names:[],
        currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate  = this.setUpdate.bind(this);
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text == ""){
      const names = [...this.state.names, newItem];
      this.setState({
        names: names,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }//https://github.com/abarna1908/To-Do-App-in-React-code/blob/master/src/App.js
  //https://fireship.io/lessons/host-website-raspberry-pi/
  //https://saravanastar.medium.com/ssl-encryption-for-website-using-cloudflare-5529ef9d6cd4
  //https://fontawesome.com/v5/docs/web/use-with/react

  deleteItem(key) {
    const filteredItems = this
      .state
      .items
      .filter(item =>
        item.key !== key)
    this.setState({
        names: filteredItems
    })
  }

  setUpdate(text, key){
    console.log("Items: " + this.state.names)
    const names = this.state.names

    names.map(item => {
      if(item.key === key){
        console.log(item.key + "     " + key)
        item.text = text
      }
    })
    this.setState({
        names: names
    })
  }
  
  render() {
    return (
        <div className='rsvp'>
            <header>
                <form id='rsvp-form' onSubmit={this.addItem}>
                    <input type="text"
                        placeholder='Enter Name'
                        value={this.state.currentItem.text}
                        onChange={this.handleInput}></input>
                    <button type="submit">Add</button>
                </form>
                <p>{this.state.names.text}</p>
            </header>
            <ListItems names={this.state.names}
                    deleteItem={this.deleteItem}
                    setUpdate={this.setUpdate} />
        </div>
    );
  }
}

export default RSVP;