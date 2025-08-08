import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname.includes(path) ? "active" : "text-danger";

  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {!currentUser && (
        <>
          <Link
            id="wd-account-signin-link"
            to="/Kambaz/Account/Signin"
            className={`list-group-item border-0 ${isActive("Signin")}`}
          >
            Signin
          </Link>
          <Link
            id="wd-account-signup-link"
            to="/Kambaz/Account/Signup"
            className={`list-group-item border-0 ${isActive("Signup")}`}
          >
            Signup
          </Link>
        </>
      )}

      {currentUser && (
        <>
          <Link
            id="wd-account-profile-link"
            to="/Kambaz/Account/Profile"
            className={`list-group-item border-0 ${isActive("Profile")}`}
          >
            Profile
          </Link>

          {currentUser.role === "ADMIN" && (
            <Link
              to="/Kambaz/Account/Users"
              className={`list-group-item border-0 ${isActive("Users")}`}
            >
              Users
            </Link>
          )}
        </>
      )}
    </div>
  );
}
