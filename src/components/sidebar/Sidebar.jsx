import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity,
  MailOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">


        <div className="sidebarMenu">

          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>

            
            
          </ul>
        </div>


        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Users</h3>
          <ul className="sidebarList">

            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Classes
              </li>
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Topics
              </li>
             

            </Link>

            
          </ul>
        </div>


        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            
      
          </ul>
        </div>


        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Account</h3>

          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Settings
            </li>
            <li className="sidebarListItem">
            <ExitToAppIcon className="sidebarIcon" />
                Logout
          </li>
          </ul>

        </div>

      </div>

    </div>
  );
}
