import React,{Component} from 'react';
import  './SignUp_css.css';
import TableView from './TableView';
import Button from 'react-bootstrap/lib/Button';

class SignUp extends Component{
constructor(){
  super();
  this.state={
    myInfo : {
        fName:'',
        lName:'',
        e_mail:'',
        password:'',
        cPassword:''
    },
    
    fields:[],
    error : "this is error"
  }
}

successMessage(event){
    debugger;
    this.state.fields.push(this.state.myInfo);
    this.setState({
        fields : this.state.fields
    })
    event.preventDefault();
}
//change Value mie fields arhi hain 
//event mie value arhi hai 

inputChange(changeValue,event){
    // var temp = {};
    // temp[changeValue] = event.target.value;
    // this.setState(temp);

    // changeValue can contain any key in the myInfo object. like firstName lname,
    // we are assigning value to that key.

    this.state.myInfo[changeValue] = event.target.value;

    // update state
    this.setState({
        myInfo : this.state.myInfo
    });

}
validEmail(value){
// regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}

render(){
return(
   <div>
      <form className="signUp_css" onSubmit={this.successMessage.bind(this)} name="myForm">  
            <br></br><br></br>
            <label><b>First Name</b></label>
            <input className="inputField" 
                    type="text" 
                    value={this.state.myInfo.fName} 
                    onChange={this.inputChange.bind(this,"fName")}
                    placeholder="First Name"
                    minLength={6}
                    maxLength={10}
                    required={true}
                    style={this.state.myInfo.fName.length  > 6 ? {borderColor : 'green'} : {}}/>

            <br></br><br></br>
            <label><b> Last Name</b></label>
            <input type="text" value={this.state.myInfo.lName} onChange={this.inputChange.bind(this,"lName")}/>
            <br></br><br></br>
            <label><b>E-mail</b></label>
            <input type="email" value={this.state.myInfo.mobileNo}
                    placeholder="Email"
                    minLength={6}
                    validate={this.validEmail}
                    maxLength={25}
                    required={true}
                    errorMessage="Email is invalid"
                    emptyMessage="Email is required"
                    onChange={this.inputChange.bind(this,"e_mail")}/>
                    <p style={this.state.myInfo.e_mail.length < 5 ? {display:'none'} : {}  }>{this.state.error}</p>
            <br></br><br></br>
            <label><b>New password</b></label>
            <input type="password" value={this.state.myInfo.password} onChange={this.inputChange.bind(this,"password")}/>
            <br></br><br></br>
            <label><b>Confirm New Password</b></label>
            <input type="password" value={this.state.cPassword} onChange={this.inputChange.bind(this,"cPassword")}/>
            <br></br><br></br>
          
            <Button bsStyle="info" onClick={this.successMessage.bind(this)} ><b>Create Account</b></Button>
       </form>

        <div>
        <TableView fields={this.state.fields}/>
        </div>

   </div>
)

}
}
export default SignUp;