import React from 'react'
import axios from 'axios';

class LoginView extends React.Component 
{

constructor(props){
        super(props);
        this.state = {
        user: {}
        }
}

QGetTextFromField(e){
        this.setState(prevState=>({
                user: {...prevState.user, [e.target.name]:e.target.value}     
        }));
}

QSendUserToParent(obj) {
this.props.QUserFromChild(obj);
} 

QPostLogin() {
axios.post('http://88.200.63.148:8080/users/login', this.state.user, {withCredentials:true})
.then(res => {
console.log("Logging in ...")
this.QSendUserToParent(res.data[0]);
this.props.QSetViewParent({page:'addnew'})
})
.catch(err => console.log(err));
}

    render() {
       return( 
          <div className="card" style={{width:"400px", marginLeft:"auto", marginRight:"auto", marginTop:"10px", marginBottom:"10px"}}>
            <form style={{margin:"20px"}} >
                <div className="mb-3">
                <label className="form-label">Username</label>
                <input onChange={(e)=>this.QGetTextFromField(e)} name="username"  type="text" className="form-control" id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                <label className="form-label">Password</label>
                <input onChange={(e)=>this.QGetTextFromField(e)} name="password" type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
            </form>
            <button onClick={()=>this.QPostLogin()} style={{margin:"10px"}} className="btn btn-primary bt">Sign up</button>
        </div>
        )
    }
}

export default LoginView
