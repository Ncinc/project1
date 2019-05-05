import React from 'react';
import { Reimbursement } from '../../model/Reimbursement';
import { ReimbursementCardComponent } from './reimbursement-card.component';

interface ILookReimState {
  username: string;
  errorMessage: string;
  reim: Reimbursement[];
  reimbursementlistid: string;
  author: string;
  date_resolved:string;
  resolver: string;
  status: string;
}
let newUsername:string;
export class LookReimComponent extends React.Component<any, ILookReimState> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      errorMessage: '',
      reim: [],
      reimbursementlistid: '' ,
      author: '',
      date_resolved:'' ,
      resolver: '',
      status: ''
    };
  }



  
  // updatePatch = async (event) => {
  //   event.preventDefault();
  //   console.log('attempting to patch');
  //   const Updateinfo = {
  //     reimbursementlistid:  this.state.reimbursementlistid,
  //       author:  this.state.author,
  //       date_resolved: this.state.date_resolved ,
  //       resolver:  this.state.resolver,
  //       status:  this.state.status,
  //   };
  // }


  submit = async (event) => {
    event.preventDefault();
    console.log('attempting to login');
    this.upDateNewName();
    //console.log(this.state.username)
    const credentials = {
      username: this.state.username
    };

    try {

        const resp = await fetch(`http://localhost:8081/reim/author/userId/${this.upDateNewName()}`, {
        method: 'GET',
        
        credentials: 'include',
        //body: JSON.stringify(credentials),
 
      })

      //this.upDateNewName();
      const body = await resp.json();
   
      //console.log(resp);
      this.setState({
        reim: body
      })

      console.log(resp);

      if (resp.status === 401) {
        this.setState({
          errorMessage: 'Invalid'
        });
      } else if (resp.status === 200) {
        // redirect to spaceships page
        // const user = await resp.json();
        //this.props.history.push('/clicker');
      } else {
        this.setState({
          errorMessage: 'Cannot Get reimbursement'
        });
      }
    } catch (err) {
      console.log(err);
    }
  }


  updatePatch = async (event) => {
    event.preventDefault();
    console.log('attempting to patch');
    const Updateinfo = {
      reimbursementlistid:  this.state.reimbursementlistid,
        author:  this.state.author,
        date_resolved: this.state.date_resolved ,
        resolver:  this.state.resolver,
        status:  this.state.status,
    };

    try {
      const resp2 = await fetch('http://localhost:8081/reim/approve', {
        method: 'PATCH',
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
  }

  updateUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
    //console.log(this.state.username)
    //console.log('newUsername', newUsername)
  }

  upDateNewName = () => {
    newUsername = this.state.username;

    console.log('new name', newUsername)
    return newUsername;

  }

  //patch block start
  
  updateReimbursementlistid = (event) => {
    this.setState({
        reimbursementlistid: event.target.value
    });
  }
  
  updateAuthor = (event) => {
    this.setState({
        author: event.target.value
    })
  }

  updateDate_Resolved = (event) => {
    this.setState({
        date_resolved: event.target.value
    });
  }

  updateResolver = (event) => {
    this.setState({
        resolver: event.target.value
    });
  }

  updateStatus = (event) => {
    this.setState({
        status: event.target.value
    });
  }

   //patch block end

  render() {
    const {username, reimbursementlistid, author, 
      date_resolved, resolver, status,errorMessage } = this.state;
    return (
      // fragment start
    <> 
      <form className="form-signin" onSubmit={this.submit}>
      <h1 className="h3 mb-3 font-weight-normal">Lookup Arthur</h1>
      <label htmlFor="inputUsername" className="sr-only">Username</label>
      <input type="text" id="inputUsername" name="username"
        className="form-control" placeholder="Username"
        required value={username} onChange={this.updateUsername} />
      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>

          <div className="container">
      <div className="row">
      {/* <button onClick = {() => this.changeImage(-1)}> hello </button>
      <button onClick={() => this.changeImage(1)}> > </button> // Right button */}
        {this.state.reim.map(reim => (
          <ReimbursementCardComponent key={'reimbursementlist: ' +reim.reimbursementlistid} reimcard={reim}/>
        ))}
      </div>
    </div>

    <form className="Update Reimbursements" onSubmit={this.updatePatch}>

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

{/* date_resolved 3 */}
<label htmlFor="inputdate_resolved" className="sr-only">Date_Resolved</label>
<input type="date_resolved" id="inputdate_resolved" name="date_resolved"
  className="form-control" placeholder="date_resolved"
  required value={date_resolved} onChange={this.updateDate_Resolved} />

{/* resolver 4 */}
<label htmlFor="inputresolver" className="sr-only">resolver</label>
<input type="resolver" id="inputresolver" name="resolver"
  className="form-control" placeholder="resolver"
  required value={resolver} onChange={this.updateResolver} />

{/* status 5 */}
<label htmlFor="inputstatus" className="sr-only">status</label>
<input type="status" id="inputstatus" name="status"
  className="form-control" placeholder="status"
  required value={status} onChange={this.updateStatus} />
    
<button className="btn btn-lg btn-primary btn-block" type="submit">Update</button>
<p id="login-error">{errorMessage}</p>
</form>

    </>
    // fragment close
    );
  }
}