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


  handleSubmit(e){
    e.preventDefault();
    this.props.submitAction(this.state);
  }

  render(){
    return (
    <div className="signup-form-container">

      <div className="form-header">
          <img className="logo" src={window.birdwordsPic} />
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
    </div>
    )
  }
}

  export default SignUpForm;