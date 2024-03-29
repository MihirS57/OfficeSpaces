import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from '../actions/userActions'
import { useHistory } from 'react-router-dom'
const Navbar = ({ isAuthenticated, user, dummy, logout }) => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
    });
  });

  let history = useHistory()
  const logoutUser = () => {
    logout();
    history.push("/");
  }


  return (
    !dummy &&
    (<div>
      <div class="navbar-fixed">
        <nav class="purple darken-3">
          <div class="container">
            <div class="nav-wrapper">
              <a href="#home" class="brand-logo">
                <span className="grey-text">
                  Office
                </span>
                <span className="white-text">Spaces</span>
              </a>
              <ul class="right hide-on-med-and-down">
                <li>
                  <Link to="/dashboard" className="waves-effect">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/violations" className="waves-effect">
                    Violations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/announcement"
                    class="waves-effect waves-light"
                  >
                    Announcements
                        </Link>
                </li>
                {isAuthenticated
                  ? (
                    <Fragment>
                      <li>
                        <span>
                          Hello, {user.firstName} {user.lastName}
                        </span>
                      </li>
                      <li>
                        <a href='#!' onClick={logoutUser}>
                          <i className="fas fa-sign-out-alt"></i>
                          <span className="hide-sm"> Logout</span>
                        </a>
                      </li>
                    </Fragment>
                  )
                  : (
                    <Fragment>

                      <li>
                        <Link to="/" class="waves-effect waves-light">
                          Login
                        </Link>
                      </li>
                    </Fragment>
                  )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>)

  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  user: state.user.user,
  dummy: state.user.dummy
});

export default connect(mapStateToProps, { logout })(Navbar);
