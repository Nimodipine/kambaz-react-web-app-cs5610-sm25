import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-username" defaultValue="alice" placeholder="username" type="text" className="mb-2" />

      <Form.Control id="wd-password" defaultValue="123" placeholder="password" type="password" className="mb-2" />

      <Form.Control id="wd-firstname" defaultValue="Alice" placeholder="First Name" type="text" className="mb-2" />

      <Form.Control id="wd-lastname" defaultValue="Wonderland" placeholder="Last Name" type="text" className="mb-2" />

      <Form.Control id="wd-dob" defaultValue="2000-01-01" type="date" className="mb-2" />

      <Form.Control id="wd-email" defaultValue="alice@wonderland" type="email" className="mb-2" />

      <select defaultValue="FACULTY" id="wd-role" className="form-select mb-3">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link
        id="wd-signout-btn"
        to="/Kambaz/Account/Signin"
        className="btn btn-danger w-100 mb-2"
      >
        Sign out
      </Link>
    </div>
  );
}