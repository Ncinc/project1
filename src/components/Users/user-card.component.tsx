import React from 'react';
import { User } from '../../model/user';

interface IUseCardProps {
  usercard: User;
}

export class UserCardComponent extends React.PureComponent<IUseCardProps> {
  render() {
    const usercard = this.props.usercard;
    return (
      <div className="card col-md-4 col-sm-6 col-xs-12">
        <img src= "https://pentagram-production.imgix.net/e5f48c9b-bd67-494d-9fd1-8adad56ac63f/emo_justiceleague_01.jpg?rect=0%2C0%2C3000%2C1872&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548"
          className="card-img-top"
          alt="..." />
        <div className="card-body">
          <h5 className="card-title">User: {usercard.username}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ID: {usercard.userId}</li>
          <li className="list-group-item">First Name: {usercard.firstName}</li>
          <li className="list-group-item">Last Name: {usercard.lastName}</li>
          <li className="list-group-item">Email: {usercard.email}</li>
          <li className="list-group-item">Role: {usercard.user_role.role}</li>
          <li className="list-group-item">
            <button className="btn btn-danger">Delete</button>
          </li>
        </ul>
      </div>
    )
  }
}