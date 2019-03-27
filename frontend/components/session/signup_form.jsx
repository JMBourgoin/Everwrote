import React from 'react';
import { Link } from "react-router-dom";
class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  display(field){
    return e => {
      this.setState({[field]: e.target.value });
    };
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.submitAction(this.state);
  }

  render(){
    return (
    
      <div className="form-background">
        <div className="signup-form-container">

          <div className="form-header">
              <img className="logo" src={window.logoPic} />
            <h2>Everwrote</h2>
            <p>Remember everything important.</p>
          </div>

          <form className="signup-form" onSubmit={this.handleSubmit}>
            
            <input 
              className="input-fields"
              type="text" 
              value={this.state.email}
              onChange={this.display('email')}
              placeholder="Email"
            />

            <input 
              className="input-fields"
              type="password"
              value={this.state.password}
              onChange={this.display('password')}
              placeholder="Password"
            />

            <input 
              className="form-button" 
              type="submit"
              value="Continue"
            />

          </form>
          <div className="form-link-container">
            <div>{this.props.formMessage}</div>
            <Link className="form-link" to={this.props.formLink}>{this.props.formName}</Link>
          </div>
            
      </div>
    </div>
    )
  }
}

  export default SignUpForm;