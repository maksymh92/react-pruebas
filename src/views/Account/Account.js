import React from '../../../node_modules/react';
import firebase from "../../firebase";

class Account extends React.Component {

constructor() {
    super();
    this.state = {
        fullname: '',
        email: '',
        pass: '',
        passR: '',
        data: [],
    };
}

componentDidMount() {

  const db = firebase.firestore();
  db.collection("restaurants").get()
  .then(querySnapshot => {
    var ids = []
    querySnapshot.forEach(doc => {
      ids.push(doc.data())
    })

    this.setState({ data: ids });
  });

}

updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addUser = e => {
    e.preventDefault();

    if(this.state.pass === this.state.passR){

      const db = firebase.firestore();

      const userRef = db.collection('restaurants').add({
        fullname: this.state.fullname,
        email: this.state.email,
        pass: this.state.pass
      });  


      this.setState({
        pass: '',
        passR: '',
      });

      this.componentDidMount();

    }else{
      alert("passwords not same")
      this.setState({
        pass: '',
        passR: '',
      });
    }

  };


  render() {
    return (
      <div class="row align-items-center justify-content-center">
        <div class="col-md-4 col-12">
          <form onSubmit={this.addUser}>
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input 
                type="text" 
                class="form-control" 
                name="fullname"
                id="exampleInputName" 
                placeholder="Enter name"
                onChange={this.updateInput}
                value={this.state.fullname}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input 
                type="email" 
                class="form-control" 
                name="email"
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email"
                onChange={this.updateInput}
                value={this.state.email}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input 
                type="password" 
                class="form-control" 
                name="pass"
                id="exampleInputPassword1" 
                placeholder="Password"
                onChange={this.updateInput}
                value={this.state.pass}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword2">Repeat Password</label>
              <input 
                type="password" 
                class="form-control" 
                name="passR"
                id="exampleInputPassword2" 
                placeholder="Repeat Password"
                onChange={this.updateInput}
                value={this.state.passR}
              />
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary pull-right">SAVE CHANGES</button>
            </div>
          </form>
          <div>
            <h3>Usuarios creados:</h3>
            <ul>
              { this.state.data.map((a, index) => <li key={index}>{a.fullname} {a.email} {a.pass}</li>) }
            </ul>
          </div>
        </div>
         
      </div>
        );
      }
   }
export default Account;