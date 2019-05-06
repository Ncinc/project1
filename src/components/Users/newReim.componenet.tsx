import React from 'react';


interface IPostReimState {
 reimbursementlistid: string;
 author: string;
 amount: string;
 date_submitted: string;
 description: string;
 status: string;
 type: string;
 reimburseImage: string;
 index: number;
 imgArr:string [];
 currentImage: string;
 errorMessage: string;

}

let newImage :string = 'https://metalsdiecast.com/wp-content/uploads/Metals-BvS-132-Batwing-02-1030x687.jpg';
export class PostReimComponent extends React.Component<any, IPostReimState> {
  constructor(props) {
    super(props);
    this.state = {
        reimbursementlistid: '' ,
        author: '',
        amount: '',
        date_submitted:'',
        description: '',
        status: '',
        type: '',
        reimburseImage: '',
        index: 0,
        imgArr: ['https://metalsdiecast.com/wp-content/uploads/Metals-BvS-132-Batwing-02-1030x687.jpg',
        'https://i.pinimg.com/originals/93/3c/4f/933c4f1928549e2a23aa1ab6949cece0.jpg' ,
        'https://i.ytimg.com/vi/_XxHi481qE8/maxresdefault.jpg' ,
        'http://im.rediff.com/getahead/2018/jul/06kawasaki-ninja-h2.jpg',
        'https://static.turbosquid.com/Preview/2016/02/16__18_29_21/2.jpgf6dcb48b-98ca-46b2-868b-ac7b991ac85fOriginal.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJQyxV801XbYnZOCDX3D_IsFwS1hgdoS8-1o820cIcGu73-NTFNw'],
        currentImage: 'https://metalsdiecast.com/wp-content/uploads/Metals-BvS-132-Batwing-02-1030x687.jpg',
        errorMessage: ''
    };
  }

  newReimbursment = async (event) => {
    event.preventDefault();
    console.log('attempting to post');
    const Updateinfo = {
      reimbursementlistid:  this.state.reimbursementlistid,
        author:  this.state.author,
        amount:  this.state.amount,
        date_submitted: this.state.date_submitted,
        description:  this.state.description,
        status:  this.state.status,
        type:  this.state.type,
        reimburseImage: this.state.reimburseImage, 
    };

      try {
        Updateinfo.reimburseImage = newImage;
        const resp2 = await fetch('http://localhost:8081/reim/newreim', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(Updateinfo),
          headers: {
            'content-type': 'application/json'
          }
        })
        console.log(resp2);
  
        if (resp2.status === 401) {
          this.setState({
            errorMessage: 'Invalid Info'
          });
        } else if (resp2.status === 200) {
          // redirect to spaceships page
          // const user = await resp.json();
          //this.props.history.push('/reimburseID');
        } else {
          this.setState({
            errorMessage: 'Cannot Update Reimbursment At This Time'
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
  

  updateReimbursementlistid = (event) => {
    this.setState({
        reimbursementlistid: event.target.value
    });
  }

  updateAuthor = (event) => {
    this.setState({
        author: event.target.value
    });
  }

  updateAmount = (event) => {
    this.setState({
        amount: event.target.value
    });
  }

  updateDate_Submitted = (event) => {
    this.setState({
        date_submitted: event.target.value
    })
  }
  
  updateDescription = (event) => {
    this.setState({
        description: event.target.value
    })
  }

  updateStatus = (event) => {
    this.setState({
        status: event.target.value
    });
  }

  updateType = (event) => {
    this.setState({
        type: event.target.value
    })
  }

  updateImage = (event) => {
    this.setState({
      reimburseImage: event.target.value
    })
  }

  changeImage = (increment: number) => {
    
    let newIndex = this.state.index + increment
   
    if (newIndex > 5){
      console.log(newIndex);
      newIndex = 0;
    }

    if (newIndex < 0){
      console.log(newIndex);
      newIndex = this.state.imgArr.length - 1;
    }

    const curImage = this.state.imgArr[newIndex]
    //console.log(this.state.imgArr[newIndex])
    newImage = this.state.imgArr[newIndex]

    console.log(`this is new image ${newImage}`)
    this.setState({
      currentImage: curImage,
      index: newIndex
    })

   }

  //  upDateNewName = () => {
  //   newImage = this.state.username;

  //   console.log('new name', newImage)
  //   return newImage;

  // }


  render() {
    console.log(newImage);
    const { reimbursementlistid, author,amount ,date_submitted, 
         description, status, type, errorMessage } = this.state;
    return (
        <>
    <div className="card col-md-4 col-sm-6 col-xs-12">
        <img src={this.state.currentImage} className = "img-fluid"/>
          <button onClick = {() => this.changeImage(1)}> {'>'} </button>
          <button onClick = {() => this.changeImage(-1)}> {'<'} </button>
            {/* <button className="btn btn-danger">Delete</button> */}

      </div>

      <form className="Update Reimbursements" onSubmit={this.newReimbursment}>

        {/* //reimbursementlistid 1 */}
        <h1 className="h3 mb-3 font-weight-normal">Search Reimbursement Author</h1>
        <label htmlFor="inputreimbursementlistid" className="sr-only">reimbursementlistid</label>
        <input type="text" id="inputreimbursementlistid" name="reimbursementlistid"
          className="form-control" placeholder="reimbursementlistid"
          required value={reimbursementlistid} onChange={this.updateReimbursementlistid} />

        {/* author 2 */}
        <label htmlFor="inputauthor" className="sr-only">author</label>
        <input type="author" id="inputauthor" name="author"
          className="form-control" placeholder="author"
          required value={author} onChange={this.updateAuthor} />

        {/* amount 3 */}
        <label htmlFor="inputamount" className="sr-only">amount</label>
        <input type="amount" id="inputamount" name="amount"
          className="form-control" placeholder="amount"
          required value={amount} onChange={this.updateAmount} />

        {/* date_submitted 4 */}
        <label htmlFor="inputdate_submitted" className="sr-only">date_submitted</label>
        <input type="date_submitted" id="inputdate_submitted" name="date_submitted"
          className="form-control" placeholder="date_submitted"
          required value={date_submitted} onChange={this.updateDate_Submitted} />

        {/* description 6 */}
        <label htmlFor="inputdescription" className="sr-only">description</label>
        <input type="description" id="inputdescription" name="description"
          className="form-control" placeholder="description"
          required value={description} onChange={this.updateDescription} />

        {/* status 8 */}
        <label htmlFor="inputstatus" className="sr-only">status</label>
        <input type="status" id="inputstatus" name="status"
          className="form-control" placeholder="status"
          required value={status} onChange={this.updateStatus} />

        {/* type 9 */}
        <label htmlFor="inputtype" className="sr-only">type</label>
        <input type="type" id="inputtype" name="type"
          className="form-control" placeholder="type"
          required value={type} onChange={this.updateType} />  

          {/* type 9
        <label htmlFor="inputtype" className="sr-only">type</label>
        <input type="type" id="inputtype" name="type"
          className="form-control" placeholder="type"
          required value={reimburseImage} onChange={this.updateType} />        */}

        <button className="btn btn-lg btn-primary btn-block" type="submit">Update</button>
        <p id="login-error">{errorMessage}</p>
      </form>
      </>
    );
    
  }
}