import React from 'react';
import { Link } from "react-router-dom";

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  display(field){
    return e => {
      this.setState({[field]: e.target.value });
    };
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  handleDemo(e){
    e.preventDefault();
    this.setState({'email': "demo_user@gmail.com", 'password': 'password'})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.submitAction(this.state);
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, index) => (
          <li key={`${index}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render(){
    return (
    
      <div className={this.props.background}>
        <div className={this.props.klass}>

          <div className="form-header">
              <img className="logo" src={this.props.logo} />
            <h2>Everwrote</h2>
            <p>Remember everything important.</p>
          </div>
          <button onClick={this.handleDemo} className="form-button-demo">Continue with demo-user</button>
          <form className="signup-form" onSubmit={this.handleSubmit}>
          <div className="or-line">
              <div className="hr"></div>
              <p>or</p>
              <div className="hr"></div>
          </div>
            
            <input 
              className="input-fields"
              type="text" 
              value={this.state.email}
              onChange={this.display('email')}
              placeholder="Email"
            />
              {this.renderErrors()}
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