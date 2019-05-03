import React from 'react';
import { Reimbursement } from '../../model/Reimbursement';


interface IReimCardProps {
  reimcard: Reimbursement;
    index: number;
  imgArr:string [];
  currentImage: string;
}


export class ReimbursementCardComponent extends React.Component<any, IReimCardProps> {

  constructor(props: any) {
    super(props);
    this.state = {
       reimcard: new Reimbursement(),
        index: 0,
        imgArr: ['https://metalsdiecast.com/wp-content/uploads/Metals-BvS-132-Batwing-02-1030x687.jpg','http://im.rediff.com/getahead/2018/jul/06kawasaki-ninja-h2.jpg', 
        'https://i.pinimg.com/originals/93/3c/4f/933c4f1928549e2a23aa1ab6949cece0.jpg',
      'https://i.ytimg.com/vi/_XxHi481qE8/maxresdefault.jpg'],
        currentImage: 'https://metalsdiecast.com/wp-content/uploads/Metals-BvS-132-Batwing-02-1030x687.jpg' // From the list above
    };
  }


  changeImage = (increment: number) => {
    
    let newIndex = this.state.index + increment
   
    if (newIndex > 3){
      console.log(newIndex);
      newIndex = 0;
    }

    if (newIndex < 0){
      console.log(newIndex);
      newIndex = this.state.imgArr.length - 1;
    }

    const curImage = this.state.imgArr[newIndex]

    this.setState({
      currentImage: curImage,
      index: newIndex
    })

    
   }




  render() {
    const reimcard = this.props.reimcard;
    return (
      <div className="card col-md-4 col-sm-6 col-xs-12">
        {/* <img src= "http://im.rediff.com/getahead/2018/jul/06kawasaki-ninja-h2.jpg" */}
        <img src={this.state.currentImage} className = "img-fluid"/>
        <div className="card-body">
          <h5 className="card-title">Author: {reimcard.author}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ID: {reimcard.reimbursementlistid}</li>
          <li className="list-group-item">Resolver: {reimcard.resolver}</li>
          <li className="list-group-item">Amount: {reimcard.amount}</li>
          <li className="list-group-item">Description: {reimcard.description}</li>
          <li className="list-group-item"> </li>
          <button onClick = {() => this.changeImage(1)}> {'>'} </button>
          <button onClick = {() => this.changeImage(-1)}> {'<'} </button>
            <button className="btn btn-danger">Delete</button>
        </ul>
      </div>
    )
  }
}