import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


export default class Details extends Component {
  render() {
    return (
        <>
      <div>Form</div>
      <form className='upload__form' id="myForm" onSubmit={this.handleSubmit}>
          <div className='upload__label-input'>
            <label className='upload__label'>Name</label>
    
            <input  name='title' placeholder='Add a title to your video' />
          </div>
          <div className='upload__label-input'>

            <label   className='upload__label'>ADD A VIDEO DESCRIPTION</label>
            <textarea  type="text" name='description' placeholder='Add a desription to your video' />
          </div>
          
        </form>
      <Link to='/swipe'>
      <button>Submit</button>
      </Link>
      </>
    )
  }
}
