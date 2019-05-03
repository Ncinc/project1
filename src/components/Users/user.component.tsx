import React from 'react';
import { UserCardComponent } from './user-card.component';
import { User } from '../../model/user';

interface IUseState {
  usercomp: User[];
}

export class UserComponent extends React.Component<any, IUseState> {

  constructor(props: any) {
    super(props);
    this.state = {
        usercomp: []
    };
  }
  
  // in here we should initialize http calls
  componentDidMount = async () => {
    const resp = await fetch('http://localhost:8081/users/all', {
      credentials: 'include'
    });
  
    const body = await resp.json();
   
    console.log(resp);
    this.setState({
        usercomp: body
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.usercomp.map(usercomp => (
            <UserCardComponent key={'app_user: ' +usercomp.userId} usercard ={usercomp}/>
          ))}
        </div>
      </div>
    );
  }
}