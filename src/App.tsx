import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { NavComponent } from './components/nav/nav.component';
import './include/bootstrap';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/Users/user.component';
import { SigninReimComponent } from './components/Reimbursement/signin-reimbursement.component';
import { ReimbursementComponent } from './components/Reimbursement/reimbursement.component';
import { PatchReimComponent } from './components/Reimbursement/PatchReim';
import { ClickerComponent } from './components/clicker/clicker.component';
import { LookReimComponent } from './components/Reimbursement/lookup-reimburse.component';
import { PostReimComponent } from './components/Users/newReim.componenet';
import { PostUserComponent } from './components/Users/newUser.component';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    
      <NavComponent />
      <div id="main-content-container">
      
        <Switch>
        <Route path="/sign-in-reimburse" component={SigninReimComponent} />
          <Route path="/clicker" component={ClickerComponent} />
          {/* <Route path="/home" component={HomeComponent} /> */}
          <Route path="/patch" component={PatchReimComponent} />
          <Route path= "/newuser" component={PostUserComponent}/>
          <Route path="/getAllUsers" component={UserComponent} />
          <Route path="/typereim" component={LookReimComponent}/>
          <Route path="/newreim" component={PostReimComponent}/>
          <Route path="/reimburseID" component={ReimbursementComponent} /> 
          <Route component={SigninReimComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
