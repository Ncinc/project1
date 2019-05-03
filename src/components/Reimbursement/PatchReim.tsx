import React from 'react';

interface IUpdateReimState {
 reimbursementlistid: string;
 author: string;
 amount: string;
 date_submitted: string;
 date_resolved: string;
 description: string;
 resolver: string;
 status: string;
 type: string;
 errorMessage: string;
}

export class PatchReimComponent extends React.Component<any, IUpdateReimState> {
  constructor(props) {
    super(props);
    this.state = {
        reimbursementlistid: '' ,
        author: '',
        amount: '',
        date_submitted:'',
        date_resolved:'' ,
        description: '',
        resolver: '',
        status: '',
        type: '',
        errorMessage: ''
    };
  }

  updatePatch = async (event) => {
    event.preventDefault();
    console.log('attempting to patch');
    const Updateinfo = {
      reimbursementlistid:  this.state.reimbursementlistid,
        author:  this.state.author,
        amount:  this.state.amount,
        date_submitted: this.state.date_submitted,
        date_resolved: this.state.date_resolved ,
        description:  this.state.description,
        resolver:  this.state.resolver,
        status:  this.state.status,
        type:  this.state.type
    };

    try {
      const resp = await fetch('http://localhost:8081/reim/update', {
        method: 'PATCH',
        credentials: 'include',
        body: JSON.stringify(Updateinfo),
        headers: {
          'content-type': 'application/json'
        }
      })
      console.log(resp);

      if (resp.status === 401) {
        this.setState({
          errorMessage: 'Invalid Info'
        });
      } else if (resp.status === 200) {
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

  updateDate_Resolved = (event) => {
    this.setState({
        date_resolved: event.target.value
    });
  }
  
  updateDescription = (event) => {
    this.setState({
        description: event.target.value
    })
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

  updateType = (event) => {
    this.setState({
        type: event.target.value
    })
  }

  render() {
    const { reimbursementlistid, author,amount ,date_submitted, 
        date_resolved, description, resolver, status, type ,errorMessage } = this.state;
    return (
        
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

        {/* date_resolved 5 */}
        <label htmlFor="inputdate_resolved" className="sr-only">Date_Resolved</label>
        <input type="date_resolved" id="inputdate_resolved" name="date_resolved"
          className="form-control" placeholder="date_resolved"
          required value={date_resolved} onChange={this.updateDate_Resolved} />

        {/* description 6 */}
        <label htmlFor="inputdescription" className="sr-only">description</label>
        <input type="description" id="inputdescription" name="description"
          className="form-control" placeholder="description"
          required value={description} onChange={this.updateDescription} />

        {/* resolver 7 */}
        <label htmlFor="inputresolver" className="sr-only">resolver</label>
        <input type="resolver" id="inputresolver" name="resolver"
          className="form-control" placeholder="resolver"
          required value={resolver} onChange={this.updateResolver} />

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

       

        <button className="btn btn-lg btn-primary btn-block" type="submit">Update</button>
        <p id="login-error">{errorMessage}</p>
      </form>
    );
  }
}