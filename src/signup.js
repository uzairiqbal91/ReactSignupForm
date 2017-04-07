import React,{Component} from 'react';
import  './SignUp_css.css';
import TableView from './TableView';

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
    fields:[]
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

render(){
return(
   <div>
      <form className="signUp_css">  
            <br></br><br></br>
            <label><b>First Name</b></label>
            <input className="inputField" type="text" value={this.state.myInfo.fName} onChange={this.inputChange.bind(this,"fName")}/>
            <br></br><br></br>
            <label><b> Last Name</b></label>
            <input type="text" value={this.state.myInfo.lName} onChange={this.inputChange.bind(this,"lName")}/>
            <br></br><br></br>
            <label><b>E-mail</b></label>
            <input type="text" value={this.state.myInfo.mobileNo} onChange={this.inputChange.bind(this,"e_mail")}/>
            <br></br><br></br>
            <label><b>New password</b></label>
            <input type="password" value={this.state.myInfo.password} onChange={this.inputChange.bind(this,"password")}/>
            <br></br><br></br>
            <label><b>Confirm New Password</b></label>
            <input type="password" value={this.state.cPassword} onChange={this.inputChange.bind(this,"cPassword")}/>
            <br></br><br></br>
          
            <button onClick={this.successMessage.bind(this)}><b>Create Account</b></button>
       </form>

        <div>
        <TableView fields={this.state.fields}/>
        </div>

   </div>
)

}
}
export default SignUp;