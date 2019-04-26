import React from 'react';
import { Reimbursement } from '../../model/Reimbursement';

interface IReimCardProps {
  reimcard: Reimbursement;
  
}

export class ReimbursementCardComponent extends React.PureComponent<IReimCardProps> {
  render() {
    const reimcard = this.props.reimcard;
    return (
      <div className="card col-md-4 col-sm-6 col-xs-12">
        <img src="http://im.rediff.com/getahead/2018/jul/06kawasaki-ninja-h2.jpg"
          className="card-img-top"
          alt="..." />
        <div className="card-body">
          <h5 className="card-title">{reimcard.author}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ID: {reimcard.reimbursementId}</li>
          <li className="list-group-item">Author: {reimcard.author}</li>
          <li className="list-group-item">Amount: {reimcard.amount}</li>
          <li className="list-group-item">Description: {reimcard.description}</li>
          <li className="list-group-item">
            <button className="btn btn-danger">Delete</button>
          </li>
        </ul>
      </div>
    )
  }
}