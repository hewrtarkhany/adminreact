import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Fetch from "./components/Fetch"
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/UserList";


function App() {
  return (
    <Router>
      <Topbar />

      <div className="container">
        <Sidebar />
        <Switch>
          
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/users">
            <UserList />
          </Route>

          <Route path="/fetch">
            <Fetch />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
