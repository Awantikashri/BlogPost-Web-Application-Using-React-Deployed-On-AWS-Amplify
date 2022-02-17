import React, { Component } from 'react';
import axios from 'axios';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";
export default class CreateProduct extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeQuantity= this.onChangeQuantity.bind(this);
        this.onChangePrice= this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          code: '',
          name: '',
          category: '',
          price: 0,
        }
      }
    
      onChangeCode(e) {
        this.setState({
          code: e.target.value
        })
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value
        })
      }
    
      onChangeCategory(e) {
        this.setState({
          category: e.target.value
        })
      }

      onChangeQuantity(e) {
        this.setState({
          quantity: e.target.value
        })
      }

      onChangePrice(e) {
        this.setState({
          price: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const product = {
          code: this.state.code,
          name: this.state.name,
          category: this.state.category,
          quantity: this.state.quantity,
          price: this.state.price
        }
    
        console.log(product);
    
        axios.post('http://localhost:5000/products/add', product)
          .then(res => console.log(res.data));
    
        window.location = '/';
      }
    
      render() {
        return (
        <div className="Create-Product" id="Product-List">
          <h3>Create New Post</h3>
          <form onSubmit={this.onSubmit}>
              <div className="Form">
              <div className="d-flex-end">
                <div className="form-group"> 
                <label>Title: </label>
                <input required className="form-control" value={this.state.code} onChange={this.onChangeCode} placeholder="Add Title..."/>
                </div>
                <div className="form-group">
                <label>Description</label>
                <input required  type="text" className="form-control" value={this.state.category} onChange={this.onChangeCategory} placeholder="Add Description.."/>
                </div>
                <div className="form-group">
                <label>Details</label>
                <input required  type="text"  className="form-control" value={this.state.category} onChange={this.onChangeCategory} placeholder="Add Details..."/>
                </div>
            </div>
            
            <br/>
            <div className="form-group" id="button">
              <input type="submit" value="Publish" className="btn btn-primary"/>
            </div>
            </div>
          </form>
        </div>
        )
      }
    }