import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
//   const dynamicLink = (route, linkText) => {
//     return (
//       <div className="nav-link-wrapper">
//         <NavLink to={route} activeClassName="nav-link-active">
//           {linkText}
//         </NavLink>
//       </div>
//     );
//   };

  const handleSignOut = () => {
    axios
  };

  return (
    <div className="nav-wrapper">
        <div className="header">
            <h3>
                <div>BOTTEGA</div>
                <div>CREDIT UNION</div>
            </h3>
        </div>

      <div className="middle">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
          <div class="icon">
            <i class="fa-solid fa-house"></i>
            </div>
            DASHBOARD
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/transactions" activeClassName="nav-link-active">
          <i class="fa-solid fa-circle-dollar"></i>TRANSACTIONS
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/insights" activeClassName="nav-link-active">
          <i class="fa-solid fa-chart-pie"></i>INSIGHTS
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/logOut" activeClassName="nav-link-active">
          <i class="fa-solid fa-right-from-bracket"></i>LOG OUT
          </NavLink>
        </div>
      </div>

      <div className="footer">
        <div>(800)555-5555</div>
        <div>BCU@BCU.NET</div>
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);