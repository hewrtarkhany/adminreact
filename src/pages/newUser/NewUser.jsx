import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">

        
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="jdoe" />
        </div>

        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />
        </div>


        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="jdoe@ewu.edu" />
        </div>

        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>

        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 000 000 0000" />
        </div>
       




        <div className="newUserItem">
          <label>Active</label>

          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

        </div>
        <button className="newUserButton">Create</button>

      </form>
    </div>
  );
}
