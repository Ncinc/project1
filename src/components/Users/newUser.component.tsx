import React from 'react';


interface IPostUserState {
    userid: string;
    username: string;
    user_password: string;
    firstName: string;
    lastName: string;
    email: string;
    user_role: string;
    profileImage: string;
 errorMessage: string;

}


//let newImage :string = 'https://metalsdiecast.com/wp-content/uploads/Metals-BvS-132-Batwing-02-1030x687.jpg';
export class PostUserComponent extends React.Component<any, IPostUserState> {
  constructor(props) {
    super(props);
    this.state = {
        userid: '' ,
        username: '',
        user_password: '',
        firstName:'',
        lastName: '',
        email: '',
        user_role: '',
        profileImage: '',
        errorMessage: ''
    };
  }

  newUsers = async (event) => {
    event.preventDefault();
    console.log('attempting to post');
    const Updateinfo = {
        userid:  this.state.userid,
        username:  this.state.username,
        user_password:  this.state.user_password,
        firstName: this.state.firstName,
        lastName:  this.state.lastName,
        email:  this.state.email,
        user_role:  this.state.user_role,
        profileImage: this.state.profileImage
    };

      try {
        const resp2 = await fetch('http://localhost:8081/users/newusers', {
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
  
  updateUserId = (event) => {
    this.setState({
        userid: event.target.value
    });
  }

  updateUsername = (event) => {
    this.setState({
        username: event.target.value
    });
  }

  updateUser_password = (event) => {
    this.setState({
        user_password: event.target.value
    });
  }

  updateFirstName = (event) => {
    this.setState({
        firstName: event.target.value
    })
  }
  
  updateLastName = (event) => {
    this.setState({
        lastName: event.target.value
    })
  }

  updateEmail = (event) => {
    this.setState({
        email: event.target.value
    });
  }

  updateUser_role = (event) => {
    this.setState({
        user_role: event.target.value
    })
  }

  updateImage = (event) => {
    this.setState({
        profileImage: event.target.value
    })
  }

  //  upDateNewName = () => {
  //   newImage = this.state.username;

  //   console.log('new name', newImage)
  //   return newImage;

  // }


  render() {
    const { userid, username,user_password ,firstName, 
        lastName,email ,user_role, profileImage, errorMessage } = this.state;
    return (
        <>

      <form className="Update Reimbursements" onSubmit={this.newUsers}>

        {/* //reimbursementlistid 1 */}
        <h1 className="h3 mb-3 font-weight-normal">Create New User</h1>
        <label htmlFor="inputreimbursementlistid" className="sr-only">User Id</label>
        <input type="text" id="inputreimbursementlistid" name="User Id"
          className="form-control" placeholder="User Id"
          required value={userid} onChange={this.updateUserId} />

        {/* author 2 */}
        <label htmlFor="inputauthor" className="sr-only">User Name</label>
        <input type="author" id="inputauthor" name="User Name"
          className="form-control" placeholder="User Name"
          required value={username} onChange={this.updateUsername} />

        {/* amount 3 */}
        <label htmlFor="inputamount" className="sr-only">User Password</label>
        <input type="amount" id="inputamount" name="User Password"
          className="form-control" placeholder="User Password"
          required value={user_password} onChange={this.updateUser_password} />

        {/* date_submitted 4 */}
        <label htmlFor="inputdate_submitted" className="sr-only">First Name</label>
        <input type="date_submitted" id="inputdate_submitted" name="First Name"
          className="form-control" placeholder="First Name"
          required value={firstName} onChange={this.updateFirstName} />

        {/* description 5 */}
        <label htmlFor="inputdescription" className="sr-only">Last Name</label>
        <input type="description" id="inputdescription" name="Last Name"
          className="form-control" placeholder="Last Name"
          required value={lastName} onChange={this.updateLastName} />

        {/* type 6 */}
        <label htmlFor="inputtype" className="sr-only">Email</label>
        <input type="type" id="inputtype" name="Email"
          className="form-control" placeholder="Email"
          required value={email} onChange={this.updateEmail} />  

           {/* type 7 */}
        <label htmlFor="inputtype" className="sr-only">User Role</label>
        <input type="type" id="inputtype" name="User Role"
          className="form-control" placeholder="User Role"
          required value={user_role} onChange={this.updateUser_role} />  

           {/* type 8 */}
        <label htmlFor="inputtype" className="sr-only">Profile Image</label>
        <input type="type" id="inputtype" name="Profile Image"
          className="form-control" placeholder="Profile Image"
          required value={profileImage} onChange={this.updateImage} />  

        <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
        <p id="login-error">{errorMessage}</p>
      </form>
      </>
    );
    
  }
}