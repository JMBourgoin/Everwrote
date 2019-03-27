import React from 'react';
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
}

  handleSubmit(e){
    e.preventDefault();
    this.props.submitAction(this.state);
  }

  render(){
    <div className="signup-form">

      <div className="form-header">
        <img src="#" alt="everwrote-logo"/>
        <h2>Everwrote</h2>
        <p>Remember everything important.</p>
      </div>

      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.email}
          onChange={this.display('email')}
          placholder="Email"
        />
        <input
          type="password"
          value={this.state.password}
          onChange={this.display('password')}
        />
        <input 
          className="form-button" 
          type="submit"
          value="Continue"
        />
      </form>
    </div>
  
  }

  export default SignUpForm;