import React, { Component } from 'react';
import axios from 'axios';
//mport { useQuery } from 'react-query'
export default class Login extends Component {
    
    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password:this.password
        }

        axios.post('http://localhost:5000/login',data).then(
            res => {
                console.log(res)
            }
        )
        .catch(err =>{
            console.log(err)
        })
    };
    render() {
        return (
            <div className="container h-100">
		        <div className="d-flex justify-content-center h-100">
			        <div className="user_card">
				        <div className="d-flex justify-content-center">
                            <img src="logo_color.png" alt="" width="200px"></img>
				        </div>
                    <div className="d-flex justify-content-center form_container">
                        <h3 id="form-title">User Login</h3>
                    </div>
				    <div className="d-flex justify-content-center">
					    <form onSubmit = {this.handleSubmit}>
						    <div className="input-group mb-3">
							    <div className="input-group-append">
								    <span className="input-group-text"><i className="fas fa-user"></i></span>
							    </div>
							    <input type="text" name="username" placeholder="Username..." className="form-control"
                                    onChange={e => this.text = e.target.value}/>
						    </div>
						    <div className="input-group mb-2">
							    <div className="input-group-append">
								    <span className="input-group-text"><i className="fas fa-key"></i></span>
							   </div>
								<input type="password" name="password" placeholder="Password..." className="form-control" 
                                    onChange={e => this.password = e.target.value}/>
						    </div>
						    <div className="d-flex justify-content-center mt-3 login_container">
				 			    <input className="btn login_btn" type="submit" value="Login"/>
				   		    </div>
					    </form>
				    </div>
			    </div>
			</div>
		</div>
        )
    }
}