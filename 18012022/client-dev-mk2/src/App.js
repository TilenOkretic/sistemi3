import React from 'react';
import NoviceView from './CustomComponents/NoviceView';
import HomeView from './CustomComponents/HomeView';
import AboutViews from './CustomComponents/AboutViews'
import AddNoviceView from './CustomComponents/AddNoviceView'
import SignupView from './CustomComponents/SignupView'
import LoginView from './CustomComponents/LoginView'
import SingleNovicaView from './CustomComponents/SingleNovicaView'




class App extends React.Component{
    constructor(props){
      super(props);
      //state is where our "global" variable will be store
      this.state={
        CurrentPage:"home"
      }
    }
    
    QGetView=(state)=>{
      let page = state.CurrentPage
        console.log(page);
       switch(page){  
         case "home":
           return <HomeView/> 
         case "about":
           return <AboutViews/>
         case "novice": 
           return <NoviceView QIDFromChild={this.QSetView}/>
         case "addnew":
           return <AddNoviceView/>
         case "signup":
           return <SignupView QUserFromChild={this.QHandleUserLog}/>
         case "login":
           return <LoginView />
         case "novica":
           return <SingleNovicaView />
       }
    }

    QSetView=(obj)=>{
        this.setState({
          CurrentPage:obj.page
        })
      }

    render(){
      return(
        <div id="APP" className="container">
               <div id="menu" className="row">
                 <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                     <div className="container-fluid">
                       <div className="nav-item navbar-nav">
                          <a className={this.state.CurrentPage === 'home' ? "navbar-brand": 'nav-link'} onClick={()=>this.QSetView({page:"home"})} href="#">Home</a>
                       </div>
                       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                       </button>
       
                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <li className="nav-item">
                             <a className={this.state.CurrentPage === 'about' ? "navbar-brand": 'nav-link'} onClick={()=>this.QSetView({page:"about"})} href="#">About</a>
                           </li>
       
                           <li className="nav-item">
                             <a className={this.state.CurrentPage === 'news' ? "navbar-brand": 'nav-link'} onClick={()=>this.QSetView({page:"news"})}  href="#">News</a>
                           </li>
                             
                           <li className="nav-item">
                             <a className={this.state.CurrentPage === 'addnew' ? "navbar-brand": 'nav-link'} onClick={()=>this.QSetView({page:"addnew"})} >Add news</a>
                           </li>
       
                           <li className="nav-item"> 
                             <a className={this.state.CurrentPage === 'signup' ? "navbar-brand": 'nav-link'} onClick={()=>this.QSetView({page:"signup"})} href="#">Sign up</a>
                           </li>
       
                           <li className="nav-item" >
                             <a className={this.state.CurrentPage === 'login' ? "navbar-brand": 'nav-link'} onClick={()=>this.QSetView({page:"login"})}  href="#">Login</a>
                           </li>
                         </ul>
                       </div>
                     </div>
                   </nav>
               </div>
       
               <div id="viewer" className="row container">
                  <div className="row container">
                    {this.QGetView(this.state)}
                  </div>
               </div>
       
           </div>
       
       )
    }
}
export default App;
