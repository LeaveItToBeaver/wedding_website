import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import ListItems from '../../components/rsvp_list/ListItems'
import "../rsvp/RSVP.css"

class RSVP extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items:[],
      curremtItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.binid(this);
    this.deleteItem = this.deleteItem.binid(this);
    this.setUpdate  = this.setUpdate .binid(this);
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.curremtItem;
    if(newItem.text == ""){
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        curremtItem:{
          text:'',
          key:''
        }
      })
    }
  }

  handleInput(e){
    this.state({
      curremtItem:{
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
      items: filteredItems
    })
  }
  setUpdate(text, key){
    console.log("Items: " + this.state.items)
    const items = this.state.items

    items.map(item => {
      if(item.key === key){
        console.log(item.key + "     " + key)
        item.text = text
      }
    })
    this.setState({
      items: items
    })
  }
  render() {
    return (
      <div className='rsvp'>
        <form id='rsvp-form' onSubmit={this.addItem}>

        </form>
      </div>
    );
  }
}

export default RSVP;