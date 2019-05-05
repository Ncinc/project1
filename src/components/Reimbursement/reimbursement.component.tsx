import React from 'react';
import { Reimbursement } from '../../model/Reimbursement';
import { ReimbursementCardComponent } from './reimbursement-card.component';

interface IReimState {
  reim: Reimbursement[];
}

export class ReimbursementComponent extends React.Component<any, IReimState> {

  constructor(props: any) {
    super(props);
    this.state = {
        reim: []
    };
  }



  // in here we should initialize http calls
  componentDidMount = async () => {
    const resp = await fetch(`http://localhost:8081/reim/author/userId/5`, {
      credentials: 'include'
    });
  
    const body = await resp.json();
   
    console.log(resp);
    this.setState({
      reim: body
    })
  }

  render() {
    return (

      

      <div className="container">
        <div className="row">
        {/* <button onClick = {() => this.changeImage(-1)}> hello </button>
        <button onClick={() => this.changeImage(1)}> > </button> // Right button */}
          {this.state.reim.map(reim => (
            <ReimbursementCardComponent key={'reimbursementlist: ' +reim.reimbursementlistid} reimcard={reim}/>
          ))}
        </div>
      </div>
    );
  }
}